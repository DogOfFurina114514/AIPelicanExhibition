const translations = {
  zh: {
    brand: "AI 鹈鹕作品展",
    heroTag: "纯前端 · 无后端",
    heroTitle: "AI 鹈鹕作品展",
    heroSub: "同一个题目交给不同的 AI，看谁的鹈鹕最像样。全部是单文件 HTML，点开即看。",
    sectionTitle: "选择展区",
    dsName: "DeepSeek",
    dsDesc: "DeepSeek 系列模型交上来的鹈鹕。",
    qwenName: "Qwen",
    qwenDesc: "Qwen 系列模型交上来的鹈鹕。",
    footer: "纯静态站点 · 用心做鹈鹕",

    dsPageTitle: "DeepSeek 展区",
    dsPageSub: "DeepSeek 是由深度求索公司开发的 AI 模型系列，以高性价比和开源著称。系列涵盖通用对话、深度推理和代码生成，核心模型包括 V3 系列（MoE 架构）、R1 推理模型和最新的 V4 系列。",
    webName: "DeepSeek 网页对话",
    webDesc: "标准网页对话版本。",
    flashName: "DeepSeek-V4.1-Flash",
    flashDesc: "速度更快，一眨眼就画完。",

    qwenPageTitle: "Qwen 展区",
    qwenPageSub: "Qwen（通义千问）是阿里巴巴集团 Qwen 团队研发的大语言模型和大型多模态模型系列，覆盖文本、图像、音频、视频、超长文档处理及智能体执行，形成从旗舰 Max 到轻量 Flash 的完整模型矩阵。",
    maxName: "Qwen3.8Max",
    maxDesc: "最大参数版本。",
    omniFlashName: "Qwen3.8OmniFlash",
    omniFlashDesc: "全能且快速。",

    modelLabel: "模型：",
    timeLabel: "耗时：",
    versionLabel: "版本：",
    introTitle: "模型官方介绍",
    previewLabel: "作品预览",
    backToList: "← 返回列表",

    dsWebTitle: "DeepSeek 网页对话",
    dsWebTime: "待补充（请在此填写）",
    dsWebIntro: "DeepSeek 网页版（chat.deepseek.com）是官方提供的免费 AI 对话入口，支持智能对话问答、写作翻译、解题答疑等通用任务，提供联网搜索与“深度思考”推理模式。用户可上传文件与图片进行识别，历史对话在网页端与 App 端同步。",

    dsFlashTitle: "DeepSeek-V4.1-Flash",
    dsFlashTime: "待补充（请在此填写）",
    dsFlashIntro: "DeepSeek-V4.1-Flash 是 DeepSeek 全新架构系列中的轻量旗舰模型，以 552B 总参数 MoE 实现越级智能。采用 Causal Encoder-Decoder 非对称架构，输入激活仅 8B、输出激活 16B，并具备原生多模态视觉理解能力。KV Cache 压缩至上一代 HBM 的 1/4，支持 1M 上下文。",

    qwenMaxTitle: "Qwen3.8Max",
    qwenMaxTime: "待补充（请在此填写）",
    qwenMaxIntro: "Qwen3.8-Max 是通义千问系列迄今规模最大、能力最强的旗舰模型，拥有 2.4 万亿参数，支持多达 100 万 Token 的上下文窗口。在 Text Arena 中排名第五，Vision Arena 中排名第二，在编程、办公、科学研究及长周期任务中展现出卓越能力。",

    qwenOmniFlashTitle: "Qwen3.8OmniFlash",
    qwenOmniFlashTime: "待补充（请在此填写）",
    qwenOmniFlashIntro: "Qwen3.8-Omni-Flash 是阿里云推出的原生全模态大模型，支持 1M 长序列及文本、图像、音视频多模态输入与理解。具备视频问答、剪辑、AI 音乐生成等 Agentic 能力，面向真实生产力场景中的 Agent 应用。"
  },
  en: {
    brand: "AI Pelican Exhibition",
    heroTag: "Pure Frontend · No Backend",
    heroTitle: "AI Pelican Exhibition",
    heroSub: "Same prompt, different AIs. See who draws the best pelican. All single-file HTML, ready to view.",
    sectionTitle: "Select Gallery",
    dsName: "DeepSeek",
    dsDesc: "Pelicans submitted by DeepSeek models.",
    qwenName: "Qwen",
    qwenDesc: "Pelicans submitted by Qwen models.",
    footer: "Pure Static Site · Made with ❤️ for Pelicans",

    dsPageTitle: "DeepSeek Gallery",
    dsPageSub: "DeepSeek is an AI model series developed by DeepSeek Company, known for high cost-performance and open source. It covers general dialogue, deep reasoning, and code generation, with core models including V3 series (MoE architecture), R1 reasoning model, and the latest V4 series.",
    webName: "DeepSeek Web Chat",
    webDesc: "Standard web chat version.",
    flashName: "DeepSeek-V4.1-Flash",
    flashDesc: "Faster, draws in a blink.",

    qwenPageTitle: "Qwen Gallery",
    qwenPageSub: "Qwen is the large language model and large multimodal model series developed by the Qwen Team, Alibaba Group. It covers text, image, audio, video, ultra-long document processing, and agent execution, forming a complete model matrix from flagship Max to lightweight Flash.",
    maxName: "Qwen3.8Max",
    maxDesc: "Maximum parameter version.",
    omniFlashName: "Qwen3.8OmniFlash",
    omniFlashDesc: "Omni-capable and fast.",

    modelLabel: "Model: ",
    timeLabel: "Time: ",
    versionLabel: "Version: ",
    introTitle: "Official Model Introduction",
    previewLabel: "Preview",
    backToList: "← Back to list",

    dsWebTitle: "DeepSeek Web Chat",
    dsWebTime: "To be filled (edit here)",
    dsWebIntro: "DeepSeek Web (chat.deepseek.com) is the official free AI chat portal, supporting intelligent Q&A, writing, translation, and problem-solving. It offers web search and 'Deep Thinking' reasoning mode. Users can upload files and images for recognition, with chat history synced between web and App.",

    dsFlashTitle: "DeepSeek-V4.1-Flash",
    dsFlashTime: "To be filled (edit here)",
    dsFlashIntro: "DeepSeek-V4.1-Flash is the lightweight flagship model in DeepSeek's new architecture family, achieving advanced intelligence with a 552B-parameter MoE. It uses a Causal Encoder-Decoder asymmetric architecture with only 8B active parameters for input and 16B for output, featuring native multimodal visual understanding. KV Cache is compressed to 1/4 of the previous generation's HBM, supporting 1M context.",

    qwenMaxTitle: "Qwen3.8Max",
    qwenMaxTime: "To be filled (edit here)",
    qwenMaxIntro: "Qwen3.8-Max is the largest and most capable flagship model in the Qwen series to date, boasting 2.4 trillion parameters and supporting a context window of up to 1 million tokens. It ranks fifth in Text Arena and second in Vision Arena, demonstrating exceptional capabilities in coding, office work, scientific research, and long-horizon tasks.",

    qwenOmniFlashTitle: "Qwen3.8OmniFlash",
    qwenOmniFlashTime: "To be filled (edit here)",
    qwenOmniFlashIntro: "Qwen3.8-Omni-Flash is a native omni-modal large model launched by Alibaba Cloud, supporting 1M long sequences and text, image, audio, and video multimodal input and understanding. It features video Q&A, editing, AI music generation, and other agentic capabilities, targeting real-world productivity scenarios."
  },
  meme: {
    brand: "大肥鱼与请问的鹈鹕蹲点",
    heroTag: "纯整活 · 无后端",
    heroTitle: "大肥鱼与请问的鹈鹕蹲点",
    heroSub: "同一个题目交给不同的 AI，看谁画的鹈鹕最像样。全部是单文件 HTML，点开即看。",
    sectionTitle: "选择你的英雄",
    dsName: "大肥鱼",
    dsDesc: "大肥鱼系列交上来的鹈鹕。",
    qwenName: "请问",
    qwenDesc: "请问系列交上来的鹈鹕。",
    footer: "纯静态站点 · 大肥鱼和请问都爱吃鹈鹕",

    dsPageTitle: "大肥鱼聚集地",
    dsPageSub: "大肥鱼系列，深海来的神秘力量，主打一个性价比和开源，脑子里装满了 V3、R1 和 V4。",
    webName: "大肥鱼本鱼",
    webDesc: "标准网页对话版本。",
    flashName: "大肥鱼跑得快（快）",
    flashDesc: "快就一个字，我只说一次。",

    qwenPageTitle: "请问区域",
    qwenPageSub: "请问系列，来自阿里的大模型家族，什么都懂一点，从最大的 Max 到最快的 Flash 都有。",
    maxName: "请问3.8最大（最大）",
    maxDesc: "最大就完事了。",
    omniFlashName: "请问3.8全能快（快）",
    omniFlashDesc: "快，但全能。",

    modelLabel: "模型：",
    timeLabel: "耗时：",
    versionLabel: "版本：",
    introTitle: "大肥鱼写的介绍",
    previewLabel: "作品预览",
    backToList: "← 返回列表",

    dsWebTitle: "大肥鱼本鱼",
    dsWebTime: "快得离谱（大肥鱼跑得快）",
    dsWebIntro: "大肥鱼本鱼，平时在 chat.deepseek.com 蹲着，能聊天、能搜网、能深度思考，还能啃文件。",

    dsFlashTitle: "大肥鱼跑得快（快）",
    dsFlashTime: "快就一个字",
    dsFlashIntro: "大肥鱼 Flash 版本，游得飞快，画鹈鹕也是。",

    qwenMaxTitle: "请问3.8最大（最大）",
    qwenMaxTime: "最大就完事了",
    qwenMaxIntro: "请问，一种神秘的 AI 生物，遇到不懂的就问，问着问着就画出了最大的鹈鹕。",

    qwenOmniFlashTitle: "请问3.8全能快（快）",
    qwenOmniFlashTime: "快，但全能",
    qwenOmniFlashIntro: "请问的全能快版本，什么都会一点，什么都快一点。"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = 'zh';
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('preferred-lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'zh';
  try { saved = localStorage.getItem('preferred-lang') || 'zh'; } catch (e) {}
  setLanguage(saved);

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) setLanguage(btn.dataset.lang);
    });
  }
});