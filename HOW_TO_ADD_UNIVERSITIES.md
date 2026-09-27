# How to Add & Extend University Information in UniCompass PK

This guide explains how to easily add more universities, update admission criteria, and include new official website links as admissions policies evolve.

---

## Method 1: Using the In-App "Add Uni" Tool (Zero Coding Required)

UniCompass PK has a built-in **Scalability Studio**:
1. Open the website and click on the **"+ Add Uni"** tab in the top navigation bar.
2. Fill out the fields:
   - **University Acronym** (e.g., `NED`, `AIR`, `SZABIST`)
   - **Full Name** (e.g., `NED University of Engineering & Technology`)
   - **City & Sector** (Public, Semi-Government, or Private)
   - **Entrance Test Name & Weightage** (e.g., 50% Test, 40% FSc, 10% Matric)
   - **Official URLs** (Main website, Online Admissions Portal)
3. You can:
   - Click **"Add to Live Session"** to immediately test and browse it in the current web session.
   - Click **"Copy JSON"** to copy the generated code block and paste it permanently into `data/universities.js`.

---

## Method 2: Adding Directly to `data/universities.js`

All university records are maintained in [`data/universities.js`](./data/universities.js) inside the `window.UNIVERSITIES_DATA` array.

To add a new university, simply copy this template and paste it into the array:

```javascript
{
  id: "air-university",
  name: "Air University Islamabad",
  shortName: "AU",
  city: "Islamabad",
  campuses: ["Sector E-9 Islamabad (Main)", "Kamra", "Multan"],
  province: "Islamabad / Federal",
  type: "Public",
  rankingBadge: "Premier Aviation & Cyber Security Faculty",
  logoText: "AIR",
  themeColor: "#0284c7",
  overview: "Under the auspices of Pakistan Air Force, recognized for Cyber Security, Aerospace, Mechanical Engineering, and Computing.",
  admissionsCycle: "Fall Intake (Phase 1 & Phase 2 in June/July).",
  primaryTest: {
    name: "Air University Admission Test (AUAT) / NTS NAT",
    totalMarks: 100,
    durationMinutes: 120,
    conductedBy: "Air University / NTS",
    pattern: [
      { subject: "Mathematics / Biology", marks: 50, percent: "50%" },
      { subject: "Physics", marks: 30, percent: "30%" },
      { subject: "English", marks: 20, percent: "20%" }
    ]
  },
  meritFormula: {
    testPercent: 50,
    fscPercent: 35,
    matricPercent: 15,
    interviewPercent: 0,
    formulaText: "50% AUAT/NAT + 35% FSc + 15% Matric",
    closingMeritEstimate: "Cyber Security: ~76% | BS CS: ~75% | Software Eng: ~73%"
  },
  generalEligibility: {
    minHsscPercentage: 50,
    minSscPercentage: 50,
    acceptedGroups: ["Pre-Engineering", "ICS", "Pre-Medical (with deficiency math)"],
    remedialMathNote: "Pre-Medical students eligible for Computing disciplines under HEC guidelines.",
    hopeCertificateAccepted: true,
    hopeCertificateNote: "Applications accepted on Part-1 basis with Hope Certificate."
  },
  popularPrograms: [
    { name: "BS Cyber Security", category: "Computing", duration: "4 Years", minPercentage: 50, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
    { name: "BS Computer Science", category: "Computing", duration: "4 Years", minPercentage: 50, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" },
    { name: "BS Software Engineering", category: "Computing", duration: "4 Years", minPercentage: 50, keyPrerequisites: "Pre-Eng, ICS, or Pre-Med" }
  ],
  documentsRequired: [
    "Matric / SSC Certificate",
    "FSc / Intermediate Part-1 DMC or Hope Certificate",
    "IBCC Equivalence (for A-Levels)",
    "CNIC or B-Form"
  ],
  feeStructure: {
    tuitionPerSemester: "PKR 125,000 - 155,000",
    admissionFeeOneTime: "PKR 25,000",
    hostelPerSemester: "PKR 35,000 - 45,000",
    financialAid: "PAF Shaheen scholarships, HEC Need-Based Aid, PEEF scholarships."
  },
  officialLinks: {
    website: "https://www.au.edu.pk",
    admissionsPortal: "https://portals.au.edu.pk/admissions",
    testRegistration: "https://portals.au.edu.pk/admissions",
    feeStructureUrl: "https://www.au.edu.pk/pages/admission/fee_structure.aspx",
    samplePapers: "https://www.au.edu.pk/pages/admission/sample_papers.aspx"
  },
  faqs: [
    { q: "Does Air University accept NTS NAT?", a: "Yes, you can apply either on the basis of AUAT (Air University's own test) or NTS NAT." }
  ],
  tags: ["Computing", "Cyber Security", "Engineering", "Public", "Islamabad"]
}
```

---

## How to Add or Update Official Website Links

Inside any university's record, locate the `officialLinks` block:

```javascript
officialLinks: {
  website: "https://example.edu.pk",              // University homepage
  admissionsPortal: "https://admissions.example.edu.pk", // Online application portal
  testRegistration: "https://test.example.edu.pk",       // Test registration portal
  feeStructureUrl: "https://example.edu.pk/fees",        // Semester fee breakdown
  prospectusUrl: "https://example.edu.pk/prospectus",    // PDF prospectus download
  samplePapers: "https://example.edu.pk/sample-tests"    // Sample past papers / pattern
}
```

These links will automatically appear in:
1. The **University Cards** (one-click portal button)
2. The **University Detail Modal** ("Portals & FAQs" tab)
3. The **"Official Portals" Dedicated Directory** tab
4. The **Comparison Grid**

---

## How to Adjust Merit Formulas

If a university alters its formula (e.g. if FAST or NUST alters the test weightage), update the `meritFormula` object:

```javascript
meritFormula: {
  testPercent: 75,      // Weight of entry test (e.g. 75%)
  fscPercent: 15,       // Weight of FSc/HSSC (e.g. 15%)
  matricPercent: 10,    // Weight of Matric/SSC (e.g. 10%)
  formulaText: "75% NET + 15% FSc + 10% Matric",
  closingMeritEstimate: "CS: ~78.5% | SE: ~77.8% | AI: ~77.2%"
}
```

The interactive **Merit Calculator** and **Progress Bar** on every card will instantly recalculate and re-render using the updated weights automatically!
