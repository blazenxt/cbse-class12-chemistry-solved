# CBSE Class XII Chemistry Board Examination - Solved Paper Website

An interactive, dark-mode-enabled single-page web application featuring comprehensive solutions, derivations, organic reaction steps, and interactive chemical calculators for the GR School Class XII Chemistry board question paper.

## 🚀 Live Site
This repository is configured to be instantly deployed on **Vercel**!

## ✨ Features
- 🌗 **Adaptive Dark Mode:** Automatically syncs with system themes, or toggles manually with smooth transitions.
- 📱 **Fully Responsive Layout:** Optimized for mobile phones, tablets, and desktops alike with a collapsible sidebar drawer.
- 🧩 **Interactive Quiz Mode:** Renders Section A multiple-choice questions (Q1–Q16) as a live quiz with instant scoring, graded feedback, and board-level solution explanations.
- 📈 **Dynamic Chemical Solvers:** Includes four embedded interactive solvers built in JavaScript to test and calculate:
  1. *First-Order Kinetics & Half-life* (Q19)
  2. *Nernst Equation & Cell Potential* (Q32)
  3. *Colligative Boiling point elevation & Molar Mass* (Q22)
  4. *Arrhenius Activation Energy* (Q26 / Q33)
- 📊 **Vector Plots & Diagrams:** High-quality visual aids representing positive/negative Raoult's law deviations and the potential energy coordinate profile of $S_N2$ substitution reactions.
- 📐 **LaTeX Equation Rendering:** Powered by KaTeX for lightning-fast, pixel-perfect mathematical formulas and reaction steps.
- 🔍 **Live Search Filter:** Dynamic, instaneous text query matching over all questions, categories, and explanations.

## 📁 Repository Structure
```
├── index.html         # Main web page structure & layout
├── script.js          # Interactive UI control, quiz tracking, chemistry solvers, & dataset
├── style.css          # Custom print styles & smooth transitions
└── images/            # Graphic diagrams
    ├── positive_deviation.png
    ├── negative_deviation.png
    └── sn2_energy_profile.png
```

## 🛠️ Local Development
To run this project locally, simply clone the repository and open `index.html` in any web browser! No installation or build steps are required.

```bash
git clone https://github.com/blazenxt/cbse-class12-chemistry-solved.git
cd cbse-class12-chemistry-solved
# Open index.html in your browser or serve using VS Code Live Server
```

## 🌐 Deploy to Vercel
1. Go to [Vercel](https://vercel.com).
2. Click **Add New** and choose **Project**.
3. Import this GitHub repository: `blazenxt/cbse-class12-chemistry-solved`.
4. Click **Deploy**. Vercel will automatically host the static files for you with global CDN distribution!
