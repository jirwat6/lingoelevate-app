// LingoElevate Application Core Engine

// Initial State Setup
let state = {
  level: "basic", // basic, intermediate, advanced, master
  baseline: null,  // Baseline score (set after placement test or initialized to 0)
  xp: 0,
  streak: 1,
  completedLessons: [], // list of lesson IDs completed
  quizScores: {},       // record scores for specific quizzes/activities
  badges: [],           // earned badges
  lastActiveDate: null
};

// SVG icons (Lucide inspired)
const ICONS = {
  headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
  mic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>`,
  bookOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  penTool: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22h9"></path><path d="M18.5 4.9a2.122 2.122 0 1 1 3 3L11 18.5l-4 1 1-4Z"></path></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  unlock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="12" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  flame: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z"></path><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"></path></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M16 3h5v5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 21H3v-5"></path></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`
};

// Available Level Keys in Order
const LEVELS = ["basic", "intermediate", "advanced", "master"];

// Base percentage representation for starting each level
const LEVEL_BASE_PERCENTS = {
  basic: 10,
  intermediate: 35,
  advanced: 65,
  master: 90
};

// LocalStorage Utilities
function saveProgress() {
  localStorage.setItem("lingoelevate_state", JSON.stringify(state));
}

function loadProgress() {
  const saved = localStorage.getItem("lingoelevate_state");
  if (saved) {
    state = JSON.parse(saved);
    
    // Streak calculation
    const today = new Date().toDateString();
    if (state.lastActiveDate && state.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (state.lastActiveDate === yesterday.toDateString()) {
        state.streak += 1;
      } else {
        // Broke streak
        state.streak = 1;
      }
    }
    state.lastActiveDate = today;
  } else {
    // Fresh launch
    state.lastActiveDate = new Date().toDateString();
    state.baseline = null; // Unmeasured initially
  }
}

// Calculate English Skill Percentages & Overall Improvement
function calculateSkillProgress(skill) {
  let totalTasks = 0;
  let completedTasks = 0;
  
  // Go through all levels unlocked so far and count lesson completion
  LEVELS.forEach(lvl => {
    // Only check if current level is equal or higher than lvl, or user completed tasks in it
    const isLevelUnlocked = LEVELS.indexOf(state.level) >= LEVELS.indexOf(lvl);
    if (window.LingoCurriculum[lvl].skills[skill]) {
      window.LingoCurriculum[lvl].skills[skill].forEach(lesson => {
        totalTasks++;
        if (state.completedLessons.includes(lesson.id)) {
          completedTasks++;
        }
      });
    }
  });
  
  if (totalTasks === 0) return 0;
  return Math.round((completedTasks / totalTasks) * 100);
}

function calculateCurrentEnglishScore() {
  // Base Level Score
  let baseScore = LEVEL_BASE_PERCENTS[state.level];
  
  // Completing exercises inside the current level adds weight
  const currentLvlCurriculum = window.LingoCurriculum[state.level];
  let totalLevelLessons = 0;
  let completedLevelLessons = 0;
  
  Object.keys(currentLvlCurriculum.skills).forEach(skillKey => {
    currentLvlCurriculum.skills[skillKey].forEach(lesson => {
      totalLevelLessons++;
      if (state.completedLessons.includes(lesson.id)) {
        completedLevelLessons++;
      }
    });
  });
  
  // Lesson completion adds up to 15% towards the next level
  let progressionBonus = totalLevelLessons > 0 ? (completedLevelLessons / totalLevelLessons) * 15 : 0;
  
  // Badge completion adds a tiny incentive (+1% per badge, max 5%)
  let badgeBonus = Math.min(state.badges.length * 1, 5);
  
  let finalScore = Math.min(Math.round(baseScore + progressionBonus + badgeBonus), 100);
  
  return finalScore;
}

function getPercentageImprovement() {
  const currentScore = calculateCurrentEnglishScore();
  const baseline = state.baseline !== null ? state.baseline : 0;
  return Math.max(0, currentScore - baseline);
}

// Earn Badge Helper
function awardBadge(badgeId, badgeName) {
  if (!state.badges.includes(badgeId)) {
    state.badges.push(badgeId);
    saveProgress();
    triggerSplashBadge(badgeName);
  }
}

// UI Root Selector
const appRoot = () => document.getElementById("app-root");

// Sound Synthesizer (Text to Speech)
function speakText(text, callback) {
  if (!window.speechSynthesis) {
    alert("ขออภัย เว็บเบราว์เซอร์ของคุณไม่รองรับระบบออกเสียง (TTS)");
    return;
  }
  
  // Cancel current speak
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  
  // Find standard premium voice if available
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.lang.startsWith("en-") && v.name.includes("Google"));
  if (preferredVoice) utterance.voice = preferredVoice;
  
  utterance.rate = 0.9; // Slightly slower for language learners
  
  utterance.onend = () => {
    if (callback) callback();
  };
  
  window.speechSynthesis.speak(utterance);
}

// Word-by-Word Matching Scorer & Highlighter
function getWordHighlightDiffHtml(targetPhrase, spokenTranscript) {
  const clean = (w) => w.toLowerCase().replace(/[^\w]/g, "");
  const targetWords = targetPhrase.split(/\s+/);
  const spokenCleaned = spokenTranscript.split(/\s+/).map(clean).filter(Boolean);
  
  const diffHtml = targetWords.map(word => {
    const targetClean = clean(word);
    const isMatch = spokenCleaned.includes(targetClean);
    
    // Wrap matched words in correct or incorrect styles
    return `<span class="word-span ${isMatch ? "correct" : "incorrect"}" title="${isMatch ? "ออกเสียงสอดคล้อง" : "ยังไม่ได้รับการยืนยัน"}">${word}</span>`;
  }).join(" ");
  
  return `<div class="word-highlight">${diffHtml}</div>`;
}

// Pronunciation Scorer (String Overlap Accuracy)
function gradeSpeakingPronunciation(targetPhrase, spokenTranscript) {
  const cleanStr = (str) => str.toLowerCase().replace(/[^\w\s]/g, "").trim();
  
  const targetWords = cleanStr(targetPhrase).split(/\s+/);
  const spokenWords = cleanStr(spokenTranscript).split(/\s+/);
  
  if (spokenWords.length === 0 || spokenWords[0] === "") return 0;
  
  let matched = 0;
  targetWords.forEach(word => {
    if (spokenWords.includes(word)) {
      matched++;
    }
  });
  
  const score = Math.round((matched / targetWords.length) * 100);
  return score;
}

// Automated Writing Evaluator
function gradeWritingParagraph(promptObj, text) {
  const cleanText = text.trim();
  const charCount = cleanText.length;
  const words = cleanText.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  
  let score = 0;
  let feedback = [];
  
  // Rule 1: Length Validation
  if (charCount < promptObj.minLength) {
    feedback.push(`❌ เขียนสั้นเกินไป: ปัจจุบันเขียนไป ${charCount} ตัวอักษร (ต้องการอย่างน้อย ${promptObj.minLength} ตัวอักษร)`);
    return { score: 10, feedback, level: "Need Practice" };
  } else {
    feedback.push(`✅ ความยาวตัวอักษรอยู่ในเกณฑ์ที่ดี (${charCount} ตัวอักษร)`);
    score += 30;
  }
  
  // Rule 2: Keyword Usage Verification
  const foundKeywords = promptObj.keywords.filter(keyword => words.includes(keyword));
  const keywordPercent = foundKeywords.length / promptObj.keywords.length;
  
  if (foundKeywords.length === 0) {
    feedback.push(`❌ ควรเลือกใช้คำศัพท์สำคัญเพิ่มเติม เพื่อให้เนื้อหาชัดเจน`);
  } else {
    feedback.push(`✅ ใช้คำสำคัญเหมาะสม: (${foundKeywords.join(", ")})`);
    score += Math.round(keywordPercent * 40);
  }
  
  // Rule 3: Sentence complexity / diversity
  const periodCount = (cleanText.match(/\./g) || []).length;
  const averageSentenceLength = words.length / (periodCount || 1);
  
  if (periodCount === 0) {
    feedback.push(`⚠️ อย่าลืมใส่เครื่องหมายจุดฟูลสต็อป (.) ท้ายประโยคภาษาอังกฤษ`);
  } else if (periodCount >= 2) {
    feedback.push(`✅ ดีมาก! คุณมีการแต่งประโยคเชื่อมต่อกันมากกว่า 1 ประโยค`);
    score += 15;
  } else {
    score += 10;
  }
  
  if (averageSentenceLength > 5) {
    score += 15;
  }
  
  // Bound score
  score = Math.min(Math.round(score), 100);
  
  let rating = "Good";
  if (score >= 85) rating = "Excellent (ยอดเยี่ยม)";
  else if (score >= 60) rating = "Proficient (ปานกลาง)";
  else rating = "Beginner (ควรเสริมทักษะ)";
  
  return {
    score,
    feedback,
    level: rating
  };
}

