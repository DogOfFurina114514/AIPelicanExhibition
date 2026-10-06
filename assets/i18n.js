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

    scoreTitle: "作品评分",
    scoreAesthetics: "美观性",
    scoreSimplicity: "简洁度",
    scoreFunctionality: "功能性",
    scoreTotal: "总分",
    previewPlay: "点击预览作品",
    previewInPip: "已在画中画中打开",
    previewOpenNew: "在新标签页中打开",
    previewClose: "关闭",
    previewPip: "画中画",
    previewFullscreen: "全屏",

    dsWebTitle: "DeepSeek 网页对话",
    dsWebIntro: "DeepSeek 网页版（chat.deepseek.com）是官方提供的免费 AI 对话入口，支持智能对话问答、写作翻译、解题答疑等通用任务，提供联网搜索与“深度思考”推理模式。用户可上传文件与图片进行识别，历史对话在网页端与 App 端同步。",
    dsFlashTitle: "DeepSeek-V4.1-Flash",
    dsFlashIntro: "DeepSeek-V4.1-Flash 是 DeepSeek 全新架构系列中的轻量旗舰模型，以 552B 总参数 MoE 实现越级智能。采用 Causal Encoder-Decoder 非对称架构，输入激活仅 8B、输出激活 16B，并具备原生多模态视觉理解能力。KV Cache 压缩至上一代 HBM 的 1/4，支持 1M 上下文。",

    qwenMaxTitle: "Qwen3.8Max",
    qwenMaxIntro: "Qwen3.8-Max 是通义千问系列迄今规模最大、能力最强的旗舰模型，拥有 2.4 万亿参数，支持多达 100 万 Token 的上下文窗口。在 Text Arena 中排名第五，Vision Arena 中排名第二，在编程、办公、科学研究及长周期任务中展现出卓越能力。",
    qwenOmniFlashTitle: "Qwen3.8OmniFlash",
    qwenOmniFlashIntro: "Qwen3.8-Omni-Flash 是阿里云推出的原生全模态大模型，支持 1M 长序列及文本、图像、音视频多模态输入与理解。具备视频问答、剪辑、AI 音乐生成等 Agentic 能力，面向真实生产力场景中的 Agent 应用。",

    doubaoWebTitle: "豆包网页对话",
    doubaoWebIntro: "豆包是字节跳动旗下火山引擎推出的自研大语言模型，原名“云雀”，于2024年5月正式发布。豆包2.0（Doubao-Seed-2.0）针对大规模生产环境进行系统性优化，包含Pro、Lite、Mini三款通用Agent模型和Code模型。豆包2.0 Pro面向深度推理与长链路任务执行，全面对标GPT 5.2与Gemini 3 Pro，在IMO、CMO数学竞赛和ICPC编程竞赛中取得金牌成绩，数学和推理能力达到世界顶尖水平。豆包网页版（www.doubao.com）提供智能对话、多模态理解、实时视频流分析等能力，用户选择“专家”模式即可体验2.0 Pro。",

    mimoFlashTitle: "MiMo-V2.6-Flash",
    mimoFlashIntro: "MiMo-V2.6-Flash 是小米于 2026 年 9 月 22 日发布并开源的高效推理模型，采用稀疏 MoE 架构，总参数 309B，每 Token 激活约 15B。原生支持文本、图像、视频、音频全模态输入，支持 1M Token 上下文窗口。在长程软件工程能力评测 DeepSWE v1.1 中，得分从上一代的 48.8 提升至 65.68，提升幅度达 17 分。定价为每百万词元输入 1 元、输出 2 元，并提供 99% 缓存折扣，官方测算成本仅为海外同级模型的 1/20 至 1/60。",
    mimoProTitle: "MiMo-V2.6-Pro",
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

    scoreTitle: "Score",
    scoreAesthetics: "Aesthetics",
    scoreSimplicity: "Simplicity",
    scoreFunctionality: "Functionality",
    scoreTotal: "Total",
    previewPlay: "Click to preview",
    previewInPip: "Opened in Picture-in-Picture",
    previewOpenNew: "Open in new tab",
    previewClose: "Close",
    previewPip: "Picture in Picture",
    previewFullscreen: "Fullscreen",

    dsWebTitle: "DeepSeek Web Chat",
    dsWebIntro: "DeepSeek Web (chat.deepseek.com) is the official free AI chat portal, supporting intelligent Q&A, writing, translation, and problem-solving. It offers web search and 'Deep Thinking' reasoning mode. Users can upload files and images for recognition, with chat history synced between web and App.",
    dsFlashTitle: "DeepSeek-V4.1-Flash",
    dsFlashIntro: "DeepSeek-V4.1-Flash is the lightweight flagship model in DeepSeek's new architecture family, achieving advanced intelligence with a 552B-parameter MoE. It uses a Causal Encoder-Decoder asymmetric architecture with only 8B active parameters for input and 16B for output, featuring native multimodal visual understanding. KV Cache is compressed to 1/4 of the previous generation's HBM, supporting 1M context.",

    qwenMaxTitle: "Qwen3.8Max",
    qwenMaxIntro: "Qwen3.8-Max is the largest and most capable flagship model in the Qwen series to date, boasting 2.4 trillion parameters and supporting a context window of up to 1 million tokens. It ranks fifth in Text Arena and second in Vision Arena, demonstrating exceptional capabilities in coding, office work, scientific research, and long-horizon tasks.",
    qwenOmniFlashTitle: "Qwen3.8OmniFlash",
    qwenOmniFlashIntro: "Qwen3.8-Omni-Flash is a native omni-modal large model launched by Alibaba Cloud, supporting 1M long sequences and text, image, audio, and video multimodal input and understanding. It features video Q&A, editing, AI music generation, and other agentic capabilities, targeting real-world productivity scenarios.",

    doubaoWebTitle: "Doubao Web Chat",
    doubaoWebIntro: "Doubao is the self-developed large language model by Volcano Engine under ByteDance, originally named 'Skylark' and officially released in May 2024. Doubao 2.0 (Doubao-Seed-2.0) is systematically optimized for large-scale production environments, including three general Agent models (Pro, Lite, Mini) and a Code model. Doubao 2.0 Pro targets deep reasoning and long-chain task execution, fully benchmarked against GPT 5.2 and Gemini 3 Pro, achieving gold medals in IMO, CMO, and ICPC programming competitions, with mathematical and reasoning capabilities reaching world-class level. The Doubao web version (www.doubao.com) provides intelligent dialogue, multimodal understanding, and real-time video stream analysis. Users can select 'Expert' mode to experience 2.0 Pro.",

    mimoFlashTitle: "MiMo-V2.6-Flash",
    mimoFlashIntro: "MiMo-V2.6-Flash is an efficient reasoning model released and open-sourced by Xiaomi on September 22, 2026. It uses a sparse MoE architecture with 309B total parameters and approximately 15B active parameters per token. It natively supports text, image, video, and audio input, with a 1M token context window. In the long-horizon software engineering benchmark DeepSWE v1.1, its score improved from 48.8 to 65.68, a gain of 17 points. Pricing is 1 yuan per million input tokens and 2 yuan per million output tokens, with a 99% cache discount. Official estimates place its cost at 1/20 to 1/60 of comparable overseas models.",
    mimoProTitle: "MiMo-V2.6-Pro",
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
    footer: "纯静态站点 · 大肥鱼爱吃鹈鹕",

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
    mimoPageSub: "米末系列，大米家的，2026年9月出的 V2.6，全模态、MoE 架构，登顶全球开源第一，价格还只要别人的二十分之一，主打一个物美价廉。",
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

    scoreTitle: "作品评分",
    scoreAesthetics: "好不好看",
    scoreSimplicity: "啰不啰嗦",
    scoreFunctionality: "能不能用",
    scoreTotal: "综合",
    previewPlay: "点一下看东西",
    previewInPip: "扔到小窗里了",
    previewOpenNew: "开个新标签看",
    previewClose: "关了",
    previewPip: "小窗",
    previewFullscreen: "拉满",

    dsWebTitle: "大肥鱼本鱼",
    dsWebIntro: "大肥鱼本鱼，平时在 chat.deepseek.com 蹲着，能聊天、能搜网、能深度思考，还能啃文件。",
    dsFlashTitle: "大肥鱼跑得快（快）",
    dsFlashIntro: "大肥鱼 Flash 版本，游得飞快，画鹈鹕也是。",

    qwenMaxTitle: "请问3.8最大（最大）",
    qwenMaxIntro: "请问，一种神秘的 AI 生物，遇到不懂的就问，问着问着就画出了最大的鹈鹕。",
    qwenOmniFlashTitle: "请问3.8全能快（快）",
    qwenOmniFlashIntro: "请问的全能快版本，什么都会一点，什么都快一点。",

    doubaoWebTitle: "豆包本包",
    doubaoWebIntro: "豆包，字节跳蛋家的，原名云雀，2024年5月出道，2026年2月进化到2.0。数学竞赛拿金牌(bushi)，编程竞赛也拿金牌(bushi)，主打一个真实世界复杂任务执行力(bushi)。平时在 www.doubao.com 蹲着。",

    mimoFlashTitle: "米末跑得快（快）",
    mimoFlashIntro: "米末-V2.6-Flash，大米家的，2026年9月22日出的。稀疏 MoE，309B 总参数，每次只激活 15B，省钱。全模态输入，1M 上下文。长程软件工程评测从 48.8 涨到 65.68，涨了 17 分。价格嘛，输入 1 块、输出 2 块，还有 99% 缓存折扣，官方说成本只有海外同级的二十分之一到六十分之一。",
    mimoProTitle: "米末2.6 Pro（大）",
    mimoProIntro: "米末-V2.6-Pro，大米家的旗舰，稀疏 MoE，总参数破 1T，每次激活 42B。全模态输入，1M 上下文，主打深度推理和长链路任务。Artificial Analysis 综合智能指数全球开源第一，编程数学科学推理多模态全都顶。价格嘛，延续米末系列的高性价比，远低于海外同级。"
  }
};

