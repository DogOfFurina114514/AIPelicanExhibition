/* ============================================================
 *  作品数据文件  (assets/data.js)
 * ------------------------------------------------------------
 *  以后新增作品、修改耗时、调整评分，只改这个文件即可。
 *
 *  ┌───────────────────────────────────────────────────────┐
 *  │  字段说明                                              │
 *  ├───────────────────────────────────────────────────────┤
 *  │  time.zh    生成耗时（中文界面显示）                    │
 *  │  time.en    生成耗时（英文界面显示）                    │
 *  │  time.meme  生成耗时（梗语界面显示）                    │
 *  │                                                        │
 *  │  scores.aesthetics    美观性   (0.0 ~ 10.0)            │
 *  │  scores.simplicity    简洁度   (0.0 ~ 10.0)            │
 *  │  scores.functionality 功能性   (0.0 ~ 10.0)            │
 *  │                                                        │
 *  │  → 总分由程序自动计算：(三项相加 ÷ 3)，保留一位小数     │
 *  └───────────────────────────────────────────────────────┘
 *
 *  评分范围 0.0 ~ 10.0，允许一位小数（如 8.5、7.0、9.3）。
 *  还没测的作品，评分填 0.0 即可，页面会显示 0.0。
 * ============================================================ */

const workData = {

  /* ══════════════════════ DeepSeek ══════════════════════ */

  // DeepSeek 网页对话  —— 对应 DeepSeek/DeepSeekWeb.html
  dsWeb: {
    time: {
      zh:   "2分钟",
      en:   "2min",
      meme: "快得离谱（大肥鱼跑得快）"
    },
    scores: {
      aesthetics:    5.8,   // 美观性
      simplicity:    10.0,   // 简洁度
      functionality: 4.6    // 功能性
    }
  },

  // DeepSeek-V4.1-Flash  —— 对应 DeepSeek/DeepSeekV41Flash.html
  dsFlash: {
    time: {
      zh:   "待补充",
      en:   "To be filled",
      meme: "快就一个字"
    },
    scores: {
      aesthetics:    0.0,
      simplicity:    0.0,
      functionality: 0.0
    }
  },

  /* ══════════════════════ Qwen ══════════════════════ */

  // Qwen3.8Max  —— 对应 Qwen/Qwen38Max.html
  qwenMax: {
    time: {
      zh:   "18分钟",
      en:   "18min",
      meme: "最大就完事了"
    },
    scores: {
      aesthetics:    9.0,
      simplicity:    9.6,
      functionality: 7.3
    }
  },

  // Qwen3.8OmniFlash  —— 对应 Qwen/Qwen38OmniFlash.html
  qwenOmniFlash: {
    time: {
      zh:   "9分钟",
      en:   "9min",
      meme: "有点快，但不多"
    },
    scores: {
      aesthetics:    6.5,
      simplicity:    10.0,
      functionality: 5.8
    }
  },

  /* ══════════════════════ 豆包 ══════════════════════ */

  // 豆包网页对话  —— 对应 Doubao/DoubaoWeb.html
  doubaoWeb: {
    time: {
      zh:   "＜1分钟",
      en:   "＜1min",
      meme: "你别管成品怎么样，你就说快不快吧"
    },
    scores: {
      aesthetics:    2.3,
      simplicity:    9.5,
      functionality: 0.0
    }
  },

  /* ══════════════════════ MiMo ══════════════════════ */

  // MiMo-V2.6-Flash  —— 对应 MiMo/MiMoV26Flash.html
  mimoFlash: {
    time: {
      zh:   "14分钟",
      en:   "14min",
      meme: "快在哪"
    },
    scores: {
      aesthetics:    1.5,
      simplicity:    10.0,
      functionality: 2.8
    }
  },

  // MiMo-V2.6-Pro  —— 对应 MiMo/MiMoV26Pro.html
  mimoPro: {
    time: {
      zh:   "待补充",
      en:   "To be filled",
      meme: "待补充"
    },
    scores: {
      aesthetics:    0.0,
      simplicity:    0.0,
      functionality: 0.0
    }
  }

};