// -------------------------------------------------------------
// VIEW RENDERERS
// -------------------------------------------------------------

function drawHeader() {
  const currentScore = calculateCurrentEnglishScore();
  const streak = state.streak;
  const xp = state.xp;
  
  const headerHtml = `
    <div class="logo" id="logo-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
      <span>LingoElevate</span>
    </div>
    <div class="user-stats">
      <div class="stat-chip streak" title="รักษาความต่อเนื่องเรียนทุกวัน">
        ${ICONS.flame}
        <span>${streak} วัน</span>
      </div>
      <div class="stat-chip xp" title="คะแนนสะสมความสามารถ">
        ${ICONS.sparkles}
        <span>${xp} XP</span>
      </div>
      <div class="stat-chip level">
        <span>Level: ${state.level.toUpperCase()} (${currentScore}%)</span>
      </div>
    </div>
  `;
  document.getElementById("app-header").innerHTML = headerHtml;
  
  document.getElementById("logo-btn").addEventListener("click", () => {
    renderDashboard();
  });
}

// View 1: Main Dashboard
function renderDashboard() {
  drawHeader();
  
  const progressVal = calculateCurrentEnglishScore();
  const improvement = getPercentageImprovement();
  const placementDone = state.baseline !== null;
  
  // Compute individual skill values
  const listeningScore = calculateSkillProgress("listening");
  const speakingScore = calculateSkillProgress("speaking");
  const readingScore = calculateSkillProgress("reading");
  const writingScore = calculateSkillProgress("writing");
  
  const dashHtml = `
    <div class="dashboard-grid">
      <!-- Left Panel: Skill Overview and Global Stats -->
      <div class="glass-card progress-panel">
        <div class="progress-header">ความก้าวหน้าโดยรวม</div>
        
        <div class="progress-ring-container">
          <svg class="progress-ring" width="180" height="180">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:var(--accent-purple);stop-opacity:1" />
                <stop offset="100%" style="stop-color:var(--accent-pink);stop-opacity:1" />
              </linearGradient>
            </defs>
            <circle class="progress-ring-circle-bg" stroke-width="12" fill="transparent" r="75" cx="90" cy="90"/>
            <circle id="progress-circle-ring" class="progress-ring-circle" stroke-width="12" fill="transparent" r="75" cx="90" cy="90"/>
          </svg>
          <div class="progress-ring-text">
            <span class="progress-percentage">${progressVal}%</span>
            <span class="progress-label">ความเชี่ยวชาญ</span>
          </div>
        </div>
        
        <div class="baseline-comparison">
          ภาษาอังกฤษดีขึ้น <span>+${improvement}%</span> แล้ว!
        </div>
        
        <!-- Individual Skill Progress Bars -->
        <div class="skills-progress-list">
          <div class="skill-progress-item">
            <div class="skill-info">
              <span class="skill-info-label">${ICONS.headphones} การฟัง (Listening)</span>
              <span>${listeningScore}%</span>
            </div>
            <div class="skill-progress-bar-bg">
              <div class="skill-progress-bar listening" style="width: ${listeningScore}%"></div>
            </div>
          </div>
          
          <div class="skill-progress-item">
            <div class="skill-info">
              <span class="skill-info-label">${ICONS.mic} การพูด (Speaking)</span>
              <span>${speakingScore}%</span>
            </div>
            <div class="skill-progress-bar-bg">
              <div class="skill-progress-bar speaking" style="width: ${speakingScore}%"></div>
            </div>
          </div>
          
          <div class="skill-progress-item">
            <div class="skill-info">
              <span class="skill-info-label">${ICONS.bookOpen} การอ่าน (Reading)</span>
              <span>${readingScore}%</span>
            </div>
            <div class="skill-progress-bar-bg">
              <div class="skill-progress-bar reading" style="width: ${readingScore}%"></div>
            </div>
          </div>
          
          <div class="skill-progress-item">
            <div class="skill-info">
              <span class="skill-info-label">${ICONS.penTool} การเขียน (Writing)</span>
              <span>${writingScore}%</span>
            </div>
            <div class="skill-progress-bar-bg">
              <div class="skill-progress-bar writing" style="width: ${writingScore}%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Panel: Lesson Paths & Level Selection -->
      <div class="paths-panel">
        <div class="paths-header">
          <span>เส้นทางทักษะการเรียนรู้</span>
          <div class="badge-grid">
            <div class="badge-item ${state.badges.includes("placement_done") ? "active" : ""}" data-tooltip="ผ่านการทดสอบวัดระดับครั้งแรก" id="badge-p">${ICONS.award}</div>
            <div class="badge-item ${state.badges.includes("basic_unlocked") ? "active" : ""}" data-tooltip="ปลดล็อคบทเรียนพื้นฐาน" id="badge-b">B</div>
            <div class="badge-item ${state.badges.includes("intermediate_unlocked") ? "active" : ""}" data-tooltip="เข้าสู่ระดับกลาง" id="badge-i">I</div>
            <div class="badge-item ${state.badges.includes("advanced_unlocked") ? "active" : ""}" data-tooltip="ผ่านเกณฑ์ทักษะระดับสูง" id="badge-a">A</div>
            <div class="badge-item ${state.badges.includes("master_completed") ? "active" : ""}" data-tooltip="สำเร็จทักษะขั้นสูงสุดระดับ Master" id="badge-m">M</div>
          </div>
        </div>
        
        <div class="levels-container">
          ${LEVELS.map(lvl => {
            const levelInfo = window.LingoCurriculum[lvl];
            const isCurrent = state.level === lvl;
            const isUnlocked = LEVELS.indexOf(state.level) >= LEVELS.indexOf(lvl);
            
            return `
              <div class="level-card ${isUnlocked ? "" : "locked"}">
                <div class="level-badge-header">
                  <span class="level-title">${levelInfo.title}</span>
                  <span class="level-status-pill ${isUnlocked ? "unlocked" : "locked-pill"}">
                    ${isUnlocked ? (isCurrent ? "กำลังเรียน" : "ผ่านแล้ว") : "ล็อคอยู่"}
                  </span>
                </div>
                <div class="level-desc">${levelInfo.description}</div>
                
                <div class="skills-shortcuts">
                  <button class="skill-btn listening" ${isUnlocked ? "" : "disabled"} data-level="${lvl}" data-skill="listening">
                    ${ICONS.headphones}
                    <span>ฟัง</span>
                  </button>
                  <button class="skill-btn speaking" ${isUnlocked ? "" : "disabled"} data-level="${lvl}" data-skill="speaking">
                    ${ICONS.mic}
                    <span>พูด</span>
                  </button>
                  <button class="skill-btn reading" ${isUnlocked ? "" : "disabled"} data-level="${lvl}" data-skill="reading">
                    ${ICONS.bookOpen}
                    <span>อ่าน</span>
                  </button>
                  <button class="skill-btn writing" ${isUnlocked ? "" : "disabled"} data-level="${lvl}" data-skill="writing">
                    ${ICONS.penTool}
                    <span>เขียน</span>
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
        
        <!-- Action Cards Grid (Expanded to 4 items) -->
        <div class="quick-action-bar">
          <div class="action-card placement" id="placement-card">
            <div class="action-content">
              <span class="action-title">วัดระดับภาษา</span>
              <span class="action-desc">${placementDone ? "มีบันทึกเกณฑ์เดิมแล้ว" : "Placement Test"}</span>
            </div>
            <div class="action-icon">${ICONS.award}</div>
          </div>
          
          <div class="action-card exam" id="exam-card">
            <div class="action-content">
              <span class="action-title">สอบอัปเลเวล</span>
              <span class="action-desc">Level Up Exam</span>
            </div>
            <div class="action-icon">${ICONS.unlock}</div>
          </div>
          
          <div class="action-card vocab" id="vocab-card">
            <div class="action-content">
              <span class="action-title">คลังศัพท์แฟลชการ์ด</span>
              <span class="action-desc">Vocabulary Vault</span>
            </div>
            <div class="action-icon">${ICONS.bookOpen}</div>
          </div>
          
          <div class="action-card roleplay" id="roleplay-card">
            <div class="action-content">
              <span class="action-title">สนทนา AI จำลอง</span>
              <span class="action-desc">Virtual Roleplay</span>
            </div>
            <div class="action-icon">${ICONS.mic}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  appRoot().innerHTML = dashHtml;
  
  // Set circular ring offset
  const circle = document.getElementById("progress-circle-ring");
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (progressVal / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  // Add listeners for skill shortcut buttons
  document.querySelectorAll(".skill-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const targetBtn = e.currentTarget;
      const lvl = targetBtn.getAttribute("data-level");
      const skill = targetBtn.getAttribute("data-skill");
      renderPracticeSession(lvl, skill, 0);
    });
  });
  
  // Placement Test click listener
  document.getElementById("placement-card").addEventListener("click", () => {
    renderPlacementTest();
  });
  
  // Level up exam click listener
  document.getElementById("exam-card").addEventListener("click", () => {
    renderLevelExam();
  });

  // Vocab card listener
  document.getElementById("vocab-card").addEventListener("click", () => {
    renderVocabularyVault();
  });

  // Roleplay card listener
  document.getElementById("roleplay-card").addEventListener("click", () => {
    renderRoleplaySelection();
  });
}

