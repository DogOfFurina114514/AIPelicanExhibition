#Requires -Version 5.0
# ============================================================
#  修复画中画 v4
#   - 用标志位替代 frame.src !== src 判断，避免重复加载
#   - 已在播放时点黄点不再重设 src
# ============================================================

$ErrorActionPreference = "Stop"
$root = "F:\AIPelican"

if (-not (Test-Path $root)) {
    Write-Host "✗ 找不到 $root" -ForegroundColor Red
    Read-Host "按回车退出"; exit 1
}

Write-Host "`n=== 修复画中画 v4 ===`n" -ForegroundColor Cyan

$i18nPath = "$root\assets\i18n.js"
if (-not (Test-Path $i18nPath)) {
    Write-Host "✗ 找不到 $i18nPath" -ForegroundColor Red
    Read-Host "按回车退出"; exit 1
}

$i18n = Get-Content $i18nPath -Raw -Encoding UTF8
$i18nLF = $i18n -replace "`r`n", "`n"

# ────────────────────────────────────────────────────────────
#  1. 修复 play() 和 close()：用 isPlaying 标志
# ────────────────────────────────────────────────────────────
$oldPlay = @'
    let savedScrollY = 0;
    let pipWindow = null;

    const play = () => {
      if (frame.src !== src) {
        frame.src = src;
      }
      container.classList.add('playing');
    };

    const close = () => {
      frame.src = 'about:blank';
      container.classList.remove('playing');
      if (pipWindow && !pipWindow.closed) {
        pipWindow.close();
      }
    };
'@

$newPlay = @'
    let savedScrollY = 0;
    let pipWindow = null;
    let isPlaying = false;

    const play = () => {
      if (!isPlaying) {
        frame.src = src;
        isPlaying = true;
      }
      container.classList.add('playing');
    };

    const close = () => {
      frame.src = 'about:blank';
      isPlaying = false;
      container.classList.remove('playing');
      if (pipWindow && !pipWindow.closed) {
        pipWindow.close();
      }
    };
'@

$oldPlayLF = $oldPlay -replace "`r`n", "`n"
$newPlayLF = $newPlay -replace "`r`n", "`n"

if ($i18nLF.Contains($oldPlayLF)) {
    $i18nLF = $i18nLF.Replace($oldPlayLF, $newPlayLF)
    Write-Host "✓ play() / close() 已改为标志位逻辑" -ForegroundColor Green
} else {
    Write-Host "✗ 未匹配到旧 play() 代码块" -ForegroundColor Yellow
}

# ────────────────────────────────────────────────────────────
#  2. 修复 pip()：只在未播放时 play
# ────────────────────────────────────────────────────────────
$oldPipLine = @'
      // 先确保 iframe 已加载
      play();
'@

$newPipLine = @'
      // 只在未播放时加载，已播放直接搬（避免重设 src 导致重载）
      if (!isPlaying) play();
'@

$oldPipLineLF = $oldPipLine -replace "`r`n", "`n"
$newPipLineLF = $newPipLine -replace "`r`n", "`n"

if ($i18nLF.Contains($oldPipLineLF)) {
    $i18nLF = $i18nLF.Replace($oldPipLineLF, $newPipLineLF)
    Write-Host "✓ pip() 已改为条件 play" -ForegroundColor Green
} else {
    Write-Host "○ 未匹配到 pip() 的 play() 调用（可能已被修改）" -ForegroundColor DarkGray
}

# 写回
$i18nFinal = $i18nLF -replace "`n", "`r`n"
Set-Content -Path $i18nPath -Value $i18nFinal -Encoding UTF8
Write-Host "✓ i18n.js 已更新" -ForegroundColor Green

Write-Host ""
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  完成！" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "推送：" -ForegroundColor Yellow
Write-Host "  cd F:\AIPelican" -ForegroundColor White
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m 'fix: 画中画避免重复设置 src 导致重载'" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
Write-Host ""

Read-Host "按回车退出"