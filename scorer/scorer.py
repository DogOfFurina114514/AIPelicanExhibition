#!/usr/bin/env python3
"""
AI 鹈鹕作品评分器 v2 —— 更贴近人类直觉的评分
拖拽 HTML 文件，自动分析美观性 / 简洁度 / 功能性
"""
import sys
import re
from pathlib import Path

from PySide6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QLabel, QPushButton, QFileDialog, QFrame, QSizePolicy,
    QGraphicsDropShadowEffect
)
from PySide6.QtCore import Qt
from PySide6.QtGui import QFont, QColor, QPainter, QPen


STYLE = """
QMainWindow, QWidget#central { background-color: #0f172a; }
QLabel { color: #cbd5e1; font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif; }
QLabel#appTitle { color: #f1f5f9; font-size: 22px; font-weight: bold; }
QLabel#appSub { color: #94a3b8; font-size: 12px; }
QPushButton#openBtn {
    background: qlineargradient(x1:0, y1:0, x2:1, y2:0, stop:0 #4f46e5, stop:1 #7c3aed);
    color: white; border: none; padding: 10px 22px; border-radius: 8px;
    font-size: 13px; font-weight: 600;
}
QPushButton#openBtn:hover {
    background: qlineargradient(x1:0, y1:0, x2:1, y2:0, stop:0 #4338ca, stop:1 #6d28d9);
}
QPushButton#openBtn:pressed { background: #3730a3; }
QFrame#dropArea {
    border: 2px dashed #475569; border-radius: 16px;
    background: rgba(30, 41, 59, 0.5);
}
QFrame#scoreCard { background-color: #1e293b; border: 1px solid #334155; border-radius: 14px; }
QLabel#cardTitle { color: #cbd5e1; font-size: 14px; font-weight: 600; }
QLabel#fileInfo { color: #94a3b8; font-size: 13px; }
QLabel#detailItem { color: #94a3b8; font-size: 12px; }
QFrame#totalBox {
    background: qlineargradient(x1:0, y1:0, x2:1, y2:1,
        stop:0 rgba(79, 70, 229, 0.18), stop:1 rgba(124, 58, 237, 0.18));
    border: 1px solid #4f46e5; border-radius: 14px;
}
"""