// View 2: Initial Diagnostic Placement Test
function renderPlacementTest() {
  drawHeader();
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function drawQuestion() {
    const totalQuestions = window.LingoPlacementTest.length;
    const q = window.LingoPlacementTest[currentQuestionIndex];
    const percentDone = Math.round((currentQuestionIndex / totalQuestions) * 100);
    
    let activityArea = "";
    
    if (q.skill === "listening") {
      activityArea = `
        <div class="audio-card">
          <button class="audio-btn" id="listening-play-btn">
            ${ICONS.headphones}
          </button>
          <div class="instruction-text">คลิกปุ่มเพื่อฟังประโยคภาษาอังกฤษ แล้วตอบคำถามด้านล่าง</div>
        </div>
        <div class="margin-top-lg font-weight-bold" style="font-size: 1.1rem; margin-bottom: 12px;">${q.question}</div>
        <div class="options-grid">
          ${q.options.map((opt, i) => `
            <div class="option-card" data-val="${opt}">${opt}</div>
          `).join("")}
        </div>
      `;
    } else if (q.skill === "reading") {
      activityArea = `
        <div class="reading-passage">${q.passage}</div>
        <div class="margin-top-md font-weight-bold" style="font-size: 1.1rem; margin-bottom: 12px;">${q.question}</div>
        <div class="options-grid">
          ${q.options.map((opt, i) => `
            <div class="option-card" data-val="${opt}">${opt}</div>
          `).join("")}
        </div>
      `;
    } else if (q.skill === "grammar" || q.skill === "vocabulary") {
      activityArea = `
        <div class="task-prompt">${q.question}</div>
        <div class="options-grid margin-top-lg">
          ${q.options.map((opt, i) => `
            <div class="option-card" data-val="${opt}">${opt}</div>
          `).join("")}
        </div>
      `;
    } else if (q.skill === "writing") {
      activityArea = `
        <div class="task-prompt">${q.question}</div>
        <div class="writing-container margin-top-lg">
          <textarea class="writing-textarea" placeholder="เขียนคำตอบที่นี่เป็นภาษาอังกฤษ..." id="writing-area"></textarea>
          <div class="writing-meta">
            <span id="char-counter">0 ตัวอักษร</span>
            <span>(ต้องการอย่างน้อย ${q.minLength} ตัวอักษร)</span>
          </div>
          <button class="btn btn-primary margin-top-md" id="submit-writing-btn" disabled>ส่งคำตอบเขียน</button>
        </div>
      `;
    }
    
    const testHtml = `
      <div class="test-container glass-card">
        <div class="flex-between" style="margin-bottom: 12px;">
          <h2 class="session-title">แบบทดสอบวัดระดับ (Placement Test)</h2>
          <span style="font-size: 0.9rem; color: var(--text-secondary);">คำถามที่ ${currentQuestionIndex + 1}/${totalQuestions}</span>
        </div>
        
        <div class="test-progress-bar-bg">
          <div class="test-progress-bar" style="width: ${percentDone}%"></div>
        </div>
        
        <div class="workspace-panel">
          ${activityArea}
        </div>
        
        <div class="flex-between margin-top-lg">
          <button class="btn" id="exit-test-btn">${ICONS.arrowLeft} ยกเลิกการสอบ</button>
        </div>
      </div>
    `;
    
    appRoot().innerHTML = testHtml;
    
    // Add Listeners
    document.getElementById("exit-test-btn").addEventListener("click", () => {
      if (confirm("คุณแน่ใจหรือไม่ว่าต้องการออกจากแบบทดสอบวัดระดับ? คะแนนที่ทำไว้จะไม่บันทึก")) {
        renderDashboard();
      }
    });
    
    if (q.skill === "listening") {
      document.getElementById("listening-play-btn").addEventListener("click", (e) => {
        e.currentTarget.classList.add("playing");
        speakText(q.text, () => {
          document.getElementById("listening-play-btn").classList.remove("playing");
        });
      });
    }
    
    // Multiple Choice selections
    if (q.options) {
      document.querySelectorAll(".option-card").forEach(optCard => {
        optCard.addEventListener("click", (e) => {
          const selectedVal = e.currentTarget.getAttribute("data-val");
          
          if (selectedVal === q.answer) {
            score++;
          }
          
          // Move to next question
          setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
              drawQuestion();
            } else {
              finishPlacementTest(score);
            }
          }, 400);
        });
      });
    }
    
    // Writing logic
    if (q.skill === "writing") {
      const ta = document.getElementById("writing-area");
      const counter = document.getElementById("char-counter");
      const submitBtn = document.getElementById("submit-writing-btn");
      
      ta.addEventListener("input", () => {
        const text = ta.value;
        counter.textContent = `${text.length} ตัวอักษร`;
        submitBtn.disabled = text.length < q.minLength;
      });
      
      submitBtn.addEventListener("click", () => {
        const report = gradeWritingParagraph(q, ta.value);
        if (report.score >= 50) {
          score++;
        }
        
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
          drawQuestion();
        } else {
          finishPlacementTest(score);
        }
      });
    }
  }
  
  drawQuestion();
}

