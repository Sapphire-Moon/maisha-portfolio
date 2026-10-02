/* =========================================================
   EDIT THIS FILE ONLY to change links and project cards.
   ========================================================= */

const LINKS = {
  fiverr:   "",                                     // e.g. "https://www.fiverr.com/your-username"
  githubUser: "YOUR-GITHUB-USERNAME",               // e.g. "maishafarzana"
  hf:       "https://huggingface.co/Sapphire-Moon"
};
LINKS.github = "https://github.com/" + LINKS.githubUser;

/* Each card:
   kind  : "app" | "ml" | "auto"   (used by the filter buttons)
   url   : full link (use for live apps / Hugging Face)
   repo  : GitHub repository name (used when url is empty)
   art   : illustration name from art.js
   live  : true shows the green "live" badge                       */
const PROJECTS = [
  { kind:"app", tag:"Live app", title:"Energy Prediction App", art:"energy",
    text:"An energy prediction model with a browser front end. Enter the inputs, get a forecast back.",
    facts:["Regression","Web UI","Deployed"], dest:"Render", live:true,
    url:"https://energy-prediction-ui.onrender.com/" },

  { kind:"app", tag:"Live apps", title:"ML apps on Hugging Face", art:"hf",
    text:"Two interactive model demos you can run in the browser, no setup needed.",
    facts:["2 Spaces","Interactive"], dest:"Hugging Face", live:true,
    url:"https://huggingface.co/Sapphire-Moon" },

  { kind:"ml", tag:"Healthcare ML", title:"HOSE-NCV: PCOS prediction", art:"pcos",
    text:"Stacking ensemble with leakage-free CTGAN augmentation and SHAP explanations.",
    facts:["541 records","ROC-AUC 0.960","SHAP"], dest:"GitHub",
    repo:"" },

  { kind:"ml", tag:"Finance · XAI", title:"Money laundering detection", art:"money",
    text:"Fraud classification with explainable AI. Published in the IEEE ICoICI 2026 proceedings.",
    facts:["Imbalanced data","SHAP","IEEE"], dest:"GitHub",
    repo:"" },

  { kind:"ml", tag:"Network security ML", title:"SDN-IoT intrusion detection", art:"network",
    text:"Per-class evaluation and calibration, so rare attack types are not hidden by overall accuracy.",
    facts:["5 classes","Calibration","In progress"], dest:"GitHub",
    repo:"" },

  { kind:"ml", tag:"Computer vision", title:"Tomato leaf disease classifier", art:"leaf",
    text:"Transfer learning on leaf photos to spot plant diseases from a single image.",
    facts:["MobileNetV2","PlantVillage","Keras"], dest:"GitHub",
    repo:"" },

  { kind:"auto", tag:"Automation", title:"Sheets to JSON generator", art:"sheets",
    text:"Google Apps Script that adds a “Generate JSON” button to any sheet and exports clean, formatted JSON.",
    facts:["Apps Script","Custom menu"], dest:"GitHub",
    repo:"" },

  { kind:"auto", tag:"Automation", title:"Python folder organizer", art:"folders",
    text:"Sorts a messy folder by file type, with a dry-run preview and safe duplicate handling.",
    facts:["pathlib","Dry-run mode","Duplicates"], dest:"GitHub",
    repo:"" }
];

/* Fill in each card's final link */
PROJECTS.forEach(p => {
  if (!p.url) p.url = p.repo ? LINKS.github + "/" + p.repo : LINKS.github + "?tab=repositories";
});
