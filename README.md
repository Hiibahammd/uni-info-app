# UniCompass PK 🎓

> **Undergraduate Admissions & Requirements Navigator for Pakistani Students**  
> Straightforward, aesthetic, and scalable guide to university admission criteria, standardized entrance tests, merit formulas, and official links.

---

## 🚀 Quick Start (Running the Website)

You do **not** need complex build steps or Node.js packages to run this app. You have two easy options:

### Option 1: One-Click Windows Launcher (Recommended)
Simply double-click [`run.bat`](./run.bat) in this folder. It will start a local lightweight web server using Python and automatically open `http://localhost:3000` in your default browser.

### Option 2: Open Directly in Browser
You can directly double-click [`index.html`](./index.html) to open it in Chrome, Edge, or Firefox.

### Option 3: Terminal Command
Run in PowerShell or Command Prompt:
```powershell
py -m http.server 3000
```
Then navigate to `http://localhost:3000` in your web browser.

---

## 🌟 Key Features Built for Undergrad Students

1. **🏛️ University Directory & Multi-Filter**
   - Filter universities by discipline (Computing, Engineering, Business, Medical, Social Sciences), city (Islamabad, Lahore, Karachi, Topi, etc.), sector (Public/Private), and test type (NET, NU, SAT, ECAT, NAT, MDCAT).
   - Visual merit formula breakdown bar on every card.

2. **🧮 Interactive Merit / Aggregate Calculator**
   - Select any university (NUST, FAST, LUMS, GIKI, IBA, COMSATS, UET, PIEAS, ITU, Medical MDCAT).
   - Enter your SSC/Matric %, HSSC/FSc %, and Entrance Test Marks.
   - Computes your aggregate % dynamically using that specific institution's official formula.
   - Shows historical closing merit benchmarks for popular programs (CS, SE, AI, EE, BBA).
   - Multi-University comparison widget calculates your standing across top universities simultaneously.

3. **⚖️ Side-by-Side Comparison Tool**
   - Pick 2 or 3 universities to compare test formats, academic weightages, minimum percentages, semester tuition fees, and campus locations in an easy side-by-side view.

4. **📜 Student Equivalence & Rules Guide**
   - **IBCC Grade Conversion Table**: Clear breakdown of Cambridge O/A-Levels grade equivalence (A*, A, B, C, D, E).
   - **HEC Pre-Medical to Computing Policy**: Clarifies how biology students can enter Computer Science / Software Engineering / AI with remedial mathematics.
   - **Hope Certificate Guide**: Instructions on applying while awaiting 12th-grade or A2 final results.

5. **🌐 Verified Official Portals Directory**
   - Direct, authentic links to official admissions portals, fee vouchers, prospectus downloads, and sample test papers with zero redirects.

6. **➕ "Add Uni" Scalability Studio**
   - In-app interactive generator to add new universities on the fly.
   - Generates clean JSON code ready to paste into `data/universities.js`.

---

## 📂 Project Structure

```text
uni-info-app/
├── index.html                  # Main responsive HTML5 entry point
├── run.bat                     # Windows one-click local server launcher
├── README.md                   # Project documentation
├── HOW_TO_ADD_UNIVERSITIES.md  # Step-by-step data extension manual
├── package.json                # Project manifest
├── data/
│   ├── universities.js         # Single-source-of-truth database
│   └── universities.json       # JSON data representation
├── js/
│   └── app.js                  # Modular React 18 interactive UI
└── styles/
    └── main.css                # Glassmorphism, animations, print styles
```

---

## 🛠️ Adding More Universities and Official Links

See [`HOW_TO_ADD_UNIVERSITIES.md`](./HOW_TO_ADD_UNIVERSITIES.md) for full instructions and copy-paste templates.