/* ============================================================
 *  多语言
 * ============================================================ */
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

  let doubaoMemeWord = null;
  if (lang === 'meme') {
    const words = ['唐包', 'der包', '豆脚', '豆沙包'];
    doubaoMemeWord = words[Math.floor(Math.random() * words.length)];
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    let text = translations[lang][key];
    if (text !== undefined) {
      if (doubaoMemeWord) {
        text = replaceDoubao(text, doubaoMemeWord);
      }
      el.textContent = text;
    }
  });

  // 从 workData 读耗时
  document.querySelectorAll('[data-time-key]').forEach(el => {
    const key = el.dataset.timeKey;
    const item = (typeof workData !== 'undefined') ? workData[key] : null;
    if (item && item.time && item.time[lang]) {
      el.textContent = item.time[lang];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('preferred-lang', lang); } catch (e) {}
}

/* ============================================================
 *  评分渲染：从 workData 读取三项分数 + 自动算总分
 * ============================================================ */
function renderScores() {
  if (typeof workData === 'undefined') return;
  document.querySelectorAll('[data-score-key]').forEach(box => {
    const key = box.dataset.scoreKey;
    const item = workData[key];
    if (!item || !item.scores) return;

    const a = Number(item.scores.aesthetics)    || 0;
    const s = Number(item.scores.simplicity)    || 0;
    const f = Number(item.scores.functionality) || 0;
    const total = ((a + s + f) / 3).toFixed(1);

    const setVal = (name, val) => {
      const el = box.querySelector(`[data-score="${name}"]`);
      if (el) el.textContent = Number(val).toFixed(1);
    };
    setVal('aesthetics', a);
    setVal('simplicity', s);
    setVal('functionality', f);

    const totalEl = box.querySelector('[data-score="total"]');
    if (totalEl) totalEl.textContent = total;

    updateInnerTriangle(box, a, s, f);
  });
}

function updateInnerTriangle(box, a, s, f) {
  const inner = box.querySelector('.tri-inner');
  if (!inner) return;

  const A = { x: 160, y: 60  };
  const B = { x: 40,  y: 240 };
  const C = { x: 280, y: 240 };

  const G = {
    x: (A.x + B.x + C.x) / 3,
    y: (A.y + B.y + C.y) / 3
  };

  const scale = rating => {
    const r = Math.max(0, Math.min(10, rating));
    return 0.35 + 0.65 * (r / 10);
  };

  const shrink = (P, rating) => {
    const t = scale(rating);
    return {
      x: G.x + (P.x - G.x) * t,
      y: G.y + (P.y - G.y) * t
    };
  };

  const A2 = shrink(A, a);
  const B2 = shrink(B, s);
  const C2 = shrink(C, f);

  const fmt = p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  inner.setAttribute('points', `${fmt(A2)} ${fmt(B2)} ${fmt(C2)}`);
}

/* ============================================================
 *  莫奈取色（动态色数版）
 * ============================================================ */
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

function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
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

function medianCut(pixels, depth) {
  if (pixels.length === 0) return [];
  if (depth === 0 || pixels.length < 2) {
    let r = 0, g = 0, b = 0;
    for (const p of pixels) { r += p.r; g += p.g; b += p.b; }
    const n = pixels.length;
    return [[Math.round(r / n), Math.round(g / n), Math.round(b / n)]];
  }
  let rMin = 255, rMax = 0, gMin = 255, gMax = 0, bMin = 255, bMax = 0;
  for (const p of pixels) {
    if (p.r < rMin) rMin = p.r; if (p.r > rMax) rMax = p.r;
    if (p.g < gMin) gMin = p.g; if (p.g > gMax) gMax = p.g;
    if (p.b < bMin) bMin = p.b; if (p.b > bMax) bMax = p.b;
  }
  const rRange = rMax - rMin, gRange = gMax - gMin, bRange = bMax - bMin;
  let channel = 'r';
  if (gRange >= rRange && gRange >= bRange) channel = 'g';
  else if (bRange >= rRange && bRange >= gRange) channel = 'b';
  pixels.sort((a, b) => a[channel] - b[channel]);
  const mid = Math.floor(pixels.length / 2);
  return [
    ...medianCut(pixels.slice(0, mid), depth - 1),
    ...medianCut(pixels.slice(mid), depth - 1)
  ];
}

function dedupeColors(colors, threshold) {
  const result = [];
  for (const c of colors) {
    let merged = false;
    for (const r of result) {
      const d = Math.sqrt((c[0] - r[0]) ** 2 + (c[1] - r[1]) ** 2 + (c[2] - r[2]) ** 2);
      if (d < threshold) {
        r[0] = Math.round((r[0] + c[0]) / 2);
        r[1] = Math.round((r[1] + c[1]) / 2);
        r[2] = Math.round((r[2] + c[2]) / 2);
        merged = true;
        break;
      }
    }
    if (!merged) result.push([...c]);
  }
  return result;
}

function monetizeColor(rgb) {
  const [r, g, b] = rgb;
  const [h, s, l] = rgbToHsl(r, g, b);
  const newS = Math.min(0.65, Math.max(0.25, s * 0.7));
  const newL = Math.min(0.78, Math.max(0.45, l * 0.5 + 0.4));
  return hslToRgb(h, newS, newL);
}

function buildGradient(colors) {
  if (!colors || colors.length === 0) return null;
  if (colors.length === 1) {
    const [r, g, b] = colors[0];
    const [h, s, l] = rgbToHsl(r, g, b);
    const l1 = Math.min(0.85, l + 0.18);
    const l2 = Math.max(0.35, l - 0.12);
    const c1 = hslToRgb(h, s, l1);
    const c2 = hslToRgb(h, s, l2);
    return `linear-gradient(90deg, rgb(${c1[0]}, ${c1[1]}, ${c1[2]}) 0%, rgb(${c2[0]}, ${c2[1]}, ${c2[2]}) 100%)`;
  }
  const sorted = [...colors].sort((a, b) => {
    const [, , l1] = rgbToHsl(a[0], a[1], a[2]);
    const [, , l2] = rgbToHsl(b[0], b[1], b[2]);
    return l2 - l1;
  });
  const stops = sorted.map((c, i) => {
    const pct = Math.round(i * 100 / (sorted.length - 1));
    return `rgb(${c[0]}, ${c[1]}, ${c[2]}) ${pct}%`;
  });
  return `linear-gradient(90deg, ${stops.join(', ')})`;
}

function fallbackPalette(brandColor) {
  const m = brandColor.match(/\d+/g);
  if (!m || m.length < 3) return null;
  const base = [ +m[0], +m[1], +m[2] ];
  return buildGradient([monetizeColor(base)]);
}

function extractPalette(imgUrl, brandColor, callback) {
  const img = new Image();
  img.onload = () => {
    try {
      const size = 64;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, size, size);
      let data;
      try { data = ctx.getImageData(0, 0, size, size).data; }
      catch (secErr) { callback(brandColor ? fallbackPalette(brandColor) : null); return; }

      const pixels = [];
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a < 128) continue;
        const [, s, l] = rgbToHsl(r, g, b);
        if (s < 0.12 || l < 0.12 || l > 0.94) continue;
        pixels.push({ r, g, b });
      }
      if (pixels.length < 20) {
        callback(brandColor ? fallbackPalette(brandColor) : null);
        return;
      }
      let palette = medianCut(pixels, 2);
      palette = dedupeColors(palette, 40);
      if (palette.length > 4) palette = palette.slice(0, 4);
      const monetized = palette.map(monetizeColor);
      callback(buildGradient(monetized));
    } catch (e) {
      callback(brandColor ? fallbackPalette(brandColor) : null);
    }
  };
  img.onerror = () => callback(brandColor ? fallbackPalette(brandColor) : null);
  img.src = imgUrl;
}

