'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Download, 
  Mail, 
  MapPin, 
  ExternalLink,
  Brain,
  Database,
  Shield,
  Cpu,
  ChevronRight,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Check,
  Clock,
  Building2,
  Award,
  Target,
  Zap,
  GraduationCap,
  Globe,
  Code,
  FileText,
  TrendingUp,
  Network,
  Activity
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────

const expertise = [
  {
    category: 'Artificial Intelligence & Machine Learning',
    description: 'Building intelligent systems using deep learning, LLMs, autonomous agents, NLP and computer vision.',
    technologies: ['Python', 'PyTorch', 'LLMs', 'RAG', 'LangGraph', 'NLP', 'Machine Learning'],
    icon: Brain,
    color: 'from-[#3B82F6] to-[#8B5CF6]'
  },
  {
    category: 'Quantitative Finance & Market Intelligence',
    description: 'Developing AI-driven financial systems for market analysis, signal generation and risk-aware decisions.',
    technologies: ['Time Series', 'Backtesting', 'Alpha Generation', 'Financial Modeling', 'Risk Metrics'],
    icon: TrendingUp,
    color: 'from-[#06B6D4] to-[#3B82F6]'
  },
  {
    category: 'Actuarial Science & Risk Modeling',
    description: 'Applying statistical models and deep learning to insurance pricing, reserving, mortality and uncertainty quantification.',
    technologies: ['GLM', 'CANN', 'Survival Analysis', 'Insurance Mathematics', 'Solvency II', 'IFRS17'],
    icon: Shield,
    color: 'from-[#8B5CF6] to-[#EC4899]'
  },
  {
    category: 'Data Engineering & Analytics',
    description: 'Building reliable pipelines transforming raw data into AI-ready datasets.',
    technologies: ['Python', 'SQL', 'Pandas', 'ETL', 'SSIS', 'PostgreSQL', 'APIs'],
    icon: Database,
    color: 'from-[#10B981] to-[#06B6D4]'
  },
  {
    category: 'AI Applications & Deployment',
    description: 'Turning research models into scalable production applications.',
    technologies: ['FastAPI', 'Django', 'React', 'Docker', 'MLflow', 'Cloud'],
    icon: Cpu,
    color: 'from-[#F59E0B] to-[#EF4444]'
  },
  {
    category: 'Explainable AI & Model Validation',
    description: 'Creating transparent AI systems with interpretable predictions and uncertainty estimation.',
    technologies: ['SHAP', 'LIME', 'Calibration', 'Feature Importance', 'GNNExplainer'],
    icon: Activity,
    color: 'from-[#6366F1] to-[#8B5CF6]'
  }
];

const projects = [
  {
    id: 1,
    title: 'Multi-Agent Multimodal FX Analysis Framework',
    category: 'AI Finance',
    description: 'AI-driven quantitative finance system using multi-agent architectures to analyze Forex markets and generate trading signals from market, macroeconomic and sentiment data.',
    technologies: ['Python', 'LangGraph', 'LLMs', 'RAG', 'NLP', 'OCR', 'InfluxDB', 'FastAPI', 'React', 'SHAP'],
    impact: 'Multi-agent AI + Quantitative Finance + Explainable AI',
    github: 'https://github.com/INESCHTI/Esprit-PI-4DS11-2526-MajorCurrencies'
  },
  {
    id: 2,
    title: 'AI Platform for Asset Valuation & Insurance Risk',
    category: 'AI Insurance',
    description: 'Intelligent valuation system combining document AI, LLM extraction and financial modeling to estimate asset fair value, insurance value and replacement costs.',
    technologies: ['Python', 'Pandas', 'OpenPyXL', 'PDFPlumber', 'Ollama', 'LLMs', 'FastAPI', 'React'],
    impact: 'Document AI + Financial Modeling',
    github: 'https://github.com/mariemfersi/asset-valuation-ai'
  },
  {
    id: 3,
    title: 'Deep Distributional Actuarial Modeling',
    category: 'Research AI',
    description: 'Research-oriented actuarial AI platform combining classical actuarial methods with deep learning for uncertainty-aware pricing, reserving and fraud detection.',
    technologies: ['PyTorch', 'PyTorch Geometric', 'NGBoost', 'GLM', 'SHAP', 'MLflow', 'Docker'],
    impact: 'Deep Learning + Actuarial Science',
    github: 'https://github.com/yourusername/deep-actuarial-modeling'
  },
  {
    id: 4,
    title: 'Mortality & Life Insurance Portfolio Analysis',
    category: 'Actuarial Modeling',
    description: 'Actuarial project focused on mortality estimation, forecasting and annuity valuation using demographic data.',
    technologies: ['R', 'StMoMo', 'Human Mortality Database'],
    impact: 'Demographic Analysis + Mortality Forecasting',
    github: 'https://github.com/mariemfersi/Mortality-Life-Insurance-Portfolio-Analysis'
  }
];