function finishPlacementTest(finalScore) {
  // Calibrate initial level based on placement test score (Max 6 points)
  let calibratedLevel = "basic";
  let baselinePercent = 10;
  
  if (finalScore >= 5) {
    calibratedLevel = "advanced";
    baselinePercent = 65;
  } else if (finalScore >= 3) {
    calibratedLevel = "intermediate";
    baselinePercent = 35;
  } else {
    calibratedLevel = "basic";
    baselinePercent = 10;
  }
  
  state.level = calibratedLevel;
  state.baseline = baselinePercent;
  state.xp += 100; // Gift 100 XP for taking the placement test
  awardBadge("placement_done", " Placement Test Cleared!");
  
  // Award unlocking badges
  if (calibratedLevel === "intermediate") {
    awardBadge("basic_unlocked", " Basic Level Mastery!");
    awardBadge("intermediate_unlocked", " Unlocked Intermediate Level!");
  } else if (calibratedLevel === "advanced") {
    awardBadge("basic_unlocked", " Basic Level Mastery!");
    awardBadge("intermediate_unlocked", " Unlocked Intermediate Level!");
    awardBadge("advanced_unlocked", " Unlocked Advanced Level!");
  }
  
  saveProgress();
  
  const scoreSplash = `
    <div class="overlay-screen">
      <div class="splash-content glass-card">
        <h2 class="session-title">การทดสอบประเมินระดับเสร็จสิ้น!</h2>
        <div class="stt-transcript-box" style="font-size: 1.1rem; padding: 20px;">
          คุณทำคะแนนทดสอบได้: <strong>${finalScore} / ${window.LingoPlacementTest.length} คะแนน</strong>
        </div>
        <div style="font-size: 1.25rem;">
          ระดับตั้งต้นของคุณคือ: <strong class="text-purple" style="font-size: 1.6rem;">${calibratedLevel.toUpperCase()}</strong>
        </div>
        <div class="score-badge">+100 XP</div>
        <div class="instruction-text">
          เราตั้งระดับพื้นฐานของคุณไว้ที่ ${baselinePercent}% จากนี้ความก้าวหน้าและการเรียนรู้ของคุณจะเปรียบเทียบจากเกณฑ์นี้!
        </div>
        <button class="btn btn-primary" id="splash-close-btn">เข้าสู่ Dashboard</button>
      </div>
    </div>
  `;
  
  const div = document.createElement("div");
  div.id = "splash-wrapper";
  div.innerHTML = scoreSplash;
  document.body.appendChild(div);
  
  document.getElementById("splash-close-btn").addEventListener("click", () => {
    document.body.removeChild(document.getElementById("splash-wrapper"));
    renderDashboard();
  });
}