# ============================================================
#  美观性
# ============================================================
def score_aesthetics(content: str):
    score = 0.0
    details = []

    # 1. 布局系统
    has_flex = bool(re.search(r'display\s*:\s*flex', content))
    has_grid = bool(re.search(r'display\s*:\s*grid', content))
    if has_flex and has_grid:
        score += 2.0
        details.append(("✓", "同时使用 Flex 和 Grid 布局", "+2.0"))
    elif has_flex or has_grid:
        score += 1.5
        details.append(("✓", f"使用 {'Flex' if has_flex else 'Grid'} 布局", "+1.5"))
    elif re.search(r'display\s*:\s*(inline-block|table)', content):
        score += 0.5
        details.append(("○", "使用传统布局方式", "+0.5"))
    else:
        details.append(("○", "未使用现代布局系统", "0.0"))

    # 2. 配色方案
    colors = set(re.findall(r'#[0-9a-fA-F]{6}\b', content))
    colors |= set(re.findall(r'#[0-9a-fA-F]{3}\b', content))
    colors |= set(re.findall(r'rgba?\([^)]+\)', content))
    nc = len(colors)
    if nc >= 6:
        score += 1.5
        details.append(("✓", f"配色丰富（{nc} 种颜色）", "+1.5"))
    elif nc >= 3:
        score += 1.0
        details.append(("✓", f"基础配色（{nc} 种颜色）", "+1.0"))
    elif nc >= 1:
        score += 0.5
        details.append(("○", f"配色单一（{nc} 种颜色）", "+0.5"))
    else:
        details.append(("✗", "无明显配色", "0.0"))

    # 3. 现代 CSS 特性
    modern = 0.0
    hits = []
    if re.search(r'--[\w-]+\s*:', content):
        modern += 0.5; hits.append("CSS 变量")
    if re.search(r'(linear|radial|conic)-gradient', content):
        modern += 0.5; hits.append("渐变")
    if re.search(r'box-shadow', content):
        modern += 0.3; hits.append("阴影")
    if re.search(r'border-radius', content):
        modern += 0.3; hits.append("圆角")
    if re.search(r'(backdrop-filter|filter)\s*:', content):
        modern += 0.4; hits.append("滤镜")
    score += modern
    if hits:
        details.append(("✓", "现代特性：" + "、".join(hits), f"+{modern:.1f}"))

    # 4. 微交互
    micro = 0.0
    hits = []
    if re.search(r':hover', content):
        micro += 0.5; hits.append("悬停反馈")
    if re.search(r'transition', content):
        micro += 0.5; hits.append("过渡动画")
    if re.search(r'@keyframes', content):
        micro += 0.5; hits.append("关键帧")
    score += micro
    if hits:
        details.append(("✓", "微交互：" + "、".join(hits), f"+{micro:.1f}"))

    # 5. 响应式
    if re.search(r'@media', content):
        score += 0.5
        details.append(("✓", "响应式媒体查询", "+0.5"))
    rel_units = len(re.findall(r'\d+(?:\.\d+)?(?:rem|em|vw|vh|vmin|vmax|clamp)\b', content))
    if rel_units > 5:
        score += 0.5
        details.append(("✓", f"相对单位使用（{rel_units} 处）", "+0.5"))

    # 6. 字体层级
    fsizes = set(re.findall(r'font-size\s*:\s*([^;]+)', content))
    fweights = set(re.findall(r'font-weight\s*:\s*([^;]+)', content))
    if len(fsizes) >= 3 and len(fweights) >= 2:
        score += 1.0
        details.append(("✓", "字体层级丰富", "+1.0"))
    elif len(fsizes) >= 2:
        score += 0.5
        details.append(("✓", "有字体层级", "+0.5"))

    # 7. 间距系统
    spacing = set()
    for m in re.findall(r'(?:padding|margin|gap)\s*:\s*([^;]+)', content):
        spacing |= set(re.findall(r'\d+(?:\.\d+)?(?:rem|em|px)', m))
    if len(spacing) >= 5:
        score += 0.5
        details.append(("✓", "间距系统化", "+0.5"))
    elif len(spacing) >= 3:
        score += 0.25
        details.append(("○", "间距基本一致", "+0.3"))

    score = min(10.0, score)
    return score, details


# ============================================================
#  简洁度
# ============================================================
def score_simplicity(content: str, size_bytes: int):
    score = 10.0
    details = []
    size_kb = size_bytes / 1024

    # 1. 内联样式
    inline = len(re.findall(r'style\s*=\s*["\']', content))
    tags = len(re.findall(r'<\w+', content))
    if tags > 0:
        ratio = inline / tags
        if ratio > 0.5:
            score -= 3.0
            details.append(("✗", f"内联样式泛滥（{ratio:.0%}）", "-3.0"))
        elif ratio > 0.3:
            score -= 2.0
            details.append(("✗", f"内联样式偏多（{ratio:.0%}）", "-2.0"))
        elif ratio > 0.15:
            score -= 1.0
            details.append(("○", f"存在内联样式（{ratio:.0%}）", "-1.0"))
        elif ratio > 0.05:
            score -= 0.5
            details.append(("○", f"少量内联样式（{ratio:.0%}）", "-0.5"))
        else:
            details.append(("✓", "几乎无内联样式", "0"))

    # 2. !important
    imp = len(re.findall(r'!important', content))
    if imp > 10:
        score -= 1.5
        details.append(("✗", f"!important 滥用（{imp} 次）", "-1.5"))
    elif imp > 3:
        score -= 0.8
        details.append(("○", f"有 !important（{imp} 次）", "-0.8"))

    # 3. CSS 属性重复
    props = {}
    for m in re.finditer(r'([a-z-]{2,})\s*:', content):
        p = m.group(1)
        if p in ('http', 'https', 'mailto', 'data', 'file'):
            continue
        props[p] = props.get(p, 0) + 1
    maxr = max(props.values()) if props else 0
    if maxr > 50:
        score -= 1.5
        details.append(("✗", f"CSS 属性重复严重（最多 {maxr} 次）", "-1.5"))
    elif maxr > 20:
        score -= 0.8
        details.append(("○", f"CSS 属性重复较多（最多 {maxr} 次）", "-0.8"))

    # 4. DOM 深度
    depth = 0
    maxd = 0
    for ch in content:
        if ch == '<':
            depth += 1
            maxd = max(maxd, depth)
        elif ch == '>':
            depth -= 1
    if maxd > 12:
        score -= 1.0
        details.append(("○", f"DOM 嵌套过深（最大 {maxd} 层）", "-1.0"))
    elif maxd > 8:
        score -= 0.5
        details.append(("○", f"DOM 嵌套偏深（最大 {maxd} 层）", "-0.5"))

    # 5. 空标签
    empty = len(re.findall(r'<(?:div|span|p|section)\b[^>]*>\s*</(?:div|span|p|section)>', content))
    if empty > 5:
        score -= 0.5
        details.append(("○", f"存在空标签（{empty} 个）", "-0.5"))

    # 6. 文件体积
    if size_kb > 1024:
        score -= 2.0
        details.append(("✗", f"文件过大（{size_kb:.0f} KB）", "-2.0"))
    elif size_kb > 300:
        score -= 1.0
        details.append(("○", f"文件较大（{size_kb:.0f} KB）", "-1.0"))
    elif size_kb < 50:
        score += 0.3
        details.append(("✓", f"文件轻量（{size_kb:.1f} KB）", "+0.3"))

    # 7. 加分：CSS 变量统一管理
    css_vars = set(re.findall(r'(--[\w-]+)\s*:', content))
    if len(css_vars) >= 5:
        score += 0.8
        details.append(("✓", f"CSS 变量统一管理（{len(css_vars)} 个）", "+0.8"))
    elif len(css_vars) >= 2:
        score += 0.4
        details.append(("✓", f"使用 CSS 变量（{len(css_vars)} 个）", "+0.4"))

    # 8. 加分：语义化
    sem = len(re.findall(r'<(header|nav|main|section|article|aside|footer)[\s>]', content, re.I))
    if sem >= 4:
        score += 0.5
        details.append(("✓", f"语义化标签（{sem} 个）", "+0.5"))
    elif sem == 0:
        score -= 0.3
        details.append(("○", "未使用语义化标签", "-0.3"))

    score = max(0.0, min(10.0, score))
    return score, details