const experience = [
  {
    company: 'SOPAL',
    role: 'Quality & Environmental Intern',
    period: 'June - August 2023',
    description: 'Contributed to quality and environmental management processes through operational monitoring, documentation workflows, and compliance activities.',
    skills: ['Quality Management', 'Process Monitoring', 'Documentation', 'Environmental Compliance'],
    achievements: []
  },
  {
    company: 'CAPGEMINI',
    role: 'Data Engineering & BI Intern',
    period: 'June - August 2025',
    description: 'Developed a business intelligence solution for connected vehicle data analytics by designing ETL pipelines, preparing datasets, building data models, and creating analytical dashboards.',
    achievements: [
      'ETL pipeline development with SSIS',
      'SQL Server data modeling',
      'Power BI dashboard creation',
      'Data analysis automation'
    ],
    technologies: ['SSIS', 'SQL Server', 'SSMS', 'Power BI', 'DAX', 'Data Modeling', 'EDA']
  },
  {
    company: 'TALAN',
    role: 'Deep Learning Actuarial Modeling Intern',
    period: 'July - September 2026',
    description: 'Developing uncertainty-aware AI models for insurance pricing, reserving, and fraud detection by combining actuarial mathematics with deep learning.',
    researchAreas: {
      pricing: ['CANN', 'GLM', 'Distributional Modeling'],
      reserving: ['Deep Learning', 'Conformal Prediction'],
      fraud: ['Graph Neural Networks']
    },
    technologies: ['PyTorch', 'PyTorch Geometric', 'NGBoost', 'SHAP', 'MLflow', 'FastAPI', 'Docker']
  }
];

const leadership = [
  {
    organization: 'IEEE MSE Student Branch',
    role: 'Secretary General',
    period: '2024 - Present',
    responsibilities: [
      'Coordinating engineering student initiatives',
      'Supporting technical workshops and events',
      'Managing communication between members',
      'Promoting innovation and collaboration'
    ],
    skills: ['Team Leadership', 'Event Management', 'Communication', 'Strategic Planning'],
    impact: 'Building technical community and fostering student innovation'
  },
  {
    organization: 'LEO Club Sfax Synergie',
    role: 'Secretary General',
    period: '2023 - Present',
    responsibilities: [
      'Managing organizational activities',
      'Coordinating volunteer projects',
      'Improving teamwork and project management',
      'Supporting community initiatives'
    ],
    skills: ['Project Management', 'Volunteer Coordination', 'Community Building', 'Team Collaboration'],
    impact: 'Driving social impact through community service'
  }
];

