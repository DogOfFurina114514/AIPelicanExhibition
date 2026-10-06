# AI 鹈鹕作品展

> 同一个题目交给不同的 AI，看谁的鹈鹕最像样。

一个纯前端、无后端的 AI 网页作品展示柜。收集各个 AI 模型针对「画一只鹈鹕」这一命题生成的单文件 HTML 作品，方便对比、回看和分享。

## ✨ 项目特性

### 主站

- **四个 AI 展区**：DeepSeek / Qwen / 豆包 / MiMo，每个展区有独立的列表页和作品详情页
- **三语切换**：中文 / English / 梗语（大肥鱼、请问、米末、唐包……），支持 localStorage 记忆
- **作品评分系统**：从美观性、简洁度、功能性三个维度客观打分，总分取平均值保留一位小数
- **等边三角形可视化**：外框为满分参考，内部叠加一个小三角形，顶点位置随评分伸缩，直观感受各维度强弱
- **莫奈取色卡片**：用 Median Cut 算法从每个展区图标提取主色，柔化成莫奈风格渐变，鼠标悬停时出现在卡片顶部
- **液态玻璃顶栏**：默认向两边张开，滚动时收窄成悬浮胶囊，带亚克力模糊 + 液态玻璃高光边缘
- **站内跳转动画**：源页面滚动过的情况下，目标页面顶栏先以收缩态出现，再平滑展开
- **作品预览交互**：
  - 初始显示深色背景 + 绿色播放按钮，点击才加载 iframe
  - 播放后左上角出现红黄绿三色点：关闭 / 画中画 / 全屏
  - 右上角"在新标签页中打开"按钮
  - 全屏退出后回到进入前的位置
  - 画中画无缝衔接，原位显示"已在画中画中打开"提示
- **申请补充入口**：评分声明下方有"去申请 / 补充"按钮，弹窗展示详细要求，并提供 mailto 链接自动填好收件人、主题和格式模板
- **响应式设计**：适配移动端，隐藏滚动条，禁用 tap 高亮
- **深色模式**：跟随系统 `prefers-color-scheme`

### scorer（评分程序）

- **PySide6 桌面程序**：拖拽 HTML 文件自动分析三维评分
- **可视化结果**：三个圆形进度环 + 逐条加扣分明细
- **独立打包**：PyInstaller 生成的 `scorer.exe`，双击即用，无需 Python

## 📁 目录结构

```
.
├── index.html                  # 首页
├── assets/
│   ├── style.css               # 全局样式（含深色模式、顶栏、卡片、评分、弹窗等）
│   ├── i18n.js                 # 多语言 + 评分渲染 + 莫奈取色 + 顶栏逻辑 + 预览交互 + 弹窗
│   ├── data.js                 # 作品数据（耗时 + 三维评分）—— 唯一需要手动填写的文件
│   └── favicon.svg             # 站点图标
│
├── DeepSeek/                   # DeepSeek 展区
│   ├── index.html
│   ├── DeepSeekWeb.html
│   ├── DeepSeekV41Flash.html
│   ├── icon.svg
│   └── works/
│       ├── DeepSeekWeb.html
│       └── DeepSeekV41Flash.html
│
├── Qwen/                       # Qwen 展区
│   ├── index.html
│   ├── Qwen38Max.html
│   ├── Qwen38OmniFlash.html
│   ├── icon.svg
│   └── works/
│       ├── Qwen38Max.html
│       └── Qwen38OmniFlash.html
│
├── Doubao/                     # 豆包展区
│   ├── index.html
│   ├── DoubaoWeb.html
│   ├── icon.svg
│   └── works/
│       └── DoubaoWeb.html
│
├── MiMo/                       # MiMo 展区
│   ├── index.html
│   ├── MiMoV26Flash.html
│   ├── MiMoV26Pro.html
│   ├── icon.svg
│   └── works/
│       ├── MiMoV26Flash.html
│       └── MiMoV26Pro.html
│
└── scorer/                     # 评分程序
    ├── index.html              # 介绍页
    ├── scorer.py               # Python 源码（PySide6）
    └── scorer.exe              # Windows 独立程序
```

## 🚀 部署到 GitHub Pages

1. 把整个仓库推送到 GitHub

2. 进入仓库 **Settings → Pages**

3. **Source** 选择 **Deploy from a branch**

4. **Branch** 选 **main**，文件夹选 **/ (root)**，点 Save

5. 等 1-2 分钟，顶部会出现网址链接

## 🛠️ 本地运行

纯静态项目，用任何静态服务器启动即可。

Python：

```bash
python -m http.server 8080
```

Node.js：

```bash
npx serve .
```

打开 `http://localhost:8080`。

> ⚠️ 直接双击 `index.html` 用 `file://` 打开也能运行大部分功能，但莫奈取色可能因浏览器安全策略失败，建议用本地服务器。

## 📝 如何添加新作品

### 添加新模型

1. 新建模型文件夹（如 `NewAI/`），放入：
   - `icon.svg` —— 图标（也可以用 PNG，改名即可）
   - `index.html` —— 列表页（参考 `DeepSeek/index.html`）
   - 详情页 HTML（每个模型一个详情页）
   - `works/` 文件夹 —— 存放该模型的作品 HTML

2. 在 `assets/i18n.js` 的三个语言包里加上新模型的翻译键

3. 在根目录 `index.html` 的卡片网格里加一个卡片，指向 `./NewAI/`

### 添加新作品

1. 把作品 HTML 放进 `Xxx/works/YourWork.html`

2. 在列表页 `Xxx/index.html` 加一个卡片，`href` 指向详情页

3. 复制一个详情页，改 `data-score-key` / `data-time-key` 和 iframe 的 `src`

4. 在 `assets/data.js` 里加上对应键的耗时和评分

## ✏️ 修改数据（重要）

**`assets/data.js`** 是整个网站唯一需要手动填写的文件：

```javascript
dsWeb: {
  time: {
    zh:   "2分钟",
    en:   "2min",
    meme: "快得离谱（大肥鱼跑得快）"
  },
  scores: {
    aesthetics:    8.5,
    simplicity:    7.0,
    functionality: 9.0
  }
}
```

- **耗时**：手填，三种语言各一份
- **三维评分**：手填，范围 0.0~10.0，保留一位小数
- **总分**：程序自动计算 `(美观 + 简洁 + 功能) / 3`，无需填写

## 🎨 自定义

- **站点图标**：替换 `assets/favicon.svg`
- **配色**：改 `assets/style.css` 顶部 `:root` 里的 CSS 变量
- **欢迎语/文案**：改 `assets/i18n.js` 里的 `translations` 对象
- **梗语词典**：改 `assets/i18n.js` 里 meme 语言包，豆包的随机词在 `setLanguage` 函数里

## 📜 开源协议

本项目采用 [GNU Affero General Public License v3.0 (AGPL-3.0)](LICENSE) 许可协议。

这意味着：

- 你可以自由使用、修改、分发本项目
- **如果任何人将修改后的版本部署为网络服务，必须向所有用户开源其修改后的完整代码**
- 禁止白嫖

## 🙏 致谢

感谢所有参与生成作品的 AI 模型，以及提供测试建议的朋友们。

特别感谢大肥鱼、请问、米末、der 包在本项目中友情出演。
