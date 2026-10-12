/* ════════════════════════════════════════════════════
   Rank and authorship tag dictionary
   - Explicit tags: ccf-a, ccf-b, trans, q1
   - Derived tag: cor, generated from role="first" or role="corr"
════════════════════════════════════════════════════ */
const TAG_META = {
  "ccf-a": { label:"CCF-A", group:"metric", className:"ptag-a", order:1, description:"CCF-A venue" },
  "ccf-b": { label:"CCF-B", group:"metric", className:"ptag-b", order:2, description:"CCF-B venue" },
  "trans": { label:"Trans", group:"metric", className:"ptag-t", order:3, description:"IEEE/ACM Transactions" },
  "q1": { label:"中科院/JCR Q1", group:"metric", className:"ptag-q1", order:4, description:"Top-quartile journal" },
  "cor": { label:"一作/通讯", group:"metric", className:"ptag-cor", order:5, description:"First, co-first, or corresponding authorship; derived from role" }
};

const TOPIC_CATEGORIES = [
  { id:"weak-supervision", label:"Weak Supervision", color:"#2f6fed", tint:"#f1f6ff", topics:[
    ["semi-supervised","Semi-supervised Learning"],["partial-label","Partial-label Learning"],["multi-label","Multi-label Learning"],
    ["multi-instance","Multi-instance Learning"],["label-distribution","Label Distribution Learning"],["label-noise","Label Noise Learning"]
  ]},
  { id:"representation-transfer", label:"Representation & Transfer", color:"#7458b8", tint:"#f7f4fc", topics:[
    ["multi-view","Multi-view Learning"],["feature-learning","Feature Learning"],["domain-adaptation","Domain Adaptation"],["tensor-learning","Tensor Learning"],["clustering","Clustering & Subspace Learning"]
  ]},
  { id:"trustworthy-multimodal", label:"Trustworthy Multimodal AI", color:"#bc6b2c", tint:"#fff8f1", topics:[
    ["imbalanced-learning","Imbalanced Learning"],["llm-hallucination","MLLM Hallucination"],["visual-reasoning","Visual Reasoning"],["fake-news-detection","Fake News Detection"]
  ]},
  { id:"applied-intelligence", label:"Scientific & Intelligence Applications", color:"#16816d", tint:"#f0faf7", topics:[
    ["biology-medicine","Biology & Medicine"],["remote-sensing","Remote Sensing"],["intelligence-applications","Intelligence Applications"]
  ]}
];
const TOPIC_META = Object.fromEntries(TOPIC_CATEGORIES.flatMap(category =>
  category.topics.map(([id,label],order) => [id,{id,label,order,category:category.id,categoryLabel:category.label,color:category.color,tint:category.tint}])
));

/* ════════════════════════════════════════════════════
   New-publication template

   Copy one object into PUBS, usually at the top of the matching year.
   role values:
     "first" = first/co-first author
     "corr"  = corresponding author
     "co"    = co-author

   The "cor" tag is added automatically when role is "first" or "corr".
   The tags array only accepts: "ccf-a", "ccf-b", "trans", and "q1".
   The topics array accepts keys declared in TOPIC_CATEGORIES above.
   Leave tags as [] when none of these classifications applies.

   {
     year: 2026,
     role: "corr",
     title: "Paper title",
     authors: "First Author, <strong>Tingjin Luo</strong><sup>#</sup>",
     venue: "Conference or Journal, Accepted",
     tags: ["ccf-a", "trans", "q1"],
     topics: ["multi-view", "multi-label"],
     links: [{ t:"PDF", u:"https://example.com/paper.pdf" }]
   }
════════════════════════════════════════════════════ */
const NEW_PUBLICATIONS = [
  {
    year: 2026,
    role: "corr",
    title: "融合高阶语义信息的张量多视图半监督分类方法",
    authors: "李向垚，<strong>罗廷金</strong><sup>#</sup>, 侯臣平",
    venue: "计算机学报, Accepted",
    tags: ["ccf-a"],
    topics: ["multi-view", "semi-supervised", "tensor-learning"],
    links: []
  },
  {
    year: 2026,
    role: "first",
    title: "不平衡场景下自适应细粒度多示例多标签学习",
    authors: "<strong>罗廷金</strong>, 张馨月, 栗阳, 周浩, 钱宇华<sup>#</sup>, 侯臣平<sup>#</sup>",
    venue: "中国科学: 信息科学, Accepted",
    tags: ["ccf-a"],
    topics: ["multi-instance", "multi-label", "imbalanced-learning"],
    links: []
  },
  {
    year: 2026,
    role: "corr",
    title: "Unsupervised Distribution Alignment via Subspace Progressive Adaptation",
    authors: "Mengtao Yang<sup>*</sup>, Yueying Liu<sup>*</sup>, Gaohao Yi, Hao Zhou, Yazhou Yang, <strong>Tingjin Luo</strong><sup>#</sup>",
    venue: "Frontiers of Computer Science, Accepted",
    tags: ["ccf-b", "q1"],
    topics: ["domain-adaptation", "clustering", "feature-learning"],
    links: []
  },
  {
    year: 2026,
    role: "corr",
    title: "A reliable framework for brain tumor segmentation via multi-modal fusion and uncertainty modeling",
    authors: "Tongxue Zhou, Mingyang Li, Su Ruan, <strong>Tingjin Luo</strong><sup>#</sup>, Bingbing Jiang, Junan Zhu, Ping Ma, Defu Yang, Guang Yang",
    venue: "Information Fusion. Volume 129, May 2026, 104085",
    tags: ["ccf-b", "q1"],
    topics: ["biology-medicine", "multi-view", "feature-learning"],
    links: []
  },
  {
    year: 2025,
    role: "co",
    title: "Evolutionary Multi-View Classification via Eliminating Individual Fitness Bias",
    authors: "Xinyan Liang, Shuai Li, Qian Guo, Yuhua Qian, Bingbing Jiang, <strong>Tingjin Luo</strong>, Liang Du",
    venue: "Conference on Neural Information Processing Systems (NeurIPS), 2026",
    tags: ["ccf-a"],
    topics: ["multi-view", "feature-learning"],
    links: []
  },
  {
    year: 2025,
    role: "corr",
    title: "One-step Label Shift Adaptation via Robust Weight Estimation",
    authors: "Ruidong Fan, Xiao Ouyang, <strong>Tingjin Luo</strong><sup>#</sup>, Lijun Zhang, Chenping Hou",
    venue: "Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence (IJCAI-25)",
    tags: ["ccf-b"],
    topics: ["domain-adaptation", "imbalanced-learning"],
    links: []
  },
  {
    year: 2025,
    role: "co",
    title: "Trusted Multi-View Classification with Expert Knowledge Constraints",
    authors: "Xinyan Liang, Shijie Wang, Yuhua Qian<sup>#</sup>, Qian Guo, Liang Du, Bingbing Jiang, <strong>Tingjin Luo</strong>, Feijiang Li",
    venue: "Forty-second International Conference on Machine Learning (ICML), 13--19 July 2025, Vol. 267: 37409--37426",
    tags: ["ccf-a"],
    topics: ["multi-view", "feature-learning"],
    links: []
  },
  {
    year: 2025,
    role: "co",
    title: "A forward k-means algorithm for regression clustering",
    authors: "Jun Lu, <strong>Tingjin Luo</strong>, Kai Li",
    venue: "Information Sciences, Volume 711, 2025, 122105",
    tags: ["ccf-b", "q1"],
    topics: ["clustering"],
    links: []
  },
  {
    year: 2025,
    role: "co",
    title: "NLSC: A Noise-Robust Label Shift Correction Framework via Three-Head Training and Class-Adaptive Cleaning",
    authors: "Xiaowen Wu, Ruidong Fan, <strong>Tingjin Luo</strong>, Chenping Hou",
    venue: "Information Sciences, Volume 725, 2026, 122706",
    tags: ["ccf-b", "q1"],
    topics: ["label-noise", "domain-adaptation", "imbalanced-learning"],
    links: []
  },
  {
    year: 2025,
    role: "co",
    title: "DCMKC: A Dual Consistency Matching Approach for Multi-hop Question Answering in LLMs",
    authors: "Xinyi Wang, Yiping Song, Chang Liu, <strong>Tingjin Luo</strong>, Bo Liu, Zheng Xie, Minlie Huang",
    venue: "Findings of Empirical Methods in Natural Language Processing (EMNLP), 2025, pp. 259--273",
    tags: ["ccf-b"],
    topics: ["llm-hallucination", "intelligence-applications"],
    links: []
  }
];