# ============================================================
#  功能性
# ============================================================
def score_functionality(content: str):
    score = 0.0
    details = []

    # 1. 交互元素
    btn = len(re.findall(r'<button[\s>]', content, re.I))
    inp = len(re.findall(r'<input[\s>]', content, re.I))
    sel = len(re.findall(r'<(select|textarea)[\s>]', content, re.I))
    a = len(re.findall(r'<a\s+[^>]*href', content, re.I))
    interactive = btn + inp + sel
    if interactive >= 5:
        score += 2.0
        details.append(("✓", f"交互元素丰富（{interactive} 个）", "+2.0"))
    elif interactive >= 2:
        score += 1.5
        details.append(("✓", f"有交互元素（{interactive} 个）", "+1.5"))
    elif interactive >= 1:
        score += 0.8
        details.append(("○", f"交互元素较少（{interactive} 个）", "+0.8"))
    elif a >= 3:
        score += 0.3
        details.append(("○", "仅链接交互", "+0.3"))

    # 2. 事件处理
    events = len(re.findall(
        r'(addEventListener|onclick|onchange|oninput|onsubmit|onkeydown|onkeyup|'
        r'onmouseover|onmouseenter|onmouseleave|ontouchstart|onfocus|onblur|onscroll)',
        content, re.I))
    if events >= 8:
        score += 2.0
        details.append(("✓", f"事件处理丰富（{events} 处）", "+2.0"))
    elif events >= 4:
        score += 1.5
        details.append(("✓", f"有事件处理（{events} 处）", "+1.5"))
    elif events >= 1:
        score += 1.0
        details.append(("✓", f"少量事件（{events} 处）", "+1.0"))
    else:
        details.append(("✗", "无事件处理", "0.0"))

    # 3. DOM 操作
    dom = len(re.findall(
        r'(querySelector|getElementById|getElementsBy|\.innerHTML|\.textContent|'
        r'\.classList|\.setAttribute|createElement|appendChild|insertAdjacent)',
        content))
    if dom >= 5:
        score += 1.5
        details.append(("✓", f"DOM 操作丰富（{dom} 处）", "+1.5"))
    elif dom >= 2:
        score += 1.0
        details.append(("✓", f"有 DOM 操作（{dom} 处）", "+1.0"))
    elif dom >= 1:
        score += 0.5
        details.append(("○", f"少量 DOM 操作（{dom} 处）", "+0.5"))

    # 4. 数据/异步/存储/媒体
    data = 0.0
    hits = []
    if re.search(r'(fetch\s*\(|XMLHttpRequest|axios)', content):
        data += 0.5; hits.append("网络请求")
    if re.search(r'(localStorage|sessionStorage|indexedDB)', content):
        data += 0.5; hits.append("本地存储")
    if re.search(r'<(canvas|svg)[\s>]', content, re.I):
        data += 0.3; hits.append("Canvas/SVG")
    if re.search(r'<(video|audio)[\s>]', content, re.I):
        data += 0.4; hits.append("媒体元素")
    score += data
    if hits:
        details.append(("✓", "数据能力：" + "、".join(hits), f"+{data:.1f}"))

    # 5. 键盘/触摸
    if re.search(r'(keydown|keyup|keypress)', content):
        score += 0.5
        details.append(("✓", "键盘事件支持", "+0.5"))
    if re.search(r'(touchstart|touchmove|touchend)', content):
        score += 0.5
        details.append(("✓", "触摸事件支持", "+0.5"))

    # 6. 定时器/动画帧
    if re.search(r'(setInterval|setTimeout|requestAnimationFrame)', content):
        score += 0.5
        details.append(("✓", "使用定时器/动画帧", "+0.5"))

    # 7. 错误处理
    if re.search(r'(try\s*\{|catch\s*\(|\.catch\s*\(|throw\s+|Promise\.reject)', content):
        score += 1.0
        details.append(("✓", "有错误处理", "+1.0"))
    elif re.search(r'(if\s*\(!|typeof\s+\w+\s*===)', content):
        score += 0.5
        details.append(("○", "有基本防御性代码", "+0.5"))

    # 8. 函数结构
    funcs = len(re.findall(r'(function\s+\w+|=>\s*[{(]|\w+\s*\([^)]*\)\s*\{)', content))
    if funcs >= 8:
        score += 0.5
        details.append(("✓", f"函数结构清晰（{funcs} 个）", "+0.5"))
    elif funcs >= 3:
        score += 0.3
        details.append(("○", f"有若干函数（{funcs} 个）", "+0.3"))

    score = min(10.0, score)
    return score, details


