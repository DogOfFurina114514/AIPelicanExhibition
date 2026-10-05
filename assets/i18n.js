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
    doubaoName: "豆包",
    doubaoDesc: "豆包系列模型交上来的鹈鹕。",
    mimoName: "MiMo",
    mimoDesc: "MiMo 系列模型交上来的鹈鹕。",
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

    doubaoPageTitle: "豆包展区",
    doubaoPageSub: "豆包是字节跳动旗下火山引擎推出的自研大语言模型，原名“云雀”，于2024年5月正式发布。系列涵盖通用对话、深度推理、多模态理解和Agent能力，2026年2月发布的豆包2.0包含Pro、Lite、Mini三款通用Agent模型和Code模型，主打真实世界复杂任务执行力。",
    doubaoWebName: "豆包网页对话",
    doubaoWebDesc: "标准网页对话版本。",
    doubaoModelName: "豆包",

    mimoPageTitle: "MiMo 展区",
    mimoPageSub: "MiMo 是小米自研的大模型系列，2026年9月发布 MiMo-V2.6 系列，包含 Pro 与 Flash 两款原生全模态模型。系列采用稀疏 MoE 架构，支持文本、图像、视频、音频全模态输入，在 Artificial Analysis 综合智能指数中登顶全球开源模型第一，定价仅为海外同级模型的 1/20 至 1/60。",
    mimoFlashName: "MiMo-V2.6-Flash",
    mimoFlashDesc: "全模态高效推理模型，高频调用首选。",
    mimoProName: "MiMo-V2.6-Pro",
    mimoProDesc: "全模态旗舰，1T 参数 MoE，登顶开源第一。",

    modelLabel: "模型：",
    timeLabel: "耗时：",
    versionLabel: "版本：",
    introTitle: "模型官方介绍",
    previewLabel: "作品预览",
    backToList: "← 返回列表",

    dsWebTitle: "DeepSeek 网页对话",
    dsWebTime: "2分钟",
    dsWebIntro: "DeepSeek 网页版（chat.deepseek.com）是官方提供的免费 AI 对话入口，支持智能对话问答、写作翻译、解题答疑等通用任务，提供联网搜索与“深度思考”推理模式。用户可上传文件与图片进行识别，历史对话在网页端与 App 端同步。",

    dsFlashTitle: "DeepSeek-V4.1-Flash",
    dsFlashTime: "待补充",
    dsFlashIntro: "DeepSeek-V4.1-Flash 是 DeepSeek 全新架构系列中的轻量旗舰模型，以 552B 总参数 MoE 实现越级智能。采用 Causal Encoder-Decoder 非对称架构，输入激活仅 8B、输出激活 16B，并具备原生多模态视觉理解能力。KV Cache 压缩至上一代 HBM 的 1/4，支持 1M 上下文。",

    qwenMaxTitle: "Qwen3.8Max",
    qwenMaxTime: "18分钟",
    qwenMaxIntro: "Qwen3.8-Max 是通义千问系列迄今规模最大、能力最强的旗舰模型，拥有 2.4 万亿参数，支持多达 100 万 Token 的上下文窗口。在 Text Arena 中排名第五，Vision Arena 中排名第二，在编程、办公、科学研究及长周期任务中展现出卓越能力。",

    qwenOmniFlashTitle: "Qwen3.8OmniFlash",
    qwenOmniFlashTime: "9分钟",
    qwenOmniFlashIntro: "Qwen3.8-Omni-Flash 是阿里云推出的原生全模态大模型，支持 1M 长序列及文本、图像、音视频多模态输入与理解。具备视频问答、剪辑、AI 音乐生成等 Agentic 能力，面向真实生产力场景中的 Agent 应用。",

    doubaoWebTitle: "豆包网页对话",
    doubaoWebTime: "＜1分钟",
    doubaoWebIntro: "豆包是字节跳动旗下火山引擎推出的自研大语言模型，原名“云雀”，于2024年5月正式发布。豆包2.0（Doubao-Seed-2.0）针对大规模生产环境进行系统性优化，包含Pro、Lite、Mini三款通用Agent模型和Code模型。豆包2.0 Pro面向深度推理与长链路任务执行，全面对标GPT 5.2与Gemini 3 Pro，在IMO、CMO数学竞赛和ICPC编程竞赛中取得金牌成绩，数学和推理能力达到世界顶尖水平。豆包网页版（www.doubao.com）提供智能对话、多模态理解、实时视频流分析等能力，用户选择“专家”模式即可体验2.0 Pro。",

    mimoFlashTitle: "MiMo-V2.6-Flash",
    mimoFlashTime: "待补充（请在此填写）",
    mimoFlashIntro: "MiMo-V2.6-Flash 是小米于 2026 年 9 月 22 日发布并开源的高效推理模型，采用稀疏 MoE 架构，总参数 309B，每 Token 激活约 15B。原生支持文本、图像、视频、音频全模态输入，支持 1M Token 上下文窗口。在长程软件工程能力评测 DeepSWE v1.1 中，得分从上一代的 48.8 提升至 65.68，提升幅度达 17 分。定价为每百万词元输入 1 元、输出 2 元，并提供 99% 缓存折扣，官方测算成本仅为海外同级模型的 1/20 至 1/60。",

    mimoProTitle: "MiMo-V2.6-Pro",
    mimoProTime: "待补充（请在此填写）",
    mimoProIntro: "MiMo-V2.6-Pro 是小米 MiMo-V2.6 系列的全模态旗舰模型，采用稀疏 MoE 架构，总参数突破 1T，每 Token 激活约 42B。原生支持文本、图像、视频、音频全模态输入，支持 1M Token 上下文窗口，面向深度推理与长链路任务执行。在 Artificial Analysis 综合智能指数中登顶全球开源模型第一，在编程、数学、科学推理和多模态理解等基准上达到开源顶尖水平。定价延续 MiMo 系列的高性价比策略，远低于海外同级模型。"
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
    doubaoName: "Doubao",
    doubaoDesc: "Pelicans submitted by Doubao models.",
    mimoName: "MiMo",
    mimoDesc: "Pelicans submitted by MiMo models.",
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

    doubaoPageTitle: "Doubao Gallery",
    doubaoPageSub: "Doubao is the self-developed large language model by Volcano Engine under ByteDance, originally named 'Skylark' and officially released in May 2024. The series covers general dialogue, deep reasoning, multimodal understanding, and Agent capabilities. Doubao 2.0, released in February 2026, includes three general Agent models (Pro, Lite, Mini) and a Code model, focusing on real-world complex task execution.",
    doubaoWebName: "Doubao Web Chat",
    doubaoWebDesc: "Standard web chat version.",
    doubaoModelName: "Doubao",

    mimoPageTitle: "MiMo Gallery",
    mimoPageSub: "MiMo is Xiaomi's self-developed large model series. In September 2026, Xiaomi released the MiMo-V2.6 series, including Pro and Flash native omni-modal models. The series uses a sparse MoE architecture and supports text, image, video, and audio input. It ranked first among global open-source models on the Artificial Analysis Intelligence Index, with pricing only 1/20 to 1/60 of comparable overseas models.",
    mimoFlashName: "MiMo-V2.6-Flash",
    mimoFlashDesc: "Omni-modal efficient reasoning model for high-frequency calls.",
    mimoProName: "MiMo-V2.6-Pro",
    mimoProDesc: "Omni-modal flagship, 1T-parameter MoE, ranked first open-source.",

    modelLabel: "Model: ",
    timeLabel: "Time: ",
    versionLabel: "Version: ",
    introTitle: "Official Model Introduction",
    previewLabel: "Preview",
    backToList: "← Back to list",

    dsWebTitle: "DeepSeek Web Chat",
    dsWebTime: "2min",
    dsWebIntro: "DeepSeek Web (chat.deepseek.com) is the official free AI chat portal, supporting intelligent Q&A, writing, translation, and problem-solving. It offers web search and 'Deep Thinking' reasoning mode. Users can upload files and images for recognition, with chat history synced between web and App.",

    dsFlashTitle: "DeepSeek-V4.1-Flash",
    dsFlashTime: "To be filled",
    dsFlashIntro: "DeepSeek-V4.1-Flash is the lightweight flagship model in DeepSeek's new architecture family, achieving advanced intelligence with a 552B-parameter MoE. It uses a Causal Encoder-Decoder asymmetric architecture with only 8B active parameters for input and 16B for output, featuring native multimodal visual understanding. KV Cache is compressed to 1/4 of the previous generation's HBM, supporting 1M context.",

    qwenMaxTitle: "Qwen3.8Max",
    qwenMaxTime: "18min",
    qwenMaxIntro: "Qwen3.8-Max is the largest and most capable flagship model in the Qwen series to date, boasting 2.4 trillion parameters and supporting a context window of up to 1 million tokens. It ranks fifth in Text Arena and second in Vision Arena, demonstrating exceptional capabilities in coding, office work, scientific research, and long-horizon tasks.",

    qwenOmniFlashTitle: "Qwen3.8OmniFlash",
    qwenOmniFlashTime: "9min",
    qwenOmniFlashIntro: "Qwen3.8-Omni-Flash is a native omni-modal large model launched by Alibaba Cloud, supporting 1M long sequences and text, image, audio, and video multimodal input and understanding. It features video Q&A, editing, AI music generation, and other agentic capabilities, targeting real-world productivity scenarios.",

    doubaoWebTitle: "Doubao Web Chat",
    doubaoWebTime: "＜1min",
    doubaoWebIntro: "Doubao is the self-developed large language model by Volcano Engine under ByteDance, originally named 'Skylark' and officially released in May 2024. Doubao 2.0 (Doubao-Seed-2.0) is systematically optimized for large-scale production environments, including three general Agent models (Pro, Lite, Mini) and a Code model. Doubao 2.0 Pro targets deep reasoning and long-chain task execution, fully benchmarked against GPT 5.2 and Gemini 3 Pro, achieving gold medals in IMO, CMO, and ICPC programming competitions, with mathematical and reasoning capabilities reaching world-class level. The Doubao web version (www.doubao.com) provides intelligent dialogue, multimodal understanding, and real-time video stream analysis. Users can select 'Expert' mode to experience 2.0 Pro.",

    mimoFlashTitle: "MiMo-V2.6-Flash",
    mimoFlashTime: "To be filled (edit here)",
    mimoFlashIntro: "MiMo-V2.6-Flash is an efficient reasoning model released and open-sourced by Xiaomi on September 22, 2026. It uses a sparse MoE architecture with 309B total parameters and approximately 15B active parameters per token. It natively supports text, image, video, and audio input, with a 1M token context window. In the long-horizon software engineering benchmark DeepSWE v1.1, its score improved from 48.8 to 65.68, a gain of 17 points. Pricing is 1 yuan per million input tokens and 2 yuan per million output tokens, with a 99% cache discount. Official estimates place its cost at 1/20 to 1/60 of comparable overseas models.",

    mimoProTitle: "MiMo-V2.6-Pro",
    mimoProTime: "To be filled (edit here)",
    mimoProIntro: "MiMo-V2.6-Pro is the omni-modal flagship of Xiaomi's MiMo-V2.6 series, using a sparse MoE architecture with over 1T total parameters and approximately 42B active parameters per token. It natively supports text, image, video, and audio input, with a 1M token context window, targeting deep reasoning and long-chain task execution. It ranked first among global open-source models on the Artificial Analysis Intelligence Index, reaching top-tier open-source performance on coding, math, scientific reasoning, and multimodal understanding benchmarks. Pricing continues MiMo's high cost-performance strategy, far below comparable overseas models."
  },
  meme: {
    brand: "大肥鱼做的鹈鹕蹲点",
    heroTag: "纯整活 · 无后端",
    heroTitle: "大肥鱼做的鹈鹕蹲点",
    heroSub: "同一个题目交给不同的 AI，看谁画的鹈鹕最像样。全部是单文件 HTML，点开即看。",
    sectionTitle: "选择你的英雄",
    dsName: "大肥鱼",
    dsDesc: "大肥鱼系列交上来的鹈鹕。",
    qwenName: "请问",
    qwenDesc: "请问系列交上来的鹈鹕。",
    doubaoName: "豆包",
    doubaoDesc: "豆包系列交上来的鹈鹕。",
    mimoName: "米末",
    mimoDesc: "米末系列交上来的鹈鹕。",
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

    doubaoPageTitle: "豆包区域",
    doubaoPageSub: "豆包系列，字节跳动家的，原名云雀，2024年5月出生，2026年2月进化到2.0，数学竞赛拿了金牌(bushi)，主打一个真实世界复杂任务执行力(bushi)。",
    doubaoWebName: "豆包本包",
    doubaoWebDesc: "标准网页对话版本。",
    doubaoModelName: "豆包",

    mimoPageTitle: "米末区域",
    mimoPageSub: "米末系列，小米家的，2026年9月出的 V2.6，全模态、MoE 架构，登顶全球开源第一，价格还只要别人的二十分之一，主打一个物美价廉。",
    mimoFlashName: "米末跑得快（快）",
    mimoFlashDesc: "全模态高效推理，高频调用首选。",
    mimoProName: "米末2.6 Pro（大）",
    mimoProDesc: "全模态旗舰，1T 参数 MoE，登顶开源第一。",

    modelLabel: "模型：",
    timeLabel: "耗时：",
    versionLabel: "版本：",
    introTitle: "大肥鱼介绍",
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
    qwenOmniFlashTime: "有点快，但不多",
    qwenOmniFlashIntro: "请问的全能快版本，什么都会一点，什么都快一点。",

    doubaoWebTitle: "豆包本包",
    doubaoWebTime: "你别管成品怎么样，你就说快不快吧",
    doubaoWebIntro: "豆包，字节跳蛋家的，原名云雀，2024年5月出道，2026年2月进化到2.0。数学竞赛拿金牌(bushi)，编程竞赛也拿金牌(bushi)，主打一个真实世界复杂任务执行力(bushi)。平时在 www.doubao.com 蹲着。",

    mimoFlashTitle: "米末跑得快（快）",
    mimoFlashTime: "待补充（请在此填写）",
    mimoFlashIntro: "米末-V2.6-Flash，小米家的，2026年9月22日出的。稀疏 MoE，309B 总参数，每次只激活 15B，省钱。全模态输入，1M 上下文。长程软件工程评测从 48.8 涨到 65.68，涨了 17 分。价格嘛，输入 1 块、输出 2 块，还有 99% 缓存折扣，官方说成本只有海外同级的二十分之一到六十分之一。",

    mimoProTitle: "米末2.6 Pro（大）",
    mimoProTime: "待补充（请在此填写）",
    mimoProIntro: "米末-V2.6-Pro，小米家的旗舰，稀疏 MoE，总参数破 1T，每次激活 42B。全模态输入，1M 上下文，主打深度推理和长链路任务。Artificial Analysis 综合智能指数全球开源第一，编程数学科学推理多模态全都顶。价格嘛，延续米末系列的高性价比，远低于海外同级。"
  }
};