// View 3: Skill Practice Session
function renderPracticeSession(level, skill, lessonIndex) {
  drawHeader();
  
  const skillCategory = window.LingoCurriculum[level].skills[skill];
  if (!skillCategory || skillCategory.length === 0) {
    alert("ไม่พบหัวข้อบทเรียนนี้");
    renderDashboard();
    return;
  }
  
  const lesson = skillCategory[lessonIndex];
  const isLast = lessonIndex === skillCategory.length - 1;
  
  let workspaceArea = "";
  
  if (skill === "listening") {
    workspaceArea = `
      <div class="audio-card">
        <button class="audio-btn" id="listening-play-btn">
          ${ICONS.headphones}
        </button>
        <div class="instruction-text">คลิกเพื่อฟังเสียงพูดเจ้าของภาษาภาษาอังกฤษ (สามารถกดซ้ำได้)</div>
      </div>
      
      <div class="margin-top-lg">
        <div class="font-weight-bold" style="font-size: 1.15rem; margin-bottom: 12px;">${lesson.question}</div>
        <div class="options-grid" id="choices-grid">
          ${lesson.options.map(opt => `
            <div class="option-card" data-val="${opt}">
              <span>${opt}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else if (skill === "speaking") {
    workspaceArea = `
      <div class="speaking-card">
        <div class="target-phrase-box">
          <div class="instruction-text" style="margin-bottom: 8px;">ออกเสียงประโยคตามเป้าหมายต่อไปนี้:</div>
          <div class="target-phrase">${lesson.phrase}</div>
          <div class="phonetic-guide">คำอ่านสากล: [${lesson.phonetic}]</div>
        </div>
        
        <!-- Word highlighting mount point -->
        <div id="diff-output-container"></div>
        
        <button class="mic-btn" id="mic-btn" title="คลิกแล้วเริ่มพูด">
          ${ICONS.mic}
        </button>
        <div class="instruction-text" id="mic-status-label">คลิกปุ่มไมค์เพื่อเริ่มบันทึกเสียงพูดของคุณ</div>
        
        <div class="stt-transcript-box" id="speech-transcript-box">
          เสียงพูดของคุณจะถูกเปลี่ยนเป็นตัวอักษรเพื่อวิเคราะห์ความถูกต้องที่นี่...
        </div>
      </div>
    `;
  } else if (skill === "reading") {
    workspaceArea = `
      <div class="reading-passage">${lesson.passage}</div>
      <div class="font-weight-bold" style="font-size: 1.1rem; margin-bottom: 12px;">${lesson.question}</div>
      <div class="options-grid" id="choices-grid">
        ${lesson.options.map(opt => `
          <div class="option-card" data-val="${opt}">
            <span>${opt}</span>
          </div>
        `).join("")}
      </div>
    `;
  } else if (skill === "writing") {
    workspaceArea = `
      <div class="writing-container">
        <textarea class="writing-textarea" placeholder="${lesson.placeholder}" id="writing-area"></textarea>
        <div class="writing-meta">
          <span id="char-counter">0 ตัวอักษร</span>
          <span>(ต้องการอย่างน้อย ${lesson.minLength} ตัวอักษร)</span>
        </div>
        
        <div id="writing-grade-container"></div>
        
        <button class="btn btn-primary margin-top-md" id="submit-writing-btn" disabled>ประเมินและตรวจงานเขียน</button>
      </div>
    `;
  }
  
  const practiceHtml = `
    <div class="practice-container">
      <div class="session-header">
        <div class="back-btn" id="back-to-dash-btn">
          ${ICONS.arrowLeft} กลับ Dashboard
        </div>
        <div class="session-title">${lesson.title}</div>
        <div style="font-size: 0.9rem; color: var(--text-secondary);">
          ${skill.toUpperCase()} • บทที่ ${lessonIndex + 1}/${skillCategory.length}
        </div>
      </div>
      
      <div class="session-grid">
        <div class="glass-card workspace-panel">
          <div class="task-prompt">${lesson.prompt}</div>
          <div id="exercise-mount-point">
            ${workspaceArea}
          </div>
          
          <div class="flex-between margin-top-lg">
            <div></div>
            <button class="btn btn-primary" id="next-lesson-btn" style="display: none;">
              ${isLast ? "เรียนเสร็จสิ้นบทเรียน" : "ทำแบบฝึกหัดข้อถัดไป"}
            </button>
          </div>
        </div>
        
        <!-- Sidebar Info -->
        <div class="sidebar-panel">
          <div class="info-box">
            <h3 class="info-title text-cyan">${ICONS.sparkles} คำแนะนำทักษะ</h3>
            <div class="tips-list">
              <div class="tips-item">
                ${ICONS.check}
                <span>ภาษาอังกฤษแบบใช้งานได้จริง ต้องเริ่มฝึกจากฟังแล้วพูดตามทันที</span>
              </div>
              <div class="tips-item">
                ${ICONS.check}
                <span>การสอบและเก็บชั่วโมงการฝึกฝนบ่อยๆ จะช่วยกระตุ้นเปอร์เซ็นต์อย่างรวดเร็ว</span>
              </div>
            </div>
          </div>
          
          <div class="info-box">
            <h3 class="info-title text-pink">${ICONS.award} รางวัลสะสม</h3>
            <div class="tips-list">
              <div>เมื่อทำกิจกรรมผ่าน คุณจะได้รับ <strong>+25 XP</strong> และเพิ่มพัฒนาการ 2.5%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  appRoot().innerHTML = practiceHtml;
  
  // Attach Back button listener
  document.getElementById("back-to-dash-btn").addEventListener("click", () => {
    renderDashboard();
  });
  
  const nextBtn = document.getElementById("next-lesson-btn");
  nextBtn.addEventListener("click", () => {
    // Save completion
    if (!state.completedLessons.includes(lesson.id)) {
      state.completedLessons.push(lesson.id);
      state.xp += 25;
      saveProgress();
    }
    
    if (isLast) {
      triggerSplashExerciseDone(skill);
    } else {
      renderPracticeSession(level, skill, lessonIndex + 1);
    }
  });
  
  // -----------------------------------------------------------
  // INTERACTIVE SKILL HANDLERS
  // -----------------------------------------------------------
  
  // 1. Listening Sound Synthesis Player
  if (skill === "listening") {
    const playBtn = document.getElementById("listening-play-btn");
    playBtn.addEventListener("click", () => {
      playBtn.classList.add("playing");
      speakText(lesson.speechText, () => {
        playBtn.classList.remove("playing");
      });
    });
    
    // Auto play on startup
    setTimeout(() => {
      playBtn.click();
    }, 500);
  }
  
  // 2. Choice Selection Logic for Multiple Choices (Listening / Reading)
  const qGridExist = document.getElementById("choices-grid");
  if (qGridExist) {
    document.querySelectorAll(".option-card").forEach(optCard => {
      optCard.addEventListener("click", (e) => {
        const val = e.currentTarget.getAttribute("data-val");
        const allCards = document.querySelectorAll(".option-card");
        
        // Disable choices
        allCards.forEach(c => c.style.pointerEvents = "none");
        
        if (val === lesson.answer) {
          e.currentTarget.classList.add("correct");
          nextBtn.style.display = "inline-flex";
        } else {
          e.currentTarget.classList.add("incorrect");
          // Highlight correct answer
          allCards.forEach(c => {
            if (c.getAttribute("data-val") === lesson.answer) {
              c.classList.add("correct");
            }
          });
          nextBtn.style.display = "inline-flex";
        }
      });
    });
  }
  
  // 3. Speaking Mic SpeechRecognition Engine with Visual Word diffing
  if (skill === "speaking") {
    const micBtn = document.getElementById("mic-btn");
    const statusLabel = document.getElementById("mic-status-label");
    const transcriptBox = document.getElementById("speech-transcript-box");
    const diffContainer = document.getElementById("diff-output-container");
    
    let recognition = null;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      
      recognition.onstart = () => {
        micBtn.classList.add("recording");
        statusLabel.innerHTML = "<span class='text-pink'>กำลังฟังเสียงของคุณผ่านไมโครโฟน... กรุณาออกเสียงตามข้อความด้านบน</span>";
      };
      
      recognition.onerror = (err) => {
        console.error(err);
        micBtn.classList.remove("recording");
        statusLabel.innerHTML = `<span class='text-danger'>เกิดข้อผิดพลาดในการรับเสียงพูด (${err.error}) กรุณาลองใหม่อีกครั้ง</span>`;
      };
      
      recognition.onend = () => {
        micBtn.classList.remove("recording");
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        transcriptBox.innerHTML = `<strong>ผลการรับเสียงจริง:</strong> "${transcript}"`;
        
        // Evaluate overall matching score
        const score = gradeSpeakingPronunciation(lesson.phrase, transcript);
        
        // Render advanced word-by-word visual highlight!
        diffContainer.innerHTML = getWordHighlightDiffHtml(lesson.phrase, transcript);
        
        if (score >= 60) {
          statusLabel.innerHTML = `<span class='text-success'>ยอดเยี่ยม! การออกเสียงสะกดคำถูกต้องเฉลี่ย: <strong>${score}%</strong></span>`;
          awardBadge("first_speaking", "Eloquent Speaker!");
          nextBtn.style.display = "inline-flex";
        } else {
          statusLabel.innerHTML = `<span class='text-warning'>สอดคล้องสะกดคำอยู่ที่: <strong>${score}%</strong> (ออกเสียงคำสีชมพูให้ชัดขึ้น แล้วกดไมค์พูดอีกครั้ง)</span>`;
          nextBtn.style.display = "inline-flex";
        }
      };
    } else {
      statusLabel.innerHTML = "<span class='text-danger'>เบราว์เซอร์นี้ไม่รองรับระบบประเมินเสียงพูด (STT) โดยระบบจะจำลองผลทดสอบผ่านให้แทนเพื่อใช้งานได้</span>";
    }
    
    micBtn.addEventListener("click", () => {
      if (recognition) {
        try {
          recognition.start();
        } catch (e) {
          recognition.stop();
        }
      } else {
        // Fallback simulation
        statusLabel.textContent = "กำลังวิเคราะห์ระดับเสียงของคุณโดยระบบจำลอง...";
        micBtn.classList.add("recording");
        setTimeout(() => {
          micBtn.classList.remove("recording");
          transcriptBox.innerHTML = `<strong>(โหมดจำลอง):</strong> "${lesson.phrase}"`;
          
          diffContainer.innerHTML = getWordHighlightDiffHtml(lesson.phrase, lesson.phrase);
          statusLabel.innerHTML = "<span class='text-success'>ออกเสียงจำลองถูกต้องเต็ม 100%! (เบราว์เซอร์จำลองผลสำเร็จ)</span>";
          nextBtn.style.display = "inline-flex";
        }, 1500);
      }
    });
  }
  
  // 4. Writing Prompt Grader
  if (skill === "writing") {
    const ta = document.getElementById("writing-area");
    const counter = document.getElementById("char-counter");
    const submitBtn = document.getElementById("submit-writing-btn");
    const gradeContainer = document.getElementById("writing-grade-container");
    
    ta.addEventListener("input", () => {
      const len = ta.value.length;
      counter.textContent = `${len} ตัวอักษร`;
      submitBtn.disabled = len < lesson.minLength;
    });
    
    submitBtn.addEventListener("click", () => {
      const textVal = ta.value;
      const report = gradeWritingParagraph(lesson, textVal);
      
      gradeContainer.innerHTML = `
        <div class="writing-grade-report">
          <div class="grade-score-pill">
            <span>คะแนนประเมินหลักการเขียน:</span>
            <span class="grade-level">${report.score} / 100 (${report.level})</span>
          </div>
          <div class="grade-feedback-list">
            ${report.feedback.map(fb => `
              <div class="feedback-bullet">
                ${fb.startsWith("✅") ? ICONS.check : ICONS.alertCircle}
                <span>${fb}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      
      awardBadge("first_writing", "Prolific Writer!");
      nextBtn.style.display = "inline-flex";
      submitBtn.disabled = true;
      ta.disabled = true;
    });
  }
}

function triggerSplashExerciseDone(skill) {
  const popup = `
    <div class="overlay-screen">
      <div class="splash-content glass-card">
        <h2 class="session-title text-success">เรียนสำเร็จบทเรียน! 🎉</h2>
        <div class="stt-transcript-box" style="font-size: 1.1rem; padding: 20px;">
          คุณผ่านแบบเรียนหมวด <strong>${skill.toUpperCase()}</strong> เรียบร้อยแล้ว!
        </div>
        <div class="score-badge">+25 XP</div>
        <button class="btn btn-primary" id="splash-done-btn">กลับสู่ห้องเรียน</button>
      </div>
    </div>
  `;
  
  const div = document.createElement("div");
  div.id = "splash-wrapper";
  div.innerHTML = popup;
  document.body.appendChild(div);
  
  document.getElementById("splash-done-btn").addEventListener("click", () => {
    document.body.removeChild(document.getElementById("splash-wrapper"));
    renderDashboard();
  });
}

function triggerSplashBadge(badgeName) {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "var(--grad-primary)";
  toast.style.padding = "16px 24px";
  toast.style.borderRadius = "16px";
  toast.style.boxShadow = "0 8px 30px rgba(139,92,246,0.5)";
  toast.style.color = "white";
  toast.style.zIndex = "99999";
  toast.style.fontFamily = "'Outfit', sans-serif";
  toast.style.fontSize = "1rem";
  toast.style.fontWeight = "700";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "10px";
  toast.style.animation = "zoom-in-bounce 0.5s ease-out";
  toast.innerHTML = `${ICONS.award} <span>ได้รับตราเกียรติยศ: ${badgeName}!</span>`;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      if (toast.parentNode) document.body.removeChild(toast);
    }, 500);
  }, 4000);
}

// View 4: Comprehensive Level Up Exam
function renderLevelExam() {
  drawHeader();
  
  const examPool = window.LingoLevelExams[state.level];
  if (!examPool) {
    alert("ขออภัย ยินดีด้วย! คุณสำเร็จหลักสูตรสูงสุดระดับ MASTER เรียบร้อยแล้ว!");
    renderDashboard();
    return;
  }
  
  let currentIndex = 0;
  let correctCount = 0;
  
  function drawExamQuestion() {
    const q = examPool[currentIndex];
    const totalQ = examPool.length;
    const percentDone = Math.round((currentIndex / totalQ) * 100);
    
    let questionArea = "";
    
    if (q.skill === "listening") {
      questionArea = `
        <div class="audio-card">
          <button class="audio-btn" id="exam-audio-play">
            ${ICONS.headphones}
          </button>
          <div class="instruction-text">กดเพื่อฟังคลิปวิเคราะห์ แล้วทำข้อสอบชอยส์คำตอบ</div>
        </div>
        <div class="margin-top-lg font-weight-bold" style="font-size: 1.1rem; margin-bottom: 12px;">${q.question}</div>
        <div class="options-grid">
          ${q.options.map(opt => `<div class="option-card" data-val="${opt}">${opt}</div>`).join("")}
        </div>
      `;
    } else if (q.skill === "reading") {
      questionArea = `
        <div class="reading-passage">${q.passage}</div>
        <div class="margin-top-md font-weight-bold" style="font-size: 1.1rem; margin-bottom: 12px;">${q.question}</div>
        <div class="options-grid">
          ${q.options.map(opt => `<div class="option-card" data-val="${opt}">${opt}</div>`).join("")}
        </div>
      `;
    } else if (q.skill === "grammar") {
      questionArea = `
        <div class="task-prompt" style="font-size: 1.2rem;">${q.question}</div>
        <div class="options-grid margin-top-lg">
          ${q.options.map(opt => `<div class="option-card" data-val="${opt}">${opt}</div>`).join("")}
        </div>
      `;
    }
    
    const examHtml = `
      <div class="test-container glass-card">
        <div class="flex-between" style="margin-bottom: 12px;">
          <h2 class="session-title text-pink">ข้อสอบยกระดับฝีมือ (${state.level.toUpperCase()} Exam)</h2>
          <span style="font-size: 0.9rem; color: var(--text-secondary);">คำถามข้อที่ ${currentIndex + 1}/${totalQ}</span>
        </div>
        
        <div class="test-progress-bar-bg">
          <div class="test-progress-bar" style="background:var(--grad-primary); width:${percentDone}%"></div>
        </div>
        
        <div class="workspace-panel">
          ${questionArea}
        </div>
        
        <div class="flex-between margin-top-lg">
          <button class="btn" id="exit-exam-btn">${ICONS.arrowLeft} สละสิทธิ์สอบ</button>
        </div>
      </div>
    `;
    
    appRoot().innerHTML = examHtml;
    
    document.getElementById("exit-exam-btn").addEventListener("click", () => {
      if (confirm("ออกจากห้องสอบ? คะแนนสอบของคุณจะไม่ได้รับการวิเคราะห์ประเมินผล")) {
        renderDashboard();
      }
    });
    
    if (q.skill === "listening") {
      document.getElementById("exam-audio-play").addEventListener("click", (e) => {
        e.currentTarget.classList.add("playing");
        speakText(q.text, () => {
          document.getElementById("exam-audio-play").classList.remove("playing");
        });
      });
    }
    
    document.querySelectorAll(".option-card").forEach(optCard => {
      optCard.addEventListener("click", (e) => {
        const val = e.currentTarget.getAttribute("data-val");
        if (val === q.answer) {
          correctCount++;
        }
        
        setTimeout(() => {
          currentIndex++;
          if (currentIndex < totalQ) {
            drawExamQuestion();
          } else {
            finishExamEvaluator(correctCount, totalQ);
          }
        }, 300);
      });
    });
  }
  
  drawExamQuestion();
}

function finishExamEvaluator(correct, total) {
  const percentScore = Math.round((correct / total) * 100);
  const isPassed = percentScore >= 80;
  
  let headerMsg = "";
  let bodyText = "";
  let rewardText = "";
  
  if (isPassed) {
    // Level Up to next stage
    const currentIdx = LEVELS.indexOf(state.level);
    if (currentIdx < LEVELS.length - 1) {
      state.level = LEVELS[currentIdx + 1];
      state.xp += 150;
      saveProgress();
      
      // Earn appropriate level badges
      if (state.level === "intermediate") awardBadge("intermediate_unlocked", "Intermediate Level Mastery!");
      if (state.level === "advanced") awardBadge("advanced_unlocked", "Advanced Level Mastery!");
      if (state.level === "master") awardBadge("master_completed", "World Class Master Level Accomplished!");
      
      headerMsg = "<span class='text-success'>สอบผ่านและยกระดับสำเร็จ! 🎉</span>";
      bodyText = `ยินดีด้วย คุณสอบได้ ${correct}/${total} คะแนน (${percentScore}%) ซึ่งผ่านเกณฑ์ 80%! ระดับของคุณถูกเลื่อนเป็น <strong>${state.level.toUpperCase()}</strong>`;
      rewardText = "+150 XP • เลื่อนระดับทักษะ!";
    } else {
      // Master complete
      awardBadge("master_completed", "Ultimate English Mastery!");
      headerMsg = "<span class='text-cyan'>สุดยอด! คุณสำเร็จหลักสูตรสูงสุดระดับ MASTER เรียบร้อยแล้ว! 👑</span>";
      bodyText = `คุณทำข้อสอบระดับสุดท้ายสำเร็จ! ทักษะภาษาอังกฤษของคุณถูกขยายถึงระดับยอดนักวิชาการ/เจ้าของภาษาโดยสมบูรณ์`;
      rewardText = "+300 XP • เกียรติบัตรสุดยอดฝีมือ";
      state.xp += 300;
      saveProgress();
    }
  } else {
    headerMsg = "<span class='text-danger'>สอบไม่ผ่านเกณฑ์ (พยายามใหม่อีกครั้ง) 📚</span>";
    bodyText = `คุณทำคะแนนได้ ${correct}/${total} คะแนน (${percentScore}%) เกณฑ์การเลื่อนขั้นต้องการอย่างน้อย 80% แนะนำให้กลับไปทบทวนทักษะในบทเรียนเพิ่มเติมอีกครั้งครับ`;
    rewardText = "คะแนนสะสมพัฒนาการยังคงเก็บข้อมูลไว้";
  }
  
  const splash = `
    <div class="overlay-screen">
      <div class="splash-content glass-card">
        <h2 class="session-title">${headerMsg}</h2>
        <div class="stt-transcript-box" style="font-size: 1.1rem; padding: 20px;">
          ${bodyText}
        </div>
        <div class="score-badge">${rewardText}</div>
        <button class="btn btn-primary" id="exam-splash-done-btn">กลับสู่ Dashboard</button>
      </div>
    </div>
  `;
  
  const div = document.createElement("div");
  div.id = "splash-wrapper";
  div.innerHTML = splash;
  document.body.appendChild(div);
  
  document.getElementById("exam-splash-done-btn").addEventListener("click", () => {
    document.body.removeChild(document.getElementById("splash-wrapper"));
    renderDashboard();
  });
}

// -------------------------------------------------------------
// NEW FEATURE: VOCABULARY VAULT (FLASHCARDS STUDY INTERFACE)
// -------------------------------------------------------------
function renderVocabularyVault() {
  drawHeader();

  // Filter vocabulary by current user level or show all
  let filterLevel = "all";
  let activeIndex = 0;
  let filteredVocab = [...window.LingoVocabulary];

  function filterData() {
    if (filterLevel === "all") {
      filteredVocab = [...window.LingoVocabulary];
    } else {
      filteredVocab = window.LingoVocabulary.filter(v => v.level === filterLevel);
    }
    activeIndex = 0;
  }

  function drawFlashcard() {
    filterData();
    const wordObj = filteredVocab[activeIndex];

    const vocabHtml = `
      <div class="practice-container">
        <div class="session-header">
          <div class="back-btn" id="vocab-back-btn">
            ${ICONS.arrowLeft} กลับ Dashboard
          </div>
          <h2 class="session-title">คลังคำศัพท์สะกดคำ (Vocabulary Vault)</h2>
          <div style="font-size: 0.9rem; color: var(--text-secondary);">
            ศึกษาผ่านแฟลชการ์ดระบบพลิกการ์ดจำ
          </div>
        </div>

        <div class="session-grid">
          <div class="glass-card workspace-panel" style="align-items: center;">
            <div style="display: flex; gap: 8px; margin-bottom: 12px; width: 100%; justify-content: center;">
              <button class="btn ${filterLevel === 'all' ? 'btn-primary' : ''}" id="filter-all">ทั้งหมด</button>
              <button class="btn ${filterLevel === 'basic' ? 'btn-primary' : ''}" id="filter-basic">Basic</button>
              <button class="btn ${filterLevel === 'intermediate' ? 'btn-primary' : ''}" id="filter-int">Intermediate</button>
              <button class="btn ${filterLevel === 'advanced' ? 'btn-primary' : ''}" id="filter-adv">Advanced</button>
              <button class="btn ${filterLevel === 'master' ? 'btn-primary' : ''}" id="filter-mast">Master</button>
            </div>

            ${filteredVocab.length === 0 ? `
              <div class="stt-transcript-box" style="text-align: center; padding: 40px; font-size: 1.1rem; width: 100%;">
                ไม่พบคำศัพท์สะสมในระดับนี้ กรุณาเลือกตัวกรองอื่น
              </div>
            ` : `
              <!-- The Flip Card -->
              <div class="flip-card" id="interactive-flip-card">
                <div class="flip-card-inner">
                  <!-- Front: Word + IPA -->
                  <div class="flip-card-front">
                    <span class="level-status-pill unlocked" style="margin-bottom: 12px;">${wordObj.level.toUpperCase()} • ${wordObj.type}</span>
                    <span class="vocab-word">${wordObj.word}</span>
                    <span class="vocab-ipa">${wordObj.ipa}</span>
                    <div style="margin-top: 20px; font-size: 0.8rem; color: var(--text-muted);">คลิกเพื่อพลิกดูคำแปลภาษาไทย</div>
                  </div>
                  <!-- Back: Meaning + Example -->
                  <div class="flip-card-back">
                    <span class="vocab-thai">${wordObj.thai}</span>
                    <div class="vocab-example">"${wordObj.example}"</div>
                    <div style="margin-top: 20px; font-size: 0.8rem; color: var(--text-muted);">คลิกเพื่อพลิกกลับ</div>
                  </div>
                </div>
              </div>

              <div class="flex-between margin-top-lg" style="width: 100%; max-width: 400px; justify-content: center; gap: 20px;">
                <button class="btn" id="prev-card-btn" ${activeIndex === 0 ? "disabled" : ""}>ก่อนหน้า</button>
                <button class="btn btn-cyan" id="speak-vocab-btn">
                  ${ICONS.play} ฟังการออกเสียง
                </button>
                <button class="btn" id="next-card-btn" ${activeIndex === filteredVocab.length - 1 ? "disabled" : ""}>ถัดไป</button>
              </div>

              <div style="margin-top: 12px; font-size: 0.85rem; color: var(--text-muted);">
                คำที่ ${activeIndex + 1} จากทั้งหมด ${filteredVocab.length} คำ
              </div>
            `}
          </div>

          <!-- Sidebar Tips -->
          <div class="sidebar-panel">
            <div class="info-box">
              <h3 class="info-title text-cyan">${ICONS.sparkles} เทคนิคจำศัพท์</h3>
              <div class="tips-list">
                <div class="tips-item">
                  ${ICONS.check}
                  <span>กดปุ่ม "ฟังการออกเสียง" และออกเสียงตามทันทีก่อนพลิกการ์ด</span>
                </div>
                <div class="tips-item">
                  ${ICONS.check}
                  <span>จดจำบริบทคำแปลจากประโยคตัวอย่าง จะช่วยให้นำไปใช้จริงได้ดีขึ้น</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    appRoot().innerHTML = vocabHtml;

    // Attach Back listeners
    document.getElementById("vocab-back-btn").addEventListener("click", () => {
      renderDashboard();
    });

    if (filteredVocab.length > 0) {
      // Card Flip listener
      const card = document.getElementById("interactive-flip-card");
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });

      // Sound synthesizer voice output
      document.getElementById("speak-vocab-btn").addEventListener("click", (e) => {
        e.stopPropagation(); // Avoid flipping the card when clicking speak
        speakText(wordObj.word);
      });

      // Navigation
      document.getElementById("prev-card-btn").addEventListener("click", () => {
        activeIndex--;
        drawFlashcard();
      });

      document.getElementById("next-card-btn").addEventListener("click", () => {
        activeIndex++;
        drawFlashcard();
      });
    }

    // Filters click handlers
    document.getElementById("filter-all").addEventListener("click", () => { filterLevel = "all"; drawFlashcard(); });
    document.getElementById("filter-basic").addEventListener("click", () => { filterLevel = "basic"; drawFlashcard(); });
    document.getElementById("filter-int").addEventListener("click", () => { filterLevel = "intermediate"; drawFlashcard(); });
    document.getElementById("filter-adv").addEventListener("click", () => { filterLevel = "advanced"; drawFlashcard(); });
    document.getElementById("filter-mast").addEventListener("click", () => { filterLevel = "master"; drawFlashcard(); });
  }

  drawFlashcard();
}