# ============================================================
#  综合分析
# ============================================================
def analyze_html(content: str, size_bytes: int) -> dict:
    a, ad = score_aesthetics(content)
    s, sd = score_simplicity(content, size_bytes)
    f, fd = score_functionality(content)

    size_kb = size_bytes / 1024
    lines = content.count('\n') + 1

    return {
        'aesthetics': round(a, 1),
        'simplicity': round(s, 1),
        'functionality': round(f, 1),
        'total': round((a + s + f) / 3, 1),
        'details': {
            'aesthetics': ad,
            'simplicity': sd,
            'functionality': fd,
        },
        'meta': {'size_kb': size_kb, 'lines': lines},
    }


# ============================================================
#  圆形进度环
# ============================================================
class CircularScore(QWidget):
    def __init__(self, color_hex="#4f46e5", parent=None):
        super().__init__(parent)
        self._score = 0.0
        self._color = QColor(color_hex)
        self.setFixedSize(110, 110)

    def set_score(self, s):
        self._score = max(0.0, min(10.0, s))
        self.update()

    def paintEvent(self, e):
        p = QPainter(self)
        p.setRenderHint(QPainter.RenderHint.Antialiasing)
        rect = self.rect().adjusted(10, 10, -10, -10)

        pen = QPen(QColor("#334155"))
        pen.setWidth(8)
        pen.setCapStyle(Qt.PenCapStyle.RoundCap)
        p.setPen(pen)
        p.drawArc(rect, 0, 360 * 16)

        pen.setColor(self._color)
        p.setPen(pen)
        span = int(-360 * 16 * (self._score / 10.0))
        p.drawArc(rect, 90 * 16, span)

        p.setPen(QColor("#f1f5f9"))
        font = QFont()
        font.setPointSize(22)
        font.setBold(True)
        p.setFont(font)
        p.drawText(self.rect(), Qt.AlignmentFlag.AlignCenter, f"{self._score:.1f}")


