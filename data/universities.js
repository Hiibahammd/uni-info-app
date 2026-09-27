// Centralized Database for Pakistan Undergraduate Admissions
// Add new universities by simply copying any object below and appending it to this array.

window.UNIVERSITIES_DATA = [
  {
    id: "nust",
    name: "National University of Sciences & Technology",
    shortName: "NUST",
    city: "Islamabad",
    campuses: ["H-12 Islamabad (Main)", "Rawalpindi (E&ME, MCE)", "Risalpur (CAE)", "Karachi (PNEC)"],
    province: "Islamabad / Federal",
    type: "Public",
    rankingBadge: "#1 in Pakistan (QS World Ranking)",
    logoText: "NUST",
    themeColor: "#0f4c81",
    overview: "Pakistan's premier science and technology university, globally ranked for engineering, computer science, and business. Famous for its H-12 campus, incubation ecosystem, and rigorous research.",
    admissionsCycle: "Multiple NET Series (NET-1 in Dec, NET-2 in Feb/Mar, NET-3 in Apr/May, NET-4 in Jun/Jul). Single Fall Intake.",
    primaryTest: {
      name: "NET (NUST Entrance Test)",
      totalMarks: 200,
      durationMinutes: 180,
      conductedBy: "NUST",
      series: "4 series per year (NET-1, 2, 3, 4). Best score is automatically considered for final merit list.",
      pattern: [
        { subject: "Mathematics", marks: 80, percent: "40%" },
        { subject: "Physics", marks: 60, percent: "30%" },
        { subject: "Chemistry / Comp Science", marks: 30, percent: "15%" },
        { subject: "English", marks: 20, percent: "10%" },
        { subject: "Intelligence", marks: 10, percent: "5%" }
      ],
      alternativeTests: ["SAT Subject (for international/national ACT seats)", "ACT (Composite score 25+)"]
    },
    meritFormula: {
      testPercent: 75,
      fscPercent: 15,
      matricPercent: 10,
      interviewPercent: 0,
      formulaText: "75% NET Score + 15% FSc/HSSC (Part-1 or Total) + 10% SSC/Matric",
      closingMeritEstimate: "BS Computer Science: ~78.5% | BS Software Eng: ~77.8% | BS AI: ~77.2% | BS Electrical: ~71.5% | BS Mechanical: ~69.0% | BBA (NBS): ~73.5%"
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (Math, Physics, Comp)",
        "ICS (Math, Stats, Comp)",
        "FSc Pre-Medical (Eligible for Computing & Biotech)",
        "A-Levels (IBCC Equivalence min 60%)"
      ],
      remedialMathNote: "Pre-Medical students can apply for Computing programs (CS/SE/AI/DS/Cyber) under HEC policy. They must pass 6 credit hours of remedial math courses during their first year.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Students who have completed FSc Part-1 or AS-Level can apply on Hope Certificate signed by the college principal."
    },
    popularPrograms: [
      { name: "BS Computer Science (SEECS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med with remedial math" },
      { name: "BS Software Engineering (SEECS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Artificial Intelligence (SEECS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering or ICS (Physics & Math)" },
      { name: "BS Mechanical Engineering (SMME)", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "Bachelor of Business Administration (NBS)", category: "Business", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Any Intermediate / A-Levels background" },
      { name: "Bachelor of Architecture (SADA)", category: "Design", duration: "5 Years", minPercentage: 60, keyPrerequisites: "Pre-Engineering or ICS / SADA Creative Aptitude Test" }
    ],
    documentsRequired: [
      "SSC / Matriculation Certificate & Detailed Marks Certificate (DMC)",
      "HSSC Part-1 DMC or Hope Certificate for awaiting result students",
      "IBCC Equivalence Certificate (Mandatory for O/A Level applicants)",
      "CNIC or NADRA B-Form copy",
      "Recent passport-sized photographs with blue background",
      "NET Admit Card & Fee Challan receipt"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 195,000 - 225,000",
      admissionFeeOneTime: "PKR 35,000",
      hostelPerSemester: "PKR 48,000 - 65,000",
      financialAid: "Need-based scholarships (NUST Trust Fund), HEC Ehsaas / National Endowment Scholarships, and top-merit tuition fee waivers."
    },
    officialLinks: {
      website: "https://nust.edu.pk",
      admissionsPortal: "https://ugadmissions.nust.edu.pk",
      testRegistration: "https://net.nust.edu.pk",
      feeStructureUrl: "https://nust.edu.pk/admissions/undergraduate/fee-structure",
      prospectusUrl: "https://nust.edu.pk/admissions/undergraduate/prospectus",
      samplePapers: "https://nust.edu.pk/admissions/undergraduate/net-pattern"
    },
    faqs: [
      { q: "Can I take NET multiple times?", a: "Yes! You can appear in NET-1, 2, 3, and 4. NUST automatically retains and uses your highest test score for the merit computation." },
      { q: "How is A-Level equivalence converted by IBCC?", a: "IBCC equates A-Level grades to percentage: A* = 90%, A = 85%, B = 75%, C = 65%, D = 55%, E = 45%. You need equivalence for both O-Levels and A-Levels." },
      { q: "Can Pre-Medical students join Computer Science at NUST?", a: "Yes, under the updated HEC policy, Pre-Medical students can appear in the NET (either Pre-Med or Pre-Eng test format) and apply for BS CS/SE/AI. They must take deficiency math courses after admission." }
    ],
    tags: ["Computing", "Engineering", "Business", "Public", "Islamabad", "NET"]
  },
  {
    id: "fast",
    name: "FAST National University of Computer & Emerging Sciences",
    shortName: "FAST-NUCES",
    city: "Islamabad / Lahore",
    campuses: ["Islamabad", "Lahore", "Karachi", "Peshawar", "Faisalabad (CFD)"],
    province: "Multi-Campus (Federal / Punjab / Sindh / KP)",
    type: "Semi-Government",
    rankingBadge: "#1 in Computer Science Industry Employability",
    logoText: "FAST",
    themeColor: "#055099",
    overview: "Pakistan's undisputed industry powerhouse for Computer Science, Software Engineering, and AI. Known for strict academic standards, extensive programming culture, and unparalleled IT job placement.",
    admissionsCycle: "Applications open in May/June. Tests held in July. Single Fall Intake.",
    primaryTest: {
      name: "NU Online Admission Test",
      totalMarks: 100,
      durationMinutes: 120,
      conductedBy: "FAST-NUCES",
      series: "Held once each year in July across all campuses. Computer-based adaptive test with negative marking (-0.25 for incorrect answers).",
      pattern: [
        { subject: "Advanced Math", marks: 50, percent: "50%" },
        { subject: "Basic Math", marks: 20, percent: "20%" },
        { subject: "English Comprehension", marks: 10, percent: "10%" },
        { subject: "Analytical Reasoning & IQ", marks: 20, percent: "20%" }
      ],
      alternativeTests: ["SAT-I (Cutoff based, generally 1200+)", "NTS NAT (Separate merit quota, higher cutoff)"]
    },
    meritFormula: {
      testPercent: 50,
      fscPercent: 50,
      matricPercent: 0,
      interviewPercent: 0,
      formulaText: "50% NU Test (or NTS NAT) + 50% HSSC / FSc Part-1 (or Complete)",
      closingMeritEstimate: "Lahore CS: ~74-76% | Islamabad CS: ~72-74% | Lahore SE: ~71-73% | Islamabad AI: ~71-73% | Karachi CS: ~67-70%"
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (Math, Physics, Comp)",
        "ICS (Math, Stats, Comp)",
        "FSc Pre-Medical (with Additional Math or remedial course path)",
        "A-Levels (IBCC equivalence min 60%)"
      ],
      remedialMathNote: "Pre-Medical students are now eligible for Computing programs at FAST. Must pass remedial math classes in semesters 1 & 2.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Applications accepted on basis of FSc Part-1 marks (minimum 60%) with Hope Certificate."
    },
    popularPrograms: [
      { name: "BS Computer Science (BS CS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Software Engineering (BS SE)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Artificial Intelligence (BS AI)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Data Science (BS DS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Cyber Security", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng" },
      { name: "BBA / BS Business Analytics", category: "Business", duration: "4 Years", minPercentage: 50, keyPrerequisites: "Any Intermediate / A-Levels" }
    ],
    documentsRequired: [
      "Secondary School Certificate (Matric / O-Levels)",
      "Higher Secondary School Certificate (FSc / A-Levels) or Part-1 marksheet",
      "IBCC Equivalence certificate for O/A-Levels",
      "CNIC or B-Form copy",
      "Admit card for NU Test",
      "Passport-size photographs"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 185,000 - 220,000",
      admissionFeeOneTime: "PKR 30,000",
      hostelPerSemester: "Hostels managed privately or through affiliated campus options (~PKR 40,000/mo)",
      financialAid: "Need-based financial assistance, study loans through financial partner banks, and FAST Alumni scholarships."
    },
    officialLinks: {
      website: "https://www.nu.edu.pk",
      admissionsPortal: "https://admissions.nu.edu.pk",
      testRegistration: "https://admissions.nu.edu.pk/Apply",
      feeStructureUrl: "https://www.nu.edu.pk/Admissions/FeeStructure",
      prospectusUrl: "https://www.nu.edu.pk/Admissions/Prospectus",
      samplePapers: "https://www.nu.edu.pk/Admissions/TestPattern"
    },
    faqs: [
      { q: "Is there negative marking in the FAST NU test?", a: "Yes! There is a 0.25 penalty for every incorrect answer. It is critical not to blind guess on the Math and Analytical sections." },
      { q: "Can I apply on both NU Test and NTS NAT basis?", a: "Yes, you can register for both, but FAST will process your admission on your selected preference seat. Usually, NU test merit aggregate is slightly more favorable than the very high NAT cutoff." },
      { q: "What is the passing criteria for FAST?", a: "You must score above the university's section-wise cutoffs and achieve an overall merit aggregate within the closing seats of your selected campus." }
    ],
    tags: ["Computing", "Software", "AI", "Semi-Government", "Islamabad", "Lahore", "Karachi", "NU Test"]
  },
  {
    id: "lums",
    name: "Lahore University of Management Sciences",
    shortName: "LUMS",
    city: "Lahore",
    campuses: ["DHA Phase 5, Lahore (Flagship Campus)"],
    province: "Punjab",
    type: "Private",
    rankingBadge: "#1 Private University in Pakistan (QS Top 100 Asia)",
    logoText: "LUMS",
    themeColor: "#006747",
    overview: "Pakistan's most internationally recognized liberal arts and research university. World-class faculty, diverse student body, cutting-edge labs at SBASSE, and a need-blind admission policy through NOP.",
    admissionsCycle: "Applications open in Oct/Nov. Final deadline in Jan/Feb. Single Fall intake each year.",
    primaryTest: {
      name: "Digital SAT / LCAT + SBASSE Subject Test",
      totalMarks: 1600,
      durationMinutes: 134,
      conductedBy: "College Board / LUMS",
      series: "SAT scores through December / March test dates. LCAT & SBASSE tests conducted in February/March.",
      pattern: [
        { subject: "SAT EBRW (Reading & Writing)", marks: 800, percent: "50%" },
        { subject: "SAT Math", marks: 800, percent: "50%" },
        { subject: "SBASSE Scientific Aptitude (Compulsory for Science & Eng)", marks: 100, percent: "Science Section" }
      ],
      alternativeTests: ["LCAT (LUMS Common Admission Test - for applicants without SAT)", "ACT (Composite score 28+)"]
    },
    meritFormula: {
      testPercent: 40,
      fscPercent: 30,
      matricPercent: 20,
      interviewPercent: 10,
      formulaText: "Holistic Review (SAT/LCAT + SBASSE Test + O/A-Levels or Matric/FSc + Personal Statement + Extracurriculars)",
      closingMeritEstimate: "Holistic admission. Competitive benchmark: SAT 1380-1480+ for SBASSE (CS/EE), 1320-1420+ for SDSB (Business), with solid A*/As in O-Levels."
    },
    generalEligibility: {
      minHsscPercentage: 70,
      minSscPercentage: 70,
      acceptedGroups: [
        "A-Levels (Minimum 2Bs and 1C across three principal subjects)",
        "FSc Pre-Engineering / Pre-Medical / ICS (Minimum 70% aggregate)",
        "American High School Diploma / International Baccalaureate (IB min 28 points)"
      ],
      remedialMathNote: "SBASSE requires Advanced Mathematics background. Pre-Medical students must appear in the SBASSE subject test.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "A-Level and FSc Part-2 candidates receive conditional admission based on internal school transcripts and O-Levels / Part-1 grades."
    },
    popularPrograms: [
      { name: "BS Computer Science (SBASSE)", category: "Computing", duration: "4 Years", minPercentage: 70, keyPrerequisites: "Strong Math + SAT/LCAT + SBASSE Test" },
      { name: "BS Electrical Engineering (SBASSE)", category: "Engineering", duration: "4 Years", minPercentage: 70, keyPrerequisites: "Pre-Engineering or A-Level Math/Physics" },
      { name: "BSc (Honours) Accounting & Finance (SDSB)", category: "Business", duration: "4 Years", minPercentage: 70, keyPrerequisites: "Any subject stream + SAT/LCAT" },
      { name: "BSc (Honours) Management Science (SDSB)", category: "Business", duration: "4 Years", minPercentage: 70, keyPrerequisites: "Any subject stream + SAT/LCAT" },
      { name: "BSc (Honours) Economics (MGSHSS)", category: "Social Sciences", duration: "4 Years", minPercentage: 70, keyPrerequisites: "Strong quantitative aptitude" },
      { name: "BA-LL.B (5-Year Law) (SAHSOL)", category: "Law", duration: "5 Years", minPercentage: 70, keyPrerequisites: "LAT (Law Admission Test) + SAT/LCAT" }
    ],
    documentsRequired: [
      "Official SAT / ACT score report sent via College Board (LUMS code: 0513)",
      "Official O-Level & A-Level statement of results or Matric/FSc DMC",
      "Two Teacher Recommendations / Evaluations",
      "Personal Statement essays (Why LUMS, leadership, adversity)",
      "Proof of Extracurricular achievements, honors, and certificates",
      "Financial Aid application documents (if applying for aid)"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 650,000 - 750,000",
      admissionFeeOneTime: "PKR 75,000",
      hostelPerSemester: "PKR 75,000 - 95,000",
      financialAid: "Pakistan's most generous financial aid: 1 in 3 students receives 30% to 100% financial assistance. Full 100% free-ride scholarships via National Outreach Program (NOP)."
    },
    officialLinks: {
      website: "https://lums.edu.pk",
      admissionsPortal: "https://admissions.lums.edu.pk",
      testRegistration: "https://www.collegeboard.org",
      feeStructureUrl: "https://lums.edu.pk/fee-structure",
      prospectusUrl: "https://lums.edu.pk/undergraduate-programmes",
      samplePapers: "https://lums.edu.pk/admissions/sbasse-subject-test"
    },
    faqs: [
      { q: "Is admission to LUMS strictly based on test scores?", a: "No! LUMS uses a holistic evaluation. They assess your academic track record, SAT/LCAT scores, essays, extracurricular passions, leadership, and recommendations." },
      { q: "What is the LUMS NOP (National Outreach Program)?", a: "NOP is a fully funded scholarship for talented students from underprivileged backgrounds across Pakistan, covering 100% tuition, hostel, books, and living stipend." },
      { q: "Can I take the LCAT instead of SAT?", a: "Yes, applicants residing in Pakistan can opt for the LCAT (LUMS Common Admission Test) instead of the SAT." }
    ],
    tags: ["Computing", "Business", "Engineering", "Private", "Lahore", "SAT", "LCAT"]
  },
  {
    id: "giki",
    name: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    shortName: "GIKI",
    city: "Topi",
    campuses: ["Topi, Swabi District, Khyber Pakhtunkhwa (Sprawling Residential Campus)"],
    province: "Khyber Pakhtunkhwa",
    type: "Private",
    rankingBadge: "Pioneering Engineering & High-Tech Research Hub",
    logoText: "GIKI",
    themeColor: "#8b0000",
    overview: "Renowned residential institute nestled at the foot of Tarbela Dam. Celebrated for elite engineering alumni, high campus spirit, robotics labs, and comprehensive placement in Silicon Valley and global R&D.",
    admissionsCycle: "Admissions open in April/May. Test conducted in July. Single Fall Intake.",
    primaryTest: {
      name: "GIKI Written Admission Test",
      totalMarks: 200,
      durationMinutes: 120,
      conductedBy: "GIKI",
      series: "Conducted in major cities (Islamabad, Rawalpindi, Lahore, Peshawar, Karachi, Quetta, Multan) in July.",
      pattern: [
        { subject: "Mathematics", marks: 90, percent: "45%" },
        { subject: "Physics", marks: 70, percent: "35%" },
        { subject: "English", marks: 40, percent: "20%" }
      ],
      alternativeTests: ["SAT-I & SAT Subject (limited overseas/international seats)"]
    },
    meritFormula: {
      testPercent: 85,
      fscPercent: 15,
      matricPercent: 0,
      interviewPercent: 0,
      formulaText: "85% GIKI Admission Test + 15% FSc/HSSC (Part-1 or Total)",
      closingMeritEstimate: "GIKI assigns individual merit positions (1 to ~3000). Merit 1-350: CS & AI | 351-700: Software Eng & Data Science | 701-1400: Mechanical & Electrical Eng."
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (with Physics & Mathematics)",
        "General Science (with Math, Physics)",
        "A-Levels (Mathematics, Physics, and Chemistry/Computer Science)"
      ],
      remedialMathNote: "Rigorous mathematical foundation required. FSc Pre-Medical students are permitted for CS/DS/AI provided they pass remedial mathematics modules.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Students awaiting 2nd-year intermediate or A2 results can apply using 1st-year result sheet with minimum 60%."
    },
    popularPrograms: [
      { name: "BS Artificial Intelligence (AI)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS (Math & Physics)" },
      { name: "BS Computer Science (CS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or ICS" },
      { name: "BS Software Engineering", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or ICS" },
      { name: "BS Mechanical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or A-Levels (Physics & Math)" },
      { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or A-Levels" },
      { name: "BS Materials Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng" }
    ],
    documentsRequired: [
      "HSSC Part-1 / FSc marksheet or A-Level statement of entry",
      "SSC / Matric certificate",
      "CNIC or Form-B copy",
      "GIKI test admit card",
      "IBCC Equivalence certificate for A-Levels"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 480,000 - 540,000",
      admissionFeeOneTime: "PKR 65,000",
      hostelPerSemester: "PKR 70,000 - 85,000 (Mandatory 100% residential campus)",
      financialAid: "GIKI Alumni Association scholarships, Punjab Educational Endowment Fund (PEEF), Khyber Pakhtunkhwa Chief Minister scholarships, and interest-free student loans."
    },
    officialLinks: {
      website: "https://giki.edu.pk",
      admissionsPortal: "https://admissions.giki.edu.pk",
      testRegistration: "https://admissions.giki.edu.pk/apply",
      feeStructureUrl: "https://giki.edu.pk/admissions/fees-and-expenses",
      prospectusUrl: "https://giki.edu.pk/prospectus",
      samplePapers: "https://giki.edu.pk/admissions/ug-test-syllabus"
    },
    faqs: [
      { q: "Why is GIKI's test weightage so high (85%)?", a: "GIKI prioritizes direct conceptual problem-solving in Math and Physics through their own standardized test to ensure level-ground competition across various educational boards." },
      { q: "Is living on campus compulsory at GIKI?", a: "Yes, GIKI is a fully residential campus situated in Topi, KP. All undergraduate students reside in campus hostels." }
    ],
    tags: ["Engineering", "Computing", "AI", "Private", "Topi", "GIKI Test"]
  },
  {
    id: "iba",
    name: "Institute of Business Administration Karachi",
    shortName: "IBA Karachi",
    city: "Karachi",
    campuses: ["Main Campus (University Road)", "City Campus (Garden/Saddar)"],
    province: "Sindh",
    type: "Public / Autonomous",
    rankingBadge: "#1 Business & Economics Institution in Pakistan",
    logoText: "IBA",
    themeColor: "#800020",
    overview: "Established in 1955 with Wharton School of Business collaboration. The benchmark of business, economics, and computational leadership in Pakistan with an unparalleled corporate network.",
    admissionsCycle: "Round 1 (Feb/March) & Round 2 (June/July). Intake in Fall.",
    primaryTest: {
      name: "IBA Aptitude Test / SAT Exemption",
      totalMarks: 200,
      durationMinutes: 120,
      conductedBy: "IBA Karachi",
      series: "Conducted in two distinct rounds (Round 1 in February, Round 2 in June). Score direct admission cutoff or interview cutoff.",
      pattern: [
        { subject: "Mathematics", marks: 100, percent: "50%" },
        { subject: "English & Verbal Analysis", marks: 100, percent: "50%" }
      ],
      alternativeTests: ["SAT-I (Exemption cutoff: Math 600+, EBRW 600+)", "ACT (25+ Composite)"]
    },
    meritFormula: {
      testPercent: 100,
      fscPercent: 0,
      matricPercent: 0,
      interviewPercent: 0,
      formulaText: "100% IBA Aptitude Test Score (or SAT Exemption) + Panel Interview (if applicable)",
      closingMeritEstimate: "Admission is determined by qualifying the aptitude test cutoffs (separate cutoff for Math and English sections). High scorers receive direct admission without interview."
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "HSSC (Pre-Eng, ICS, Pre-Med, Commerce, Humanities)",
        "A-Levels (Minimum 3 principal subjects with minimum B, C, C grades)",
        "American High School Diploma (min 2.5 GPA)"
      ],
      remedialMathNote: "For BS Computer Science & Data Science, students must have studied Mathematics at the Intermediate / A-Levels stage.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Students awaiting final A2 or FSc-2 results can apply based on Part-1 / AS-Level grades."
    },
    popularPrograms: [
      { name: "Bachelor of Business Administration (BBA)", category: "Business", duration: "4 Years", minPercentage: 65, keyPrerequisites: "Any group + IBA Aptitude Test / SAT" },
      { name: "BS Computer Science (BS CS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Math in Intermediate or A-Levels" },
      { name: "BS Data Science", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Math in Intermediate or A-Levels" },
      { name: "BS Accounting & Finance", category: "Business", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Any Intermediate / A-Levels" },
      { name: "BS Economics", category: "Social Sciences", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Any stream with quantitative ability" },
      { name: "BS Social Sciences & Liberal Arts", category: "Social Sciences", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Strong English verbal score" }
    ],
    documentsRequired: [
      "IBA Aptitude Test Admit Card or College Board SAT Scorecard",
      "Matric / O-Level result sheet & equivalence",
      "Intermediate / A-Level result card or statement of entry",
      "CNIC or B-Form",
      "Passport-sized photographs"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 360,000 - 430,000",
      admissionFeeOneTime: "PKR 50,000",
      hostelPerSemester: "PKR 65,000 - 80,000",
      financialAid: "Extensive financial assistance: Ihsan Trust interest-free Qarz-e-Hasna, IBA Need-Based Scholarships, and the Talent Hunt Program (THP)."
    },
    officialLinks: {
      website: "https://www.iba.edu.pk",
      admissionsPortal: "https://admissions.iba.edu.pk",
      testRegistration: "https://admissions.iba.edu.pk",
      feeStructureUrl: "https://www.iba.edu.pk/fee-structure.php",
      prospectusUrl: "https://www.iba.edu.pk/programmes.php",
      samplePapers: "https://admissions.iba.edu.pk/sample_test_papers.php"
    },
    faqs: [
      { q: "What is the SAT exemption criteria at IBA?", a: "Students scoring at least 600 in Math and 600 in Evidence-Based Reading and Writing (Total 1200+) are exempt from the IBA Aptitude Test." },
      { q: "What is the difference between Direct Admission and Interview list?", a: "Candidates scoring above the higher Direct Cutoff are admitted immediately. Candidates between the direct and interview cutoff must pass a faculty panel interview." }
    ],
    tags: ["Business", "Computing", "Data Science", "Public", "Karachi", "IBA Test", "SAT"]
  },
  {
    id: "comsats",
    name: "COMSATS University Islamabad",
    shortName: "CUI",
    city: "Islamabad",
    campuses: ["Islamabad (Main)", "Lahore", "Abbottabad", "Wah", "Attock", "Sahiwal", "Vehari"],
    province: "Federal / Multi-Campus",
    type: "Public",
    rankingBadge: "Top 3 Research Publication Output in Pakistan",
    logoText: "CUI",
    themeColor: "#22316c",
    overview: "A leading public research university known for accessibility, widespread regional campuses, strong computer science faculties, and dual-degree programs with UK universities.",
    admissionsCycle: "Biannual admissions (Fall Semester in July/August & Spring Semester in December/January).",
    primaryTest: {
      name: "NTS NAT (National Aptitude Test)",
      totalMarks: 100,
      durationMinutes: 120,
      conductedBy: "National Testing Service (NTS) / CUI Special NAT",
      series: "Conducted monthly by NTS, or take the on-campus CUI NAT during the admissions cycle.",
      pattern: [
        { subject: "Subject-specific (Math/Physics/Comp)", marks: 30, percent: "30%" },
        { subject: "Analytical Reasoning", marks: 20, percent: "20%" },
        { subject: "Quantitative Reasoning", marks: 20, percent: "20%" },
        { subject: "Verbal / English", marks: 20, percent: "20%" },
        { subject: "General Knowledge", marks: 10, percent: "10%" }
      ],
      alternativeTests: ["USAT (HEC Undergraduate Studies Admission Test)", "NTS NAT (valid within 1 year)"]
    },
    meritFormula: {
      testPercent: 50,
      fscPercent: 40,
      matricPercent: 10,
      interviewPercent: 0,
      formulaText: "50% NTS NAT + 40% FSc/HSSC (Part-1 or Total) + 10% SSC/Matric",
      closingMeritEstimate: "Islamabad CS: ~85-87% | Lahore CS: ~84-86% | Islamabad SE: ~83-85% | Lahore AI: ~83-85% | Wah CS: ~78-81%"
    },
    generalEligibility: {
      minHsscPercentage: 50,
      minSscPercentage: 50,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (Math, Physics, Comp)",
        "ICS (Math, Stats, Comp)",
        "FSc Pre-Medical (with Additional Math or remedial math course)",
        "A-Levels with IBCC Equivalence (min 50% for general, 60% for Eng/CS)"
      ],
      remedialMathNote: "Pre-Medical students eligible for Computing disciplines under HEC policy, requiring remedial math coursework.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Students can apply with 1st-year result and hope certificate for 2nd year."
    },
    popularPrograms: [
      { name: "BS Computer Science", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Software Engineering", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Artificial Intelligence", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Cyber Security", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng (60% min)" },
      { name: "Bachelor of Business Administration (BBA)", category: "Business", duration: "4 Years", minPercentage: 50, keyPrerequisites: "Intermediate in any subject" }
    ],
    documentsRequired: [
      "NTS NAT Scorecard (or CUI NAT registration slip)",
      "SSC / Matric certificate & marksheet",
      "HSSC / Intermediate Part-1 or Part-2 marksheet",
      "Equivalence certificate from IBCC (for O/A Level)",
      "CNIC or B-Form",
      "Passport size photos"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 115,000 - 150,000",
      admissionFeeOneTime: "PKR 25,000",
      hostelPerSemester: "PKR 35,000 - 50,000",
      financialAid: "HEC Need-based scholarships, PEEF scholarships, Qarz-e-Hasna, and sibling fee concessions."
    },
    officialLinks: {
      website: "https://www.comsats.edu.pk",
      admissionsPortal: "https://admissions.comsats.edu.pk",
      testRegistration: "https://www.nts.org.pk",
      feeStructureUrl: "https://ww3.comsats.edu.pk/admissions/feestructure.aspx",
      prospectusUrl: "https://ww3.comsats.edu.pk/admissions/prospectus.aspx",
      samplePapers: "https://www.nts.org.pk/new/NAT.php"
    },
    faqs: [
      { q: "Can I use an existing NTS NAT test score?", a: "Yes, NTS NAT scores are valid for one calendar year. You can submit any valid score before the admission deadline." },
      { q: "Does COMSATS have Spring admissions?", a: "Yes, unlike NUST and LUMS which only enroll in Fall, COMSATS offers both Fall (August) and Spring (January) undergraduate intakes." }
    ],
    tags: ["Computing", "Engineering", "Business", "Public", "Islamabad", "Lahore", "NTS NAT"]
  },
  {
    id: "uet-lahore",
    name: "University of Engineering & Technology Lahore",
    shortName: "UET Lahore",
    city: "Lahore",
    campuses: ["Main Campus (GT Road Lahore)", "Kala Shah Kaku (KSK)", "Faisalabad", "Narowal"],
    province: "Punjab",
    type: "Public",
    rankingBadge: "Oldest & Most Subsidized Public Engineering University",
    logoText: "UET",
    themeColor: "#b22222",
    overview: "Founded in 1921, UET Lahore is Pakistan's historic public engineering bastion. Offers subsidized education, robust alumni across WAPDA, NESPAK, and government works, and expanding computing faculties.",
    admissionsCycle: "ECAT conducted in March/April or June/July. Fall admissions open in June/July.",
    primaryTest: {
      name: "ECAT (Engineering College Admission Test)",
      totalMarks: 400,
      durationMinutes: 100,
      conductedBy: "UET Lahore",
      series: "Conducted in multiple sessions over 4-5 days. Computerized testing across designated centers in Punjab.",
      pattern: [
        { subject: "Mathematics", marks: 120, percent: "30%" },
        { subject: "Physics", marks: 120, percent: "30%" },
        { subject: "Chemistry / Comp Science", marks: 120, percent: "30%" },
        { subject: "English", marks: 40, percent: "10%" }
      ],
      alternativeTests: ["None (ECAT is mandatory for Punjab public engineering universities)"]
    },
    meritFormula: {
      testPercent: 33,
      fscPercent: 50,
      matricPercent: 17,
      interviewPercent: 0,
      formulaText: "33% ECAT + 50% FSc/HSSC (Part-1 or Complete) + 17% SSC/Matric",
      closingMeritEstimate: "UET CS: ~79-82% | UET SE: ~77-80% | Mechanical Eng: ~70-74% | Electrical Eng: ~71-75% | Civil Eng: ~66-70%"
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (Math, Physics, Comp)",
        "DAE (Relevant technology, specific quota)",
        "A-Levels (IBCC equivalence min 60% with Math, Physics, Chem/Comp)"
      ],
      remedialMathNote: "Pre-Medical students may apply for Computing programs subject to latest PEC/HEC joint guidelines.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Part-1 marks considered for provisional admission if Part-2 results are delayed."
    },
    popularPrograms: [
      { name: "BS Computer Science", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or ICS (Physics & Math)" },
      { name: "BS Software Engineering", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or ICS" },
      { name: "BS Mechanical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "BS Civil Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "B.Arch (Architecture)", category: "Design", duration: "5 Years", minPercentage: 60, keyPrerequisites: "Intermediate + UET Architecture Drawing Test" }
    ],
    documentsRequired: [
      "Punjab Domicile Certificate (Mandatory for provincial quota seats)",
      "ECAT Admit Card & Score Card",
      "Matric / SSC Certificate",
      "Intermediate / HSSC DMC or Hope Certificate",
      "CNIC or B-Form copy",
      "Affidavit of non-political participation"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 55,000 - 85,000 (Subsidized Regular Seats) / PKR 160,000 (Self-Finance)",
      admissionFeeOneTime: "PKR 20,000",
      hostelPerSemester: "PKR 25,000 - 35,000 (Extremely economical)",
      financialAid: "Punjab Educational Endowment Fund (PEEF), HEC Need-based, Benevolent Fund scholarships, and Alumni assistance."
    },
    officialLinks: {
      website: "https://uet.edu.pk",
      admissionsPortal: "https://admission.uet.edu.pk",
      testRegistration: "https://admission.uet.edu.pk",
      feeStructureUrl: "https://uet.edu.pk/fees",
      prospectusUrl: "https://admission.uet.edu.pk/prospectus",
      samplePapers: "https://admission.uet.edu.pk/ecat-syllabus"
    },
    faqs: [
      { q: "Is Domicile compulsory for UET Lahore?", a: "Yes, for open merit Punjab quota seats, a Punjab Domicile is mandatory. Reciprocal seats exist for other provinces." },
      { q: "Is ECAT accepted by other universities?", a: "Yes, ECAT scores are accepted by almost all Punjab public engineering colleges including UET Taxila, ITU Lahore, and Bahauddin Zakariya University (BZU)." }
    ],
    tags: ["Engineering", "Computing", "Public", "Lahore", "ECAT"]
  },
  {
    id: "pieas",
    name: "Pakistan Institute of Engineering and Applied Sciences",
    shortName: "PIEAS",
    city: "Islamabad",
    campuses: ["Nilore, Islamabad (Specialized Atomic Energy & Nuclear Research Enclave)"],
    province: "Federal / Islamabad",
    type: "Public",
    rankingBadge: "Top-Tier Specialized Nuclear & Systems Engineering",
    logoText: "PIEAS",
    themeColor: "#1b4d3e",
    overview: "Affiliated with the Pakistan Atomic Energy Commission (PAEC). Elite institution known for rigorous mathematics, nuclear sciences, mechanical engineering, and direct career pathways in national strategic bodies.",
    admissionsCycle: "Applications open in April/May. Written test conducted in June. Fall intake.",
    primaryTest: {
      name: "PIEAS Written Admission Test",
      totalMarks: 100,
      durationMinutes: 180,
      conductedBy: "PIEAS",
      series: "Conducted once annually across major urban centers nationwide.",
      pattern: [
        { subject: "Mathematics", marks: 40, percent: "40%" },
        { subject: "Physics", marks: 30, percent: "30%" },
        { subject: "Chemistry / Computer Science", marks: 30, percent: "30%" }
      ],
      alternativeTests: ["SAT-II Subject tests (for overseas candidates)"]
    },
    meritFormula: {
      testPercent: 60,
      fscPercent: 25,
      matricPercent: 15,
      interviewPercent: 0,
      formulaText: "60% PIEAS Test + 25% FSc/HSSC (Part-1 or Total) + 15% SSC/Matric",
      closingMeritEstimate: "Highly competitive small cohort. CS closing merit ~72-74% | Electrical Eng ~69-72% | Mechanical Eng ~67-70%."
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (with Physics and Mathematics)",
        "A-Levels (Equivalence min 60% with Physics, Math, Chemistry/Comp)"
      ],
      remedialMathNote: "Candidates must have passed Physics and Mathematics with at least 60% marks.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Applications accepted on basis of FSc Part-1 marks with Hope Certificate."
    },
    popularPrograms: [
      { name: "BS Computer and Information Sciences", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Eng or ICS" },
      { name: "BS Electrical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "BS Mechanical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "BS Chemical Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" },
      { name: "BS Metallurgy and Materials Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Engineering" }
    ],
    documentsRequired: [
      "PIEAS Test Admit Slip",
      "Matric / SSC Marks Sheet",
      "FSc / HSSC Part-1 or Complete DMC",
      "Equivalence Certificate from IBCC (if applicable)",
      "CNIC or B-Form copy"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 85,000 - 110,000",
      admissionFeeOneTime: "PKR 25,000",
      hostelPerSemester: "PKR 30,000 - 40,000",
      financialAid: "Subsidized government fee, PAEC fellowships, and need-based tuition waivers."
    },
    officialLinks: {
      website: "http://www.pieas.edu.pk",
      admissionsPortal: "https://admissions.pieas.edu.pk",
      testRegistration: "https://admissions.pieas.edu.pk",
      feeStructureUrl: "http://www.pieas.edu.pk/fees",
      prospectusUrl: "http://www.pieas.edu.pk/prospectus",
      samplePapers: "http://www.pieas.edu.pk/sample-papers"
    },
    faqs: [
      { q: "Does PIEAS guarantee government jobs in PAEC?", a: "While undergraduate BS students are not bonded like MS fellows, top performers are frequently recruited by strategic organizations (PAEC, NESCOM, KRL)." },
      { q: "How difficult is the PIEAS entrance test?", a: "PIEAS test is considered one of Pakistan's conceptually challenging tests, focusing deeply on textbook mathematics and physics principles rather than rote memory." }
    ],
    tags: ["Engineering", "Computing", "Nuclear", "Public", "Islamabad", "PIEAS Test"]
  },
  {
    id: "itu",
    name: "Information Technology University",
    shortName: "ITU Lahore",
    city: "Lahore",
    campuses: ["Arfa Software Technology Park, Ferozepur Road, Lahore"],
    province: "Punjab",
    type: "Public",
    rankingBadge: "Tech Incubator Hub & Silicon Valley Collaboration",
    logoText: "ITU",
    themeColor: "#0f766e",
    overview: "Located in the heart of Pakistan's premier tech skyscraper (Arfa Tower). Founded to emulate MIT model in Pakistan, offering venture incubation, deep AI labs, and direct industry linkage.",
    admissionsCycle: "Admissions open in May/June. Multiple test cycles in June/July. Fall intake.",
    primaryTest: {
      name: "ITU Admissions Test / USAT / SAT",
      totalMarks: 100,
      durationMinutes: 90,
      conductedBy: "ITU / HEC / College Board",
      series: "ITU conducts its own entrance test or accepts SAT-I and HEC USAT.",
      pattern: [
        { subject: "Analytical & Quantitative Math", marks: 50, percent: "50%" },
        { subject: "English & Verbal Ability", marks: 30, percent: "30%" },
        { subject: "Computer / Scientific IQ", marks: 20, percent: "20%" }
      ],
      alternativeTests: ["SAT-I (Cutoff based)", "HEC USAT (Undergraduate Studies Admission Test)", "NTS NAT"]
    },
    meritFormula: {
      testPercent: 50,
      fscPercent: 40,
      matricPercent: 10,
      interviewPercent: 0,
      formulaText: "50% ITU Test / SAT / USAT + 40% Intermediate/HSSC + 10% Matric/SSC",
      closingMeritEstimate: "BS CS: ~76-79% | BS AI: ~75-78% | BS Software Eng: ~74-77% | BS Electrical: ~67-70%"
    },
    generalEligibility: {
      minHsscPercentage: 50,
      minSscPercentage: 50,
      acceptedGroups: [
        "FSc Pre-Engineering",
        "ICS (Math, Physics, Comp)",
        "General Science with Math",
        "Pre-Medical (with remedial math compliance)",
        "A-Levels with IBCC Equivalence (min 50% for general, 60% for Computing/Eng)"
      ],
      remedialMathNote: "Pre-Medical students are welcome to apply for BS CS, BS AI, and BS SE under the updated HEC guidelines.",
      hopeCertificateAccepted: true,
      hopeCertificateNote: "Students awaiting 12th grade board results can apply using 11th grade transcripts."
    },
    popularPrograms: [
      { name: "BS Computer Science (BS CS)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Artificial Intelligence (BS AI)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Software Engineering (BS SE)", category: "Computing", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
      { name: "BS Computer Engineering", category: "Engineering", duration: "4 Years", minPercentage: 60, keyPrerequisites: "Pre-Engineering or ICS with Physics" },
      { name: "BS Management & Technology", category: "Business", duration: "4 Years", minPercentage: 50, keyPrerequisites: "Intermediate any stream" }
    ],
    documentsRequired: [
      "ITU Test Admit Card / SAT Scorecard",
      "Matriculation Marksheet & Certificate",
      "Intermediate Part-1 Marksheet & Hope Certificate",
      "CNIC or B-Form",
      "Equivalence Certificate (if A-Level)"
    ],
    feeStructure: {
      tuitionPerSemester: "PKR 145,000 - 175,000",
      admissionFeeOneTime: "PKR 30,000",
      hostelPerSemester: "Off-campus private student hostels nearby (~PKR 30,000 - 45,000/mo)",
      financialAid: "Punjab Educational Endowment Fund (PEEF), Merit scholarships for top 3 rankers, and need-based tuition installments."
    },
    officialLinks: {
      website: "https://itu.edu.pk",
      admissionsPortal: "https://admissions.itu.edu.pk",
      testRegistration: "https://admissions.itu.edu.pk",
      feeStructureUrl: "https://itu.edu.pk/admissions/fee-structure",
      prospectusUrl: "https://itu.edu.pk/admissions/prospectus",
      samplePapers: "https://itu.edu.pk/admissions/sample-test-papers"
    },
    faqs: [
      { q: "Where are classes held?", a: "Classes and research labs are held inside Arfa Software Technology Park, Lahore, giving students direct day-to-day contact with leading tech startups." },
      { q: "Can I get admission on SAT score?", a: "Yes, ITU accepts SAT scores in place of their own entrance test if you meet the declared cutoff." }
    ],
    tags: ["Computing", "AI", "Software", "Public", "Lahore", "ITU Test", "USAT"]
  },
  {
    id: "medical-mdcat",
    name: "Medical & Dental Colleges (UHS / DUHS / PMDC Centralized)",
    shortName: "MDCAT (MBBS / BDS)",
    city: "National (Punjab, Sindh, KP, Federal)",
    campuses: ["King Edward Medical Univ (KEMU)", "Allama Iqbal (AIMC)", "Dow Univ (DUHS)", "Khyber Medical Univ (KMU)", "Rawalpindi Medical Univ (RMU)"],
    province: "National / Centralized",
    type: "Public & Private Colleges",
    rankingBadge: "Centralized National Medical & Dental Admissions",
    logoText: "MDCAT",
    themeColor: "#c2410c",
    overview: "Undergraduate admissions for public and private medical colleges across Pakistan (MBBS, BDS, DPT, Pharm-D). Supervised by Pakistan Medical & Dental Council (PMDC) and provincial admitting universities.",
    admissionsCycle: "MDCAT registration in July/August. Exam in September/October. College portal applications in October/November.",
    primaryTest: {
      name: "MDCAT (Medical & Dental College Admission Test)",
      totalMarks: 200,
      durationMinutes: 210,
      conductedBy: "PMDC & Provincial Admitting Universities (UHS, DUHS, KMU, SZABMU)",
      series: "Conducted simultaneously nationwide on a single announced Sunday once a year.",
      pattern: [
        { subject: "Biology", marks: 68, percent: "34%" },
        { subject: "Chemistry", marks: 54, percent: "27%" },
        { subject: "Physics", marks: 54, percent: "27%" },
        { subject: "English", marks: 18, percent: "9%" },
        { subject: "Logical Reasoning", marks: 6, percent: "3%" }
      ],
      alternativeTests: ["None (MDCAT is compulsory by national statute for MBBS & BDS)"]
    },
    meritFormula: {
      testPercent: 50,
      fscPercent: 40,
      matricPercent: 10,
      interviewPercent: 0,
      formulaText: "50% MDCAT + 40% FSc Pre-Medical (Part 1 + 2) + 10% SSC/Matric",
      closingMeritEstimate: "Punjab Public MBBS: ~90.5 - 91.5% (KEMU closing ~93.8%) | Sindh Public MBBS: ~84-88% | KP Public MBBS: ~88-90% | Private MBBS: ~75-80%"
    },
    generalEligibility: {
      minHsscPercentage: 60,
      minSscPercentage: 60,
      acceptedGroups: [
        "FSc Pre-Medical (Physics, Chemistry, Biology)",
        "A-Levels (IBCC Pre-Medical Equivalence with Physics, Chemistry, Biology - min 60%)"
      ],
      remedialMathNote: "Not applicable. Biology and Chemistry are mandatory prerequisites.",
      hopeCertificateAccepted: false,
      hopeCertificateNote: "Final FSc result and MDCAT scorecard are mandatory for filing medical college applications."
    },
    popularPrograms: [
      { name: "Bachelor of Medicine & Bachelor of Surgery (MBBS)", category: "Medical", duration: "5 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Med + MDCAT (min 55% score)" },
      { name: "Bachelor of Dental Surgery (BDS)", category: "Medical", duration: "4 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Med + MDCAT (min 50% score)" },
      { name: "Doctor of Physical Therapy (DPT)", category: "Medical", duration: "5 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Medical (usually 60% min)" },
      { name: "Doctor of Pharmacy (Pharm-D)", category: "Medical", duration: "5 Years", minPercentage: 60, keyPrerequisites: "FSc Pre-Medical" },
      { name: "BS Medical Laboratory Technology (MLT)", category: "Medical", duration: "4 Years", minPercentage: 50, keyPrerequisites: "FSc Pre-Medical" }
    ],
    documentsRequired: [
      "Official MDCAT Result Card from PMDC",
      "FSc Pre-Medical Official Marks Sheet (DMC)",
      "Matric / SSC Certificate",
      "Provincial Domicile Certificate (Mandatory for public seats)",
      "CNIC or NADRA B-Form",
      "Father / Guardian CNIC copy",
      "IBCC Equivalence Certificate (for Cambridge students)"
    ],
    feeStructure: {
      tuitionPerSemester: "Public Sector MBBS: PKR 35,000 - 50,000 / Year (Heavily Subsidized) | Private Sector: PKR 1,800,000 - 2,400,000 / Year",
      admissionFeeOneTime: "PKR 15,000 (Public) / PKR 100,000 (Private)",
      hostelPerSemester: "Public: PKR 20,000 - 30,000 / Year",
      financialAid: "Government public colleges are 95% state subsidized. Private medical colleges provide 5% mandatory need-based scholarship quota under PMDC regulations."
    },
    officialLinks: {
      website: "https://pmdc.pk",
      admissionsPortal: "https://www.uhs.edu.pk",
      testRegistration: "https://pmdc.pk/mdcat",
      feeStructureUrl: "https://pmdc.pk/regulations",
      prospectusUrl: "https://www.uhs.edu.pk/admissions.php",
      samplePapers: "https://pmdc.pk/mdcat-syllabus"
    },
    faqs: [
      { q: "What is the minimum MDCAT score required to apply?", a: "According to PMDC rules: Minimum 55% in MDCAT for MBBS admission, and minimum 50% in MDCAT for BDS admission." },
      { q: "Is the MDCAT valid for multiple years?", a: "Yes, under current PMDC regulations, an MDCAT result remains valid for three consecutive years." }
    ],
    tags: ["Medical", "MBBS", "BDS", "Public", "Private", "National", "MDCAT"]
  }
];

// Helper to get all unique tags/categories
window.UNIVERSITIES_CATEGORIES = ["All", "Computing", "Engineering", "Business", "Medical", "Social Sciences"];
window.UNIVERSITIES_CITIES = ["All", "Islamabad", "Lahore", "Karachi", "Topi", "National"];
window.UNIVERSITIES_TESTS = ["All", "NET", "NU Test", "SAT", "GIKI Test", "IBA Test", "NTS NAT", "ECAT", "PIEAS Test", "ITU Test", "MDCAT"];
