#Requires -Version 5.0
# ============================================================
#  AI 鹈鹕作品展 - 剩余零碎部分自动处理
#  不碰 data.js / i18n.js
# ============================================================

$ErrorActionPreference = "Stop"
$root = "F:\AIPelican"

if (-not (Test-Path $root)) {
    Write-Host "✗ 找不到 $root" -ForegroundColor Red
    Read-Host "按回车退出"; exit 1
}

Write-Host "`n=== 处理剩余部分 ===`n" -ForegroundColor Cyan

# ────────────────────────────────────────────────────────────
#  1. style.css 追加评分样式
# ────────────────────────────────────────────────────────────
$cssPath = "$root\assets\style.css"
if (Test-Path $cssPath) {
    $css = Get-Content $cssPath -Raw -Encoding UTF8
    if ($css -match '\.score-box') {
        Write-Host "○ style.css 已有评分样式，跳过" -ForegroundColor DarkGray
    } else {
        $cssAdd = @'

/* ===== 评分卡片 ===== */
.score-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 1.75rem;
  box-shadow: var(--shadow);
}
.score-box h3 {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.score-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 0.9rem;
}
.score-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.9rem 0.5rem;
  background: var(--bg);
  border-radius: 10px;
  border: 1px solid var(--border);
}
.score-item.total {
  background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(124,58,237,0.08));
  border-color: var(--primary);
}
.score-label {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.score-value {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}
.score-item.total .score-value {
  color: var(--primary);
}
'@
        Add-Content -Path $cssPath -Value $cssAdd -Encoding UTF8
        Write-Host "✓ 已追加评分样式到 style.css" -ForegroundColor Green
    }
} else {
    Write-Host "✗ 找不到 assets/style.css" -ForegroundColor Red
}

# ────────────────────────────────────────────────────────────
#  2. 处理 7 个详情页
# ────────────────────────────────────────────────────────────
$pages = @(
    @{ Path="DeepSeek\DeepSeekWeb.html";       Key="dsWeb"         },
    @{ Path="DeepSeek\DeepSeekV41Flash.html";  Key="dsFlash"       },
    @{ Path="Qwen\Qwen38Max.html";             Key="qwenMax"       },
    @{ Path="Qwen\Qwen38OmniFlash.html";       Key="qwenOmniFlash" },
    @{ Path="Doubao\DoubaoWeb.html";           Key="doubaoWeb"     },
    @{ Path="MiMo\MiMoV26Flash.html";          Key="mimoFlash"     },
    @{ Path="MiMo\MiMoV26Pro.html";            Key="mimoPro"       }
)

$scoreBoxTpl = @'
  <div class="score-box" data-score-key="__KEY__">
    <h3 data-i18n="scoreTitle">作品评分</h3>
    <div class="score-grid">
      <div class="score-item">
        <span class="score-label" data-i18n="scoreAesthetics">美观性</span>
        <span class="score-value" data-score="aesthetics">—</span>
      </div>
      <div class="score-item">
        <span class="score-label" data-i18n="scoreSimplicity">简洁度</span>
        <span class="score-value" data-score="simplicity">—</span>
      </div>
      <div class="score-item">
        <span class="score-label" data-i18n="scoreFunctionality">功能性</span>
        <span class="score-value" data-score="functionality">—</span>
      </div>
      <div class="score-item total">
        <span class="score-label" data-i18n="scoreTotal">总分</span>
        <span class="score-value" data-score="total">—</span>
      </div>
    </div>
  </div>

'@

foreach ($page in $pages) {
    $fullPath = Join-Path $root $page.Path
    if (-not (Test-Path $fullPath)) {
        Write-Host "✗ 不存在：$($page.Path)" -ForegroundColor Yellow
        continue
    }

    $html = Get-Content $fullPath -Raw -Encoding UTF8
    $changes = @()

    # 2.1 耗时 span：data-i18n="xxxTime" → data-time-key="key"
    if ($html -match 'data-time-key=') {
        $changes += "耗时已配置"
    } elseif ($html -match '<span data-i18n="\w+Time">') {
        $html = $html -replace '<span data-i18n="\w+Time">[^<]*</span>', '<span data-time-key="' + $page.Key + '">—</span>'
        $changes += "替换耗时 span"
    } else {
        $changes += "✗ 未找到耗时 span"
    }

    # 2.2 插入 score-box
    if ($html -match 'score-box') {
        $changes += "评分卡片已存在"
    } elseif ($html -match '  <div class="preview-container">') {
        $scoreBox = $scoreBoxTpl.Replace('__KEY__', $page.Key)
        $html = $html.Replace('  <div class="preview-container">', $scoreBox + '  <div class="preview-container">')
        $changes += "插入评分卡片"
    } else {
        $changes += "✗ 未找到 preview-container"
    }

    # 2.3 脚本顺序：确保 data.js 在 i18n.js 之前
    if ($html -match 'assets/data\.js') {
        $changes += "脚本顺序已配置"
    } elseif ($html -match '<script src="\.\./assets/i18n\.js"></script>') {
        $html = $html.Replace(
            '<script src="../assets/i18n.js"></script>',
            "<script src=`"../assets/data.js`"></script>`r`n<script src=`"../assets/i18n.js`"></script>"
        )
        $changes += "调整脚本顺序"
    } else {
        $changes += "✗ 未找到 i18n.js 引用"
    }

    Set-Content -Path $fullPath -Value $html -Encoding UTF8 -NoNewline
    Write-Host "✓ $($page.Path)" -ForegroundColor Green
    Write-Host "    $($changes -join ' | ')" -ForegroundColor DarkGray
}

Write-Host "`n完成。接下来推送：`n" -ForegroundColor Cyan
Write-Host "  cd F:\AIPelican" -ForegroundColor White
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m 'feat: 详情页评分卡片 + data.js 集成'" -ForegroundColor White
Write-Host "  git push`n" -ForegroundColor White

Read-Host "按回车退出"