// ─────────────────────────────────────────────────────────────
// Portfolio content for Mariem Fersi — Data Science Engineer
// All claims here are factual. Where a metric is included it
// comes from a real evaluation; anything aspirational is
// explicitly labeled as target/proposed, never as verified.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Mariem Fersi',
  role: 'Data Science Engineer',
  positioning: 'AI Enthusiast · Actuarial Data Scientist',
  tagline: 'Engineering Data. Building AI. Modeling Risk.',
  description:
    'I build intelligent, data-driven solutions at the intersection of Artificial Intelligence, Data Science, Actuarial Science and Quantitative Risk.',
  graduation: 'July 2027',
  availability: 'Available now',
  goal: 'Available now for a 6-month international Final-Year Internship (PFE)',
  email: 'mariem.fersi@esprit.tn',
  linkedin: 'https://www.linkedin.com/in/mariem-fersi/',
  github: 'https://github.com/mariemfersi',
  cv: '/cv.pdf',
  photo: '/images/mariem (2).png',
  location: 'Tunis, Tunisia · Open to relocation',
};

// ── Candidate Snapshot ────────────────────────────────────────
export const snapshot = [
  {
    icon: '🎓',
    label: 'Data Science Engineering Student',
    value: 'ESPRIT',
    sub: 'Engineering degree · 2023–2027',
  },
  {
    icon: '📊',
    label: 'Actuarial Science',
    value: 'Le Mans University',
    sub: 'IRA · double-degree path · 2025–2027',
  },
  {
    icon: '🏆',
    label: 'Academic Performance',
    value: '16.45 / 20',
    sub: 'Ranked #2/27 in class',
  },
  {
    icon: '💼',
    label: 'Professional Experience',
    value: 'SOPAL · Capgemini · Talan',
    sub: 'Quality → Data Engineering → AI',
  },
  {
    icon: '🤖',
    label: 'Core Focus',
    value: 'AI · ML · Data Science',
    sub: 'Data Engineering · Risk Modeling',
  },
  {
    icon: '🌍',
    label: 'Current Goal',
    value: 'International PFE',
    sub: '6 months · available now',
  },
];

// ── What I Bring — four pillars ───────────────────────────────
export const valuePillars = [
  {
    key: 'ai',
    title: 'AI & Machine Learning',
    description:
      'Building predictive and intelligent systems using modern ML and deep learning techniques.',
  },
  {
    key: 'data',
    title: 'Data Engineering',
    description:
      'Designing data pipelines, APIs, data processing workflows and analytics systems.',
  },
  {
    key: 'risk',
    title: 'Actuarial & Risk Modeling',
    description:
      'Applying statistics, probability and actuarial methods to insurance and risk problems.',
  },
  {
    key: 'quant',
    title: 'Quantitative Thinking',
    description:
      'Combining mathematical modeling, statistics and machine learning for complex decision-making.',
  },
];

