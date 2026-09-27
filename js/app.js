// UniCompass PK - Main Interactive React Application
const { useState, useEffect, useMemo } = React;

// --- SVG ICON HELPER FOR BULLETPROOF ZERO-DEPENDENCY RENDERING ---
function Icon({ name, className = "w-5 h-5", ...props }) {
  const icons = {
    search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
    calculator: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    building: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    mapPin: <g><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" strokeWidth="2" /></g>,
    externalLink: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />,
    checkCircle: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    alertCircle: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    award: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    bookOpen: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    fileText: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    dollar: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    calendar: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    chevronDown: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />,
    chevronRight: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />,
    close: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />,
    moon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />,
    sun: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
    scale: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
    help: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    plus: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />,
    copy: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />,
    info: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    sparkles: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  };

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      {icons[name] || icons.info}
    </svg>
  );
}

// --- MAIN APP COMPONENT ---
function App() {
  const [universities, setUniversities] = useState(window.UNIVERSITIES_DATA || []);
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' | 'calculator' | 'compare' | 'guide' | 'portals' | 'add'
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedTest, setSelectedTest] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  
  // Modal state
  const [selectedUniForModal, setSelectedUniForModal] = useState(null);
  const [modalTab, setModalTab] = useState('eligibility'); // 'eligibility' | 'testing' | 'programs' | 'checklist' | 'fees' | 'links'

  // Calculator state
  const [calcUniId, setCalcUniId] = useState('nust');
  const [calcMatric, setCalcMatric] = useState(88);
  const [calcFsc, setCalcFsc] = useState(82);
  const [calcTestMarks, setCalcTestMarks] = useState(145);

  // Compare state
  const [compareUni1, setCompareUni1] = useState('nust');
  const [compareUni2, setCompareUni2] = useState('fast');
  const [compareUni3, setCompareUni3] = useState('lums');

  // Checklist state (saved in local memory)
  const [checkedDocs, setCheckedDocs] = useState({});

  // Notification / Toast
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Dark mode handler
  useEffect(() => {
    const isDark = localStorage.getItem('uniCompass_theme') === 'dark' || 
                   (!('uniCompass_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('uniCompass_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('uniCompass_theme', 'light');
    }
  };

  // Filtered universities
  const filteredUniversities = useMemo(() => {
    return universities.filter(u => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        u.name.toLowerCase().includes(q) || 
        u.shortName.toLowerCase().includes(q) || 
        u.city.toLowerCase().includes(q) ||
        u.primaryTest.name.toLowerCase().includes(q) ||
        (u.popularPrograms && u.popularPrograms.some(p => p.name.toLowerCase().includes(q))) ||
        (u.tags && u.tags.some(t => t.toLowerCase().includes(q)));

      const matchesCategory = selectedCategory === 'All' || 
        (u.popularPrograms && u.popularPrograms.some(p => p.category === selectedCategory)) ||
        (u.tags && u.tags.includes(selectedCategory));

      const matchesCity = selectedCity === 'All' || u.city.includes(selectedCity) || (u.campuses && u.campuses.some(c => c.includes(selectedCity)));
      const matchesTest = selectedTest === 'All' || u.primaryTest.name.includes(selectedTest) || (u.tags && u.tags.includes(selectedTest));
      const matchesType = selectedType === 'All' || u.type === selectedType;

      return matchesSearch && matchesCategory && matchesCity && matchesTest && matchesType;
    });
  }, [universities, searchQuery, selectedCategory, selectedCity, selectedTest, selectedType]);

  // Active university for calculator
  const activeCalcUni = useMemo(() => {
    return universities.find(u => u.id === calcUniId) || universities[0];
  }, [universities, calcUniId]);

  // Compute calculated aggregate
  const computedAggregate = useMemo(() => {
    if (!activeCalcUni || !activeCalcUni.meritFormula) return 0;
    const { testPercent = 0, fscPercent = 0, matricPercent = 0 } = activeCalcUni.meritFormula;
    const testTotal = activeCalcUni.primaryTest?.totalMarks || 100;
    
    const testNormalized = Math.min(100, Math.max(0, (calcTestMarks / testTotal) * 100));
    const fscNormalized = Math.min(100, Math.max(0, calcFsc));
    const matricNormalized = Math.min(100, Math.max(0, calcMatric));

    const total = (testNormalized * (testPercent / 100)) + 
                  (fscNormalized * (fscPercent / 100)) + 
                  (matricNormalized * (matricPercent / 100));
                  
    return Math.round(total * 100) / 100;
  }, [activeCalcUni, calcMatric, calcFsc, calcTestMarks]);

  // Pre-seed test marks when university changes in calculator
  const handleSelectCalcUni = (id) => {
    setCalcUniId(id);
    const uni = universities.find(u => u.id === id);
    if (uni && uni.primaryTest) {
      if (uni.primaryTest.totalMarks === 200) setCalcTestMarks(145);
      else if (uni.primaryTest.totalMarks === 100) setCalcTestMarks(75);
      else if (uni.primaryTest.totalMarks === 1600) setCalcTestMarks(1380);
      else if (uni.primaryTest.totalMarks === 400) setCalcTestMarks(270);
    }
  };

  // Toggle checklist item
  const toggleDocItem = (docId) => {
    setCheckedDocs(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  return (
    <div className="mesh-gradient-bg min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-slate-700 animate-bounce">
          <Icon name="checkCircle" className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-40 glass border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('browse')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white font-black text-xl font-display">
                U
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-xl font-display tracking-tight text-slate-900 dark:text-white">
                    UniCompass<span className="text-indigo-600 dark:text-indigo-400">PK</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    Undergrad 2025/26
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Admissions Requirements & Criteria Engine</p>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm font-medium">
              <button 
                onClick={() => setActiveTab('browse')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${activeTab === 'browse' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon name="building" className="w-4 h-4" />
                <span>Universities</span>
              </button>

              <button 
                onClick={() => setActiveTab('calculator')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${activeTab === 'calculator' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon name="calculator" className="w-4 h-4" />
                <span>Merit Calculator</span>
              </button>

              <button 
                onClick={() => setActiveTab('compare')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${activeTab === 'compare' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon name="scale" className="w-4 h-4" />
                <span>Compare</span>
              </button>

              <button 
                onClick={() => setActiveTab('guide')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${activeTab === 'guide' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon name="bookOpen" className="w-4 h-4" />
                <span>Equivalence & Rules</span>
              </button>

              <button 
                onClick={() => setActiveTab('portals')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${activeTab === 'portals' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon name="externalLink" className="w-4 h-4" />
                <span>Official Portals</span>
              </button>

              <button 
                onClick={() => setActiveTab('add')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${activeTab === 'add' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
                <Icon name="plus" className="w-4 h-4 text-emerald-500" />
                <span>Add Uni</span>
              </button>
            </nav>

            {/* Right Controls */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                title="Toggle Dark / Light Mode"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition">
                <Icon name={darkMode ? 'sun' : 'moon'} className="w-5 h-5 text-amber-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex overflow-x-auto px-4 py-2 border-t border-slate-200 dark:border-slate-800 space-x-2 text-xs no-scrollbar">
          {[
            { id: 'browse', label: 'Universities', icon: 'building' },
            { id: 'calculator', label: 'Calculator', icon: 'calculator' },
            { id: 'compare', label: 'Compare', icon: 'scale' },
            { id: 'guide', label: 'Equivalence', icon: 'bookOpen' },
            { id: 'portals', label: 'Portals', icon: 'externalLink' },
            { id: 'add', label: '+ Add Uni', icon: 'plus' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-xl font-medium flex items-center space-x-1 ${activeTab === t.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
              <Icon name={t.icon} className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* HERO SECTION */}
      {activeTab === 'browse' && (
        <section className="relative pt-8 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-4 border border-indigo-200 dark:border-indigo-800">
              <Icon name="sparkles" className="w-3.5 h-3.5 text-indigo-500" />
              <span>Everything You Need For Undergraduate Admissions</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white leading-tight">
              Demystifying University <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500">Requirements & Merit</span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
              Compare entrance tests (NET, NU, ECAT, NAT, SAT), clear up FSc & A-Level equivalence, calculate your admission aggregate in real-time, and access direct official portals without confusion.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              <div className="p-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-800">
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-display">{universities.length}+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Top Universities</div>
              </div>
              <div className="p-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-800">
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display">100%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Verified Merit Rules</div>
              </div>
              <div className="p-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-800">
                <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-display">8+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Entrance Tests Tracked</div>
              </div>
              <div className="p-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-800">
                <div className="text-2xl font-extrabold text-amber-500 font-display">Live</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Aggregate Engine</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        
        {/* ============================================================ */}
        {/* TAB 1: BROWSE UNIVERSITIES                                   */}
        {/* ============================================================ */}
        {activeTab === 'browse' && (
          <div className="space-y-6">
            
            {/* Search & Filter Bar */}
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Icon name="search" className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search university (e.g., NUST, FAST, LUMS, CS, Engineering, NET, Islamabad)..."
                    className="w-full pl-12 pr-10 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <Icon name="close" className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* City Filter */}
                <div className="w-full md:w-48">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
                    <option value="All">All Cities</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Topi">Topi (GIKI)</option>
                    <option value="National">National / Centralized</option>
                  </select>
                </div>

                {/* Sector / Type Filter */}
                <div className="w-full md:w-44">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
                    <option value="All">All Sectors</option>
                    <option value="Public">Public Sector</option>
                    <option value="Semi-Government">Semi-Government</option>
                    <option value="Private">Private Sector</option>
                  </select>
                </div>
              </div>

              {/* Discipline Category Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Discipline:</span>
                {["All", "Computing", "Engineering", "Business", "Medical", "Social Sciences"].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                    {cat}
                  </button>
                ))}

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-auto mr-2">Test:</span>
                {["All", "NET", "NU Test", "SAT", "ECAT", "MDCAT"].map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTest(t)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${selectedTest === t ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between px-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <div>Showing <span className="font-bold text-slate-800 dark:text-slate-200">{filteredUniversities.length}</span> universities</div>
              {(searchQuery || selectedCategory !== 'All' || selectedCity !== 'All' || selectedTest !== 'All' || selectedType !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedCity('All');
                    setSelectedTest('All');
                    setSelectedType('All');
                  }}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline text-xs">
                  Reset all filters
                </button>
              )}
            </div>

            {/* University Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map(uni => (
                <div 
                  key={uni.id}
                  className="glass-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
                  
                  {/* Card Header & Badges */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-base font-display shadow-md"
                          style={{ backgroundColor: uni.themeColor || '#4f46e5' }}>
                          {uni.logoText || uni.shortName.substring(0, 4)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-lg font-display text-slate-900 dark:text-white leading-tight">
                              {uni.shortName}
                            </span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${uni.type === 'Public' ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-900' : uni.type === 'Semi-Government' ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-900' : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-900'}`}>
                              {uni.type}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            <Icon name="mapPin" className="w-3.5 h-3.5" />
                            <span>{uni.city}</span>
                          </div>
                        </div>
                      </div>

                      {uni.rankingBadge && (
                        <span className="text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full text-right leading-tight max-w-[140px] truncate" title={uni.rankingBadge}>
                          {uni.rankingBadge}
                        </span>
                      )}
                    </div>

                    {/* Full Name */}
                    <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1 mb-2">
                      {uni.name}
                    </h3>

                    {/* Overview Snippet */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {uni.overview}
                    </p>

                    {/* Visual Merit Breakdown Bar */}
                    {uni.meritFormula && (
                      <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 mb-4">
                        <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5">
                          <span className="text-slate-500 dark:text-slate-400">Merit Formula Breakdown</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{uni.meritFormula.testPercent}% Test</span>
                        </div>
                        {/* Multi-color progress bar */}
                        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 flex overflow-hidden">
                          <div 
                            style={{ width: `${uni.meritFormula.testPercent}%` }} 
                            className="bg-indigo-600 h-full" 
                            title={`Test: ${uni.meritFormula.testPercent}%`} 
                          />
                          <div 
                            style={{ width: `${uni.meritFormula.fscPercent}%` }} 
                            className="bg-emerald-500 h-full" 
                            title={`FSc: ${uni.meritFormula.fscPercent}%`} 
                          />
                          <div 
                            style={{ width: `${uni.meritFormula.matricPercent}%` }} 
                            className="bg-amber-400 h-full" 
                            title={`Matric: ${uni.meritFormula.matricPercent}%`} 
                          />
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                          <span>{uni.meritFormula.testPercent}% {uni.primaryTest?.name?.split(' ')[0]}</span>
                          <span>{uni.meritFormula.fscPercent}% FSc</span>
                          {uni.meritFormula.matricPercent > 0 && <span>{uni.meritFormula.matricPercent}% Matric</span>}
                        </div>
                      </div>
                    )}

                    {/* Key Attributes Pills */}
                    <div className="space-y-2 mb-4 text-xs">
                      <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                          <Icon name="fileText" className="w-3.5 h-3.5 text-slate-400" />
                          <span>Entrance Test:</span>
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[180px]">
                          {uni.primaryTest?.name}
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                          <Icon name="checkCircle" className="w-3.5 h-3.5 text-slate-400" />
                          <span>Min. FSc / A-Level:</span>
                        </span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          {uni.generalEligibility?.minHsscPercentage}% or IBCC Equiv.
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                          <Icon name="dollar" className="w-3.5 h-3.5 text-slate-400" />
                          <span>Semester Tuition:</span>
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {uni.feeStructure?.tuitionPerSemester?.split('-')[0]}...
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedUniForModal(uni);
                        setModalTab('eligibility');
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 font-bold text-xs transition flex items-center justify-center space-x-1">
                      <span>View Requirements</span>
                      <Icon name="chevronRight" className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        handleSelectCalcUni(uni.id);
                        setActiveTab('calculator');
                      }}
                      title="Calculate aggregate for this university"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition">
                      <Icon name="calculator" className="w-4 h-4 text-indigo-500" />
                    </button>

                    {uni.officialLinks?.admissionsPortal && (
                      <a
                        href={uni.officialLinks.admissionsPortal}
                        target="_blank"
                        rel="noreferrer"
                        title="Open Official Admissions Portal"
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition">
                        <Icon name="externalLink" className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredUniversities.length === 0 && (
              <div className="text-center py-16 bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
                <Icon name="search" className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No universities matched your criteria</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Try clearing your filters or searching by a different program or city.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedCity('All');
                    setSelectedTest('All');
                    setSelectedType('All');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs">
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: INTERACTIVE MERIT CALCULATOR                          */}
        {/* ============================================================ */}
        {activeTab === 'calculator' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-indigo-800">
                Official Aggregate Formulas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
                Undergraduate Merit Calculator
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Enter your academic percentages and entry test marks to calculate your real-time aggregate according to each university's official policy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Controls Column */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                
                {/* University Picker */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Target University
                  </label>
                  <select
                    value={calcUniId}
                    onChange={(e) => handleSelectCalcUni(e.target.value)}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-base font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    {universities.map(u => (
                      <option key={u.id} value={u.id}>
                        {u.shortName} — {u.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-2 flex items-center space-x-1">
                    <Icon name="info" className="w-3.5 h-3.5" />
                    <span>Formula: {activeCalcUni.meritFormula?.formulaText}</span>
                  </p>
                </div>

                {/* SSC / Matric Marks */}
                {activeCalcUni.meritFormula?.matricPercent > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        SSC / Matric / O-Level Equivalence Percentage
                      </label>
                      <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-lg">
                        {calcMatric}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="100"
                      step="0.1"
                      value={calcMatric}
                      onChange={(e) => setCalcMatric(parseFloat(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                      <span>50%</span>
                      <span>Weightage: {activeCalcUni.meritFormula.matricPercent}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                )}

                {/* HSSC / FSc Part-1 Marks */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      HSSC / FSc / A-Level Part-1 Percentage
                    </label>
                    <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-lg">
                      {calcFsc}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    step="0.1"
                    value={calcFsc}
                    onChange={(e) => setCalcFsc(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                    <span>50% (Min eligibility)</span>
                    <span>Weightage: {activeCalcUni.meritFormula.fscPercent}%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Entrance Test Marks */}
                {activeCalcUni.meritFormula?.testPercent > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {activeCalcUni.primaryTest?.name} Score (Out of {activeCalcUni.primaryTest?.totalMarks || 100})
                      </label>
                      <span className="text-sm font-extrabold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-lg">
                        {calcTestMarks} / {activeCalcUni.primaryTest?.totalMarks || 100}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={activeCalcUni.primaryTest?.totalMarks || 100}
                      step="1"
                      value={calcTestMarks}
                      onChange={(e) => setCalcTestMarks(parseInt(e.target.value) || 0)}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                      <span>0</span>
                      <span>Weightage: {activeCalcUni.meritFormula.testPercent}%</span>
                      <span>{activeCalcUni.primaryTest?.totalMarks || 100}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Result Gauge Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden border border-indigo-800">
                  <div className="text-xs uppercase font-bold tracking-widest text-indigo-300 mb-1">
                    Calculated Merit Aggregate
                  </div>
                  <div className="text-5xl sm:text-6xl font-black font-display tracking-tight text-white mb-2">
                    {computedAggregate}%
                  </div>
                  <div className="text-sm text-indigo-200 font-medium">
                    Calculated for <span className="font-bold text-white">{activeCalcUni.shortName}</span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-400 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, computedAggregate)}%` }}>
                    </div>
                  </div>

                  {/* Historical Closing Benchmark Note */}
                  <div className="mt-6 pt-5 border-t border-white/10 text-xs text-indigo-100/90 leading-relaxed">
                    <div className="font-bold text-white mb-1 flex items-center space-x-1.5">
                      <Icon name="award" className="w-4 h-4 text-amber-400" />
                      <span>Historical Benchmarks:</span>
                    </div>
                    <p>{activeCalcUni.meritFormula?.closingMeritEstimate}</p>
                  </div>
                </div>

                {/* Instant Multi-University Comparison Box */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center space-x-1.5">
                    <Icon name="scale" className="w-4 h-4 text-indigo-500" />
                    <span>Your Marks Across Other Universities</span>
                  </h4>
                  <div className="space-y-2.5 text-xs">
                    {universities.slice(0, 5).map(u => {
                      const tTotal = u.primaryTest?.totalMarks || 100;
                      // Estimate score based on percentage
                      const normalizedTestPct = (calcTestMarks / (activeCalcUni.primaryTest?.totalMarks || 100)) * 100;
                      const agg = (
                        (normalizedTestPct * (u.meritFormula.testPercent / 100)) + 
                        (calcFsc * (u.meritFormula.fscPercent / 100)) + 
                        (calcMatric * (u.meritFormula.matricPercent / 100))
                      ).toFixed(2);

                      return (
                        <div key={u.id} className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                          <span className="font-bold text-slate-700 dark:text-slate-300">{u.shortName}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-[11px] text-slate-400">{u.meritFormula.formulaText.split('+')[0]}</span>
                            <span className="font-extrabold text-indigo-600 dark:text-indigo-400">{agg}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: SIDE-BY-SIDE UNIVERSITY COMPARISON                   */}
        {/* ============================================================ */}
        {activeTab === 'compare' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold border border-purple-200 dark:border-purple-800">
                Direct Decision Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
                Side-by-Side University Comparison
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Select 2 or 3 institutions to evaluate admission formulas, test requirements, fees, and eligibility side by side.
              </p>
            </div>

            {/* University Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              {[
                { label: "University 1", val: compareUni1, setVal: setCompareUni1 },
                { label: "University 2", val: compareUni2, setVal: setCompareUni2 },
                { label: "University 3", val: compareUni3, setVal: setCompareUni3 }
              ].map((sel, idx) => (
                <div key={idx}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">{sel.label}</label>
                  <select
                    value={sel.val}
                    onChange={(e) => sel.setVal(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none">
                    {universities.map(u => (
                      <option key={u.id} value={u.id}>{u.shortName} — {u.name}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Comparison Table / Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[compareUni1, compareUni2, compareUni3].map((id, colIdx) => {
                const uni = universities.find(u => u.id === id) || universities[colIdx];
                return (
                  <div key={colIdx} className="glass-card rounded-3xl p-6 space-y-5">
                    {/* Header */}
                    <div className="flex items-center space-x-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-base font-display shadow-md"
                        style={{ backgroundColor: uni.themeColor || '#4f46e5' }}>
                        {uni.logoText || uni.shortName.substring(0, 4)}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-xl font-display text-slate-900 dark:text-white leading-tight">{uni.shortName}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{uni.city} • {uni.type}</p>
                      </div>
                    </div>

                    {/* Criteria 1: Primary Test */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Primary Admission Test</span>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{uni.primaryTest?.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Total Marks: {uni.primaryTest?.totalMarks} | Duration: {uni.primaryTest?.durationMinutes} mins</p>
                    </div>

                    {/* Criteria 2: Merit Breakdown */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Merit Formula Weightage</span>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {uni.meritFormula?.formulaText}
                      </div>
                    </div>

                    {/* Criteria 3: Minimum Eligibility */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Minimum Academic Percentage</span>
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {uni.generalEligibility?.minHsscPercentage}% in FSc / A-Levels
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Matric / O-Level: {uni.generalEligibility?.minSscPercentage}%
                      </p>
                    </div>

                    {/* Criteria 4: Pre-Med to Computing */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Pre-Medical Eligible for CS?</span>
                      <div className="flex items-center space-x-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        <Icon name="checkCircle" className="w-4 h-4 text-emerald-500" />
                        <span>Eligible (with remedial math)</span>
                      </div>
                    </div>

                    {/* Criteria 5: Fees */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Tuition Per Semester</span>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{uni.feeStructure?.tuitionPerSemester}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Hostel: {uni.feeStructure?.hostelPerSemester?.split('(')[0]}</p>
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <a
                        href={uni.officialLinks?.admissionsPortal}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition">
                        <span>Visit {uni.shortName} Portal</span>
                        <Icon name="externalLink" className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: STUDENT EQUIVALENCE & POLICY GUIDE                    */}
        {/* ============================================================ */}
        {activeTab === 'guide' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
                Admissions Policy & Guidelines
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
                IBCC Equivalence & Eligibility Guide
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Straightforward explanations of Cambridge O/A-Levels conversion, HEC Pre-Medical policy for computing, and Hope Certificates.
              </p>
            </div>

            {/* Guide Item 1: IBCC Equivalence Table & Rules */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  IBCC
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">How Cambridge O/A-Levels Are Converted by IBCC</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Inter Board Coordination Commission (IBCC) official grade conversion table</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      <th className="py-2.5 px-3">Grade</th>
                      <th className="py-2.5 px-3">O-Level Equivalent Marks</th>
                      <th className="py-2.5 px-3">A-Level Equivalent Marks</th>
                      <th className="py-2.5 px-3">Standard Percentage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-emerald-600">A*</td>
                      <td className="py-2.5 px-3">90 / 100</td>
                      <td className="py-2.5 px-3">90 / 100</td>
                      <td className="py-2.5 px-3">90%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-indigo-600">A</td>
                      <td className="py-2.5 px-3">85 / 100</td>
                      <td className="py-2.5 px-3">85 / 100</td>
                      <td className="py-2.5 px-3">85%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-blue-600">B</td>
                      <td className="py-2.5 px-3">75 / 100</td>
                      <td className="py-2.5 px-3">75 / 100</td>
                      <td className="py-2.5 px-3">75%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-amber-600">C</td>
                      <td className="py-2.5 px-3">65 / 100</td>
                      <td className="py-2.5 px-3">65 / 100</td>
                      <td className="py-2.5 px-3">65%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-orange-600">D</td>
                      <td className="py-2.5 px-3">55 / 100</td>
                      <td className="py-2.5 px-3">55 / 100</td>
                      <td className="py-2.5 px-3">55%</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-red-600">E</td>
                      <td className="py-2.5 px-3">45 / 100</td>
                      <td className="py-2.5 px-3">45 / 100</td>
                      <td className="py-2.5 px-3">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/50 rounded-2xl border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
                <span className="font-bold">Important note for A-Level students:</span> Pakistani universities calculate your intermediate aggregate using your <strong>Total IBCC Equivalence Certificate</strong>. For computing and engineering programs, you need 8 subjects in O-Levels (English, Urdu, Islamiyat, Pak Studies, Math, Physics, Chemistry, Biology/Comp) and 3 principal subjects in A-Levels.
              </div>
            </div>

            {/* Guide Item 2: Pre-Medical to Computing HEC Notification */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  HEC
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pre-Medical Students Eligible for Computing (CS / SE / AI / DS)</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">National Curriculum Council & Higher Education Commission Policy</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Under the revised Higher Education Commission (HEC) notification, students with an <strong>FSc Pre-Medical background (Physics, Chemistry, Biology)</strong> are now officially eligible to apply for undergraduate computing programs (BS Computer Science, Software Engineering, Artificial Intelligence, Data Science, and Cyber Security) across all recognized universities including NUST, FAST-NUCES, COMSATS, and ITU.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Requirement: Remedial Math</div>
                  <p className="text-slate-500 dark:text-slate-400">You must pass 6 credit hours of deficiency mathematics courses (Calculus / Algebra) within the first two semesters after admission.</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-slate-800 dark:text-slate-200 mb-1">Entrance Test Format</div>
                  <p className="text-slate-500 dark:text-slate-400">At NUST, Pre-Med students can appear in the Pre-Med NET (Biology based) for computing programs.</p>
                </div>
              </div>
            </div>

            {/* Guide Item 3: Hope Certificate Guidelines */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  HOPE
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Applying on Hope Certificate (Awaiting Final Results)</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">What to do if your 2nd year Board or A2 results have not been declared yet</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Almost all Pakistani universities conduct entrance tests and process undergraduate admissions in <strong>June, July, and August</strong> before the Board of Intermediate or Cambridge final results are released.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
                  <li>Your admission aggregate is calculated provisionally on your <strong>Part-1 (11th Grade / AS-Level) marksheet</strong>.</li>
                  <li>Your college principal or school counselor issues a formal letter stating: <em>"The student is expected to secure at least [percentage, e.g. 70%] in their final HSSC / A2 examination."</em></li>
                  <li>Once final results are announced in September/October, you must submit the verified marksheet meeting the university's minimum cutoff (usually 60%).</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: OFFICIAL PORTALS DIRECTORY                           */}
        {/* ============================================================ */}
        {activeTab === 'portals' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-200 dark:border-indigo-800">
                Verified Direct Links
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
                Official Portals & Test Registration Directory
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Direct verified links to online application forms, past test syllabi, and official fee vouchers with zero redirects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {universities.map(uni => (
                <div key={uni.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm font-display shadow-sm"
                        style={{ backgroundColor: uni.themeColor || '#4f46e5' }}>
                        {uni.shortName.substring(0, 4)}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{uni.name}</h4>
                        <span className="text-xs text-slate-400">{uni.city} • {uni.primaryTest?.name}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs font-semibold">
                      {uni.officialLinks?.admissionsPortal && (
                        <a 
                          href={uni.officialLinks.admissionsPortal} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition">
                          <span>Admissions Portal</span>
                          <Icon name="externalLink" className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {uni.officialLinks?.testRegistration && (
                        <a 
                          href={uni.officialLinks.testRegistration} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 hover:bg-purple-100 transition">
                          <span>Test Registration</span>
                          <Icon name="externalLink" className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {uni.officialLinks?.feeStructureUrl && (
                        <a 
                          href={uni.officialLinks.feeStructureUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition">
                          <span>Fee Breakdown</span>
                          <Icon name="externalLink" className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {uni.officialLinks?.samplePapers && (
                        <a 
                          href={uni.officialLinks.samplePapers} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition">
                          <span>Syllabus & Pattern</span>
                          <Icon name="externalLink" className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Main Site:</span>
                    <a href={uni.officialLinks?.website} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                      {uni.officialLinks?.website?.replace('https://', '')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: SCALABILITY STUDIO (ADD NEW UNIVERSITY)              */}
        {/* ============================================================ */}
        {activeTab === 'add' && (
          <AddUniversityStudio 
            onAddUniversity={(newUni) => {
              setUniversities(prev => [newUni, ...prev]);
              showToast(`Successfully added ${newUni.shortName} to your live directory!`);
              setActiveTab('browse');
            }}
          />
        )}

      </main>

      {/* ============================================================ */}
      {/* UNIVERSITY DETAIL MODAL / DRAWER                             */}
      {/* ============================================================ */}
      {selectedUniForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-800/30">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-xl font-display shadow-md"
                  style={{ backgroundColor: selectedUniForModal.themeColor || '#4f46e5' }}>
                  {selectedUniForModal.logoText || selectedUniForModal.shortName.substring(0, 4)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                      {selectedUniForModal.shortName}
                    </h2>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {selectedUniForModal.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{selectedUniForModal.name} • {selectedUniForModal.city}</p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedUniForModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                <Icon name="close" className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-200 dark:border-slate-800 px-6 bg-white dark:bg-slate-900 text-xs font-semibold space-x-2">
              {[
                { id: 'eligibility', label: 'Requirements & Eligibility', icon: 'checkCircle' },
                { id: 'testing', label: 'Entrance Test & Formula', icon: 'calculator' },
                { id: 'programs', label: 'Programs Offered', icon: 'bookOpen' },
                { id: 'checklist', label: 'Document Checklist', icon: 'fileText' },
                { id: 'fees', label: 'Fees & Scholarships', icon: 'dollar' },
                { id: 'links', label: 'Portals & FAQs', icon: 'help' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setModalTab(t.id)}
                  className={`py-3 px-3 border-b-2 flex items-center space-x-1.5 whitespace-nowrap transition ${modalTab === t.id ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}>
                  <Icon name={t.icon} className="w-4 h-4" />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              
              {/* SUBTAB 1: ELIGIBILITY */}
              {modalTab === 'eligibility' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900">
                      <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        Minimum Intermediate / FSc Marks
                      </div>
                      <div className="text-2xl font-black text-emerald-800 dark:text-emerald-200 font-display">
                        {selectedUniForModal.generalEligibility?.minHsscPercentage}%
                      </div>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">Or equivalent IBCC letter grade for Cambridge A-Levels.</p>
                    </div>

                    <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-900">
                      <div className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-1">
                        Minimum Matric / SSC Marks
                      </div>
                      <div className="text-2xl font-black text-blue-800 dark:text-blue-200 font-display">
                        {selectedUniForModal.generalEligibility?.minSscPercentage}%
                      </div>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Or equivalent in 8 O-Level subjects with IBCC equivalence.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider">Accepted High School Groups:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedUniForModal.generalEligibility?.acceptedGroups?.map((grp, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {grp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedUniForModal.generalEligibility?.remedialMathNote && (
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-950/60 rounded-2xl border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                      <div className="font-bold text-indigo-700 dark:text-indigo-300 mb-1 flex items-center space-x-1.5">
                        <Icon name="info" className="w-4 h-4" />
                        <span>Pre-Medical To Computing Path:</span>
                      </div>
                      <p>{selectedUniForModal.generalEligibility.remedialMathNote}</p>
                    </div>
                  )}

                  {selectedUniForModal.generalEligibility?.hopeCertificateNote && (
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <div className="font-bold text-slate-900 dark:text-white mb-1">Hope Certificate Acceptance:</div>
                      <p>{selectedUniForModal.generalEligibility.hopeCertificateNote}</p>
                    </div>
                  )}
                </div>
              )}

              {/* SUBTAB 2: TESTING & FORMULA */}
              {modalTab === 'testing' && (
                <div className="space-y-5">
                  <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/50 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                      Official Merit Formula
                    </h4>
                    <div className="text-lg font-bold text-indigo-950 dark:text-indigo-100">
                      {selectedUniForModal.meritFormula?.formulaText}
                    </div>
                    <p className="text-xs text-indigo-600 dark:text-indigo-300 mt-1">
                      Historical Cutoff Range: {selectedUniForModal.meritFormula?.closingMeritEstimate}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider">
                      {selectedUniForModal.primaryTest?.name} Structure & Syllabus:
                    </h4>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-500 font-bold uppercase">
                            <th className="py-2 px-3">Subject</th>
                            <th className="py-2 px-3">Marks</th>
                            <th className="py-2 px-3">Percentage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          {selectedUniForModal.primaryTest?.pattern?.map((p, idx) => (
                            <tr key={idx}>
                              <td className="py-2 px-3 font-semibold text-slate-800 dark:text-slate-200">{p.subject}</td>
                              <td className="py-2 px-3 font-bold text-indigo-600">{p.marks}</td>
                              <td className="py-2 px-3 text-slate-500">{p.percent}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Test Series & Schedule:</span>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">{selectedUniForModal.primaryTest?.series}</p>
                  </div>
                </div>
              )}

              {/* SUBTAB 3: PROGRAMS */}
              {modalTab === 'programs' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                    Popular Undergraduate Programs:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedUniForModal.popularPrograms?.map((prog, i) => (
                      <div key={i} className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{prog.name}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                            {prog.category}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between mt-2">
                          <span>Duration: {prog.duration}</span>
                          <span>Prereq: {prog.keyPrerequisites}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUBTAB 4: DOCUMENT CHECKLIST */}
              {modalTab === 'checklist' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                        Required Documents Checklist
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Check off documents as you gather and scan them</p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="no-print px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-semibold flex items-center space-x-1">
                      <Icon name="copy" className="w-3.5 h-3.5" />
                      <span>Print Checklist</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {selectedUniForModal.documentsRequired?.map((doc, idx) => {
                      const docId = `${selectedUniForModal.id}_doc_${idx}`;
                      const isChecked = !!checkedDocs[docId];
                      return (
                        <div 
                          key={idx}
                          onClick={() => toggleDocItem(docId)}
                          className={`p-3 rounded-2xl border transition cursor-pointer flex items-center space-x-3 ${isChecked ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-400'}`}>
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center border ${isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-white dark:bg-slate-900'}`}>
                            {isChecked && <Icon name="check" className="w-3.5 h-3.5" />}
                          </div>
                          <span className={`text-xs font-medium ${isChecked ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                            {doc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SUBTAB 5: FEES & SCHOLARSHIPS */}
              {modalTab === 'fees' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Tuition Per Semester</div>
                      <div className="text-xl font-black text-slate-900 dark:text-white font-display">
                        {selectedUniForModal.feeStructure?.tuitionPerSemester}
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Hostel & Accommodation</div>
                      <div className="text-xl font-black text-slate-900 dark:text-white font-display">
                        {selectedUniForModal.feeStructure?.hostelPerSemester}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-xs">
                    <div className="font-bold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center space-x-1.5">
                      <Icon name="award" className="w-4 h-4 text-emerald-500" />
                      <span>Financial Aid & Scholarships:</span>
                    </div>
                    <p className="text-emerald-900 dark:text-emerald-200 leading-relaxed">{selectedUniForModal.feeStructure?.financialAid}</p>
                  </div>
                </div>
              )}

              {/* SUBTAB 6: LINKS & FAQS */}
              {modalTab === 'links' && (
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">Direct Official Links:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold">
                      {selectedUniForModal.officialLinks?.admissionsPortal && (
                        <a href={selectedUniForModal.officialLinks.admissionsPortal} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 flex items-center justify-between">
                          <span>Admissions Portal</span>
                          <Icon name="externalLink" className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {selectedUniForModal.officialLinks?.feeStructureUrl && (
                        <a href={selectedUniForModal.officialLinks.feeStructureUrl} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-between">
                          <span>Fee Structure Webpage</span>
                          <Icon name="externalLink" className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {selectedUniForModal.faqs?.length > 0 && (
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-2">Frequently Asked Questions:</h4>
                      <div className="space-y-2">
                        {selectedUniForModal.faqs.map((faq, i) => (
                          <div key={i} className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs">
                            <div className="font-bold text-slate-900 dark:text-white mb-1">Q: {faq.q}</div>
                            <div className="text-slate-600 dark:text-slate-300">{faq.a}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between">
              <button
                onClick={() => {
                  handleSelectCalcUni(selectedUniForModal.id);
                  setSelectedUniForModal(null);
                  setActiveTab('calculator');
                }}
                className="py-2 px-4 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center space-x-1.5">
                <Icon name="calculator" className="w-3.5 h-3.5" />
                <span>Calculate Aggregate</span>
              </button>

              {selectedUniForModal.officialLinks?.admissionsPortal && (
                <a
                  href={selectedUniForModal.officialLinks.admissionsPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-indigo-600/20">
                  <span>Open Admissions Portal</span>
                  <Icon name="externalLink" className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-8 px-4 sm:px-6 lg:px-8 mt-auto text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">UniCompass PK</span>
            <span>—</span>
            <span>Empowering Pakistani undergraduate applicants with clear requirements and formulas.</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setActiveTab('add')} className="hover:text-indigo-600 font-medium">Contribute Data</button>
            <button onClick={() => setActiveTab('portals')} className="hover:text-indigo-600 font-medium">Official Portals</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENT: ADD UNIVERSITY STUDIO (FOR SCALABILITY) ---
function AddUniversityStudio({ onAddUniversity }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    shortName: '',
    city: 'Islamabad',
    province: 'Punjab',
    type: 'Public',
    rankingBadge: '',
    themeColor: '#4f46e5',
    overview: '',
    testName: '',
    testTotalMarks: 100,
    testPercent: 50,
    fscPercent: 40,
    matricPercent: 10,
    minHsscPercentage: 60,
    minSscPercentage: 60,
    tuitionPerSemester: 'PKR 120,000 - 160,000',
    website: 'https://',
    admissionsPortal: 'https://'
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const generatedObject = useMemo(() => {
    const slug = formData.id || formData.shortName.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'new-uni';
    return {
      id: slug,
      name: formData.name || "University Name",
      shortName: formData.shortName || "UNI",
      city: formData.city,
      province: formData.province,
      type: formData.type,
      rankingBadge: formData.rankingBadge || "Recognized by HEC",
      logoText: (formData.shortName || "UNI").substring(0, 4),
      themeColor: formData.themeColor,
      overview: formData.overview || "Undergraduate degree awarding institution recognized by Higher Education Commission.",
      primaryTest: {
        name: formData.testName || "Entrance Test",
        totalMarks: parseInt(formData.testTotalMarks) || 100,
        durationMinutes: 120,
        conductedBy: formData.shortName || "University",
        pattern: [
          { subject: "Mathematics / Biology", marks: 50, percent: "50%" },
          { subject: "Analytical & English", marks: 50, percent: "50%" }
        ]
      },
      meritFormula: {
        testPercent: parseInt(formData.testPercent) || 50,
        fscPercent: parseInt(formData.fscPercent) || 40,
        matricPercent: parseInt(formData.matricPercent) || 10,
        formulaText: `${formData.testPercent}% Test + ${formData.fscPercent}% FSc + ${formData.matricPercent}% Matric`,
        closingMeritEstimate: "Computing: ~75% | Engineering: ~70%"
      },
      generalEligibility: {
        minHsscPercentage: parseInt(formData.minHsscPercentage) || 60,
        minSscPercentage: parseInt(formData.minSscPercentage) || 60,
        acceptedGroups: ["FSc Pre-Engineering", "ICS", "Pre-Medical", "A-Levels"],
        remedialMathNote: "Pre-Medical students eligible for computing upon clearing deficiency math.",
        hopeCertificateAccepted: true
      },
      popularPrograms: [
        { name: "BS Computer Science", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc or ICS" },
        { name: "BS Software Engineering", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc or ICS" }
      ],
      documentsRequired: [
        "Matric / SSC Certificate",
        "Intermediate / HSSC Part-1 DMC or Hope Certificate",
        "IBCC Equivalence (for Cambridge students)",
        "CNIC or B-Form"
      ],
      feeStructure: {
        tuitionPerSemester: formData.tuitionPerSemester,
        admissionFeeOneTime: "PKR 25,000",
        hostelPerSemester: "PKR 35,000",
        financialAid: "Need-based scholarships and HEC Ehsaas program."
      },
      officialLinks: {
        website: formData.website,
        admissionsPortal: formData.admissionsPortal,
        testRegistration: formData.admissionsPortal
      },
      tags: ["Computing", "Engineering", formData.type, formData.city]
    };
  }, [formData]);

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedObject, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveToSession = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.shortName) {
      alert("Please enter at least the University Name and Short Acronym.");
      return;
    }
    onAddUniversity(generatedObject);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
          Scalable Data Architecture
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white mt-2">
          Add / Extend University Information
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Easily expand the directory by filling out the form below. Test it live in the app or copy the generated JSON code to add it permanently.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <form onSubmit={handleSaveToSession} className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-2">Basic Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Short Name / Acronym *</label>
              <input
                type="text"
                required
                placeholder="e.g. NED, AIR, SZABIST"
                value={formData.shortName}
                onChange={(e) => handleChange('shortName', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">City *</label>
              <input
                type="text"
                required
                placeholder="e.g. Karachi, Islamabad"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full University Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. NED University of Engineering and Technology"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Sector / Type</label>
              <select
                value={formData.type}
                onChange={(e) => handleChange('type', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                <option value="Public">Public</option>
                <option value="Semi-Government">Semi-Government</option>
                <option value="Private">Private</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Brand Color</label>
              <input
                type="color"
                value={formData.themeColor}
                onChange={(e) => handleChange('themeColor', e.target.value)}
                className="w-full h-10 p-1 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Ranking Tag</label>
              <input
                type="text"
                placeholder="Top Engineering Hub"
                value={formData.rankingBadge}
                onChange={(e) => handleChange('rankingBadge', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
          </div>

          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
            Entrance Test & Merit Weightage
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Test Name</label>
              <input
                type="text"
                placeholder="e.g. NED Entry Test or NAT"
                value={formData.testName}
                onChange={(e) => handleChange('testName', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Total Test Marks</label>
              <input
                type="number"
                value={formData.testTotalMarks}
                onChange={(e) => handleChange('testTotalMarks', e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">Test % Weight</label>
              <input
                type="number"
                value={formData.testPercent}
                onChange={(e) => handleChange('testPercent', e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">FSc % Weight</label>
              <input
                type="number"
                value={formData.fscPercent}
                onChange={(e) => handleChange('fscPercent', e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">Matric % Weight</label>
              <input
                type="number"
                value={formData.matricPercent}
                onChange={(e) => handleChange('matricPercent', e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
          </div>

          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
            Official Web Links
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Main Website URL</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Admissions Portal URL</label>
              <input
                type="url"
                value={formData.admissionsPortal}
                onChange={(e) => handleChange('admissionsPortal', e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center space-x-1.5">
              <Icon name="plus" className="w-4 h-4" />
              <span>Add to Live Session</span>
            </button>
            <button
              type="button"
              onClick={copyJson}
              className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition flex items-center space-x-1.5">
              <Icon name={copied ? 'check' : 'copy'} className="w-4 h-4 text-emerald-500" />
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>
          </div>
        </form>

        {/* Live Preview */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Card Live Preview</div>
          <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-base font-display shadow-md"
                  style={{ backgroundColor: formData.themeColor }}>
                  {(formData.shortName || 'UNI').substring(0, 4)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-extrabold text-lg font-display text-slate-900 dark:text-white leading-tight">
                      {formData.shortName || 'Acronym'}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                      {formData.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <Icon name="mapPin" className="w-3.5 h-3.5" />
                    <span>{formData.city}</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2">
              {formData.name || 'Full University Name'}
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 mb-3 text-xs">
              <div className="font-semibold text-slate-500 dark:text-slate-400 mb-1">Formula Breakdown</div>
              <div className="font-bold text-indigo-600 dark:text-indigo-400">
                {formData.testPercent}% {formData.testName || 'Test'} + {formData.fscPercent}% FSc + {formData.matricPercent}% Matric
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              Direct Portal: <span className="font-mono text-[11px] text-indigo-600">{formData.admissionsPortal}</span>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 p-4 rounded-2xl font-mono text-[11px] max-h-48 overflow-y-auto">
            <pre>{JSON.stringify(generatedObject, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// Render the application to DOM
const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);
