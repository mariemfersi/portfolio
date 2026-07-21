'use client';

import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  BrainCircuit,
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  Code,
  CheckCircle2,
  ChevronRight,
  Zap,
  Rocket,
  Globe,
  Menu,
  X,
  Database,
  BarChart3,
  Calculator,
  Cpu,
  Code2,
  Cloud,
  Network,
  Briefcase,
  Sparkles as SparklesIcon,
  Terminal,
  Command,
  Sun,
  Moon,
} from 'lucide-react';
import { useEffect, useState, useRef, useMemo } from 'react';
import { useTheme } from '@/contexts/theme-context';

gsap.registerPlugin(ScrollTrigger);

// ─── DATA ──────────────────────────────────────────────────────────────────

const navLinks = [
  { href: '#story',    label: 'Journey', icon: '🌅' },
  { href: '#skills',   label: 'Arsenal', icon: '⚔️' },
  { href: '#projects', label: 'Work', icon: '🚀' },
  { href: '#hobbies',  label: 'Beyond', icon: '🎨' },
  { href: '#ai',       label: 'AI Mimi', icon: '✨' },
  { href: '#contact',  label: 'Connect', icon: '💬' },
];

const tickerItems = [
  '5th Year Engineering Student 🎓',
  'Data Science + Actuarial Science 📊',
  'Multi-Agent AI Builder 🤖',
  'Mortality Risk Modeler 📈',
  'Horse Rider 🐴',
  'Pianist & Singer 🎹🎤',
  'Startup Founder Mindset 🚀',
  'Based in Tunisia 🌍',
  '"If there is a will, there is a way" ✨',
];

const storySteps = [
  {
    phase: '01', emoji: '🌅',
    bg: 'bg-orange-50', border: 'border-orange-200', dot: 'bg-orange-400',
    accent: 'text-orange-600', tag: 'bg-orange-100 text-orange-700',
    title: 'Born in Tunisia',
    copy: 'Growing up with the motto "If there is a will, there is a way," Mariem built her world on relentless discipline and passion for building things that matter.',
  },
  {
    phase: '02', emoji: '🧠',
    bg: 'bg-teal-50', border: 'border-teal-200', dot: 'bg-teal-400',
    accent: 'text-teal-600', tag: 'bg-teal-100 text-teal-700',
    title: 'Engineering Mind',
    copy: '5th-year Data Science Engineering student. She eats mathematics for breakfast, codes through the night, and still finds time to ride horses at dawn.',
  },
  {
    phase: '03', emoji: '📊',
    bg: 'bg-violet-50', border: 'border-violet-200', dot: 'bg-violet-400',
    accent: 'text-violet-600', tag: 'bg-violet-100 text-violet-700',
    title: 'Double Degree Power',
    copy: 'Bridges predictive algorithms with financial risk models. Data Science × Actuarial Science = turning uncertainty into elegant, structured systems.',
  },
  {
    phase: '04', emoji: '🚀',
    bg: 'bg-rose-50', border: 'border-rose-200', dot: 'bg-rose-400',
    accent: 'text-rose-600', tag: 'bg-rose-100 text-rose-700',
    title: 'Future AI Leader',
    copy: 'Building toward startups, AI decision systems, and quantitative platforms that shape industries. Not just a dreamer — an architect of the future.',
  },
];

const skillCategories = [
  {
    icon: Cpu,
    label: 'AI & Machine Learning',
    emoji: '🤖',
    color: 'bg-violet-50 border-violet-200',
    chipColor: 'bg-violet-100 border-violet-300 text-violet-800',
    iconColor: 'text-violet-600',
    skills: ['Machine Learning', 'Deep Learning', 'Advanced Deep Learning', 'MLOps', 'AI & Optimization', 'Optimization for Advanced ML', 'Big Data Analytics', 'Data Science Projects'],
  },
  {
    icon: Database,
    label: 'Data Science & Analytics',
    emoji: '📊',
    color: 'bg-sky-50 border-sky-200',
    chipColor: 'bg-sky-100 border-sky-300 text-sky-800',
    iconColor: 'text-sky-600',
    skills: ['Data Analysis I & II', 'Statistics', 'Probability I & II', 'Time Series Analysis', 'Monte Carlo Methods', 'Data Modeling', 'Business Intelligence', 'Scientific Computing'],
  },
  {
    icon: Calculator,
    label: 'Actuarial & Quant',
    emoji: '📈',
    color: 'bg-emerald-50 border-emerald-200',
    chipColor: 'bg-emerald-100 border-emerald-300 text-emerald-800',
    iconColor: 'text-emerald-600',
    skills: ['Actuarial Science I & II', 'Life Insurance Models', 'Non-Life Insurance Models', 'Reinsurance & Risk Theory', 'Mathematical Finance', 'Random Models', 'Numerical Methods', 'Insurance Regulation'],
  },
  {
    icon: BarChart3,
    label: 'Mathematics & Optimization',
    emoji: '🧠',
    color: 'bg-amber-50 border-amber-200',
    chipColor: 'bg-amber-100 border-amber-300 text-amber-800',
    iconColor: 'text-amber-600',
    skills: ['Operations Research', 'Linear Programming', 'Graph Theory', 'Computational Complexity', 'Probability', 'Statistics', 'Numerical Methods', 'Estimation Techniques'],
  },
  {
    icon: Code2,
    label: 'Software Engineering',
    emoji: '💻',
    color: 'bg-rose-50 border-rose-200',
    chipColor: 'bg-rose-100 border-rose-300 text-rose-800',
    iconColor: 'text-rose-600',
    skills: ['Object-Oriented Programming (Java)', 'C Programming', 'Algorithms & Data Structures', 'UML', 'Modular Programming', 'N-Tier Architecture', 'SOA', 'DevOps'],
  },
  {
    icon: Cloud,
    label: 'Cloud & DevOps',
    emoji: '☁️',
    color: 'bg-indigo-50 border-indigo-200',
    chipColor: 'bg-indigo-100 border-indigo-300 text-indigo-800',
    iconColor: 'text-indigo-600',
    skills: ['DevOps', 'Azure Distributed Systems', 'MLOps', 'SOA', 'Distributed Architectures', 'Database Management', 'Operating Systems (Unix)', 'Web Technologies'],
  },
  {
    icon: Network,
    label: 'Systems Engineering',
    emoji: '📡',
    color: 'bg-cyan-50 border-cyan-200',
    chipColor: 'bg-cyan-100 border-cyan-300 text-cyan-800',
    iconColor: 'text-cyan-600',
    skills: ['Computer Networks', 'TCP/IP Protocols', 'Microcontroller Architecture', 'Electronics', 'Operating Systems', 'Communication Technologies', 'Networks & TCP/IP'],
  },
  {
    icon: Briefcase,
    label: 'Business & Leadership',
    emoji: '💼',
    color: 'bg-orange-50 border-orange-200',
    chipColor: 'bg-orange-100 border-orange-300 text-orange-800',
    iconColor: 'text-orange-600',
    skills: ['Project Management', 'Innovation & Entrepreneurship', 'Financial Analysis', 'Business Environment', 'Sustainable Development', 'CSR', 'Professional Development'],
  },
];