// -------------------------------------------------------------
// NEW FEATURE: VIRTUAL ROLEPLAY CONVERSATION SIMULATOR
// -------------------------------------------------------------
function renderRoleplaySelection() {
  drawHeader();

  const selectHtml = `
    <div class="practice-container">
      <div class="session-header">
        <div class="back-btn" id="role-select-back-btn">
          ${ICONS.arrowLeft} กลับ Dashboard
        </div>
        <h2 class="session-title">ห้องสนทนาจำลองอัจฉริยะ (Virtual Roleplay)</h2>
        <div style="font-size: 0.9rem; color: var(--text-secondary);">
          เลือกสถานการณ์เพื่อฝึกพูดโต้ตอบเป็นภาษาอังกฤษผ่านไมค์จริง
        </div>
      </div>

      <div class="levels-container margin-top-lg">
        <div class="level-card" style="cursor: pointer;" id="start-cafe-roleplay">
          <div class="level-badge-header">
            <span class="level-title">${window.LingoRoleplays.coffeeShop.title}</span>
            <span class="level-status-pill unlocked">ระดับกลาง</span>
          </div>
          <div class="level-desc" style="margin-top: 10px;">
            ${window.LingoRoleplays.coffeeShop.description}
          </div>
          <button class="btn btn-primary margin-top-md">เริ่มสั่งกาแฟ</button>
        </div>

        <div class="level-card" style="cursor: pointer;" id="start-job-roleplay">
          <div class="level-badge-header">
            <span class="level-title">${window.LingoRoleplays.jobInterview.title}</span>
            <span class="level-status-pill unlocked">ระดับสูง</span>
          </div>
          <div class="level-desc" style="margin-top: 10px;">
            ${window.LingoRoleplays.jobInterview.description}
          </div>
          <button class="btn btn-cyan margin-top-md">เริ่มสัมภาษณ์งาน</button>
        </div>
      </div>
    </div>
  `;

  appRoot().innerHTML = selectHtml;

  document.getElementById("role-select-back-btn").addEventListener("click", () => {
    renderDashboard();
  });

  document.getElementById("start-cafe-roleplay").addEventListener("click", () => {
    startRoleplaySession("coffeeShop");
  });

  document.getElementById("start-job-roleplay").addEventListener("click", () => {
    startRoleplaySession("jobInterview");
  });
}