function getBrandColor(card) {
  const avatar = card.querySelector('.avatar');
  if (!avatar) return null;
  const color = getComputedStyle(avatar).color;
  if (!color || color === 'rgb(0, 0, 0)' || color === 'rgba(0, 0, 0, 0)') return null;
  return color;
}

function applyMonetCardColors() {
  document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('.avatar-img');
    if (!img || !img.src) return;
    const brandColor = getBrandColor(card);
    const run = () => {
      extractPalette(img.src, brandColor, gradient => {
        if (!gradient) return;
        card.style.setProperty('--card-gradient', gradient);
      });
    };
    if (img.complete && img.naturalWidth > 0) { run(); }
    else { img.addEventListener('load', run, { once: true }); }
  });
}

/* ============================================================
 *  顶栏滚动效果：滚动后收缩为悬浮液态玻璃胶囊
 * ============================================================ */
function initTopbar() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  const THRESHOLD = 20;
  let ticking = false;

  const update = () => {
    if (window.scrollY > THRESHOLD) {
      topbar.classList.add('scrolled');
    } else {
      topbar.classList.remove('scrolled');
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
}

/* ============================================================
 *  初始化
 * ============================================================ */
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
  initTopbar();
  renderScores();
  applyMonetCardColors();
});






/* ============================================================
 *  作品预览交互
 * ============================================================ */