// ── Skills — categorised, only genuinely supported ────────────
export const skills = [
  {
    category: 'Data Science',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistics'],
  },
  {
    category: 'AI / Machine Learning',
    items: ['PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'Deep Learning', 'SHAP'],
  },
  {
    category: 'Generative AI',
    items: ['LLMs', 'RAG', 'LangGraph', 'AI Agents', 'NLP'],
  },
  {
    category: 'Data Engineering',
    items: ['SQL', 'ETL', 'SSIS', 'APIs', 'Data Pipelines', 'PostgreSQL'],
  },
  {
    category: 'MLOps / Deployment',
    items: ['FastAPI', 'Docker', 'MLflow', 'GitHub Actions', 'Azure'],
  },
  {
    category: 'Actuarial / Quantitative',
    items: ['GLM', 'CANN', 'NGBoost', 'Reserving', 'Mortality Modeling', 'Monte Carlo', 'Risk Modeling'],
  },
];

// ── Projects ──────────────────────────────────────────────────
// order matters — the flagship project is presented first.

export type BuildStatus = 'In progress' | 'Implemented' | 'Prototype' | 'Research / Proposed';

export interface ProjectLifecycle {
  stage: string;
  text: string;
}

export interface ProjectMedia {
  demos?: { label: string; href: string }[];
  report?: { label: string; href: string };
}

export interface Project {
  id: string;
  title: string;
  domain: string;
  ring: 'flagship' | 'featured';
  problem: string;
  built: string;
  statuses?: { status: BuildStatus; note: string }[];
  metrics?: { value: string; label: string; context: string }[];
  technologies: string[];
  links: { label: string; href: string }[];
  lifecycle: ProjectLifecycle[];
  flagshipNote?: string;
  media?: ProjectMedia;
}

export const projects: Project[] = [
  {
    id: 'deep-distributional-actuarial',
    title: 'Deep Distributional Actuarial Modeling',
    domain: 'AI · Actuarial Science',
    ring: 'flagship',
    problem:
      'Traditional actuarial models (GLM) return point estimates without the uncertainty a regulator or a balance sheet needs, while deep learning models are hard to calibrate and interpret in insurance.',
    built:
      'A research-engineering platform that couples a classical GLM baseline with deep distributional learning — CANN hybrids and NGBoost predictive distributions — and a Gaussian copula for dependence. Conformal prediction adds calibrated uncertainty bounds, SHAP explains the drivers, and the whole pipeline is served through FastAPI, tracked in MLflow and containerized with Docker. Applied to pricing, reserving and fraud detection.',
    metrics: [
      { value: '+7%', label: 'Gini improvement vs GLM baseline', context: 'Pure-premium ranking on the evaluation set' },
      { value: '91.9%', label: 'Conformal coverage', context: 'Empirical coverage measured on the evaluation set' },
      { value: '0.815', label: 'Fraud AUC-ROC', context: 'Fraud-detection model on the evaluation set' },
    ],
    technologies: ['PyTorch', 'CANN', 'NGBoost', 'Gaussian Copula', 'Conformal Prediction', 'GLM', 'SHAP', 'FastAPI', 'MLflow', 'Docker'],
    links: [
      { label: 'GitHub', href: 'https://github.com/mariemfersi/Deep-Distributional-Actuarial-Modeling' },
    ],
    media: {
      demos: [
        {
          label: 'Actuarial AI Platform demo',
          href: '/videos&report/demo_actuarial-ai-platform.mp4',
        },
      ],
    },
    lifecycle: [
      { stage: 'Problem', text: 'Insurance decisions need accurate, calibrated predictions with quantified uncertainty — GLMs under-fit, black-box models over-uncalibrate.' },
      { stage: 'Data', text: 'Pricing, reserving and fraud evaluation datasets built for frequency–severity and claim modeling.' },
      { stage: 'Method', text: 'Distributional learning: CANN nests a deep net inside the GLM, NGBoost outputs full predictive distributions, a Gaussian copula models dependence between loss components.' },
      { stage: 'Model', text: 'GLM baseline benchmarked against CANN, NGBoost and a copula-fused ensemble.' },
      { stage: 'Evaluation', text: 'Gini for ranking quality, empirical conformal coverage for calibration, AUC-ROC for fraud discrimination.' },
      { stage: 'Explainability', text: 'SHAP global and local attributions across pricing, reserving and fraud outputs.' },
      { stage: 'Deployment', text: 'Modular FastAPI service, MLflow experiment tracking, Docker image for reproducible runs.' },
    ],
    flagshipNote: 'My primary research project — engineering + AI + actuarial depth end to end.',
  },
  {
    id: 'multi-agent-fx',
    title: 'Multi-Agent FX Intelligence',
    domain: 'AI Engineering · Quantitative Finance',
    ring: 'featured',
    problem:
      'Forex decisions depend on market prices, macroeconomic indicators and sentiment at the same time — a single model sees only one lens, and its reasoning stays invisible.',
    built:
      'A LangGraph multi-agent framework in which specialized agents independently analyze market data, macroeconomics and sentiment, then collaborate to reach a decision. Retrieval (RAG) grounds the agents in context, and SHAP attributions make each signal explainable.',
    technologies: ['Python', 'LangGraph', 'Multi-Agent', 'RAG', 'LLMs', 'NLP', 'OCR', 'InfluxDB', 'FastAPI', 'React', 'SHAP'],
    links: [
      { label: 'GitHub', href: 'https://github.com/INESCHTI/Esprit-PI-4DS11-2526-MajorCurrencies' },
    ],
    media: {
      demos: [{ label: 'Trady demo', href: '/videos&report/demo_trady.mp4' }],
    },
    lifecycle: [
      { stage: 'Problem', text: 'Cross-modal market analysis is fragmented; answers must be explainable to be actionable.' },
      { stage: 'Data', text: 'Market price streams, macroeconomic indicators and sentiment/signal data joined into one analysis surface.' },
      { stage: 'Method', text: 'Agent-based orchestration with RAG-augmented reasoning across the three data modalities.' },
      { stage: 'Model', text: 'Specialized per-modality agents coordinated by a LangGraph supervisor.' },
      { stage: 'Evaluation', text: 'Qualitative signal quality review per modality plus explainability checks.' },
      { stage: 'Explainability', text: 'SHAP feature importance on the final signal and per-agent traceability.' },
      { stage: 'Deployment', text: 'FastAPI service with a React interface; time-series storage on InfluxDB.' },
    ],
  },
  {
    id: 'climateguard-ai',
    title: 'ClimateGuard AI',
    domain: 'Climate Risk · Reinsurance · AI',
    ring: 'featured',
    problem:
      'Property–casualty reinsurers price catastrophe risk with vendor cat models recalibrated on multi-year cycles — treated as black boxes and increasingly out of step with the pace of climate change.',
    built:
      'A climate-risk platform that continuously ingests physical climate data alongside exposure and claims to build a climate-adjusted view of catastrophe risk, wrapped in an AI system that automates the bridge between models and underwriting.',
    statuses: [
      { status: 'Implemented', note: 'Gradient-boosting ensemble (XGBoost, LightGBM) for hazard/loss prediction, SHAP explainability, FastAPI serving, MLflow tracking, CI.' },
      { status: 'Prototype', note: 'Temporal forecasting (Temporal Fusion Transformer) and a multi-agent LLM layer that drafts reports and answers questions over treaty/RAG context.' },
      { status: 'Research / Proposed', note: 'Graph Neural Networks for exposure dependence, Vision Transformer for satellite imagery, and the full Azure-native deployment architecture (Data Factory, Data Lake, Databricks, Azure ML, OpenAI, AKS, Power BI).' },
    ],
    technologies: ['Python', 'Azure', 'XGBoost', 'LightGBM', 'CatBoost', 'Temporal Forecasting', 'TFT', 'GNN', 'Computer Vision', 'RAG', 'AI Agents', 'SHAP', 'FastAPI', 'MLflow', 'React', 'Next.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/mariemfersi/climateguard-ai' },
    ],
    media: {
      demos: [
        {
          label: 'ClimateGuard AI demo',
          href: '/videos&report/demo_climateguard-ai.mp4',
        },
      ],
    },
    lifecycle: [
      { stage: 'Problem', text: 'Catastrophe risk is repriced too slowly for a changing climate; model output to underwriting decision is manual and opaque.' },
      { stage: 'Data', text: 'Physical climate data, exposure, claims and financial-market inputs.' },
      { stage: 'Method', text: 'Ensemble ML for hazard/loss plus statistical loss-distribution fusion; agentic LLM layer with RAG over treaty wordings and regulation.' },
      { stage: 'Model', text: 'Gradient boosting (implemented); temporal, GNN and vision models (prototype/research).' },
      { stage: 'Evaluation', text: 'Drift detection and retraining as part of the proposed MLOps loop.' },
      { stage: 'Explainability', text: 'SHAP/LIME and counterfactual layer; citations trail for generated reports.' },
      { stage: 'Deployment', text: 'Proposed Azure-native architecture with model registry and serving on AKS.' },
    ],
  },
  {
    id: 'mortality-life-insurance',
    title: 'Mortality & Life Insurance',
    domain: 'Actuarial Modeling',
    ring: 'featured',
    problem:
      'Life insurance pricing and reserving depend on mortality assumptions that static models handle poorly — trends and improvements are missed.',
    built:
      'Implemented stochastic mortality models with StMoMo on Human Mortality Database data to forecast mortality rates and value annuity products with calibrated confidence.',
    technologies: ['R', 'StMoMo', 'Human Mortality Database', 'Statistical Modeling', 'Annuity Valuation'],
    links: [
      { label: 'GitHub', href: 'https://github.com/mariemfersi/Mortality-Life-Insurance-Portfolio-Analysis' },
    ],
    media: {
      report: {
        label: 'Read mortality report (PDF)',
        href: '/videos&report/rapport_mortality.pdf',
      },
    },
    lifecycle: [
      { stage: 'Problem', text: 'Static mortality assumptions misprice longevity and annuity liabilities.' },
      { stage: 'Data', text: 'Human Mortality Database population data across age and time.' },
      { stage: 'Method', text: 'Stochastic mortality models (StMoMo) that capture trends and cohort effects.' },
      { stage: 'Model', text: 'Benchmarked mortality projections across model variants.' },
      { stage: 'Evaluation', text: 'Fit and forecast comparison across time horizons.' },
      { stage: 'Explainability', text: 'Model parameters and trend surfaces interpretable for actuarial review.' },
      { stage: 'Deployment', text: 'Reproducible R analysis scripts for the mortality and valuation pipeline.' },
    ],
  },
  {
    id: 'asset-valuation-ai',
    title: 'AI Asset Valuation & Insurance Risk',
    domain: 'Document AI · Insurance',
    ring: 'featured',
    problem:
      'Asset valuation pulls data from PDFs and Excel files, then applies financial models by hand — slow, error-prone and hard to audit for insurance and notarial workflows.',
    built:
      'A document-processing platform that extracts valuation inputs with OCR and LLM-based reading (Python, OpenCV, PDF parsing), normalizes them in Pandas, and runs financial models for DVF valuation, insurance value and replacement cost, with OpenPyXL report generation.',
    statuses: [{ status: 'In progress', note: 'Active development.' }],
    technologies: ['Python', 'Pandas', 'OpenPyXL', 'PDF Processing', 'OpenCV', 'OCR', 'LLMs', 'FastAPI', 'React'],
    links: [
      { label: 'GitHub', href: 'https://github.com/mariemfersi/asset-valuation-ai' },
    ],
    lifecycle: [
      { stage: 'Problem', text: 'Manual, inconsistent extraction across heterogeneous documents drives valuation errors.' },
      { stage: 'Data', text: 'Real-estate and asset documents (PDF, Excel) with structured and unstructured fields.' },
      { stage: 'Method', text: 'Document AI pipeline: OCR + LLM field extraction → validation → templated financial modeling.' },
      { stage: 'Model', text: 'Extraction models combined with deterministic financial calculations for DVF / insurance value / replacement cost.' },
      { stage: 'Evaluation', text: 'Field-level extraction checks against source documents during validation.' },
      { stage: 'Explainability', text: 'Extracted fields are surfaced for review — every calculation traces to a document value.' },
      { stage: 'Deployment', text: 'Python services (Pandas/OpenPyXL) with a browser interface for upload, review and export.' },
    ],
  },
];