# ============================================================
#  评分卡片
# ============================================================
class ScoreCard(QFrame):
    def __init__(self, title, color, parent=None):
        super().__init__(parent)
        self.setObjectName("scoreCard")
        self.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Preferred)

        shadow = QGraphicsDropShadowEffect(self)
        shadow.setBlurRadius(24)
        shadow.setColor(QColor(0, 0, 0, 80))
        shadow.setOffset(0, 4)
        self.setGraphicsEffect(shadow)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(20, 20, 20, 20)
        layout.setSpacing(12)

        title_label = QLabel(title)
        title_label.setObjectName("cardTitle")
        title_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(title_label)

        self.circle = CircularScore(color)
        layout.addWidget(self.circle, alignment=Qt.AlignmentFlag.AlignCenter)

        self.details_layout = QVBoxLayout()
        self.details_layout.setSpacing(4)
        layout.addLayout(self.details_layout)
        layout.addStretch()

    def set_result(self, score, details):
        self.circle.set_score(score)
        while self.details_layout.count():
            it = self.details_layout.takeAt(0)
            if it.widget():
                it.widget().deleteLater()

        for icon, text, delta in details:
            row = QHBoxLayout()
            row.setSpacing(6)

            icon_color = ("#10b981" if icon == "✓"
                          else "#f59e0b" if icon == "○"
                          else "#ef4444")
            ic = QLabel(icon)
            ic.setStyleSheet(
                f"color: {icon_color}; font-weight: bold; font-size: 13px;")
            ic.setFixedWidth(16)
            row.addWidget(ic)

            tx = QLabel(text)
            tx.setObjectName("detailItem")
            tx.setWordWrap(True)
            row.addWidget(tx, 1)

            dl = QLabel(delta)
            dl.setStyleSheet("color: #64748b; font-size: 11px; font-weight: 600;")
            dl.setAlignment(Qt.AlignmentFlag.AlignRight | Qt.AlignmentFlag.AlignVCenter)
            row.addWidget(dl)

            w = QWidget()
            w.setLayout(row)
            self.details_layout.addWidget(w)