const timeline = [
  {
    year: '2023',
    title: 'Computer Engineering Journey',
    description: 'Started engineering studies at ESPRIT'
  },
  {
    year: '2025',
    title: 'Double Degree Program',
    description: 'ESPRIT + Le Mans Université Master Actuariat'
  },
  {
    year: '2025-2026',
    title: 'AI/Data Engineering Projects',
    description: 'Multiple internships and research projects'
  },
  {
    year: '2026',
    title: 'International PFE Internship',
    description: 'Seeking 6-month international opportunity'
  }
];

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export function PortfolioShell() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot for spam
    if (honeypot) {
      console.log('Spam detected');
      return;
    }

    setFormStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  // Scroll spy
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'leadership', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-[#F8FAFC] overflow-x-hidden font-sans">
      
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,8,22,0.8)] backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#3B82F6] to-[#06B6D4]">
              <img
                src="/images/mariem (2).png"
                alt="Mariem Fersi"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-lg tracking-tight">Mariem Fersi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#3B82F6]' 
                    : 'text-[#CBD5E1] hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white text-sm font-semibold hover:from-[#2563EB] hover:to-[#0891B2] transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1220] to-[#050816]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Blurred light sources */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4]/5 rounded-full blur-[180px]" />

        <div className="mx-auto max-w-[1280px relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Availability Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3B82F6]/30 bg-[rgba(59,130,246,0.1)] text-sm text-[#CBD5E1] mb-8"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(59,130,246,0.2)', '0 0 30px rgba(59,130,246,0.3)', '0 0 20px rgba(59,130,246,0.2)'] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                AVAILABLE FOR 6-MONTH INTERNATIONAL PFE INTERNSHIP • 2026
              </motion.div>

              {/* Main Title */}
              <h1 className="text-[72px] font-bold leading-[1.1] mb-6 tracking-tight">
                AI Engineer & 
                <span className="block bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Actuarial Data Scientist
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-[#CBD5E1] mb-6 leading-relaxed">
                Building intelligent systems at the intersection of Artificial Intelligence, Quantitative Finance and Insurance.
              </p>

              {/* Description */}
              <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed max-w-xl">
                Engineering Student @ ESPRIT | Master Actuarial Science @ Le Mans University
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-semibold hover:from-[#2563EB] hover:to-[#0891B2] transition-all shadow-lg shadow-[#3B82F6]/25"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </motion.div>

            {/* Right Column - Autonomous Intelligence Core */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative h-[600px]"
            >
              {/* Neural Network Background Grid */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                  <pattern id="neuralGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#3B82F6" />
                    <path d="M 20 0 L 20 40 M 0 20 L 40 20" stroke="#3B82F6" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#neuralGrid)" />
              </svg>

              {/* Central AI Cognitive Engine */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer Rotating Ring */}
                <motion.div
                  className="absolute w-48 h-48 rounded-full border-2 border-[#3B82F6]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Middle Rotating Ring */}
                <motion.div
                  className="absolute w-40 h-40 rounded-full border border-[#06B6D4]/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Inner Rotating Ring */}
                <motion.div
                  className="absolute w-32 h-32 rounded-full border border-[#A855F7]/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                {/* AI Core Sphere */}
                <motion.div
                  className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#3B82F6] via-[#06B6D4] to-[#A855F7] flex items-center justify-center shadow-2xl shadow-[#3B82F6]/50"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: ['0 0 30px rgba(59,130,246,0.3)', '0 0 50px rgba(59,130,246,0.5)', '0 0 30px rgba(59,130,246,0.3)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-14 h-14 text-white" />
                  
                  {/* Scanning Wave Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-transparent"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                {/* AI Core Labels */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center">
                  <div className="text-sm font-bold text-[#3B82F6]">AI Decision Engine</div>
                  <div className="text-xs text-[#94A3B8]">LLM + ML + Agents</div>
                </div>
              </div>

              {/* 5 Intelligent Agent Modules */}
              {[
                { id: 'data', label: 'Data Intelligence', sublabel: 'ETL • Streaming • Features', x: -160, y: -120, color: '#06B6D4' },
                { id: 'risk', label: 'Quant Risk', sublabel: 'Risk • Monte Carlo • Portfolio', x: 160, y: -120, color: '#A855F7' },
                { id: 'valuation', label: 'Valuation', sublabel: 'Pricing • Insurance • Fair Value', x: -160, y: 120, color: '#10B981' },
                { id: 'fraud', label: 'Fraud Intelligence', sublabel: 'Graph AI • Anomaly • Patterns', x: 160, y: 120, color: '#F97316' },
                { id: 'predictive', label: 'Predictive Analytics', sublabel: 'Forecasting • Time Series • Actuarial', x: 0, y: -180, color: '#3B82F6' }
              ].map((agent, i) => {
                const staticX = agent.x;
                const staticY = agent.y;
                const yValues = [staticY, staticY - 5, staticY];
                return (
                  <motion.div
                    key={agent.id}
                    className="absolute w-28 h-20 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-3"
                    style={{
                      left: 'calc(50% + 0px)',
                      top: 'calc(50% + 0px)',
                      marginLeft: '-56px',
                      marginTop: '-40px'
                    }}
                    animate={{
                      x: yValues.map(y => staticX),
                      y: yValues
                    }}
                    initial={{ x: staticX, y: staticY }}
                    whileHover={{ scale: 1.05, borderColor: agent.color }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.25
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg mb-2" style={{ background: `linear-gradient(135deg, ${agent.color}40, ${agent.color})` }}>
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white/80" />
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-[#F8FAFC] text-center leading-tight">{agent.label}</div>
                    <div className="text-[9px] text-[#94A3B8] text-center leading-tight mt-1">{agent.sublabel}</div>
                  </motion.div>
                );
              })}

              {/* Flowing Data Particles */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }}>
                {[
                  { fromX: -160, fromY: -120 },
                  { fromX: 160, fromY: -120 },
                  { fromX: -160, fromY: 120 },
                  { fromX: 160, fromY: 120 },
                  { fromX: 0, fromY: -180 }
                ].map((pos, i) => {
                  const cxStart = 50 + pos.fromX / 5;
                  const cyStart = 50 + pos.fromY / 5;
                  const cxEnd = 50;
                  const cyEnd = 50;
                  const cxValues = [cxStart, cxEnd, cxEnd];
                  const cyValues = [cyStart, cyEnd, cyEnd];
                  const opacityValues = [0, 1, 0];
                  
                  return (
                    <motion.circle
                      key={i}
                      r="2"
                      fill="url(#particleGradient)"
                      animate={{
                        cx: cxValues,
                        cy: cyValues,
                        opacity: opacityValues
                      }}
                      initial={{ cx: cxStart, cy: cyStart, opacity: 0 }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5
                      }}
                    />
                  );
                })}
                <defs>
                  <radialGradient id="particleGradient">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Mini Financial Prediction Dashboard */}
              <motion.div
                className="absolute bottom-4 left-4 w-32 h-24 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl p-2"
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                initial={{ opacity: 0.6 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-[9px] text-[#94A3B8] mb-1">Prediction</div>
                <svg className="w-full h-12" viewBox="0 0 100 50">
                  <motion.path
                    d="M 0 40 Q 20 35, 40 25 T 80 15 L 100 10"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                    animate={{
                      d: ['M 0 40 Q 20 35, 40 25 T 80 15 L 100 10', 'M 0 38 Q 20 33, 40 23 T 80 13 L 100 8', 'M 0 40 Q 20 35, 40 25 T 80 15 L 100 10']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.path
                    d="M 0 42 Q 20 40, 40 35 T 80 30 L 100 25"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.5"
                    animate={{
                      d: ['M 0 42 Q 20 40, 40 35 T 80 30 L 100 25', 'M 0 40 Q 20 38, 40 33 T 80 28 L 100 23', 'M 0 42 Q 20 40, 40 35 T 80 30 L 100 25']
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </svg>
                <div className="flex justify-between text-[8px] text-[#94A3B8]">
                  <span>+12.4%</span>
                  <span className="text-[#10B981]">Confidence: 94%</span>
                </div>
              </motion.div>

              {/* AI System Status Terminal */}
              <motion.div
                className="absolute top-4 right-4 w-36 h-28 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl p-2 font-mono"
                animate={{ opacity: [0.7, 1, 0.7] }}
                initial={{ opacity: 0.7 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-[9px] text-[#3B82F6] mb-2">AI SYSTEM STATUS</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] text-[#94A3B8]">LLM: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] text-[#94A3B8]">Agents: 5/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] text-[#94A3B8]">Latency: 12ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] text-[#94A3B8]">Uptime: 99.9%</span>
                  </div>
                </div>
              </motion.div>

              {/* Confidence Score Visualization */}
              <motion.div
                className="absolute top-1/2 left-4 -translate-y-1/2 w-20 h-32 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl p-2"
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                initial={{ opacity: 0.6 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-[9px] text-[#94A3B8] mb-2 text-center">Confidence</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-[8px] text-[#94A3B8] mb-1">Risk</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                        animate={{ width: ['85%', '92%', '85%'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#94A3B8] mb-1">Value</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#A855F7] to-[#EC4899]"
                        animate={{ width: ['78%', '88%', '78%'] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#94A3B8] mb-1">Fraud</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#F97316] to-[#EF4444]"
                        animate={{ width: ['91%', '96%', '91%'] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mathematical Formulas */}
              <motion.div
                className="absolute bottom-4 right-4 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/5 backdrop-blur-xl text-[10px] font-mono text-[#94A3B8]"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                initial={{ opacity: 0.4 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                P(y|x) = softmax(Wx + b)
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-[#94A3B8] rotate-90" />
        </motion.div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="relative px-6 py-32 bg-[#0B1220]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left - Identity Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative p-8 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3B82F6]/20 via-[#8B5CF6]/20 to-[#06B6D4]/20 opacity-50" />
                
                {/* AI Network Animation */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {[
                    { left: '10%', top: '15%' },
                    { left: '25%', top: '45%' },
                    { left: '40%', top: '25%' },
                    { left: '55%', top: '55%' },
                    { left: '70%', top: '35%' },
                    { left: '85%', top: '65%' },
                    { left: '15%', top: '75%' },
                    { left: '30%', top: '85%' },
                    { left: '60%', top: '10%' },
                    { left: '75%', top: '80%' },
                    { left: '20%', top: '60%' },
                    { left: '45%', top: '70%' },
                    { left: '65%', top: '20%' },
                    { left: '80%', top: '45%' },
                    { left: '35%', top: '55%' },
                    { left: '50%', top: '40%' },
                    { left: '90%', top: '25%' },
                    { left: '5%', top: '50%' },
                    { left: '95%', top: '70%' },
                    { left: '12%', top: '30%' }
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-[#3B82F6]"
                      style={{
                        left: pos.left,
                        top: pos.top,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#3B82F6]/30 shadow-2xl shadow-[#3B82F6]/20"
                  >
                    <img
                      src="/images/mariem (2).png"
                      alt="Mariem Fersi"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-center mb-2 text-[#F8FAFC]">Mariem Fersi</h2>
                  <div className="text-center mb-4">
                    <div className="text-lg text-[#3B82F6] font-semibold mb-1">AI Engineer</div>
                    <div className="text-lg text-[#8B5CF6] font-semibold">Actuarial Data Scientist</div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[#3B82F6]/30">
                    <GraduationCap className="w-5 h-5 text-[#06B6D4]" />
                    <span className="text-sm text-[#CBD5E1]">ESPRIT × Le Mans University</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[rgba(16,185,129,0.1)] border border-[#10B981]/30">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-[#CBD5E1]">Available for 6-month internship</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Professional Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 tracking-tight">About</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full mb-8" />
              
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
                I am an <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent font-semibold">AI Engineer</span> and <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent font-semibold">Actuarial Data Scientist</span> specializing in building intelligent systems where machine learning meets quantitative modeling.
              </p>
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
                My work focuses on designing end-to-end AI solutions, from data pipelines and predictive models to autonomous agents and explainable decision systems.
              </p>
              <p className="text-lg text-[#CBD5E1] leading-relaxed mb-8">
                Through projects in quantitative finance, asset valuation, and insurance analytics, I explore how <span className="bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent font-semibold">AI can improve complex risk-based decisions</span>.
              </p>

              {/* Focus Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-[#3B82F6] font-semibold mb-2">AI Systems</div>
                  <div className="text-sm text-[#94A3B8]">Agentic AI, LLMs, Deep Learning</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-[#8B5CF6] font-semibold mb-2">Risk Modeling</div>
                  <div className="text-sm text-[#94A3B8]">Finance, Insurance, Actuarial Science</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-[#06B6D4] font-semibold mb-2">Trustworthy AI</div>
                  <div className="text-sm text-[#94A3B8]">Explainability, Calibration, Uncertainty</div>
                </motion.div>
              </div>

              {/* Timeline */}
              <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl">
                <h3 className="font-semibold text-lg mb-6 text-[#F8FAFC]">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm text-[#06B6D4] font-mono">2023</div>
                    <div className="flex-1">
                      <div className="text-[#F8FAFC] font-medium">SOPAL Internship</div>
                      <div className="text-sm text-[#94A3B8]">Quality & Environment</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm text-[#3B82F6] font-mono">2025</div>
                    <div className="flex-1">
                      <div className="text-[#F8FAFC] font-medium">Capgemini Internship</div>
                      <div className="text-sm text-[#94A3B8]">Data Engineering</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm text-[#8B5CF6] font-mono">2026</div>
                    <div className="flex-1">
                      <div className="text-[#F8FAFC] font-medium">Talan Internship</div>
                      <div className="text-sm text-[#94A3B8]">Deep Actuarial AI</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-20 text-sm text-[#10B981] font-mono">2026</div>
                    <div className="flex-1">
                      <div className="text-[#F8FAFC] font-medium">Graduation</div>
                      <div className="text-sm text-[#94A3B8]">ESPRIT + Le Mans University</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section id="skills" className="relative px-6 py-32 bg-[#050816]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">AI & Quantitative Engineering Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full mb-6" />
            <p className="text-xl text-[#CBD5E1] max-w-3xl">
              Designing intelligent systems combining machine learning, actuarial mathematics, and financial data engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, idx) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-white/10 backdrop-blur-xl hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#F8FAFC] leading-tight">{item.category}</h3>
                <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] text-xs text-[#CBD5E1] border border-white/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="relative px-6 py-32 bg-[#0B1220]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#06B6D4] to-[#2563EB] rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
                className="p-8 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-white/10 backdrop-blur-xl hover:border-[#06B6D4]/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-semibold text-[#06B6D4] mb-2 uppercase tracking-wider">{project.category}</div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] leading-tight pr-4">{project.title}</h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#94A3B8] hover:text-white hover:bg-white/10 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-[#CBD5E1] mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-[rgba(37,99,235,0.1)] border border-[#2563EB]/20 text-xs text-[#CBD5E1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 border border-[#2563EB]/30 text-[#06B6D4] text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  {project.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE SECTION ── */}
      <section id="experience" className="relative px-6 py-32 bg-[#050816]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Professional Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full mb-6" />
            <p className="text-xl text-[#CBD5E1] max-w-3xl">
              Building expertise across industrial operations, data engineering, and AI-driven risk modeling.
            </p>
          </motion.div>

          {/* Career Evolution Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-wrap items-center justify-center gap-4 text-lg"
          >
            <span className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#94A3B8]">Operations</span>
            <ChevronRight className="w-5 h-5 text-[#3B82F6]" />
            <span className="px-4 py-2 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[#3B82F6]/30 text-[#3B82F6]">Data Engineering</span>
            <ChevronRight className="w-5 h-5 text-[#8B5CF6]" />
            <span className="px-4 py-2 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[#8B5CF6]/30 text-[#8B5CF6]">AI Systems</span>
            <ChevronRight className="w-5 h-5 text-[#06B6D4]" />
            <span className="px-4 py-2 rounded-lg bg-[rgba(6,182,212,0.1)] border border-[#06B6D4]/30 text-[#06B6D4]">Actuarial Intelligence</span>
          </motion.div>

          <div className="relative max-w-4xl">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />

            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 top-0 w-5 h-5 rounded-full border-4 border-[#050816] bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                />

                <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.05)] border border-white/10 backdrop-blur-xl hover:border-[#3B82F6]/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#F8FAFC]">{item.role}</h3>
                      <div className="flex items-center gap-2 text-[#CBD5E1] mt-2">
                        <Building2 className="w-4 h-4" />
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>
                  
                  <p className="text-[#CBD5E1] mb-6 leading-relaxed">{item.description}</p>
                  
                  {/* Skills */}
                  {item.skills && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] text-xs text-[#CBD5E1] border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#CBD5E1]">
                          <ChevronRight className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {item.technologies && (
                    <div className="mb-6">
                      <div className="text-sm text-[#94A3B8] mb-3">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[#3B82F6]/20 text-xs text-[#CBD5E1] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Research Areas */}
                  {item.researchAreas && (
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-3">Research Areas</div>
                      <div className="space-y-3">
                        {Object.entries(item.researchAreas).map(([area, methods]) => (
                          <div key={area}>
                            <div className="text-sm font-semibold text-[#F8FAFC] capitalize mb-2">{area}</div>
                            <div className="flex flex-wrap gap-2">
                              {methods.map((method) => (
                                <span
                                  key={method}
                                  className="px-3 py-1.5 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[#8B5CF6]/20 text-xs text-[#CBD5E1]"
                                >
                                  {method}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section id="leadership" className="relative px-6 py-32 bg-[#0B1220]">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Leadership</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full" />
          </motion.div>

          <div className="relative max-w-4xl">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'top' }}
            />

            {leadership.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 top-0 w-5 h-5 rounded-full border-4 border-[#0B1220] bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                />

                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[24px] bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl hover:border-[#8B5CF6]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{item.role}</h3>
                      <div className="flex items-center gap-2 text-[#CBD5E1]">
                        <Award className="w-4 h-4 text-[#8B5CF6]" />
                        {item.organization}
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[#8B5CF6]/30 text-sm text-[#8B5CF6]">
                      {item.period}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <div className="text-sm text-[#94A3B8] mb-3">Responsibilities</div>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#CBD5E1]">
                          <ChevronRight className="w-5 h-5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="text-sm text-[#94A3B8] mb-3">Leadership Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[#3B82F6]/20 text-sm text-[#CBD5E1]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(139,92,246,0.1)] to-[rgba(6,182,212,0.1)] border border-[#8B5CF6]/20">
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-[#06B6D4]" />
                      <span className="text-[#F8FAFC] font-medium">Impact:</span>
                      <span className="text-[#CBD5E1]">{item.impact}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Leadership Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative pl-20"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="p-8 rounded-[24px] bg-gradient-to-br from-[rgba(59,130,246,0.1)] to-[rgba(139,92,246,0.1)] border border-[#3B82F6]/30 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[#06B6D4]" />
                  <h3 className="text-xl font-bold text-[#F8FAFC]">Leadership Philosophy</h3>
                </div>
                <p className="text-[#CBD5E1] leading-relaxed">
                  Building teams through clear communication, fostering innovation through collaboration, 
                  and creating impact through purposeful action. Leadership is about empowering others to achieve their potential while driving collective success.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="relative px-6 py-32 bg-[#050816] overflow-hidden">
        {/* AI-inspired background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#38BDF8]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#A78BFA]/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/3 rounded-full blur-[150px]" />
        </div>

        <div className="mx-auto max-w-[1280px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Let's Build <span className="bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] bg-clip-text text-transparent">Intelligent Solutions</span> Together
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto mt-6 leading-relaxed">
              I'm currently looking for a 6-month engineering internship in Artificial Intelligence, Data Science, Quantitative Finance and Actuarial Modeling.
            </p>
            <p className="text-lg text-[#CBD5E1] max-w-3xl mx-auto mt-4">
              Open to opportunities in France, Switzerland, UK, Spain, Italy, UAE, Qatar, USA and international environments.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] rounded-full mx-auto mt-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-[24px] bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl">
                {/* Animated Availability Indicator */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#38BDF8]/30 bg-[rgba(56,189,248,0.1)] text-[#38BDF8] text-sm font-medium mb-6"
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(56,189,248,0.2)', '0 0 30px rgba(56,189,248,0.3)', '0 0 20px rgba(56,189,248,0.2)'] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Internship
                </motion.div>

                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Internship Details</h3>
                
                {/* Duration Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(56,189,248,0.1)] to-[rgba(6,182,212,0.1)] border border-[#38BDF8]/20 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#38BDF8]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#94A3B8]">Duration</div>
                        <div className="text-[#F8FAFC] font-semibold">6 Months</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Starting Date Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(167,139,250,0.1)] to-[rgba(139,92,246,0.1)] border border-[#A78BFA]/20 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/20 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[#A78BFA]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#94A3B8]">Starting</div>
                        <div className="text-[#F8FAFC] font-semibold">Jan 2027</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expertise Areas */}
                <div className="mb-6">
                  <div className="text-sm text-[#94A3B8] mb-4 font-medium">Fields</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                      <span className="text-[#CBD5E1]">AI Engineering</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                      <span className="text-[#CBD5E1]">Data Science</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                      <span className="text-[#CBD5E1]">Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                      <span className="text-[#CBD5E1]">Actuarial Science</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                      <span className="text-[#CBD5E1]">Quantitative Finance</span>
                    </div>
                  </div>
                </div>

                {/* International Mobility */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[rgba(56,189,248,0.1)] to-[rgba(167,139,250,0.1)] border border-[#38BDF8]/20">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#38BDF8]" />
                    <div>
                      <div className="text-[#F8FAFC] font-medium">Open to International Opportunities</div>
                      <div className="text-sm text-[#94A3B8]">France, Switzerland, UK, Spain, Italy, UAE, Qatar, USA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Contact Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.a
                  href="https://www.linkedin.com/in/mariem-fersi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl hover:border-[#38BDF8]/30 hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#38BDF8]/30 transition-colors">
                    <span className="font-bold text-[#38BDF8] text-lg">in</span>
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium">LinkedIn</div>
                </motion.a>
                <motion.a
                  href="https://github.com/mariemfersi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl hover:border-[#A78BFA]/30 hover:shadow-lg hover:shadow-[#A78BFA]/10 transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#A78BFA]/20 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#A78BFA]/30 transition-colors">
                    <Code className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium">GitHub</div>
                </motion.a>
                <motion.a
                  href="mailto:mariem.fersi@esprit.tn"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl hover:border-[#06B6D4]/30 hover:shadow-lg hover:shadow-[#06B6D4]/10 transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/20 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#06B6D4]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium">Email</div>
                </motion.a>
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl hover:border-[#8B5CF6]/30 hover:shadow-lg hover:shadow-[#8B5CF6]/10 transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#8B5CF6]/30 transition-colors">
                    <Download className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium">Download CV</div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-[24px] bg-[rgba(255,255,255,0.03)] border border-white/10 backdrop-blur-xl">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#06B6D4] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#10B981]/30"
                    >
                      <Check className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">Message Successfully Sent</h3>
                    <p className="text-[#94A3B8] mb-6">Thank you for reaching out!</p>
                    <p className="text-[#CBD5E1] text-sm">I appreciate your interest and will get back to you as soon as possible.</p>
                    <motion.button
                      onClick={() => setFormStatus('idle')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] text-white font-semibold hover:from-[#0EA5E9] hover:to-[#9333EA] transition-all shadow-lg shadow-[#38BDF8]/25"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div>
                      <label className="block text-sm text-[#94A3B8] mb-2 font-medium">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8]/50 focus:shadow-lg focus:shadow-[#38BDF8]/10 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#94A3B8] mb-2 font-medium">Professional Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8]/50 focus:shadow-lg focus:shadow-[#38BDF8]/10 transition-all"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#94A3B8] mb-2 font-medium">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8]/50 focus:shadow-lg focus:shadow-[#38BDF8]/10 transition-all"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#94A3B8] mb-2 font-medium">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8]/50 focus:shadow-lg focus:shadow-[#38BDF8]/10 transition-all"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#94A3B8] mb-2 font-medium">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-white/10 text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#38BDF8]/50 focus:shadow-lg focus:shadow-[#38BDF8]/10 transition-all resize-none"
                        placeholder="Tell me about your opportunity..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      whileHover={{ scale: formStatus === 'loading' ? 1 : 1.02, y: formStatus === 'loading' ? 0 : -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] text-white font-semibold hover:from-[#0EA5E9] hover:to-[#9333EA] transition-all shadow-lg shadow-[#38BDF8]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10 bg-[#050816]">
        <div className="mx-auto max-w-[1280px] text-center text-[#94A3B8] text-sm">
          <p>© Mariem Fersi · Built with precision and purpose</p>
        </div>
      </footer>
    </main>
  );
}