/**
 * 把文本中所有“豆包”替换为随机梗语词。
 * 特殊规则：如果随机词是“豆脚”，则同时把“本包”改为“本脚”，
 * 让“豆包本包”变成“豆脚本脚”而不是“豆脚本包”。
 */
function replaceDoubao(text, word) {
  if (!word || !text) return text;
  let result = text.replace(/豆包/g, word);
  if (word === '豆脚') {
    result = result.replace(/本包/g, '本脚');
  }
  return result;
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'zh';
  document.documentElement.dataset.lang = lang;

  // 梗语模式下随机选择豆包的叫法
  let doubaoMemeWord = null;
  if (lang === 'meme') {
    const words = ['唐包', 'der包', '豆脚', '豆沙包'];
    doubaoMemeWord = words[Math.floor(Math.random() * words.length)];
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    let text = translations[lang][key];
    if (text !== undefined) {
      // 梗语模式下，把所有“豆包”替换成随机词
      if (doubaoMemeWord) {
        text = replaceDoubao(text, doubaoMemeWord);
      }
      el.textContent = text;
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('preferred-lang', lang); } catch (e) {}
}

/* ============================================================
 * 莫奈取色：从卡片图标提取主色调，柔化为莫奈风格渐变
 * 应用到卡片的 --card-accent-1 / --card-accent-2
 * ============================================================ */

// RGB -> HSL
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}