const PUBS = [
  ...NEW_PUBLICATIONS,
  {
    "year": 2026,
    "role": "corr",
    "title": "How Relation Enrichment Improves Clustering Ensemble Performance: A Second Order Induced Relation View",
    "authors": "Feijiang Li, Jieting Wang, Yuhua Qian<sup>#</sup>, Hongren Yan, <strong>Tingjin Luo</strong>",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), Accepted",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "clustering"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Dual-granularity Labeling for Multi-instance Multi-label Data with Skewed Annotation",
    "authors": "Xinyue Zhang, <strong>Tingjin Luo</strong><sup>#</sup>, Chenping Hou",
    "venue": "IEEE Transactions on Knowledge and Data Engineering (TKDE), Accepted",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "multi-instance",
      "multi-label",
      "imbalanced-learning"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Correcting Visual Blur Induced by Attention Distraction to Reduce Hallucinations: Algorithm and Theory",
    "authors": "Quanjiang Li, Zhiming Liu, Wei Luo, <strong>Tingjin Luo</strong><sup>#</sup>, Chenping Hou",
    "venue": "Forty-third International Conference on Machine Learning (ICML), Accepted",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "llm-hallucination",
      "visual-reasoning"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Label-Guided Representation Learning for Incomplete Multi-View Multi-Label Classification",
    "authors": "Yang Li, Quanjiang Li, <strong>Tingjin Luo</strong><sup>#</sup>",
    "venue": "Forty-third International Conference on Machine Learning (ICML), Accepted",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "multi-label",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Imbalanced Multi-Domain Multi-Modal Learning with Expert Collaboration and Dynamic Fusion Mechanism for Fake News Detection",
    "authors": "Yuchen Zhang, <strong>Tingjin Luo</strong><sup>#</sup>, Hongbing Wu, Xinwang Liu, Chenping Hou",
    "venue": "ACM Transactions on Information Systems (TOIS), Accepted",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "imbalanced-learning",
      "fake-news-detection",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Self-Heterogeneous Knowledge Fusion with Personalized Guidance for Target Fine-grained Classification in Remote Sensing Images",
    "authors": "Hao Zhou, <strong>Tingjin Luo</strong><sup>#</sup>, Yongming He, Wenxia Guo",
    "venue": "IEEE Transactions on Geoscience and Remote Sensing (TGRS), Accepted",
    "tags": [
      "ccf-b",
      "trans",
      "q1"
    ],
    "topics": [
      "remote-sensing",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "first",
    "title": "Non-convex Transfer Subspace Learning via Embedded Distribution Alignment",
    "authors": "<strong>Tingjin Luo</strong>, Yueyin Liu, Xinyue Zhang, Chenping Hou",
    "venue": "IEEE Transactions on Image Processing (TIP), Accepted",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "domain-adaptation",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Trust-calibrated Collaborative Learning for Long-Tailed Visual Recognition",
    "authors": "Hao Zhou, <strong>Tingjin Luo</strong><sup>#</sup>",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "imbalanced-learning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "first",
    "title": "Deep Partial Label Feature Selection with Cluster-Guided Disambiguation",
    "authors": "<strong>Tingjin Luo</strong>, Mengyuan Tong, Qingchang Shu, Yueyin Liu, Hao Zhou, Zheng Wang",
    "venue": "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "partial-label",
      "feature-learning",
      "clustering"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "first",
    "title": "ESTIM: Efficient and Scalable Tensorial Incomplete Multi-view Semi-supervised Classification",
    "authors": "<strong>Tingjin Luo</strong>, Xiangyao Li, Zhangqi Jiang, Shuanghui Zhang, Dewen Hu",
    "venue": "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "semi-supervised"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "corr",
    "title": "Multi-Label Classification with Incremental and Decremental Features",
    "authors": "Mingdie Jiang, Quanjiang Li, <strong>Tingjin Luo</strong><sup>#</sup>, Yiping Song, Chenping Hou",
    "venue": "AAAI Conference on Artificial Intelligence (AAAI)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-label",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "co",
    "title": "DPRM: A Dual Implicit Process Reward Model for Automatic Labeling and Collaborative Reasoning in Multi-Hop Question Answering",
    "authors": "Xinyi Wang, Yiping Song<sup>#</sup>, Zhiliang Tian, Bo Liu, <strong>Tingjin Luo</strong>, Minlie Huang",
    "venue": "AAAI Conference on Artificial Intelligence (AAAI)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "visual-reasoning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2026,
    "role": "first",
    "title": "Nonconvex and Adaptive Multi-label Learning for Missing Labels",
    "authors": "<strong>Tingjin Luo</strong><sup>#</sup>, Quanjiang Li, Mingdie Jiang, Chenping Hou",
    "venue": "Knowledge-Based Systems (KBS), IF 7.6",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "multi-label"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Tackling Noisy Labels with Noise-Free Prototype Guided Representation Calibration",
    "authors": "Huiting Yuan, <strong>Tingjin Luo</strong><sup>#</sup>, Xinghao Wu, Jie Jiang",
    "venue": "Knowledge-Based Systems (KBS), IF 7.6",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "label-noise",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Theory-Driven Label-Specific Representation for Incomplete Multi-View Multi-Label Learning",
    "authors": "Quanjiang Li, Tianxiang Xu, <strong>Tingjin Luo</strong><sup>#</sup>, Yan Zhong, Yang Li, Yiyun Zhou, Chenping Hou",
    "venue": "Conference on Neural Information Processing Systems (NeurIPS)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "multi-label",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Adversarial Graph Fusion for Incomplete Multi-view Semi-supervised Learning with Tensorial Imputation",
    "authors": "Zhangqi Jiang, <strong>Tingjin Luo</strong><sup>#</sup>, Xu Yang, Xinyan Liang",
    "venue": "Conference on Neural Information Processing Systems (NeurIPS)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "semi-supervised"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Exploring the Essence of Relationships for Scene Graph Generation via Causal Features Enhancement Network",
    "authors": "Hao Zhou, <strong>Tingjin Luo</strong><sup>#</sup>, Jun Zhang, Guoli Li",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), IF 20.8",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "visual-reasoning",
      "feature-learning"
    ],
    "links": [
      {
        "t": "PDF",
        "u": "https://ieeexplore.ieee.org/document/9858006"
      }
    ]
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Deep Multi-View Multi-Label Learning with Incomplete Views and Noisy Labels",
    "authors": "Quanjiang Li, <strong>Tingjin Luo</strong><sup>#</sup>, Jiahui Liao",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "multi-label",
      "label-noise"
    ],
    "links": [
      {
        "t": "PDF",
        "u": "http://openaccess.thecvf.com/content/CVPR2025/papers/Li_Theory-Inspired_Deep_Multi-View_Multi-Label_Learning_With_Incomplete_Views_and_Noisy_Labels_CVPR_2025_paper.pdf"
      }
    ]
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Devils in Middle Layers of Large Vision-Language Models: Interpreting, Detecting and Mitigating Object Hallucinations via Attention Lens",
    "authors": "Zhangqi Jiang, Junkai Chen, Beier Zhu, <strong>Tingjin Luo</strong><sup>#</sup>, Yankun Shen, Xu Yang<sup>#</sup>",
    "venue": "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "llm-hallucination",
      "visual-reasoning"
    ],
    "links": [
      {
        "t": "arXiv",
        "u": "http://arxiv.org/abs/2411.16724"
      }
    ]
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Dynamic Multi-experts Collaboration Learning for Long-tailed Visual Recognition",
    "authors": "Hao Zhou, <strong>Tingjin Luo</strong><sup>#</sup>, Yongming He, Jun Zhang",
    "venue": "Information Fusion, 115:102734 (CAAI A, IF 14.7)",
    "tags": [
      "q1"
    ],
    "topics": [
      "imbalanced-learning",
      "intelligence-applications"
    ],
    "links": [
      {
        "t": "DOI",
        "u": "https://doi.org/10.1016/j.inffus.2024.102734"
      }
    ]
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Nonconvex and Discriminative Transfer Subspace Learning for Unsupervised Domain Adaptation",
    "authors": "Yueying Liu, <strong>Tingjin Luo</strong><sup>#</sup>",
    "venue": "Frontiers of Computer Science, 19(2):192307",
    "tags": [
      "ccf-b"
    ],
    "topics": [
      "domain-adaptation",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Imbalanced Multi-instance Multi-label Learning via Tensor Product-based Semantic Fusion",
    "authors": "Xinyue Zhang, <strong>Tingjin Luo</strong><sup>#</sup>",
    "venue": "Frontiers of Computer Science",
    "tags": [
      "ccf-b"
    ],
    "topics": [
      "multi-instance",
      "multi-label",
      "imbalanced-learning"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Semi-Supervised Multi-View Multi-Label Learning with View-Specific Transformer and Enhanced Pseudo-Label",
    "authors": "Quanjiang Li, <strong>Tingjin Luo</strong><sup>#</sup>, Mingdie Jiang, Zhangqi Jiang, Chenping Hou, Feijiang Li",
    "venue": "AAAI Conference on Artificial Intelligence (AAAI)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "semi-supervised",
      "multi-view",
      "multi-label"
    ],
    "links": []
  },
  {
    "year": 2025,
    "role": "corr",
    "title": "Core-to-Global Reasoning for Compositional Visual Question Answering",
    "authors": "Hao Zhou, <strong>Tingjin Luo</strong><sup>#</sup>, Zhangqi Jiang",
    "venue": "AAAI Conference on Artificial Intelligence (AAAI)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "visual-reasoning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "first",
    "title": "Robust Discriminative Feature Learning with Calibrated Data Reconstruction and Sparse Low-Rank Model",
    "authors": "<strong>Tingjin Luo</strong>, Yang Yang<sup>#</sup>, Dongyun Yi, Jieping Ye",
    "venue": "Applied Intelligence, 54:2867–2880",
    "tags": [],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "corr",
    "title": "Absent Multi-view Semi-supervised Classification",
    "authors": "Wenzhang Zhuge, <strong>Tingjin Luo</strong><sup>#</sup>, Hong Tao, Chenping Hou<sup>#</sup>, Dongyun Yi",
    "venue": "IEEE Transactions on Cybernetics (TCYB), 54(3):1708–1721",
    "tags": [
      "ccf-b",
      "trans",
      "q1"
    ],
    "topics": [
      "multi-view",
      "semi-supervised"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "co",
    "title": "Core-Structures-Guided Multi-Modal Classification Neural Architecture Search",
    "authors": "Pinhan Fu, Xinyan Liang, <strong>Tingjin Luo</strong>, Qian Guo, Yayu Zhang, Yuhua Qian<sup>#</sup>",
    "venue": "International Joint Conference on Artificial Intelligence (IJCAI), 3980–3988",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "feature-learning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "corr",
    "title": "Deep Incomplete Multi-View Learning Network with Insufficient Label Information",
    "authors": "Zhangqi Jiang, <strong>Tingjin Luo</strong><sup>#</sup>, Xinyan Liang",
    "venue": "AAAI Conference on Artificial Intelligence (AAAI)",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "feature-learning"
    ],
    "links": [
      {
        "t": "PDF",
        "u": "https://ojs.aaai.org/index.php/AAAI/article/view/29189"
      },
      {
        "t": "Code",
        "u": "https://github.com/ZhangqiJiang07/code_DIMvLN"
      }
    ]
  },
  {
    "year": 2024,
    "role": "co",
    "title": "Compound Weakly Supervised Clustering",
    "authors": "Hong Tao, Jiacheng Jiang, Chenping Hou<sup>#</sup>, <strong>Tingjin Luo</strong>, Ruidong Fan, Jing Zhang",
    "venue": "IEEE Transactions on Image Processing (TIP), 33:957–971",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "semi-supervised",
      "clustering"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "corr",
    "title": "结合对象属性识别的图像场景图生成方法研究",
    "authors": "周浩, <strong>罗廷金</strong><sup>#</sup>, 崔国恒",
    "venue": "计算机科学 (Computer Science), 51(11):205–212 (CCF 中文 T2)",
    "tags": [],
    "topics": [
      "visual-reasoning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "corr",
    "title": "基于多语义关联与融合的视觉问答模型",
    "authors": "周浩, 王超, 崔国恒, <strong>罗廷金</strong><sup>#</sup>",
    "venue": "计算机应用 (Journal of Computer Applications) (CCF 中文 T2)",
    "tags": [],
    "topics": [
      "visual-reasoning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2024,
    "role": "corr",
    "title": "Imbalanced Multi-instance Multi-label Learning via Coding Ensemble and Adaptive Thresholds",
    "authors": "Xinyue Zhang, <strong>Tingjin Luo</strong><sup>#</sup>, Yueying Liu, Chenping Hou",
    "venue": "ACM International Conference on Multimedia (ACM MM), 5413–5422",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-instance",
      "multi-label",
      "imbalanced-learning"
    ],
    "links": [
      {
        "t": "PDF",
        "u": "https://dl.acm.org/doi/10.1145/3664647.3680911"
      }
    ]
  },
  {
    "year": 2024,
    "role": "corr",
    "title": "Deep Incomplete Multi-View Network Semi-Supervised Multi-Label Learning with Unbiased Loss",
    "authors": "Quanjiang Li, <strong>Tingjin Luo</strong><sup>#</sup>, Mingdie Jiang, Jiahui Liao, Zhangqi Jiang",
    "venue": "ACM International Conference on Multimedia (ACM MM), 9048–9056",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-view",
      "semi-supervised",
      "multi-label"
    ],
    "links": []
  },
  {
    "year": 2023,
    "role": "corr",
    "title": "Debiased Scene Graph Generation for Dual Imbalance Learning",
    "authors": "Hao Zhou, Jun Zhang<sup>#</sup>, <strong>Tingjin Luo</strong><sup>#</sup>, Yazhou Yang, Jun Lei",
    "venue": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 45(4):4274–4288",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "imbalanced-learning",
      "visual-reasoning"
    ],
    "links": [
      {
        "t": "PDF",
        "u": "https://ieeexplore.ieee.org/document/9858006"
      },
      {
        "t": "Code",
        "u": "https://github.com/zhouhao0515/unbiasedSGG-DSDI"
      }
    ]
  },
  {
    "year": 2023,
    "role": "corr",
    "title": "Active Label Distribution Learning via Kernel Maximum Mean Discrepancy",
    "authors": "Xinyue Dong, <strong>Tingjin Luo</strong><sup>#</sup>, Ruidong Fan, Wenzhang Zhuge, Chenping Hou<sup>#</sup>",
    "venue": "Frontiers of Computer Science, 17(4):174327",
    "tags": [
      "ccf-b"
    ],
    "topics": [
      "label-distribution",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2023,
    "role": "first",
    "title": "Semi-supervised Learning with Label Proportion",
    "authors": "Ningzhao Sun<sup>*</sup>, <strong>Tingjin Luo</strong><sup>*</sup>, Hong Tao, Chenping Hou<sup>#</sup>, Dewen Hu<sup>#</sup>",
    "venue": "IEEE Transactions on Knowledge and Data Engineering (TKDE), 35(1):877–890",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "semi-supervised",
      "label-distribution"
    ],
    "links": []
  },
  {
    "year": 2023,
    "role": "corr",
    "title": "Joint Distribution Alignment and Transfer Subspace Learning for Unsupervised Domain Adaptation",
    "authors": "Yueying Liu, <strong>Tingjin Luo</strong><sup>#</sup>",
    "venue": "IEEE Int. Conf. on Cloud Computing and Intelligence Systems (CCIS), 53–58",
    "tags": [],
    "topics": [
      "domain-adaptation",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2023,
    "role": "co",
    "title": "Online Learning with Incremental Feature Space and Bandit Feedback",
    "authors": "Shilin Gu, <strong>Tingjin Luo</strong>, Ming He, Chenping Hou",
    "venue": "IEEE Transactions on Knowledge and Data Engineering (TKDE)",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2023,
    "role": "co",
    "title": "Incomplete Multi-view Learning under Label Shift",
    "authors": "Ruidong Fan, Xiao Ouyang, <strong>Tingjin Luo</strong>, Dewen Hu, Chenping Hou",
    "venue": "IEEE Transactions on Image Processing (TIP)",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "multi-view",
      "domain-adaptation"
    ],
    "links": []
  },
  {
    "year": 2023,
    "role": "co",
    "title": "Decorrelated Spectral Regression: An Unsupervised Dimension Reduction Method under Data Selection Bias",
    "authors": "Xiuqi Huang, Haotian Ni, <strong>Tingjin Luo</strong>, Hong Tao, Chenping Hou<sup>#</sup>",
    "venue": "Neurocomputing, 549:126406",
    "tags": [],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2022,
    "role": "co",
    "title": "Safe Incomplete Label Distribution Learning",
    "authors": "Jing Zhang, Hong Tao<sup>#</sup>, <strong>Tingjin Luo</strong>, Chenping Hou<sup>#</sup>",
    "venue": "Pattern Recognition, 125:108518",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "label-distribution"
    ],
    "links": []
  },
  {
    "year": 2022,
    "role": "corr",
    "title": "Joint Representation Learning and Clustering: A Framework for Grouping Partial Multiview Data",
    "authors": "Wenzhang Zhuge, Hong Tao, <strong>Tingjin Luo</strong><sup>#</sup>, Linli Zeng, Chenping Hou<sup>#</sup>, Dongyun Yi",
    "venue": "IEEE Transactions on Knowledge and Data Engineering (TKDE), 34(8):3826–3840",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "multi-view",
      "clustering",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2022,
    "role": "co",
    "title": "Multi-instance Positive and Unlabeled Learning with Bi-level Embedding",
    "authors": "Xijia Tang, Chao Xu, <strong>Tingjin Luo</strong>, Chenping Hou<sup>#</sup>",
    "venue": "Intelligent Data Analysis, 26(3):659–678",
    "tags": [],
    "topics": [
      "multi-instance",
      "semi-supervised"
    ],
    "links": []
  },
  {
    "year": 2022,
    "role": "co",
    "title": "基于独立自表达学习的不完全多视图聚类方法",
    "authors": "诸葛文章, 范瑞东, <strong>罗廷金</strong>, 陶红, 侯臣平<sup>#</sup>",
    "venue": "中国科学：信息科学， 52(7): 1186-1203",
    "tags": [
      "ccf-a",
      "q1"
    ],
    "topics": [
      "multi-view",
      "clustering"
    ],
    "links": []
  },
  {
    "year": 2021,
    "role": "corr",
    "title": "A Unified Deep Sparse Graph Attention Network for Scene Graph Generation",
    "authors": "Hao Zhou, Yazhou Yang, <strong>Tingjin Luo</strong><sup>#</sup>, Jun Zhang<sup>#</sup>, Jun Lei, Shuohao Li",
    "venue": "Pattern Recognition",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "visual-reasoning",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2021,
    "role": "corr",
    "title": "Relationship-aware Primal-Dual Graph Attention Network for Scene Graph Generation",
    "authors": "Hao Zhou, <strong>Tingjin Luo</strong><sup>#</sup>, Jun Zhang, Jun Lei, Shuohao Li",
    "venue": "IEEE International Conference on Multimedia and Expo (ICME)",
    "tags": [
      "ccf-b"
    ],
    "topics": [
      "visual-reasoning",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2021,
    "role": "corr",
    "title": "Multiple Instance Learning for Unilateral Data",
    "authors": "Xijia Tang, <strong>Tingjin Luo</strong><sup>#</sup>, Tianxiang Luan, Chenping Hou",
    "venue": "Pacific-Asia Conf. on Knowledge Discovery and Data Mining (PAKDD)",
    "tags": [],
    "topics": [
      "multi-instance"
    ],
    "links": []
  },
  {
    "year": 2021,
    "role": "co",
    "title": "Active Label Distribution Learning",
    "authors": "Xinyue Dong, Shilin Gu, Wenzhang Zhuge, <strong>Tingjin Luo</strong>, Chenping Hou<sup>#</sup>",
    "venue": "Neurocomputing, 436:12–21",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "label-distribution"
    ],
    "links": []
  },
  {
    "year": 2020,
    "role": "co",
    "title": "Multi-view Subspace Learning via Bidirectional Sparsity",
    "authors": "Ruidong Fan, <strong>Tingjin Luo</strong>, Wenzhang Zhuge, Sheng Qiang, Chenping Hou<sup>#</sup>",
    "venue": "Pattern Recognition, 108:107524",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "multi-view",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2020,
    "role": "co",
    "title": "Optimal Representative Distribution Margin Machine for Multi-Instance Learning",
    "authors": "Tianxiang Luan, <strong>Tingjin Luo</strong>, Wenzhang Zhuge, Chenping Hou<sup>#</sup>",
    "venue": "IEEE Access, 8:74864–74874",
    "tags": [],
    "topics": [
      "multi-instance"
    ],
    "links": []
  },
  {
    "year": 2020,
    "role": "co",
    "title": "Multi-View Spectral Clustering with Incomplete Graphs",
    "authors": "Wenzhang Zhuge, <strong>Tingjin Luo</strong>, Hong Tao, Chenping Hou<sup>#</sup>, Dongyun Yi",
    "venue": "IEEE Access, 8:99820–99831",
    "tags": [],
    "topics": [
      "multi-view",
      "clustering"
    ],
    "links": []
  },
  {
    "year": 2019,
    "role": "first",
    "title": "Dimension Reduction for Non-Gaussian Data by Adaptive Discriminative Analysis",
    "authors": "<strong>Tingjin Luo</strong>, Chenping Hou<sup>#</sup>, Feiping Nie, Dongyun Yi",
    "venue": "IEEE Transactions on Cybernetics (TCYB), 49(3):933–946",
    "tags": [
      "ccf-b",
      "trans",
      "q1"
    ],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2019,
    "role": "corr",
    "title": "Non-Convex Transfer Subspace Learning for Unsupervised Domain Adaptation",
    "authors": "Zhipeng Lin, Zhenyu Zhao, <strong>Tingjin Luo</strong><sup>#</sup>, Wenjing Yang, Yongjun Zhang, Yuhua Tang",
    "venue": "IEEE International Conference on Multimedia and Expo (ICME), 1468–1473",
    "tags": [
      "ccf-b"
    ],
    "topics": [
      "domain-adaptation",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2019,
    "role": "co",
    "title": "Rademacher Dropout: An Adaptive Dropout for Deep Neural Network via Optimizing Generalization Gap",
    "authors": "Haotian Wang, Wenjing Yang<sup>#</sup>, Zhenyu Zhao, <strong>Tingjin Luo</strong>, Ji Wang, Yuhua Tang",
    "venue": "Neurocomputing, 357:177–187",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2019,
    "role": "co",
    "title": "Bi-direction Hierarchical LSTM with Spatial-Temporal Attention for Action Recognition",
    "authors": "Haodong Yang, Jun Zhang<sup>#</sup>, Shuohao Li<sup>#</sup>, <strong>Tingjin Luo</strong>",
    "venue": "Journal of Intelligent & Fuzzy Systems, 36(1):775–786",
    "tags": [],
    "topics": [
      "feature-learning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2018,
    "role": "first",
    "title": "Semi-Supervised Feature Selection via Insensitive Sparse Regression with Application to Video Semantic Recognition",
    "authors": "<strong>Tingjin Luo</strong>, Chenping Hou<sup>#</sup>, Feiping Nie, Hong Tao, Dongyun Yi",
    "venue": "IEEE Transactions on Knowledge and Data Engineering (TKDE), 30(10):1943–1956",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "semi-supervised",
      "feature-learning",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2018,
    "role": "first",
    "title": "Identifying Genetic Risk Factors for Alzheimer's Disease via Shared Tree-Guided Feature Learning Across Multiple Tasks",
    "authors": "Weizhong Zhang<sup>*</sup>, <strong>Tingjin Luo</strong><sup>*</sup>, Shuang Qiu, Jieping Ye, Deng Cai, Xiaofei He, Jie Wang<sup>#</sup>",
    "venue": "IEEE Transactions on Knowledge and Data Engineering (TKDE), 30(11):2145–2156",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "biology-medicine",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2018,
    "role": "co",
    "title": "Robust Feature Selection via Simultaneous Capped Norm and Sparse Regularizer Minimization",
    "authors": "Gongmin Lan, Chenping Hou<sup>#</sup>, Feiping Nie, <strong>Tingjin Luo</strong>, Dongyun Yi",
    "venue": "Neurocomputing, 283:228–240",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2017,
    "role": "first",
    "title": "Functional Annotation of Human Protein Coding Isoforms via Non-convex Multi-Instance Learning",
    "authors": "<strong>Tingjin Luo</strong>, Weizhong Zhang, Shuang Qiu, Yang Yang, Dongyun Yi, Guangtao Wang, Jieping Ye<sup>#</sup>, Jie Wang<sup>#</sup>",
    "venue": "ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (KDD), 345–354",
    "tags": [
      "ccf-a"
    ],
    "topics": [
      "multi-instance",
      "biology-medicine"
    ],
    "links": [
      {
        "t": "PDF",
        "u": "https://dl.acm.org/doi/10.1145/3097983.3097984"
      },
      {
        "t": "Code",
        "u": "https://github.com/HorizonAILab/Paper_Code"
      },
      {
        "t": "Video",
        "u": "https://videolectures.net/videos/kdd2017_luo_human_protein_coding"
      }
    ]
  },
  {
    "year": 2017,
    "role": "first",
    "title": "A Robust Method for Inferring Network Structures",
    "authors": "Yang Yang<sup>*</sup>, <strong>Tingjin Luo</strong><sup>*</sup>, Zhoujun Li, Xiaoming Zhang, Philip S. Yu",
    "venue": "Scientific Reports, 7:5221",
    "tags": [],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2017,
    "role": "co",
    "title": "2D Feature Selection by Sparse Matrix Regression",
    "authors": "Chenping Hou, Yuanyuan Jiao, Feiping Nie, <strong>Tingjin Luo</strong>, Zhi-Hua Zhou<sup>#</sup>",
    "venue": "IEEE Transactions on Image Processing (TIP), 26(9):4255–4268",
    "tags": [
      "ccf-a",
      "trans",
      "q1"
    ],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2017,
    "role": "co",
    "title": "Robust Self-Tuning Sparse Subspace Clustering",
    "authors": "Guangtao Wang, Jiayu Zhou, Jingjie Ni, <strong>Tingjin Luo</strong>, Wei Long, Hai Zhen, Gao Cong, Jieping Ye<sup>#</sup>",
    "venue": "IEEE International Conference on Data Mining Workshops (ICDMW), 858–865",
    "tags": [],
    "topics": [
      "clustering",
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2016,
    "role": "first",
    "title": "Discriminative Orthogonal Elastic Preserving Projections for Classification",
    "authors": "<strong>Tingjin Luo</strong>, Chenping Hou<sup>#</sup>, Dongyun Yi, Jun Zhang",
    "venue": "Neurocomputing, 179:54–68",
    "tags": [
      "ccf-b",
      "q1"
    ],
    "topics": [
      "feature-learning"
    ],
    "links": []
  },
  {
    "year": 2014,
    "role": "first",
    "title": "Speed up Junction Detector based on Azimuth Consensus by Harris Corner",
    "authors": "<strong>Tingjin Luo</strong>, Jun Zhang, Lin Lian",
    "venue": "Optical Review, 21(2):135–142",
    "tags": [],
    "topics": [
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2013,
    "role": "corr",
    "title": "Junction Point Detection Algorithm for SAR Image",
    "authors": "Jun Zhang, <strong>Tingjin Luo</strong><sup>#</sup>, Gui Gao, Lin Lian",
    "venue": "International Journal of Antennas and Propagation, 2013:1–9",
    "tags": [],
    "topics": [
      "remote-sensing",
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2013,
    "role": "co",
    "title": "3D Reconstruction of Periodic Human Walking Trajectories Based on Single View",
    "authors": "Jun Zhang, Weiqiang Huang, <strong>Tingjin Luo</strong>",
    "venue": "Chinese Journal of Electronics, 22(3):455–460",
    "tags": [],
    "topics": [
      "intelligence-applications"
    ],
    "links": []
  },
  {
    "year": 2012,
    "role": "co",
    "title": "Accurate Moving Target Detection Based on Background Subtraction and SUSAN",
    "authors": "Jun Zhang, Shukui Xu, Kuihua Huang, <strong>Tingjin Luo</strong>",
    "venue": "International Journal of Computer and Electrical Engineering, 4(4):436–439",
    "tags": [],
    "topics": [
      "intelligence-applications"
    ],
    "links": []
  }
];

function getPublicationTags(pub) {
  const tags = new Set(pub.tags || []);
  if (pub.role === "first" || pub.role === "corr") tags.add("cor");
  return [...tags].sort((a,b) => (TAG_META[a]?.order ?? 9999) - (TAG_META[b]?.order ?? 9999));
}

const CATEGORY_ORDER = Object.fromEntries(TOPIC_CATEGORIES.map((category,index) => [category.id,index]));
function getTopicTags(pub) {
  return [...new Set(pub.topics || [])].sort((a,b) => {
    const categoryDiff = (CATEGORY_ORDER[TOPIC_META[a]?.category] ?? 999) - (CATEGORY_ORDER[TOPIC_META[b]?.category] ?? 999);
    return categoryDiff || (TOPIC_META[a]?.order ?? 999) - (TOPIC_META[b]?.order ?? 999);
  });
}

function validatePublications() {
  const knownTags = new Set(Object.keys(TAG_META));
  const knownTopics = new Set(Object.keys(TOPIC_META));
  const knownRoles = new Set(["first", "corr", "co"]);
  const seen = new Set();
  PUBS.forEach((p, i) => {
    const pos = `PUBS[${i}]`;
    ["year","role","title","authors","venue","tags","topics","links"].forEach(k => {
      if (!(k in p)) console.warn(`${pos}: missing field "${k}"`);
    });
    if (!knownRoles.has(p.role)) console.warn(`${pos}: unknown role "${p.role}"`);
    (p.tags || []).forEach(t => {
      if (!knownTags.has(t)) console.warn(`${pos}: unknown tag "${t}"`);
    });
    (p.topics || []).forEach(topic => {
      if (!knownTopics.has(topic)) console.warn(`${pos}: unknown topic "${topic}"`);
    });
    if (!(p.topics || []).length) console.warn(`${pos}: no research topic assigned`);
    const key = `${p.year}::${p.title.trim().toLowerCase()}`;
    if (seen.has(key)) console.warn(`${pos}: possible duplicate publication`, p.title);
    seen.add(key);
  });
}
validatePublications();

/* Compact dashboard — every value below is derived from PUBS. */
const dashboardCounts = {all:PUBS.length};
Object.keys(TAG_META).forEach(tag => dashboardCounts[tag]=0);
PUBS.forEach(pub => getPublicationTags(pub).forEach(tag => dashboardCounts[tag]++));
const topicCounts = Object.fromEntries(Object.keys(TOPIC_META).map(topic => [topic,0]));
PUBS.forEach(pub => getTopicTags(pub).forEach(topic => topicCounts[topic]++));
const roleCounts = {
  first:PUBS.filter(pub => pub.role==="first").length,
  corr:PUBS.filter(pub => pub.role==="corr").length,
  co:PUBS.filter(pub => pub.role==="co").length
};
const leadCount = roleCounts.first + roleCounts.corr;
const dashboardYearMap = {};
PUBS.forEach(pub => { dashboardYearMap[pub.year]=(dashboardYearMap[pub.year]||0)+1; });
const dashboardYears = Object.keys(dashboardYearMap).map(Number).sort((a,b)=>a-b);

const VENUE_GROUPS = [
  {id:"tpami",label:"TPAMI",pattern:/Pattern Analysis and Machine Intelligence/i},
  {id:"tkde",label:"TKDE",pattern:/Knowledge and Data Engineering/i},
  {id:"tip",label:"TIP",pattern:/Transactions on Image Processing/i},
  {id:"cvpr",label:"CVPR",pattern:/Computer Vision and Pattern Recognition/i},
  {id:"kdd",label:"KDD",pattern:/Knowledge Discovery/i},
  {id:"aaai",label:"AAAI",pattern:/AAAI Conference/i},
  {id:"neurips",label:"NeurIPS",pattern:/Neural Information Processing Systems/i},
  {id:"acm-mm",label:"ACM MM",pattern:/ACM International Conference on Multimedia/i},
  {id:"icml",label:"ICML",pattern:/International Conference on Machine Learning/i},
  {id:"ijcai",label:"IJCAI",pattern:/International Joint Conference on Artificial Intelligence/i},
  {id:"others",label:"Other venues",pattern:/.*/}
];
function getVenueGroup(pub) { return VENUE_GROUPS.find(group => group.pattern.test(pub.venue))?.id || "others"; }
const venueRows = VENUE_GROUPS.map(group => {
  const papers=PUBS.filter(pub => getVenueGroup(pub)===group.id);
  return {...group,papers:papers.length};
}).filter(group => group.papers>0);

document.getElementById("kpi-total").textContent=dashboardCounts.all;
document.getElementById("kpi-years").textContent=`${dashboardYears[0]}–${dashboardYears.at(-1)}`;
document.getElementById("kpi-lead").textContent=leadCount;
document.getElementById("kpi-role-detail").textContent=`first ${roleCounts.first} · corresponding ${roleCounts.corr}`;
document.getElementById("kpi-ccfa").textContent=dashboardCounts["ccf-a"];
document.getElementById("kpi-ccfa-share").textContent=`${Math.round(dashboardCounts["ccf-a"]/dashboardCounts.all*100)}% of all publications`;

const venueStatsBody=document.getElementById("venueStatsBody");
venueRows.forEach(row => venueStatsBody.insertAdjacentHTML("beforeend",`
  <button class="venue-row" type="button" data-filter-row data-venue-filter="${row.id}" aria-label="Filter by ${row.label}: ${row.papers} papers">
    <span class="venue-name">${row.label}</span>
  </button>`));

const topicStatsBody=document.getElementById("topicStatsBody");
const WEAK_SUPERVISION_DISPLAY_GROUPS = [
  { ids:["semi-supervised"], label:"Semi-supervised" },
  { ids:["partial-label","multi-label"], label:"Multi-label" },
  { ids:["multi-instance"], label:"Multi-instance" },
  { ids:["label-distribution"], label:"Label Distribution" },
  { ids:["label-noise"], label:"Label Noise" }
];
TOPIC_CATEGORIES.forEach(category => {
  const visibleTopics=category.topics.filter(([topic]) => topicCounts[topic]>0);
  const displayGroups=category.id==="weak-supervision"
    ? WEAK_SUPERVISION_DISPLAY_GROUPS
    : visibleTopics.map(([topic,label]) => ({ids:[topic],label}));
  const topicItems=displayGroups.map(({ids,label}) => {
    const filterKey=ids.join("|");
    return `<button class="topic-item" type="button" data-filter-row data-topic-filter="${filterKey}" title="${label}" aria-label="Filter by ${label}"><span class="topic-name">${label}</span></button>`;
  }).join("");
  topicStatsBody.insertAdjacentHTML("beforeend",`<section class="topic-field-group" style="--cat-color:${category.color};--cat-bg:${category.tint}" aria-label="${category.label}"><div class="topic-field-summary"><span class="field-copy"><span class="field-name">${category.label}</span></span></div><div class="topic-items">${topicItems}</div></section>`);
});

const maxYearCount=Math.max(...Object.values(dashboardYearMap));
const timelineYears=Array.from({length:dashboardYears.at(-1)-dashboardYears[0]+1},(_,index)=>dashboardYears[0]+index);
const yearTrend=document.getElementById("yearTrend");
const timelineTooltip=document.getElementById("timelineTooltip");
const timelineColumns=[];
let hoveredYear=null, focusedYear=null, timelineDismissed=false;
function updateTimelineTooltip() {
  const active=timelineDismissed?null:(hoveredYear||focusedYear);
  timelineColumns.forEach(column => {
    column.classList.toggle("is-active",column===active);
    if(column===active) column.setAttribute("aria-describedby","timelineTooltip");
    else column.removeAttribute("aria-describedby");
  });
  timelineTooltip.hidden=!active;
  if(!active) return;
  timelineTooltip.textContent=active.getAttribute("aria-label");
  const chartRect=yearTrend.getBoundingClientRect();
  const columnRect=active.getBoundingClientRect();
  const tooltipWidth=timelineTooltip.getBoundingClientRect().width;
  const center=columnRect.left-chartRect.left+columnRect.width/2;
  timelineTooltip.style.left=`${Math.max(0,Math.min(chartRect.width-tooltipWidth,center-tooltipWidth/2))}px`;
}
timelineYears.forEach((year,index) => {
  const count=dashboardYearMap[year]||0;
  const height=count?Math.max(2,Math.round(count/maxYearCount*32)):0;
  const column=document.createElement("button");
  column.type="button";
  column.className="trend-col";
  column.tabIndex=index===timelineYears.length-1?0:-1;
  column.setAttribute("aria-label",`${year} · ${count} ${count===1?"paper":"papers"}`);
  column.innerHTML=`<span class="trend-bar" style="height:${height}px" aria-hidden="true"></span>`;
  column.addEventListener("pointerenter",() => { hoveredYear=column; timelineDismissed=false; updateTimelineTooltip(); });
  column.addEventListener("focus",() => {
    focusedYear=column; hoveredYear=null; timelineDismissed=false;
    timelineColumns.forEach(item => { item.tabIndex=item===column?0:-1; });
    updateTimelineTooltip();
  });
  column.addEventListener("blur",() => { focusedYear=null; updateTimelineTooltip(); });
  column.addEventListener("click",event => {
    if(event.detail>0) hoveredYear=column;
    timelineDismissed=false; updateTimelineTooltip();
  });
  column.addEventListener("keydown",event => {
    if(event.key==="Escape") { timelineDismissed=true; updateTimelineTooltip(); event.preventDefault(); return; }
    let next=index;
    if(event.key==="ArrowRight") next=Math.min(index+1,timelineColumns.length-1);
    else if(event.key==="ArrowLeft") next=Math.max(index-1,0);
    else if(event.key==="Home") next=0;
    else if(event.key==="End") next=timelineColumns.length-1;
    else return;
    event.preventDefault(); hoveredYear=null; timelineColumns[next].focus();
  });
  timelineColumns.push(column);
  yearTrend.append(column);
});
yearTrend.addEventListener("pointerleave",() => { hoveredYear=null; updateTimelineTooltip(); });
document.addEventListener("pointerdown",event => {
  if(!yearTrend.contains(event.target)) { hoveredYear=null; timelineDismissed=true; updateTimelineTooltip(); }
});
document.addEventListener("keydown",event => {
  if(event.key==="Escape"&&!timelineTooltip.hidden) { timelineDismissed=true; updateTimelineTooltip(); }
});
window.addEventListener("resize",updateTimelineTooltip);
document.getElementById("yearTrendLabels").innerHTML=`<span>${dashboardYears[0]}</span><span>${dashboardYears.at(-1)}</span>`;

function compactMetricTagsHtml(tags) {
  return tags.map(tag => {
    const meta=TAG_META[tag]; if(!meta)return "";
    return `<span class="ptag ${meta.className||"ptag-cor"}" title="${meta.description||meta.label}">${meta.label}</span>`;
  }).join("");
}
function compactTopicTagsHtml(topics) {
  const displayTopics=[...new Set(topics.map(topic => topic==="partial-label"?"multi-label":topic))];
  return displayTopics.map(topic => {
    const meta=TOPIC_META[topic]; if(!meta)return "";
    const filterKey=topic==="multi-label"?"partial-label|multi-label":topic;
    return `<button class="topic-tag" type="button" data-topic-chip="${filterKey}" style="--topic-color:${meta.color}" title="${meta.categoryLabel}">${meta.label}</button>`;
  }).join("");
}
function compactLinksHtml(links) {
  if(!links||!links.length)return "";
  return `<span class="pub-lnks">${links.map(link => `<a href="${link.u}" target="_blank" rel="noopener">[${link.t}]</a>`).join("")}</span>`;
}
function plainText(html) {
  const node=document.createElement("div"); node.innerHTML=html;
  return (node.textContent||"").replace(/\s+/g," ").trim();
}

const compactByYear={};
PUBS.forEach(pub => { (compactByYear[pub.year]=compactByYear[pub.year]||[]).push(pub); });
let compactGlobalNum=PUBS.length;
Object.keys(compactByYear).sort((a,b)=>b-a).forEach(year => {
  const group=compactByYear[year],block=document.createElement("div");
  block.className="pub-year-group"; block.dataset.year=year;
  block.innerHTML=`<div class="pub-year-label">${year} <span class="pub-year-count">${group.length}</span></div>`;
  group.forEach(pub => {
    const item=document.createElement("article"),metricTags=getPublicationTags(pub),topicTags=getTopicTags(pub);
    item.className="pub-item"; item.dataset.tags=metricTags.join(" "); item.dataset.topics=topicTags.join(" ");
    item.dataset.venue=getVenueGroup(pub); item.dataset.search=plainText(`${pub.title} ${pub.authors} ${pub.venue}`).toLowerCase();
    item.setAttribute("data-v","");
    item.innerHTML=`<span class="pub-num">${compactGlobalNum--}</span><div class="pub-content">
      <div class="pub-title-txt">${pub.links&&pub.links.length?`<a href="${pub.links[0].u}" target="_blank" rel="noopener">${pub.title}</a>`:pub.title}</div>
      <div class="pub-compact-meta"><span class="pub-compact-authors">${pub.authors}</span><span class="pub-compact-separator" aria-hidden="true">·</span><span class="pub-compact-venue">${pub.venue}</span></div>
      <div class="pub-details"><div class="pub-authors-txt">${pub.authors}</div><div class="pub-venue-detail"><span class="pub-venue-txt">${pub.venue}</span>${compactLinksHtml(pub.links)}</div>
      <div class="pub-tags">${compactTopicTagsHtml(topicTags)}${compactMetricTagsHtml(metricTags)}</div></div></div>`;
    block.appendChild(item);
  });
  document.getElementById("pubListFull").appendChild(block);
});

const publicationList=document.getElementById("pubListFull");
const detailToggle=document.getElementById("detailToggle");
const detailToggleLabel=document.getElementById("detailToggleLabel");
function setDetailView(expanded) {
  publicationList.classList.toggle("is-expanded",expanded);
  detailToggle.setAttribute("aria-expanded",String(expanded));
  detailToggleLabel.textContent=expanded?"Compact view":"Full details";
}
detailToggle.addEventListener("click",()=>setDetailView(detailToggle.getAttribute("aria-expanded")!=="true"));
setDetailView(false);

/* Multi-select publication filters: every selected option must match (intersection). */
const selectedMetrics = new Set();
const selectedCategories = new Set();
const selectedTopics = new Set();
const selectedVenues = new Set();
let publicationQuery = "";
const publicationFilterSets = {
  metric:selectedMetrics, category:selectedCategories, topic:selectedTopics, venue:selectedVenues
};
const metricContainer = document.getElementById("metricFilters");
const categoryContainer = document.getElementById("topicCategoryFilters");
const publicationSearch = document.getElementById("publicationSearch");
const publicationItems = [...document.querySelectorAll(".pub-item")];
const publicationYearGroups = [...document.querySelectorAll(".pub-year-group")];

function canonicalTopicFilter(value) {
  const ids = [...new Set(String(value || "").split("|").map(id => id.trim()).filter(Boolean))].sort();
  if (ids.length === 2 && ids.includes("partial-label") && ids.includes("multi-label")) return "partial-label|multi-label";
  return ids.join("|");
}
function togglePublicationFilter(set, value) {
  if (set.has(value)) set.delete(value); else set.add(value);
}
function addCheckboxFilter(container, group, key, labelText, count, className, color) {
  const label = document.createElement("label");
  label.className = className;
  if (color) label.style.setProperty("--topic-color", color);
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = "filter-checkbox";
  input.id = `publication-filter-${group}-${key}`;
  input.name = `publication-${group}-filters`;
  input.value = key;
  input.dataset[`${group}Filter`] = key;
  input.setAttribute("aria-label", labelText);
  const caption = document.createElement("span");
  caption.className = "filter-option-label";
  caption.textContent = labelText;
  const countElement = document.createElement("span");
  countElement.className = "ftag-count";
  countElement.textContent = String(count);
  label.append(input, caption, countElement);
  container.append(label);
  input.addEventListener("change", () => {
    const set = publicationFilterSets[group];
    if (input.checked) set.add(key); else set.delete(key);
    applyCompactFilters();
  });
}

Object.entries(TAG_META).filter(([key, meta]) => meta.group === "metric" && dashboardCounts[key] > 0)
  .sort((a, b) => a[1].order - b[1].order)
  .forEach(([key, meta]) => addCheckboxFilter(metricContainer, "metric", key, meta.label, dashboardCounts[key], "ftag"));
TOPIC_CATEGORIES.forEach(category => {
  const count = PUBS.filter(pub => getTopicTags(pub).some(topic => TOPIC_META[topic]?.category === category.id)).length;
  addCheckboxFilter(categoryContainer, "category", category.id, category.label, count, "topic-filter", category.color);
});

function selectTopic(value) {
  const key = canonicalTopicFilter(value);
  if (!key) return;
  togglePublicationFilter(selectedTopics, key);
  applyCompactFilters();
}
function selectVenue(value) {
  if (!value) return;
  togglePublicationFilter(selectedVenues, value);
  applyCompactFilters();
}
function publicationFilterLabel(group, key) {
  if (group === "metric") return TAG_META[key]?.label || key;
  if (group === "category") return TOPIC_CATEGORIES.find(category => category.id === key)?.label || key;
  if (group === "venue") return venueRows.find(row => row.id === key)?.label || key;
  const row = [...document.querySelectorAll("[data-topic-filter]")].find(item => canonicalTopicFilter(item.dataset.topicFilter) === key);
  return row?.querySelector(".topic-name")?.textContent || key.split("|").map(id => TOPIC_META[id]?.label || id).join(" / ");
}
function renderActivePublicationFilters() {
  const container = document.getElementById("activeFilters");
  if (!container) return;
  container.replaceChildren();
  const groupLabels = { metric:"Rank / role", category:"Research field", topic:"Topic", venue:"Venue", search:"Search" };
  function chip(group, key, value) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "active-filter-chip";
    button.dataset.removeGroup = group;
    button.dataset.removeKey = key;
    button.setAttribute("aria-label", `Remove ${groupLabels[group]} filter: ${value}`);
    const caption = document.createElement("span");
    caption.textContent = group === "search" ? `Search: ${value}` : value;
    const close = document.createElement("span");
    close.textContent = "×";
    close.setAttribute("aria-hidden", "true");
    button.append(caption, close);
    button.addEventListener("click", () => {
      const restoreFocus = document.activeElement === button;
      const index = [...container.children].indexOf(button);
      if (group === "search") { publicationQuery = ""; publicationSearch.value = ""; }
      else publicationFilterSets[group].delete(key);
      applyCompactFilters();
      if (restoreFocus) {
        const remaining = [...container.querySelectorAll("button")];
        const target = remaining[Math.min(index, remaining.length - 1)] || document.getElementById("resetFilters");
        target?.focus();
      }
    });
    container.append(button);
  }
  Object.entries(publicationFilterSets).forEach(([group, set]) => set.forEach(key => chip(group, key, publicationFilterLabel(group, key))));
  if (publicationQuery) chip("search", "", publicationSearch.value.trim());
  container.hidden = container.children.length === 0;
}
function applyCompactFilters() {
  let count = 0;
  publicationItems.forEach(item => {
    const metrics = new Set((item.dataset.tags || "").split(/\s+/).filter(Boolean));
    const topics = new Set((item.dataset.topics || "").split(/\s+/).filter(Boolean));
    const categories = new Set([...topics].map(topic => TOPIC_META[topic]?.category).filter(Boolean));
    const show = [...selectedMetrics].every(key => metrics.has(key)) &&
      [...selectedCategories].every(key => categories.has(key)) &&
      [...selectedTopics].every(key => key.split("|").some(topic => topics.has(topic))) &&
      [...selectedVenues].every(key => item.dataset.venue === key) &&
      (!publicationQuery || (item.dataset.search || "").includes(publicationQuery));
    item.style.display = show ? "" : "none";
    item.hidden = !show;
    if (show) count++;
  });
  publicationYearGroups.forEach(group => {
    const visible = [...group.querySelectorAll(".pub-item")].filter(item => !item.hidden);
    group.style.display = visible.length ? "" : "none";
    group.hidden = visible.length === 0;
    const label = group.querySelector(".pub-year-count");
    if (label) label.textContent = String(visible.length);
  });
  document.querySelectorAll("[data-metric-filter]").forEach(input => {
    const active = selectedMetrics.has(input.dataset.metricFilter);
    input.checked = active;
    input.parentElement.classList.toggle("active", active);
  });
  document.querySelectorAll("[data-category-filter]").forEach(input => {
    const active = selectedCategories.has(input.dataset.categoryFilter);
    input.checked = active;
    input.parentElement.classList.toggle("active", active);
  });
  document.querySelectorAll("[data-topic-filter], [data-topic-chip]").forEach(button => {
    const key = canonicalTopicFilter(button.dataset.topicFilter || button.dataset.topicChip);
    const active = selectedTopics.has(key);
    button.classList.toggle(button.dataset.topicFilter !== undefined ? "active-row" : "active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-venue-filter]").forEach(button => {
    const active = selectedVenues.has(button.dataset.venueFilter);
    button.classList.toggle("active-row", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("filterSummary").textContent = `Showing ${count} of ${PUBS.length} publications`;
  const visibleCounter = document.getElementById("visibleCount");
  if (visibleCounter) visibleCounter.textContent = String(count);
  document.getElementById("pubListFull").hidden = count === 0;
  const empty = document.getElementById("emptyResults");
  if (empty) empty.hidden = count !== 0;
  detailToggle.disabled = count === 0;
  renderActivePublicationFilters();
}
function resetPublicationFilters() {
  Object.values(publicationFilterSets).forEach(set => set.clear());
  publicationQuery = "";
  publicationSearch.value = "";
  applyCompactFilters();
}
// Native buttons handle Enter/Space themselves; no duplicate keydown handlers.
document.querySelectorAll("[data-topic-filter]").forEach(button => button.addEventListener("click", () => selectTopic(button.dataset.topicFilter)));
document.querySelectorAll("[data-venue-filter]").forEach(button => button.addEventListener("click", () => selectVenue(button.dataset.venueFilter)));
document.querySelectorAll("[data-topic-chip]").forEach(button => button.addEventListener("click", () => {
  const restoreFocus = document.activeElement === button;
  selectTopic(button.dataset.topicChip);
  if (restoreFocus && button.closest(".pub-item")?.hidden) {
    const key = canonicalTopicFilter(button.dataset.topicChip);
    const dashboardButton = [...document.querySelectorAll("[data-topic-filter]")].find(item => canonicalTopicFilter(item.dataset.topicFilter) === key);
    (dashboardButton || document.getElementById("resetFilters"))?.focus();
  }
}));
let publicationSearchComposing = false;
function updatePublicationQuery() {
  publicationQuery = publicationSearch.value.replace(/\s+/g, " ").trim().toLowerCase();
  applyCompactFilters();
}
publicationSearch.addEventListener("compositionstart", () => { publicationSearchComposing = true; });
publicationSearch.addEventListener("compositionend", () => {
  publicationSearchComposing = false;
  updatePublicationQuery();
});
publicationSearch.addEventListener("input", event => {
  if (event.isComposing || publicationSearchComposing) return;
  updatePublicationQuery();
});
publicationSearch.addEventListener("keydown", event => {
  if (event.key !== "Escape" || event.isComposing || publicationSearchComposing || event.keyCode === 229) return;
  event.preventDefault();
  publicationQuery = "";
  publicationSearch.value = "";
  applyCompactFilters();
});
document.getElementById("resetFilters").addEventListener("click", resetPublicationFilters);
document.getElementById("resetEmptyFilters")?.addEventListener("click", event => {
  const restoreFocus = document.activeElement === event.currentTarget;
  resetPublicationFilters();
  if (restoreFocus) document.getElementById("resetFilters")?.focus();
});
applyCompactFilters();


/* Nav scroll + scroll reveal */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive:true });