function initPreview() {
  document.querySelectorAll('.preview-container').forEach(container => {
    const frame = container.querySelector('.preview-frame');
    const placeholder = container.querySelector('.preview-placeholder');
    const playBtn = container.querySelector('.preview-play');
    const openNewBtn = container.querySelector('[data-action="open-new"]');
    const dots = container.querySelectorAll('.preview-dot');
    const stage = container.querySelector('.preview-stage');

    if (!frame) return;
    const src = frame.dataset.src;
    if (!src) return;

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

    const openNew = () => {
      window.open(src, '_blank', 'noopener');
    };

    const fullscreen = () => {
      if (!stage) return;
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        savedScrollY = window.scrollY;
        stage.requestFullscreen().catch(() => {});
      }
    };

    const pip = async () => {
      if (!('documentPictureInPicture' in window)) {
        alert('当前浏览器不支持画中画模式，请使用 Chrome/Edge 116+');
        return;
      }
      if (pipWindow && !pipWindow.closed) {
        pipWindow.focus();
        return;
      }

      // 只在未播放时加载，已播放直接搬（避免重设 src 导致重载）
      if (!isPlaying) play();

      try {
        pipWindow = await documentPictureInPicture.requestWindow({
          width: 800,
          height: 600
        });

        // 复制样式表
        [...document.styleSheets].forEach(sheet => {
          try {
            const cssRules = [...sheet.cssRules].map(r => r.cssText).join('');
            const style = pipWindow.document.createElement('style');
            style.textContent = cssRules;
            pipWindow.document.head.appendChild(style);
          } catch (e) {}
        });

        pipWindow.document.body.style.margin = '0';
        pipWindow.document.body.style.background = '#000';

        // PiP 里隐藏 placeholder（保险）
        if (placeholder) placeholder.style.display = 'none';

        // 只把 iframe 搬到 PiP（保留 stage 在原位）
        frame.style.width = '100%';
        frame.style.height = '100%';
        pipWindow.document.body.appendChild(frame);

        // 原位置显示提示（加在 stage 里，避免容器塌缩）
        let curLang = 'zh';
        try { curLang = localStorage.getItem('preferred-lang') || 'zh'; } catch(e){}
        const pipText = (typeof translations !== 'undefined' && translations[curLang] && translations[curLang].previewInPip) || '已在画中画中打开';

        const pipNotice = document.createElement('div');
        pipNotice.className = 'pip-notice';
        pipNotice.innerHTML =
          '<span class="pip-notice-icon">🖼️</span>' +
          '<span class="pip-notice-text">' + pipText + '</span>';
        stage.appendChild(pipNotice);

        // 隐藏控制按钮
        container.classList.add('in-pip');

        // PiP 关闭时恢复
        pipWindow.addEventListener('pagehide', () => {
          if (placeholder) placeholder.style.display = '';

          // iframe 搬回 stage
          frame.style.width = '';
          frame.style.height = '';
          stage.appendChild(frame);

          pipNotice.remove();
          container.classList.remove('in-pip');

          pipWindow = null;
        });
      } catch (e) {
        console.error('PiP failed:', e);
      }
    };

    playBtn?.addEventListener('click', (e) => { e.stopPropagation(); play(); });
    placeholder?.addEventListener('click', play);

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = dot.dataset.action;
        if (action === 'close') close();
        else if (action === 'pip') pip();
        else if (action === 'fullscreen') fullscreen();
      });
    });

    openNewBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      openNew();
    });

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo(0, savedScrollY);
          });
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initPreview);