type Project = {
  name: string;
  tag: string;
  category: 'ai-ml' | 'quant' | 'analytics';
  summary: string;
  features: string[];
  stack: string[];
  gradientFrom: string;
  gradientTo: string;
  headerEmoji: string;
  tagColor: string;
};

const projects: Project[] = [
  {
    name: 'Trady',
    tag: '⚡ Flagship',
    category: 'ai-ml',
    summary: 'A multi-agent Forex intelligence platform that orchestrates technical, macro, sentiment, and geopolitical signals into one decisive output with explainable trading recommendations.',
    features: [
      'Multi-Agent AI architecture',
      'Technical Analysis Agent — RSI, MACD, order blocks',
      'Macroeconomic Intelligence — interest rates & inflation',
      'News & Sentiment Analysis — global news wire scanning',
      'Geopolitical Risk Detection — trade corridor risk',
      'Decision Coordinator Agent — signal synthesis & validation',
      'Explainable trading recommendations',
    ],
    stack: ['Next.js', 'Django', 'Python', 'AI Agents', 'Financial APIs', 'Data Pipelines'],
    gradientFrom: 'var(--accent-gold-light)/10',
    gradientTo: 'var(--accent-gold)/20',
    headerEmoji: '⚡',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    name: 'Vision-Language AI',
    tag: '🔬 Research',
    category: 'ai-ml',
    summary: 'Deep reproduction + extension of "Show, Attend & Tell" with visual attention heatmaps, CLIPScore evaluations, and multilingual captions.',
    features: [
      'Image Captioning with Attention Mechanisms',
      'CLIPScore Evaluation — text-image alignment',
      'GPT-based Caption Refinement — grammar & coherence',
      'Domain Shift Analysis — robustness testing',
      'Multilingual Caption Generation — English, French & Arabic',
    ],
    stack: ['PyTorch', 'Transformers', 'CLIP', 'GPT', 'OpenCV'],
    gradientFrom: 'var(--accent-gold)/10',
    gradientTo: 'var(--accent-gold-light)/20',
    headerEmoji: '🧠',
    tagColor: 'bg-violet-100 text-violet-800 border-violet-200',
  },
  {
    name: 'Enterprise Asset Intelligence',
    tag: '⭐ Current Internship',
    category: 'analytics',
    summary: 'An enterprise multi-agent AI platform that automatically evaluates industrial and real-estate assets to generate insurance values, fair market values, depreciation estimates, and IVS-compliant valuation reports.',
    features: [
      'Multi-document ingestion — Excel, PDFs, AutoCAD, audit reports',
      'AI Asset Detection — document understanding & classification',
      'Building analysis & equipment recognition',
      'Valuation Engine — replacement cost, depreciation, fair value',
      'Insurance value calculation & market comparable search',
      'AI Report Generation — IVS-compliant professional documents',
    ],
    stack: ['Claude', 'Python', 'React 19', 'Pandas', 'OpenCV', 'PDFPlumber', 'OpenPyXL', 'Computer Vision', 'Multi-Agent AI'],
    gradientFrom: 'var(--accent-gold-light)/10',
    gradientTo: 'var(--accent-gold)/20',
    headerEmoji: '📊',
    tagColor: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  {
    name: 'Actuarial Intelligence',
    tag: '📈 Quant',
    category: 'quant',
    summary: 'Professional analytics platform for stochastic mortality forecasting, cohort survival matrices, life annuity pricing, and longevity risk models.',
    features: [
      'Mortality Forecasting — Lee-Carter stochastic modeling',
      'Survival Analysis — cohort probability matrices',
      'Life Annuity Pricing — asset-liability management',
      'Longevity Risk — curves & scenario analysis',
      'Stochastic Models — risk surface visualization',
    ],
    stack: ['Python', 'R', 'Statistical Modeling', 'Time Series', 'Survival Analysis'],
    gradientFrom: 'var(--accent-gold)/10',
    gradientTo: 'var(--accent-gold-light)/20',
    headerEmoji: '📈',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
];

const conciergeResponses: Record<string, string> = {
  who: "Mariem Fersi — Mimi to her friends 🌟\n\nShe's a 22-year-old Tunisian engineering genius pursuing a double degree in Data Science + Actuarial Science. Ambitious, disciplined, and obsessed with building products that actually matter.",
  projects: "4 universe-level projects:\n\n⚡ TRADY — Forex multi-agent intelligence\n🧠 VISION-LANGUAGE AI — Attention-based captioning\n📊 ENTERPRISE ASSET INTELLIGENCE — AI asset valuation platform\n� ACTUARIAL INTEL — Longevity risk models",
  skills: "Her technical arsenal 🛠️\n\nAI/ML: Python · PyTorch · Transformers · LLM Agents · Computer Vision · NLP\n\nData: SQL · Power BI · Django · Next.js · TypeScript\n\nQuant: Stochastic Calculus · Mortality Models · Survival Analysis · Risk Modeling",
  actuarial: "Why Actuarial Science? 🎯\n\nBecause the best AI systems understand risk deeply. Actuarial modeling gives her the language to transform raw uncertainty into structured, actionable risk curves — the backbone of her future products.",
  hobbies: "Beyond the algorithms 🎨\n\n🎹 Piano — Precision, structure, and pattern recognition\n� Singing — Control, clarity, and presence\n🐴 Horse Riding — Discipline, focus, and adaptability",
  next: "The horizon 🚀\n\nMulti-agent quantitative decision systems. Longevity & risk hedging platforms. AI-native startup ventures. She's not planning a career — she's designing an industry.",
  contact: "📍 Tunisia — Open to global opportunities\n✉️ hello@mariemfersi.com\n\nReady to build something extraordinary together?",
  help: "Available topics:\n'who' · 'projects' · 'skills' · 'actuarial' · 'hobbies' · 'next' · 'contact'",
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export function PortfolioShell() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleStoryCards, setVisibleStoryCards] = useState<Set<number>>(new Set());
  const [terminalHistory, setTerminalHistory] = useState<{ type: 'user' | 'ai'; text: string }[]>([
    { type: 'ai', text: "Hey there! 👋 I'm AI Mimi — Mariem's personal assistant.\n\nAsk me anything! Try 'who', 'projects', 'skills', or 'hobbies'." }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai-ml' | 'quant' | 'analytics'>('all');
  const [activeSection, setActiveSection] = useState('hero');
  const [particlePositions, setParticlePositions] = useState<Array<{x: number; y: number; scale: number}>>([]);
  const [constellationPositions, setConstellationPositions] = useState<Array<{x: string; y: string}>>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Initialize random positions on client side only to fix hydration mismatch
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Generate particle positions
    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      scale: Math.random() * 0.5 + 0.5,
    }));
    setParticlePositions(particles);

    // Generate constellation positions
    const constellation = Array.from({ length: 15 }, () => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
    }));
    setConstellationPositions(constellation);

    // Prevent browser scroll restoration and scroll to top
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const sections = ['hero', 'story', 'skills', 'projects', 'hobbies', 'ai', 'contact'];
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

  // Story cards visibility with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleStoryCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.story-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-reveal', {
        y: 120, opacity: 0, duration: 1.4, ease: 'power4.out', stagger: 0.15,
      });
      gsap.from('.hero-sub-reveal', {
        y: 40, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: 0.5,
      });

      // Skills constellation
      gsap.from('.skill-node', {
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 70%',
        },
        scale: 0, opacity: 0, duration: 0.7, ease: 'back.config(1.7).out', stagger: 0.08,
      });

      // Projects bento
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.12,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => { terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [terminalHistory]);

  const handleCopyEmail = async () => {
    try { await navigator.clipboard.writeText('hello@mariemfersi.com'); setEmailCopied(true); setTimeout(() => setEmailCopied(false), 2000); } catch { /* silent */ }
  };

  const handleAiSubmit = (val: string) => {
    if (!val.trim()) return;
    const cmd = val.trim().toLowerCase();
    setTerminalHistory(prev => [...prev, { type: 'user', text: val }]);
    setTerminalInput('');
    setIsTyping(true);
    setTimeout(() => {
      let reply = '';
      if (cmd === 'clear') { setTerminalHistory([]); setIsTyping(false); return; }
      const match = Object.keys(conciergeResponses).find(k => cmd.includes(k));
      reply = match ? conciergeResponses[match] : "Hmm, I didn't quite catch that 🤔\n\nTry: 'who', 'projects', 'skills', 'actuarial', 'hobbies', 'next', or 'contact'";
      setTerminalHistory(prev => [...prev, { type: 'ai', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(p => p.category === selectedCategory);
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-300">

      {/* ── SCROLL PROGRESS BAR ── */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500"
      />

      {/* ── AURORA BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-gold)]/15 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent-gold-light)]/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[var(--accent-gold-dark)]/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* ── NOISE TEXTURE OVERLAY ── */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* ── GLASSMORPHISM HEADER ── */}
      <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/70 backdrop-blur-2xl border-b border-[var(--border-color)] shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.a 
            href="#hero" 
            className="flex items-center gap-3 font-bold text-xl text-[var(--text-primary)] select-none group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] flex items-center justify-center shadow-lg shadow-[var(--accent-gold)]/30 group-hover:shadow-xl transition-shadow">
              <span className="text-xl">🐴</span>
            </div>
            <span className="bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-gold)] bg-clip-text text-transparent">Mariem</span>
          </motion.a>

          {/* Desktop nav with scroll spy */}
          <nav className="hidden gap-1 md:flex">
            {navLinks.map(link => (
              <motion.a 
                key={link.href} 
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full ${
                  activeSection === link.href.slice(1)
                    ? 'text-[var(--text-primary)] bg-[var(--accent-gold)]/20'
                    : 'text-[var(--text-primary)]/70 hover:text-[var(--text-primary)] hover:bg-[var(--accent-gold)]/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/30 to-[var(--accent-gold-light)]/30 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Theme toggle & mobile menu */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 text-[var(--text-primary)] hover:bg-[var(--accent-gold)]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="md:hidden p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)]/80 text-[var(--text-primary)] hover:bg-[var(--accent-gold)]/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-[var(--accent-gold)]/20 bg-[var(--bg-primary)]/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map(link => (
                  <motion.a 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gradient-to-r from-[var(--accent-gold)]/30 to-[var(--accent-gold-light)]/30 text-[var(--text-primary)]'
                        : 'text-[var(--text-primary)]/70 hover:bg-[var(--accent-gold)]/10'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ── SECTION 1: HERO ── */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 lg:px-8 overflow-hidden"
      >
        {/* Mouse-following spotlight */}
        <motion.div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(600px circle at ${useTransform(mouseX, (x) => `${x}px`)} ${useTransform(mouseY, (y) => `${y}px`)}, rgba(255, 165, 0, 0.08), transparent 40%)`,
          }}
        />

        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/30 via-rose-300/20 to-violet-300/30 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-300/25 via-blue-300/20 to-cyan-300/25 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-rose-300/20 via-orange-300/15 to-amber-300/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        </div>

        {/* Floating particles */}
        {particlePositions.length > 0 && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-orange-400/40 to-rose-400/40 pointer-events-none"
            initial={{
              x: pos.x,
              y: pos.y,
              scale: pos.scale,
            }}
            animate={{
              y: [null, -Math.random() * 200 - 100],
              x: [null, (Math.random() - 0.5) * 100],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="mx-auto w-full max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Status badge */}
              <motion.div 
                className="hero-reveal inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--bg-primary)]/60 backdrop-blur-xl border border-[var(--accent-gold)]/30 shadow-lg shadow-[var(--accent-gold)]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-gold)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent-gold-light)]" />
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">Open to opportunities · Tunisia 🌍</span>
              </motion.div>

              {/* Massive typography */}
              <div className="space-y-2">
                <motion.div 
                  className="hero-reveal overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <h1 className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-[-0.05em] bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
                    MARIEM
                  </h1>
                </motion.div>
                <motion.div 
                  className="hero-reveal overflow-hidden"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 }}
                >
                  <h1 className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-[-0.05em] bg-gradient-to-br from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent">
                    FERSI
                  </h1>
                </motion.div>
              </div>

              {/* Tagline */}
              <motion.p 
                className="hero-sub-reveal text-xl sm:text-2xl text-[var(--text-primary)]/80 font-light leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.4 }}
              >
                Building the future of AI and quantitative finance, one algorithm at a time.
          </motion.p>

              {/* Role badges */}
              <motion.div 
                className="hero-sub-reveal flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.5 }}
              >
                {[
                  { label: 'Data Science Engineer', icon: '🧠', color: 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/40 text-[var(--text-primary)]' },
                  { label: 'Actuarial Scientist', icon: '📊', color: 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/40 text-[var(--text-primary)]' },
                  { label: 'AI Builder', icon: '🤖', color: 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/40 text-[var(--text-primary)]' },
                ].map((badge, i) => (
                  <motion.div 
                    key={badge.label}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} border font-medium text-sm`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="text-lg">{badge.icon}</span>
                    {badge.label}
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="hero-sub-reveal grid grid-cols-4 gap-6 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.6 }}
              >
                {[
                  { num: '4+', label: 'Projects' },
                  { num: '2×', label: 'Degrees' },
                  { num: '22', label: 'Years' },
                  { num: '∞', label: 'Ambition' },
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black bg-gradient-to-br from-[var(--text-primary)] to-[var(--accent-gold)] bg-clip-text text-transparent">{stat.num}</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]/60 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="hero-sub-reveal flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.7 }}
              >
                <motion.a 
                  href="#projects"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] font-bold shadow-xl shadow-[var(--accent-gold)]/30 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold-light)] to-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
                <motion.a 
                  href="#ai"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur-xl border border-[var(--accent-gold)]/30 text-[var(--text-primary)] font-bold shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(197, 160, 89, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SparklesIcon size={18} className="text-[var(--accent-gold-light)]" />
                  Chat with AI Mimi
                </motion.a>
              </motion.div>
            </div>

            {/* Right side - Profile picture with glass effect */}
            <motion.div 
              className="hero-reveal relative hidden lg:block"
              initial={{ opacity: 0, x: 100, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
            >
              <div className="relative">
                {/* Glass card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)]/80 to-[var(--bg-primary)]/40 backdrop-blur-2xl rounded-[3rem] border border-[var(--accent-gold)]/30 shadow-2xl shadow-[var(--accent-gold)]/20 transform rotate-3" />
                
                {/* Profile image */}
                <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-[2.5rem] overflow-hidden border-4 border-[var(--accent-gold)]/30 shadow-2xl">
                  <img 
                    src="/images/e78bf81b-ed08-4fb0-940e-5fdbbcdcb56a.jpeg" 
                    alt="Mariem Fersi" 
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-6 -right-6 px-5 py-3 rounded-2xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] font-bold shadow-xl shadow-[var(--accent-gold)]/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🚀 AI Builder
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl bg-[var(--bg-primary)]/90 backdrop-blur-xl border border-[var(--accent-gold)]/30 text-[var(--text-primary)] font-bold shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  📊 Quant Expert
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-14 rounded-full border-2 border-[var(--accent-gold)]/40 flex items-start justify-center pt-3 bg-[var(--bg-primary)]/30 backdrop-blur-sm"
          >
            <motion.div 
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-[var(--accent-gold-light)] to-[var(--accent-gold)]"
              animate={{ height: [12, 6, 12] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <span className="text-xs font-medium text-[var(--text-primary)]/60 uppercase tracking-widest">Scroll to explore</span>
        </motion.div>
      </section>

      {/* ── ACHIEVEMENT TICKER ── */}
      <div className="relative bg-[var(--bg-primary)] py-6 overflow-hidden border-y border-[var(--accent-gold)]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/10 via-[var(--accent-gold-light)]/10 to-[var(--accent-gold)]/10" />
        <div className="relative flex whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 text-sm font-semibold text-[var(--text-primary)]">
              {item}
              <span className="text-[var(--accent-gold-light)]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SECTION 2: STORY (Sticky Timeline) ── */}
      <section id="story" className="relative px-6 py-32 lg:px-8 min-h-screen bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--accent-gold)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--accent-gold-light)]/10 rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Section header */}
          <motion.div 
            className="mb-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/40 text-[var(--text-primary)] text-sm font-bold">
              🌅 The Journey
            </span>
            <h2 className="mt-6 text-5xl sm:text-7xl font-black bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
              A Story Worth
              <span className="block bg-gradient-to-r from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent">
                Telling
              </span>
            </h2>
            <p className="mt-6 text-[var(--text-primary)]/70 max-w-2xl mx-auto text-lg leading-relaxed">
              From Tunisia to the frontier of AI and quantitative finance — this isn't a résumé, it's a trajectory.
            </p>
          </motion.div>

          {/* Sticky timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-gold-light)] to-[var(--accent-gold)] transform md:-translate-x-1/2" />

            {storySteps.map((step, idx) => (
              <motion.div 
                key={idx}
                data-index={idx}
                className={`story-card relative mb-16 md:mb-24 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12 md:ml-auto'}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={visibleStoryCards.has(idx) ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: visibleStoryCards.has(idx) ? idx * 0.2 : 0 }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 top-8 w-5 h-5 rounded-full border-4 border-[var(--bg-primary)] shadow-lg transform -translate-x-1/2 md:-translate-x-1/2 z-10 ${
                  idx === 0 ? 'bg-[var(--accent-gold)]' :
                  idx === 1 ? 'bg-[var(--accent-gold-light)]' :
                  idx === 2 ? 'bg-[var(--accent-gold)]' : 'bg-[var(--accent-gold-light)]'
                }`} />

                {/* Content card */}
                <motion.div 
                  className={`relative ml-16 md:ml-0 p-8 rounded-3xl bg-[var(--bg-primary)]/80 backdrop-blur-xl border border-[var(--accent-gold)]/30 shadow-xl shadow-[var(--accent-gold)]/20 ${
                    idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Phase badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 ${
                    idx === 0 ? 'bg-[var(--accent-gold)]/20 text-[var(--text-primary)] border border-[var(--accent-gold)]/40' :
                    idx === 1 ? 'bg-[var(--accent-gold-light)]/20 text-[var(--text-primary)] border border-[var(--accent-gold-light)]/40' :
                    idx === 2 ? 'bg-[var(--accent-gold)]/20 text-[var(--text-primary)] border border-[var(--accent-gold)]/40' : 'bg-[var(--accent-gold-light)]/20 text-[var(--text-primary)] border border-[var(--accent-gold-light)]/40'
                  }`}>
                    Phase {step.phase}
                  </div>

                  {/* Emoji and title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`text-5xl ${
                      idx === 0 ? 'animate-bounce' :
                      idx === 1 ? 'animate-pulse' :
                      idx === 2 ? 'animate-spin' : 'animate-ping'
                    }`} style={{ animationDuration: '3s' }}>
                      {step.emoji}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-primary)]/70 leading-relaxed text-base">{step.copy}</p>

                  {/* Decorative gradient */}
                  <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-2xl opacity-30 ${
                    idx === 0 ? 'bg-[var(--accent-gold)]' :
                    idx === 1 ? 'bg-[var(--accent-gold-light)]' :
                    idx === 2 ? 'bg-[var(--accent-gold)]' : 'bg-[var(--accent-gold-light)]'
                  }`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-24 -mt-px overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1440,30 1440,30 L1440,120 L0,120 Z" fill="url(#wave-gradient)" />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--bg-primary)" />
              <stop offset="50%" stopColor="var(--bg-tertiary)" />
              <stop offset="100%" stopColor="var(--bg-primary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── SECTION 3: SKILLS (Interactive Constellation) ── */}
      <section id="skills" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        {/* Background constellation effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {constellationPositions.length > 0 && constellationPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--accent-gold-light)]/30"
              initial={{
                x: pos.x,
                y: pos.y,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/40 text-[var(--text-primary)] text-sm font-bold">
              ⚔️ The Arsenal
            </span>
            <h2 className="mt-6 text-5xl sm:text-7xl font-black bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
              What She
              <span className="block bg-gradient-to-r from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent">
                Masters
              </span>
            </h2>
            <p className="mt-6 text-[var(--text-primary)]/70 max-w-2xl mx-auto text-lg leading-relaxed">
              A rare combination of deep AI engineering and quantitative finance.
            </p>
          </motion.div>

          {/* Interactive skill constellation */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  className="skill-node relative group"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: idx * 0.08, 
                    ease: [0.34, 1.56, 0.64, 1] 
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  {/* Glowing background */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                    idx === 0 ? 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20' :
                    idx === 1 ? 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20' :
                    idx === 2 ? 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20' : 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20'
                  } blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Card */}
                  <div className={`relative p-8 rounded-3xl bg-[var(--bg-primary)]/80 backdrop-blur-xl border-2 border-[var(--accent-gold)]/30 shadow-xl ${
                    idx === 0 ? 'hover:border-[var(--accent-gold)]/60' :
                    idx === 1 ? 'hover:border-[var(--accent-gold-light)]/60' :
                    idx === 2 ? 'hover:border-[var(--accent-gold)]/60' : 'hover:border-[var(--accent-gold-light)]/60'
                  } transition-colors duration-300`}>
                    {/* Icon */}
                    <div className={`skill-node w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      idx === 0 ? 'bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/40' :
                      idx === 1 ? 'bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold-light)]/40' :
                      idx === 2 ? 'bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/40' : 'bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold-light)]/40'
                    } border-2`}>
                      <Icon size={28} className="text-[var(--text-primary)]" />
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                      <span className="text-3xl mr-2">{cat.emoji}</span>
                      <h3 className="text-xl font-black text-[var(--text-primary)]">{cat.label}</h3>
                    </div>

                    {/* Skills as orbiting nodes */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, skillIdx) => (
                        <motion.span 
                          key={skill}
                          className={`skill-node px-3 py-1.5 rounded-full text-xs font-semibold border bg-[var(--accent-gold)]/10 border-[var(--accent-gold)]/30 text-[var(--text-primary)]`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.5, 
                            delay: idx * 0.12 + skillIdx * 0.05, 
                            ease: [0.34, 1.56, 0.64, 1] 
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Connection lines (decorative) */}
                  {idx < skillCategories.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[var(--accent-gold)]/30 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Central hub visualization */}
          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent-gold)] via-[var(--accent-gold-light)] to-[var(--accent-gold)] flex items-center justify-center shadow-2xl shadow-[var(--accent-gold)]/30">
              <div className="absolute inset-0 rounded-full bg-[var(--bg-primary)]/20 backdrop-blur-sm" />
              <span className="relative text-5xl">🧠</span>
              {/* Orbiting dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[var(--text-primary)] shadow-lg"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.cos((i * 120) * Math.PI / 180) * 60],
                    y: [0, Math.sin((i * 120) * Math.PI / 180) * 60],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 2.67,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-180">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1440,30 1440,30 L1440,120 L0,120 Z" fill="url(#wave-gradient-2)" />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--bg-primary)" />
              <stop offset="50%" stopColor="var(--bg-tertiary)" />
              <stop offset="100%" stopColor="var(--bg-primary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── SECTION 4: PROJECTS (Bento Layout) ── */}
      <section id="projects" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--accent-gold-light)]/10 rounded-full blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <motion.div 
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/40 text-[var(--text-primary)] text-sm font-bold">
                <SparklesIcon size={12} /> Featured Work
              </span>
              <h2 className="mt-6 text-5xl sm:text-7xl font-black bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
                Projects That
                <span className="block bg-gradient-to-r from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent">
                  Hit 🤌
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[var(--text-primary)]/70 text-lg leading-relaxed">
              From Forex multi-agent AI to mortality models — each one pushes a boundary.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div 
            className="mb-12 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { id: 'all',      label: '🌟 All' },
              { id: 'ai-ml',    label: '🤖 AI & ML' },
              { id: 'quant',    label: '📈 Quant' },
              { id: 'analytics', label: '📊 Analytics' },
            ].map(tab => (
              <motion.button 
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as typeof selectedCategory)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all cursor-pointer border-2 ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] border-[var(--accent-gold)] shadow-lg shadow-[var(--accent-gold)]/30 scale-105'
                    : 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-[var(--accent-gold)]/30 text-[var(--text-primary)]/70 hover:border-[var(--accent-gold)]/60 hover:text-[var(--text-primary)]'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Bento grid layout */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  className="project-card group"
                >
                  <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-[var(--bg-primary)]/80 backdrop-blur-xl border-2 border-[var(--accent-gold)]/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Gradient header */}
                    <div 
                      className="relative h-40 p-8 flex items-center justify-between"
                      style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
                    >
                      <span className="text-7xl select-none drop-shadow-lg">{project.headerEmoji}</span>
                      <span className={`px-4 py-2 rounded-full text-xs font-bold border ${project.tagColor}`}>
                        {project.tag}
                      </span>
                      <motion.div 
                        className="absolute bottom-4 right-6 text-8xl font-black text-black/5 select-none leading-none"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        0{idx + 1}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-3xl font-black text-[var(--text-primary)] mb-3 group-hover:bg-gradient-to-r group-hover:from-[var(--accent-gold)] group-hover:to-[var(--accent-gold-light)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.name}
                      </h3>
                      <p className="text-[var(--text-primary)]/70 leading-relaxed mb-6">{project.summary}</p>

                      {/* Feature list with animated checkmarks */}
                      <div className="flex-1 space-y-3 mb-6">
                        <p className="text-xs font-black uppercase tracking-widest text-[var(--text-primary)]/50 mb-3">Core Features</p>
                        {project.features.map((f, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle2 size={16} className="text-[var(--accent-gold)] shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--text-primary)]/70 leading-6">{f}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stack chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map(s => (
                          <span key={s} className="px-3 py-1.5 text-xs font-semibold bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-lg text-[var(--text-primary)]">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3 pt-4 border-t border-[var(--accent-gold)]/20">
                        <motion.a 
                          href="#projects" 
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-light)] px-4 py-3 text-sm font-bold text-[var(--bg-primary)] hover:from-[var(--accent-gold-light)] hover:to-[var(--accent-gold)] transition-all"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={14} /> Live Demo
                        </motion.a>
                        <motion.a 
                          href="#projects" 
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--bg-primary)]/80 border-2 border-[var(--accent-gold)]/30 px-4 py-3 text-sm font-bold text-[var(--text-primary)] hover:bg-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/60 transition-all"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Code size={14} /> View Code
                        </motion.a>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/10 via-[var(--accent-gold-light)]/10 to-[var(--accent-gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-24 -mt-px overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1440,30 1440,30 L1440,120 L0,120 Z" fill="url(#wave-gradient-3)" />
          <defs>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--bg-primary)" />
              <stop offset="50%" stopColor="var(--bg-tertiary)" />
              <stop offset="100%" stopColor="var(--bg-primary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── SECTION 5: BEYOND DATA / HOBBIES (Immersive Cards) ── */}
      <section id="hobbies" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent-gold)]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--accent-gold-light)]/10 rounded-full blur-[150px]" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section header */}
          <motion.div 
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/40 text-[var(--text-primary)] text-sm font-bold">
              ❤️ Beyond Data
            </span>
            <h2 className="mt-6 text-5xl sm:text-7xl font-black bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
              She's Not
              <span className="block bg-gradient-to-r from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent">
                Just a Coder
              </span>
            </h2>
            <p className="mt-6 text-[var(--text-primary)]/70 max-w-2xl mx-auto text-lg leading-relaxed">
              These aren't pastimes. They're the creative OS that powers everything she builds.
            </p>
          </motion.div>

          {/* Immersive hobby cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎹', title: 'Piano',
                gradient: 'from-[var(--accent-gold-light)] to-[var(--accent-gold)]',
                bg: 'from-[var(--accent-gold-light)]/10 to-[var(--accent-gold)]/10',
                border: 'border-[var(--accent-gold-light)]/30',
                tag: 'bg-[var(--accent-gold-light)]/20 text-[var(--text-primary)] border-[var(--accent-gold-light)]/40', tagLabel: '� Precision',
                detail: 'Precision, structure, and pattern recognition. Developed discipline in timing, repetition, and attention to detail.',
                traits: ['Rhythm', 'Precision', 'Patience', 'Memory'],
                image: '/piano.jpeg',
              },
              {
                emoji: '�', title: 'Singing',
                gradient: 'from-[var(--accent-gold)] to-[var(--accent-gold-light)]',
                bg: 'from-[var(--accent-gold)]/10 to-[var(--accent-gold-light)]/10',
                border: 'border-[var(--accent-gold)]/30',
                tag: 'bg-[var(--accent-gold)]/20 text-[var(--text-primary)] border-[var(--accent-gold)]/40', tagLabel: '� Presence',
                detail: 'Control, clarity, and presence. Strengthened communication under pressure and expressive delivery of ideas.',
                traits: ['Confidence', 'Clarity', 'Presence', 'Control'],
                image: '/singing.JPG',
              },
              {
                emoji: '🐴', title: 'Horse Riding',
                gradient: 'from-[var(--accent-gold-light)] to-[var(--accent-gold)]',
                bg: 'from-[var(--accent-gold-light)]/10 to-[var(--accent-gold)]/10',
                border: 'border-[var(--accent-gold-light)]/30',
                tag: 'bg-[var(--accent-gold-light)]/20 text-[var(--text-primary)] border-[var(--accent-gold-light)]/40', tagLabel: '� Discipline',
                detail: 'Early experience in discipline and responsiveness. Taught focus, balance, and quick adaptation in dynamic environments.',
                traits: ['Discipline', 'Focus', 'Adaptability', 'Awareness'],
                image: '/horse-riding.png',
              },
            ].map((hobby, idx) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 60, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                className="group relative"
              >
                {/* Glowing background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${hobby.bg} border-2 ${hobby.border} shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden`}>
                  {/* Hobby Image */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <img 
                      src={hobby.image} 
                      alt={hobby.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent" />
                  </div>
                  
                  {/* Floating emoji */}
                  <motion.div 
                    className="text-7xl mb-6 -mt-12 relative z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
                  >
                    {hobby.emoji}
                  </motion.div>
                  
                  {/* Tag */}
                  <span className={`inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 ${hobby.tag}`}>
                    {hobby.tagLabel}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-black text-[var(--text-primary)] mb-4 group-hover:bg-gradient-to-r group-hover:from-[var(--accent-gold)] group-hover:to-[var(--accent-gold-light)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {hobby.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[var(--text-primary)]/70 leading-relaxed mb-6 flex-1">{hobby.detail}</p>
                  
                  {/* Traits */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--accent-gold)]/20">
                    {hobby.traits.map((t, i) => (
                      <motion.span 
                        key={t} 
                        className="px-3 py-1.5 text-xs font-semibold bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/30 rounded-full text-[var(--text-primary)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative h-24 overflow-hidden">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-180">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1440,30 1440,30 L1440,120 L0,120 Z" fill="url(#wave-gradient-4)" />
          <defs>
            <linearGradient id="wave-gradient-4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--bg-primary)" />
              <stop offset="50%" stopColor="var(--bg-tertiary)" />
              <stop offset="100%" stopColor="var(--bg-primary)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── SECTION 6: VISION ── */}
      <section id="vision" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="rounded-[2.5rem] bg-[var(--bg-primary)]/80 p-10 lg:p-16 relative overflow-hidden border border-[var(--accent-gold)]/30"
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[var(--accent-gold-light)]/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="fun-badge bg-[var(--accent-gold)]/15 text-[var(--accent-gold-light)] border border-[var(--accent-gold)]/30">
                  <Rocket size={11} /> What She&apos;s Becoming
                </span>
                <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight">
                  Not what she&apos;s built.<br />
                  <span className="gradient-text">What she&apos;s building next.</span>
                </h2>
                <p className="mt-5 text-[var(--text-primary)]/70 text-sm leading-7">
                  Intelligent systems that don't just analyze risk — they make decisions. Where quantitative finance meets autonomous AI. Where startups are built on math, not just vibes.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  { icon: BrainCircuit, label: 'Multi-agent AI decision systems', color: 'text-[var(--accent-gold)]', bg: 'bg-[var(--accent-gold)]/10' },
                  { icon: SparklesIcon, label: 'Longevity & risk hedging platforms', color: 'text-[var(--accent-gold-light)]', bg: 'bg-[var(--accent-gold-light)]/10' },
                  { icon: Rocket, label: 'AI-native startups from the ground up', color: 'text-[var(--accent-gold)]', bg: 'bg-[var(--accent-gold)]/10' },
                  { icon: Globe, label: 'Global quantitative intelligence products', color: 'text-[var(--accent-gold-light)]', bg: 'bg-[var(--accent-gold-light)]/10' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.09 }}
                      className={`flex items-center gap-4 rounded-2xl border border-[var(--accent-gold)]/20 px-5 py-4 hover:bg-[var(--accent-gold)]/5 transition-all cursor-default`}
                    >
                      <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                        <Icon size={17} className={item.color} />
                      </div>
                      <span className="text-sm text-[var(--text-primary)]/80 font-medium">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: AI MIMI (Futuristic Interface) ── */}
      <section id="ai" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        {/* Holographic background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--accent-gold-light)]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(197, 160, 89, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(197, 160, 89, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="mx-auto max-w-5xl relative z-10">
          {/* Section header */}
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/40 text-[var(--text-primary)] text-sm font-bold">
              <SparklesIcon size={12} /> AI-Powered
            </span>
            <h2 className="mt-6 text-5xl sm:text-7xl font-black bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
              Chat with
              <span className="block bg-gradient-to-r from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent animate-pulse">
                AI Mimi
              </span>
            </h2>
            <p className="mt-6 text-[var(--text-primary)]/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Ask anything about Mariem. Type <code className="px-2 py-1 rounded bg-[var(--accent-gold)]/20 text-[var(--accent-gold-light)] font-mono text-sm">help</code> to discover what I know.
            </p>
          </motion.div>

          {/* Futuristic AI interface */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-gold-light)] to-[var(--accent-gold)] rounded-3xl blur-xl opacity-50 animate-pulse" />
            
            <div className="relative bg-[var(--bg-primary)]/90 backdrop-blur-2xl rounded-3xl border border-[var(--accent-gold)]/30 shadow-2xl overflow-hidden">
              {/* Header bar with holographic effect */}
              <div className="relative flex items-center gap-4 bg-gradient-to-r from-[var(--accent-gold)]/20 via-[var(--accent-gold-light)]/20 to-[var(--accent-gold)]/20 px-6 py-4 border-b border-[var(--accent-gold)]/20">
                <div className="flex gap-2">
                  {['bg-[var(--accent-gold)]/50','bg-[var(--accent-gold-light)]/50','bg-[var(--accent-gold)]/50'].map((c,i) => (
                    <motion.span 
                      key={i} 
                      className={`w-3 h-3 rounded-full ${c}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <span className="text-xl">🤖</span>
                    </motion.div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] blur-xl opacity-50" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">AI Mimi</div>
                    <div className="text-xs text-[var(--accent-gold-light)]">Mariem&apos;s Universe</div>
                  </div>
                </div>
                <span className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/30 text-xs font-medium text-[var(--accent-gold-light)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-gold)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-gold-light)]" />
                  </span>
                  Online
                </span>
              </div>

              {/* Quick-fire command buttons */}
              <div className="flex flex-wrap gap-2 px-6 pt-5 pb-3 border-b border-[var(--accent-gold)]/20">
                {[
                  { label: '👋 Who is Mimi?', cmd: 'who', color: 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)]/60' },
                  { label: '🚀 Her Projects', cmd: 'projects', color: 'from-[var(--accent-gold-light)]/20 to-[var(--accent-gold)]/20 border-[var(--accent-gold-light)]/30 hover:border-[var(--accent-gold-light)]/60' },
                  { label: '🛠️ Her Skills', cmd: 'skills', color: 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)]/60' },
                  { label: '🎯 Why Actuarial?', cmd: 'actuarial', color: 'from-[var(--accent-gold-light)]/20 to-[var(--accent-gold)]/20 border-[var(--accent-gold-light)]/30 hover:border-[var(--accent-gold-light)]/60' },
                  { label: '🐴 Hobbies', cmd: 'hobbies', color: 'from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)]/60' },
                  { label: "🔮 What's Next?", cmd: 'next', color: 'from-[var(--accent-gold-light)]/20 to-[var(--accent-gold)]/20 border-[var(--accent-gold-light)]/30 hover:border-[var(--accent-gold-light)]/60' },
                ].map(item => (
                  <motion.button
                    key={item.cmd}
                    onClick={() => handleAiSubmit(item.cmd)}
                    className={`rounded-full bg-gradient-to-r ${item.color} px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition-all cursor-pointer`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >{item.label}</motion.button>
                ))}
              </div>

              {/* Messages area with holographic effect */}
              <div className="h-[400px] overflow-y-auto px-6 py-4 space-y-4 bg-[var(--bg-primary)]/50">
                {terminalHistory.map((msg, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.type === 'ai' && (
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] flex items-center justify-center shrink-0">
                          <span className="text-lg">🤖</span>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] blur-lg opacity-50" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-5 py-4 text-sm leading-6 whitespace-pre-wrap ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] rounded-br-sm shadow-lg shadow-[var(--accent-gold)]/30'
                        : 'bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/30 text-[var(--text-primary)] rounded-bl-sm backdrop-blur-xl'
                    }`}>
                      {msg.text}
                    </div>
                    {msg.type === 'user' && (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] flex items-center justify-center shrink-0">
                        <span className="text-lg">🧑</span>
                      </div>
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] flex items-center justify-center shrink-0">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div className="bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/30 rounded-2xl rounded-bl-sm px-5 py-4 backdrop-blur-xl">
                      <div className="flex gap-1 items-center h-4">
                        {[0, 150, 300].map(d => (
                          <motion.span 
                            key={d} 
                            className="w-2 h-2 rounded-full bg-[var(--accent-gold-light)]" 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: d / 1000 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>

              {/* Input area with holographic effect */}
              <form
                onSubmit={e => { e.preventDefault(); handleAiSubmit(terminalInput); }}
                className="flex items-center gap-4 border-t border-[var(--accent-gold)]/20 bg-[var(--bg-primary)]/80 px-6 py-4"
              >
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 rounded-xl blur-xl" />
                  <div className="relative flex items-center gap-3 bg-[var(--bg-primary)]/80 backdrop-blur-xl rounded-xl px-4 py-3 border border-[var(--accent-gold)]/30">
                    <Terminal size={18} className="text-[var(--accent-gold-light)]" />
                    <input
                      type="text"
                      placeholder="Ask anything about Mariem..."
                      value={terminalInput}
                      onChange={e => setTerminalInput(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder-[var(--accent-gold-light)]/50"
                    />
                  </div>
                </div>
                <motion.button 
                  type="submit"
                  className="relative h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-[var(--accent-gold)]/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] blur-xl opacity-50" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CONTACT (Premium CTA) ── */}
      <section id="contact" className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-tertiary)] to-[var(--bg-primary)]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[var(--accent-gold)]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--accent-gold-light)]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-[var(--bg-primary)]/80 via-[var(--accent-gold)]/10 to-[var(--accent-gold-light)]/10 backdrop-blur-2xl border-2 border-[var(--accent-gold)]/30 shadow-2xl shadow-[var(--accent-gold)]/20 text-center overflow-hidden"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-gold-light)] to-[var(--accent-gold)] opacity-20 blur-2xl" />
            
            {/* Floating decorative elements */}
            {[
              { emoji: '🌟', top: '2rem', left: '3rem', size: 'text-6xl', delay: 0 },
              { emoji: '💌', top: '3rem', right: '3rem', size: 'text-5xl', delay: 1 },
              { emoji: '🚀', bottom: '3rem', left: '4rem', size: 'text-4xl', delay: 2 },
              { emoji: '💡', bottom: '4rem', right: '5rem', size: 'text-5xl', delay: 1.5 },
            ].map((s, i) => (
              <motion.span
                key={i}
                className={`absolute ${s.size} select-none pointer-events-none hidden sm:block`}
                style={{ top: s.top, bottom: s.bottom, left: s.left, right: s.right }}
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
              >{s.emoji}</motion.span>
            ))}

            <div className="relative z-10">
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent-gold)]/20 to-[var(--accent-gold-light)]/20 border border-[var(--accent-gold)]/40 text-[var(--text-primary)] text-sm font-bold mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Mail size={14} /> Let's Build Together
              </motion.div>
              
              {/* Headline */}
              <h2 className="mt-8 text-5xl sm:text-7xl font-black bg-gradient-to-br from-[var(--text-primary)] via-[var(--accent-gold)] to-[var(--text-primary)] bg-clip-text text-transparent">
                Got an idea? 💡
                <span className="block bg-gradient-to-r from-[var(--accent-gold-light)] via-[var(--accent-gold)] to-[var(--accent-gold-light)] bg-clip-text text-transparent">
                  Let's make it happen.
                </span>
              </h2>
              
              {/* Description */}
              <p className="mt-6 text-[var(--text-primary)]/70 max-w-2xl mx-auto text-lg leading-relaxed">
                AI startup? Quant research? Creative collaboration? Mariem's calendar has exactly one slot left — yours.
              </p>

              {/* Contact cards */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.div 
                  className="flex items-center gap-4 px-6 py-4 bg-[var(--bg-primary)]/80 backdrop-blur-xl rounded-2xl border border-[var(--accent-gold)]/30 shadow-lg cursor-default group hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <span className="text-3xl">✉️</span>
                  <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">hello@mariemfersi.com</span>
                  <motion.button 
                    onClick={handleCopyEmail}
                    className="ml-2 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] hover:scale-110 transition-all cursor-pointer shadow-md shadow-[var(--accent-gold)]/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {emailCopied ? <Check size={16} /> : <Copy size={16} />}
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 px-6 py-4 bg-[var(--bg-primary)]/80 backdrop-blur-xl rounded-2xl border border-[var(--accent-gold)]/30 shadow-lg group hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <MapPin size={18} className="text-[var(--accent-gold-light)] shrink-0" />
                  <span className="text-sm font-medium text-[var(--text-primary)]/80">Tunisia · Open globally 🌍</span>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.a 
                href="mailto:hello@mariemfersi.com"
                className="mt-10 inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-[var(--bg-primary)] text-base font-bold hover:from-[var(--accent-gold-light)] hover:to-[var(--accent-gold)] hover:-translate-y-2 transition-all shadow-2xl shadow-[var(--accent-gold)]/20 hover:shadow-2xl hover:shadow-[var(--accent-gold)]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Say Hello <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-[var(--accent-gold)]/20 px-6 py-12 lg:px-8 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-tertiary)]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-gold)] to-[var(--accent-gold-light)] flex items-center justify-center shadow-lg shadow-[var(--accent-gold)]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <span className="text-2xl">🐴</span>
            </motion.div>
            <span className="font-bold text-[var(--text-primary)] text-lg">Mariem's Universe</span>
          </div>
          
          <div className="flex gap-3 text-2xl">
            {['🐴','✨','🎹','📊','🚀','🌍'].map((e, i) => (
              <motion.span 
                key={i} 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className="select-none cursor-pointer hover:scale-125 transition-transform"
              >{e}</motion.span>
            ))}
          </div>
          
          <p className="text-sm text-[var(--text-primary)]/60 text-center">
            © 2026 · Built with <span className="text-[var(--accent-gold-light)]">♥</span> by Mariem Fersi · Tunisia
          </p>
        </div>
      </footer>
    </main>
  );
}