// ── Experience ────────────────────────────────────────────────
export interface Experience {
  company: string;
  role: string;
  period: string;
  focus: string;
  bullets: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: 'Talan',
    role: 'AI / Actuarial Modeling Intern',
    period: 'Jul – Sep 2026',
    focus: 'Deep learning applied to insurance',
    bullets: [
      'Designed an end-to-end AI architecture combining LLMs, machine learning and data pipelines for uncertainty-aware insurance pricing, reserving and fraud detection.',
      'Implemented distributional pricing experiments (GLM baseline, CANN, NGBoost) and conformal prediction to quantify reserving uncertainty.',
      'Evaluated GNN-based fraud detection with SHAP explainability, tracking experiments in MLflow and serving models with FastAPI/Docker.',
    ],
    technologies: ['PyTorch', 'PyTorch Geometric', 'NGBoost', 'CANN', 'GLM', 'SHAP', 'MLflow', 'FastAPI', 'Docker'],
  },
  {
    company: 'Capgemini',
    role: 'Data Engineering & BI Intern',
    period: 'Jun – Aug 2025',
    focus: 'Data engineering for connected vehicles',
    bullets: [
      'Built ETL pipelines in SSIS to consolidate connected-vehicle telemetry into modeled SQL Server schemas.',
      'Developed Power BI dashboards with DAX so analytics teams could act on the modeled data.',
      'Automated recurring data-preparation and quality-check workflows.',
    ],
    technologies: ['SSIS', 'SQL Server', 'SSMS', 'Power BI', 'DAX', 'Data Modeling', 'EDA'],
  },
  {
    company: 'SOPAL',
    role: 'Quality & Environmental Intern',
    period: 'Jun – Aug 2023',
    focus: 'Process quality and compliance',
    bullets: [
      'Monitored production and quality processes, standardizing documentation workflows.',
      'Supported environmental-compliance activities and audit-ready record keeping.',
    ],
    technologies: ['Quality Management', 'Process Monitoring', 'Documentation', 'Environmental Compliance'],
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    institution: 'ESPRIT',
    degree: 'Engineering Degree in Data Science',
    period: '2023 – 2027',
    location: 'Tunisia',
    accent: 'branch',
  },
  {
    institution: 'Le Mans University (IRA)',
    degree: 'Master in Actuarial Science',
    period: '2025 – 2027',
    location: 'France',
    accent: 'actuarial',
  },
];