/* ============================================================
 *  申请补充弹窗
 * ============================================================ */
function initApplyModal() {
  const modal = document.getElementById('applyModal');
  const openBtn = document.getElementById('openApplyModal');
  const closeBtn = document.getElementById('closeApplyModal');
  const okBtn = document.getElementById('okApplyModal');
  const sendBtn = document.getElementById('sendApplyMail');
  const templatePre = document.getElementById('applyTemplate');
  const subjectCode = document.querySelector('.apply-subject-code');

  if (!modal || !openBtn) return;

  const RECIPIENT = 'wu__20111229@outlook.com';
  const OPEN_MS = 1150;
  const CLOSE_MS = 850;

  const getLang = () => {
    try { return localStorage.getItem('preferred-lang') || 'zh'; } catch(e){ return 'zh'; }
  };

  const t = (key, fallback) => {
    const lang = getLang();
    if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    return fallback || '';
  };

  const refreshTexts = () => {
    if (templatePre) {
      templatePre.textContent = t('applyMailBody', '模型提供商：\n模型名称：\nHTML 作品：以附件形式发送\n证明方式：\n生成耗时：');
    }
    if (subjectCode) {
      subjectCode.textContent = t('applyMailSubject', '申请补充 AI 展区');
    }
  };

  let closing = false;

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

  const send = () => {
    const subject = t('applyMailSubject', '申请补充 AI 展区');
    const body = t('applyMailBody', '模型提供商：\n模型名称：\nHTML 作品：以附件形式发送\n证明方式：\n生成耗时：');
    const mailto = 'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  };

  openBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  okBtn?.addEventListener('click', close);
  sendBtn?.addEventListener('click', send);

  // 点遮罩关闭
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const inDialog =
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inDialog) close();
  });

  // Esc 关闭也走动画
  modal.addEventListener('cancel', (e) => {
    e.preventDefault();
    close();
  });

  // 语言切换时同步文本
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      setTimeout(refreshTexts, 50);
    });
  }
}

document.addEventListener('DOMContentLoaded', initApplyModal);





