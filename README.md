# AI 鹈鹕作品展 (AI Pelican Exhibition)

> 同一个题目交给不同的 AI，看谁的鹈鹕最像样。

这是一个纯前端、无后端的 AI 网页作品展示柜。我们收集了各个 AI 模型针对“画鹈鹕”这一命题生成的单文件 HTML 作品，方便对比、回看和分享。

## ✨ 项目特色

- **纯前端运行**：无需搭建后端，直接托管在 GitHub Pages 即可。
- **三语切换**：支持 中文、English、梗语一键切换，本地记忆用户偏好。
- **模型官方介绍**：每个详情页均包含对应模型的官方介绍与测试耗时信息。
- **现代化界面**：响应式卡片布局，适配深色模式，独立的纯白图标底色防重叠设计。
- **作品隔离**：通过 iframe 加载作品，保证主站样式与作品互不干扰。

## 📁 目录结构

```text
.
├── index.html                  # 首页
├── assets/
│   ├── style.css               # 全局样式（含深色模式）
│   └── i18n.js                 # 多语言翻译文案（中/英/梗语）
├── DeepSeek/                   # DeepSeek 展区
│   ├── index.html              # 列表页
│   ├── DeepSeekWeb.html        # 详情页
│   ├── DeepSeekV41Flash.html   # 详情页
│   ├── icon.svg                # 图标
│   └── works/                  # 存放 DeepSeek 的鹈鹕作品（HTML）
└── Qwen/                       # Qwen 展区
    ├── index.html              # 列表页
    ├── Qwen38Max.html          # 详情页
    ├── Qwen38OmniFlash.html    # 详情页
    ├── icon.svg                # 图标
    └── works/                  # 存放 Qwen 的鹈鹕作品（HTML）