# ============================================================
#  主窗口
# ============================================================
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("AI 鹈鹕作品评分器")
        self.resize(1200, 800)
        self.setAcceptDrops(True)
        self._build_ui()

    def _build_ui(self):
        central = QWidget()
        central.setObjectName("central")
        self.setCentralWidget(central)

        root = QVBoxLayout(central)
        root.setContentsMargins(32, 24, 32, 24)
        root.setSpacing(20)

        top = QHBoxLayout()
        tb = QVBoxLayout()
        tb.setSpacing(2)

        t = QLabel("🎨  AI 鹈鹕作品评分器")
        t.setObjectName("appTitle")
        tb.addWidget(t)

        s = QLabel("拖拽 HTML 文件或点击右侧按钮，自动分析美观性、简洁度、功能性")
        s.setObjectName("appSub")
        tb.addWidget(s)

        top.addLayout(tb)
        top.addStretch()

        btn = QPushButton("📂  选择 HTML 文件")
        btn.setObjectName("openBtn")
        btn.setCursor(Qt.CursorShape.PointingHandCursor)
        btn.clicked.connect(self.open_file)
        top.addWidget(btn)

        root.addLayout(top)

        self.content = QWidget()
        self.content_layout = QVBoxLayout(self.content)
        self.content_layout.setContentsMargins(0, 0, 0, 0)
        root.addWidget(self.content, 1)

        self._show_drop_area()

    # --------------------------------------------------------
    #  清理：递归删除所有子 widget
    # --------------------------------------------------------
    def _clear_content(self):
        while self.content_layout.count():
            it = self.content_layout.takeAt(0)
            w = it.widget()
            if w is not None:
                w.setParent(None)
                w.deleteLater()
            else:
                sub = it.layout()
                if sub is not None:
                    self._clear_layout(sub)

    def _clear_layout(self, layout):
        while layout.count():
            it = layout.takeAt(0)
            w = it.widget()
            if w is not None:
                w.setParent(None)
                w.deleteLater()
            else:
                sub = it.layout()
                if sub is not None:
                    self._clear_layout(sub)

    # --------------------------------------------------------
    #  空状态
    # --------------------------------------------------------
    def _show_drop_area(self):
        self._clear_content()
        drop = QFrame()
        drop.setObjectName("dropArea")
        drop.setMinimumHeight(400)

        layout = QVBoxLayout(drop)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.setSpacing(12)

        icon = QLabel("📄")
        icon.setStyleSheet("font-size: 64px;")
        icon.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(icon)

        t1 = QLabel("拖拽 HTML 文件到这里")
        t1.setStyleSheet("color: #cbd5e1; font-size: 18px; font-weight: 600;")
        t1.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(t1)

        t2 = QLabel("支持 .html / .htm 文件")
        t2.setStyleSheet("color: #64748b; font-size: 13px;")
        t2.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(t2)

        self.content_layout.addWidget(drop)

    # --------------------------------------------------------
    #  文件选择 / 拖拽
    # --------------------------------------------------------
    def open_file(self):
        path, _ = QFileDialog.getOpenFileName(
            self, "选择 HTML 文件", "",
            "HTML 文件 (*.html *.htm);;所有文件 (*.*)")
        if path:
            self._analyze(Path(path))

    def dragEnterEvent(self, e):
        if e.mimeData().hasUrls():
            for url in e.mimeData().urls():
                p = Path(url.toLocalFile())
                if p.is_file() and p.suffix.lower() in ('.html', '.htm'):
                    e.acceptProposedAction()
                    return
        e.ignore()

    def dropEvent(self, e):
        for url in e.mimeData().urls():
            p = Path(url.toLocalFile())
            if p.is_file() and p.suffix.lower() in ('.html', '.htm'):
                self._analyze(p)
                break

    def _analyze(self, path: Path):
        try:
            content = path.read_text(encoding='utf-8', errors='ignore')
        except Exception as ex:
            self._show_error(f"读取文件失败：{ex}")
            return
        result = analyze_html(content, path.stat().st_size)
        self._show_result(path, result)

    def _show_error(self, msg):
        self._clear_content()
        err = QLabel(f"❌  {msg}")
        err.setAlignment(Qt.AlignmentFlag.AlignCenter)
        err.setStyleSheet("color: #ef4444; font-size: 14px; padding: 40px;")
        self.content_layout.addWidget(err)

    # --------------------------------------------------------
    #  展示结果：所有 UI 塞进一个容器，一次性添加/清理
    # --------------------------------------------------------
    def _show_result(self, path: Path, result: dict):
        self._clear_content()
        meta = result['meta']

        container = QWidget()
        box = QVBoxLayout(container)
        box.setContentsMargins(0, 0, 0, 0)
        box.setSpacing(16)

        # 文件信息
        info = QLabel(
            f"📄  <b>{path.name}</b>   ·   "
            f"{meta['size_kb']:.1f} KB   ·   "
            f"{meta['lines']} 行"
        )
        info.setObjectName("fileInfo")
        box.addWidget(info)

        # 三张评分卡片
        row = QHBoxLayout()
        row.setSpacing(16)

        c1 = ScoreCard("🎨  美观性", "#7c3aed")
        c1.set_result(result['aesthetics'], result['details']['aesthetics'])
        row.addWidget(c1, 1)

        c2 = ScoreCard("✨  简洁度", "#06b6d4")
        c2.set_result(result['simplicity'], result['details']['simplicity'])
        row.addWidget(c2, 1)

        c3 = ScoreCard("⚙️  功能性", "#10b981")
        c3.set_result(result['functionality'], result['details']['functionality'])
        row.addWidget(c3, 1)

        box.addLayout(row, 1)

        # 总分
        total_row = QHBoxLayout()
        total_row.addStretch()

        total_box = QFrame()
        total_box.setObjectName("totalBox")
        total_box.setFixedHeight(90)
        total_box.setMinimumWidth(280)

        tl = QHBoxLayout(total_box)
        tl.setContentsMargins(28, 0, 28, 0)
        tl.setSpacing(16)

        lbl = QLabel("总分")
        lbl.setStyleSheet(
            "color: #a5b4fc; font-size: 15px; font-weight: 600; letter-spacing: 2px;")
        tl.addWidget(lbl)

        val = QLabel(f"{result['total']:.1f}")
        val.setStyleSheet("color: #a5b4fc; font-size: 36px; font-weight: 800;")
        tl.addWidget(val)

        total_row.addWidget(total_box)
        total_row.addStretch()

        box.addLayout(total_row)

        # 把整个容器作为一个 widget 加入 content_layout
        self.content_layout.addWidget(container)


def main():
    app = QApplication(sys.argv)
    app.setStyleSheet(STYLE)
    app.setFont(QFont("Microsoft YaHei", 10))
    win = MainWindow()
    win.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()