function startRoleplaySession(scenarioKey) {
  drawHeader();

  const roleplayData = window.LingoRoleplays[scenarioKey];
  let currentStep = 1;
  const chatHistory = [
    { sender: "bot", text: roleplayData.steps[1].botText }
  ];

  function renderChatInterface() {
    const stepData = roleplayData.steps[currentStep];
    const isFinished = stepData === undefined; // Conversational complete

    const interfaceHtml = `
      <div class="practice-container">
        <div class="session-header">
          <div class="back-btn" id="roleplay-quit-btn">
            ${ICONS.arrowLeft} ออกจากการสนทนา
          </div>
          <h2 class="session-title">${roleplayData.title}</h2>
          <div style="font-size: 0.9rem; color: var(--text-secondary);">
            สนทนาโต้ตอบกับ AI ด้วยไมโครโฟน
          </div>
        </div>

        <div class="session-grid">
          <div class="glass-card workspace-panel">
            
            <!-- Chat Log bubbles -->
            <div class="chat-log" id="chat-scroller">
              ${chatHistory.map(chat => `
                <div class="chat-bubble ${chat.sender}">
                  ${chat.text}
                </div>
              `).join("")}
            </div>

            ${isFinished ? `
              <!-- Roleplay Finished Screen -->
              <div class="speaking-card" style="background: rgba(16, 185, 129, 0.05); border-color: var(--success);">
                <h3 class="text-success" style="font-size: 1.5rem; font-weight: 700;">บทสนทนาจำลองสำเร็จลุล่วง! 🎉</h3>
                <div class="instruction-text">
                  คุณสามารถฝึกพูดโต้ตอบและรับมือกับคำถามได้ดีมาก! เราบันทึกคะแนนเพื่ออัปเดตเปอร์เซ็นต์ทักษะของคุณเรียบร้อยแล้ว
                </div>
                <div class="score-badge">+50 XP</div>
                <button class="btn btn-primary margin-top-md" id="roleplay-finish-done-btn">กลับสู่ห้องเรียน</button>
              </div>
            ` : `
              <!-- Active Speaking / Dialogue Interface -->
              <div class="speaking-card">
                <div class="target-phrase-box" style="border-left: 4px solid var(--accent-blue);">
                  <div class="instruction-text" style="margin-bottom: 6px; font-weight: bold; color: var(--text-primary);">คำแนะนำในการตอบ:</div>
                  <div style="font-size: 1.05rem; color: var(--accent-cyan); font-style: italic;">
                    ${stepData.instruction}
                  </div>
                </div>

                <div style="display: flex; gap: 16px; width: 100%; align-items: center; justify-content: center; margin-top: 15px;">
                  <button class="audio-btn" id="roleplay-hear-bot-btn" style="width: 54px; height: 54px; box-shadow: none;">
                    ${ICONS.play}
                  </button>
                  <button class="mic-btn" id="roleplay-mic-btn" style="width: 72px; height: 72px;">
                    ${ICONS.mic}
                  </button>
                </div>
                
                <div class="instruction-text" id="roleplay-status">คลิกปุ่มไมค์เพื่อตอบคำถาม หรือพิมพ์ในช่องด้านล่าง</div>
                
                <!-- Text Area Fallback for ease of typing -->
                <div style="display: flex; width: 100%; gap: 10px; margin-top: 10px;">
                  <input type="text" class="writing-textarea" style="min-height: 48px; border-radius: 12px; padding: 8px 16px;" placeholder="พิมพ์พิมพ์ประโยคตอบภาษาอังกฤษของคุณที่นี่..." id="roleplay-text-input">
                  <button class="btn btn-primary" id="roleplay-send-text-btn" style="border-radius: 12px;">ส่ง</button>
                </div>
              </div>
            `}
          </div>

          <!-- Sidebar with key vocab recommendations -->
          <div class="sidebar-panel">
            <div class="info-box">
              <h3 class="info-title text-cyan">${ICONS.sparkles} คำสำคัญแนะนำ</h3>
              <div class="tips-list" style="font-size: 0.8rem;">
                ${isFinished ? "สนทนาจบลงเรียบร้อยแล้ว!" : `
                  <div>พยายามพูดหรือพิมพ์โดยมีคำศัพท์เหล่านี้อยู่ในคำตอบของคุณ:</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
                    ${stepData.keywords.map(kw => `
                      <span class="level-status-pill locked-pill" style="font-size: 0.75rem; text-transform: none; background: rgba(255,255,255,0.03);">${kw}</span>
                    `).join("")}
                  </div>
                `}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    appRoot().innerHTML = interfaceHtml;

    // Scroll to bottom
    const scroller = document.getElementById("chat-scroller");
    if (scroller) scroller.scrollTop = scroller.scrollHeight;

    // Add listeners
    document.getElementById("roleplay-quit-btn").addEventListener("click", () => {
      if (confirm("ยกเลิกการฝึกจำลองบทสนทนานี้และออกสู่ Dashboard?")) {
        renderRoleplaySelection();
      }
    });

    if (isFinished) {
      document.getElementById("roleplay-finish-done-btn").addEventListener("click", () => {
        state.xp += 50; // Earn 50 XP
        awardBadge("first_speaking", "Eloquent Dialogue!");
        saveProgress();
        renderDashboard();
      });
      return;
    }

    // Audio Play bot speech
    const playBtn = document.getElementById("roleplay-hear-bot-btn");
    playBtn.addEventListener("click", () => {
      playBtn.classList.add("playing");
      speakText(stepData.botText, () => {
        playBtn.classList.remove("playing");
      });
    });

    // Auto voice output bot on start step
    setTimeout(() => {
      speakText(stepData.botText);
    }, 400);

    // Speak Mic logic
    const micBtn = document.getElementById("roleplay-mic-btn");
    const statusLabel = document.getElementById("roleplay-status");
    const textInput = document.getElementById("roleplay-text-input");
    const sendBtn = document.getElementById("roleplay-send-text-btn");

    let recognition = null;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      
      recognition.onstart = () => {
        micBtn.classList.add("recording");
        statusLabel.innerHTML = "<span class='text-pink'>กำลังฟังเสียงพูดของคุณผ่านไมโครโฟน...</span>";
      };

      recognition.onerror = (e) => {
        micBtn.classList.remove("recording");
        statusLabel.innerHTML = `<span class='text-danger'>ไมโครโฟนขัดข้อง (${e.error}) กรุณาลองกรอกทางแป้นพิมพ์แทน</span>`;
      };

      recognition.onend = () => {
        micBtn.classList.remove("recording");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textInput.value = transcript;
        processUserSpeech(transcript);
      };
    }

    micBtn.addEventListener("click", () => {
      if (recognition) {
        try {
          recognition.start();
        } catch (e) {
          recognition.stop();
        }
      } else {
        // Fallback simulate speech from textbox
        if (textInput.value.trim() !== "") {
          processUserSpeech(textInput.value);
        } else {
          statusLabel.innerHTML = "<span class='text-warning'>ไม่มีอินพุตเสียง ไมค์จำลองต้องการให้พิมพ์ข้อมูลตอบ</span>";
        }
      }
    });

    sendBtn.addEventListener("click", () => {
      const val = textInput.value.trim();
      if (val !== "") {
        processUserSpeech(val);
      }
    });

    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && textInput.value.trim() !== "") {
        processUserSpeech(textInput.value.trim());
      }
    });
  }

  function processUserSpeech(userInput) {
    const stepData = roleplayData.steps[currentStep];
    
    // Add user response to bubble history
    chatHistory.push({ sender: "user", text: userInput });

    // Move to next step or finish
    const next = stepData.nextStep;
    if (next !== null) {
      currentStep = next;
      // Bot response
      const nextBotText = roleplayData.steps[currentStep].botText;
      chatHistory.push({ sender: "bot", text: nextBotText });
      renderChatInterface();
    } else {
      // Completed conversation
      currentStep = 999; // Set finished
      renderChatInterface();
    }
  }

  renderChatInterface();
}

// -------------------------------------------------------------
// APP INITIALIZATION
// -------------------------------------------------------------
window.addEventListener("load", () => {
  loadProgress();
  renderDashboard();
});