// HSL -> RGB
function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// 莫奈化：降饱和、提亮、色相偏移
function monetize(h, s, l, hueShift) {
  const newH = (h + hueShift + 1) % 1;
  const newS = Math.max(0.15, Math.min(0.55, s * 0.55));
  const newL = Math.max(0.55, Math.min(0.78, l * 0.4 + 0.6));
  return hslToRgb(newH, newS, newL);
}

// 对一张图片取主色并生成两个渐变端点
function extractMonetPalette(imgUrl, callback) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    try {
      const size = 32;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;

      const samples = [];
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a < 100) continue;
        const [h, s, l] = rgbToHsl(r, g, b);
        // 过滤灰、白、黑
        if (s < 0.18 || l < 0.08 || l > 0.95) continue;
        samples.push({ r, g, b, s });
      }

      if (samples.length === 0) {
        callback(null);
        return;
      }

      // 按饱和度降序，取前一半（最具代表性的鲜艳色）
      samples.sort((a, b) => b.s - a.s);
      const top = samples.slice(0, Math.max(1, Math.floor(samples.length / 2)));

      let rSum = 0, gSum = 0, bSum = 0;
      top.forEach(c => { rSum += c.r; gSum += c.g; bSum += c.b; });
      const rAvg = Math.round(rSum / top.length);
      const gAvg = Math.round(gSum / top.length);
      const bAvg = Math.round(bSum / top.length);

      const [h, s, l] = rgbToHsl(rAvg, gAvg, bAvg);
      // 两个莫奈色端点：主色相不变，辅色相偏移 40°
      const [r1, g1, b1] = monetize(h, s, l, 0);
      const [r2, g2, b2] = monetize(h, s, l, 0.11); // 约 40°

      callback({
        c1: `rgb(${r1}, ${g1}, ${b1})`,
        c2: `rgb(${r2}, ${g2}, ${b2})`
      });
    } catch (e) {
      callback(null);
    }
  };
  img.onerror = () => callback(null);
  img.src = imgUrl;
}

// 给所有卡片应用莫奈渐变
function applyMonetCardColors() {
  document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('.avatar-img');
    if (!img || !img.src) return;
    // 如果图标还没加载成功（被隐藏了），就用 img.src 重试
    extractMonetPalette(img.src, palette => {
      if (!palette) return;
      card.style.setProperty('--card-accent-1', palette.c1);
      card.style.setProperty('--card-accent-2', palette.c2);
    });
  });
}

/* ===== 初始化 ===== */
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

  // 应用莫奈取色
  applyMonetCardColors();
});