// ── Academic excellence ───────────────────────────────────────
export const academicExcellence = [
  {
    label: 'Second Engineering Year',
    average: '16.45',
    rank: 'Ranked #2/27 in class',
    highlight: true,
  },
  {
    label: 'First Engineering Year',
    average: '16.31',
    rank: 'Major of engineering class',
    highlight: false,
  },
];

// ── Certifications ────────────────────────────────────────────
export interface Certification {
  provider: string;
  title: string;
  type: string;
  date: string;
  description: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    provider: 'AWS',
    title: 'AWS SimuLearn: AI Practitioner',
    type: 'Completion Certificate',
    date: 'July 22, 2026',
    description: 'Completion certificate for the AWS SimuLearn AI Practitioner learning program.',
    image: '/certifications/nvidia-ai-anomaly-detection.png',
  },
  {
    provider: 'Oracle',
    title: 'Oracle Data Platform 2025 Certified Foundations Associate',
    type: 'Certified Foundations Associate',
    date: 'August 22, 2025',
    description: 'Oracle certification recognizing foundation-level knowledge of the Oracle Data Platform.',
    image: '/certifications/nvidia-fundamentals-of-deep-learning.png',
  },
  {
    provider: 'NVIDIA',
    title: 'Applications of AI for Anomaly Detection',
    type: 'Certificate of Competency',
    date: 'April 4, 2026',
    description: 'Certificate of competency in applications of AI for anomaly detection.',
    image: '/certifications/aws-simulearn-ai-practitioner.png',
  },
  {
    provider: 'NVIDIA',
    title: 'Fundamentals of Deep Learning',
    type: 'Certificate of Competency',
    date: 'February 28, 2026',
    description: 'Certificate of competency in the fundamentals of deep learning.',
    image: '/certifications/oracle-data-platform-foundations.png',
  },
];

// ── International PFE ─────────────────────────────────────────
export const internshipSeeking = {
  headline: 'Looking for my 6-Month International PFE',
  start: 'Available now',
  duration: '6 months',
  graduation: 'July 2027',
  location: 'International / Open to relocation',
  interests: [
    'AI Engineering',
    'Machine Learning',
    'Data Science',
    'Data Engineering',
    'Actuarial Data Science',
    'Quantitative Finance',
    'Risk Analytics',
    'AI Research',
  ],
};

// ── Navigation ────────────────────────────────────────────────
export const navLinks = [
  { label: '01 Value', href: '#home' },
  { label: '02 Results', href: '#impact' },
  { label: '03 Experience', href: '#milestones' },
  { label: '04 Projects', href: '#work' },
  { label: '05 Contact', href: '#contact' },
];