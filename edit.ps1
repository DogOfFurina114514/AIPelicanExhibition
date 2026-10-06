#Requires -Version 5.0
# ============================================================
#  修复 backdrop 线性过渡
#   - CSS：backdrop 用 .backdrop-show 类控制不透明
#   - JS：showModal 后延迟两帧再加类，触发 transition
# ============================================================

$ErrorActionPreference = "Stop"
$root = "F:\AIPelican"

if (-not (Test-Path $root)) {
    Write-Host "✗ 找不到 $root" -ForegroundColor Red
    Read-Host "按回车退出"; exit 1
}

Write-Host "`n=== 修复 backdrop 线性过渡 ===`n" -ForegroundColor Cyan

# ────────────────────────────────────────────────────────────
#  1. style.css：替换 ::backdrop 相关规则
# ────────────────────────────────────────────────────────────
$cssPath = "$root\assets\style.css"
$css = Get-Content $cssPath -Raw -Encoding UTF8

# 删掉所有旧的 backdrop 规则
$oldBackdrops = @(
    'dialog\.apply-modal\[open\]::backdrop\s*\{[^}]*\}',
    'dialog\.apply-modal\.closing::backdrop\s*\{[^}]*\}',
    'dialog\.apply-modal::backdrop\s*\{[^}]*\}',
    'dialog\.apply-modal\.backdrop-show::backdrop\s*\{[^}]*\}'
)
foreach ($p in $oldBackdrops) {
    $css = [regex]::Replace($css, $p, '')
}

$newBackdrop = @'
/* --- backdrop：用 .backdrop-show 类触发过渡 --- */
dialog.apply-modal::backdrop {
  background: rgba(15, 23, 42, 0);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  transition: background 0.4s linear, backdrop-filter 0.4s linear;
}
dialog.apply-modal.backdrop-show::backdrop {
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
/* Chrome 117+ 支持 @starting-style，可以省去 JS 那一帧延迟 */
@starting-style {
  dialog.apply-modal.backdrop-show::backdrop {
    background: rgba(15, 23, 42, 0);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
}
'@

# 找 dialog.apply-modal 段落后插回去（用 /* --- backdrop 注释或 dialog.apply-modal.closing 之后）
if ($css -match 'dialog\.apply-modal\.closing\s*\{') {
    $css = [regex]::Replace($css, '(dialog\.apply-modal\.closing\s*\{[^}]*\})', ('$1' + "`r`n`r`n" + $newBackdrop), 1)
} elseif ($css -match 'dialog\.apply-modal\.opening\s*\{') {
    $css = [regex]::Replace($css, '(dialog\.apply-modal\.opening\s*\{[^}]*\})', ('$1' + "`r`n`r`n" + $newBackdrop), 1)
} else {
    # 兜底：追加到文件末尾
    $css = $css.TrimEnd() + "`r`n`r`n" + $newBackdrop + "`r`n"
}

Set-Content -Path $cssPath -Value $css -Encoding UTF8
Write-Host "✓ style.css backdrop 已改为 .backdrop-show 控制" -ForegroundColor Green

# ────────────────────────────────────────────────────────────
#  2. i18n.js：改 open / close 加 rAF 延迟
# ────────────────────────────────────────────────────────────
$i18nPath = "$root\assets\i18n.js"
$i18n = Get-Content $i18nPath -Raw -Encoding UTF8

$oldOpen = @'
  const open = () => {
    if (closing) return;
    refreshTexts();

    modal.classList.remove('closing');
    modal.classList.remove('opening');
    // 强制 reflow，让动画能重播
    void modal.offsetWidth;
    modal.classList.add('opening');

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    setTimeout(() => modal.classList.remove('opening'), OPEN_MS);
  };
'@

$newOpen = @'
  const open = () => {
    if (closing) return;
    refreshTexts();

    modal.classList.remove('closing');
    modal.classList.remove('opening');
    modal.classList.remove('backdrop-show');
    // 强制 reflow
    void modal.offsetWidth;
    modal.classList.add('opening');

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }

    // 等两帧让浏览器先渲染出透明 backdrop，再切到不透明 → 触发线性过渡
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modal.classList.add('backdrop-show');
      });
    });

    setTimeout(() => modal.classList.remove('opening'), OPEN_MS);
  };
'@

$oldClose = @'
  const close = () => {
    if (closing) return;
    closing = true;

    modal.classList.remove('opening');
    modal.classList.add('closing');

    setTimeout(() => {
      modal.classList.remove('closing');
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      closing = false;
    }, CLOSE_MS);
  };
'@

$newClose = @'
  const close = () => {
    if (closing) return;
    closing = true;

    modal.classList.remove('opening');
    modal.classList.add('closing');
    modal.classList.remove('backdrop-show');   // 触发 backdrop 淡出

    setTimeout(() => {
      modal.classList.remove('closing');
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      closing = false;
    }, CLOSE_MS);
  };
'@

$oldOpenLF = $oldOpen -replace "`r`n", "`n"
$newOpenLF = $newOpen -replace "`r`n", "`n"
$oldCloseLF = $oldClose -replace "`r`n", "`n"
$newCloseLF = $newClose -replace "`r`n", "`n"

$i18nLF = $i18n -replace "`r`n", "`n"

$replaced = 0
if ($i18nLF.Contains($oldOpenLF)) {
    $i18nLF = $i18nLF.Replace($oldOpenLF, $newOpenLF)
    $replaced++
}
if ($i18nLF.Contains($oldCloseLF)) {
    $i18nLF = $i18nLF.Replace($oldCloseLF, $newCloseLF)
    $replaced++
}

if ($replaced -eq 2) {
    $i18nFinal = $i18nLF -replace "`n", "`r`n"
    Set-Content -Path $i18nPath -Value $i18nFinal -Encoding UTF8
    Write-Host "✓ i18n.js open/close 已加 backdrop-show 逻辑" -ForegroundColor Green
} elseif ($replaced -eq 1) {
    Write-Host "⚠ i18n.js 只替换了 1 处，请手动检查另一个函数" -ForegroundColor Yellow
    $i18nFinal = $i18nLF -replace "`n", "`r`n"
    Set-Content -Path $i18nPath -Value $i18nFinal -Encoding UTF8
} else {
    Write-Host "✗ i18n.js 未匹配到 open/close 函数，请手动修改" -ForegroundColor Yellow
    Write-Host "  需要在 open() 里 showModal 后加:" -ForegroundColor Yellow
    Write-Host "    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('backdrop-show')));" -ForegroundColor Yellow
    Write-Host "  在 close() 里加:" -ForegroundColor Yellow
    Write-Host "    modal.classList.remove('backdrop-show');" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  完成！" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "推送：" -ForegroundColor Yellow
Write-Host "  cd F:\AIPelican" -ForegroundColor White
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m 'fix: backdrop 使用两帧延迟触发线性过渡'" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
Write-Host ""

Read-Host "按回车退出"