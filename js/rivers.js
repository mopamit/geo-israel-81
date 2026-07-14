const RIVERS = [
  {
    id: 'kishon',
    name: 'נחל קישון',
    riddle: 'אני נחל מרכזי בעמק יזרעאל, ולאחר מסע ארוך אני נשפך אל הים התיכון ממזרח לעיר חיפה. מי אני?',
    hint: 'שימו לב: הנחל זורם מעמק יזרעאל אל מפרץ חיפה.',
    basin: 'הים התיכון',
    target: { x: 50.7, y: 17.2 },
    mapText: 'סמנו את אזור שפך הנחל במפרץ חיפה.'
  },
  {
    id: 'alexander',
    name: 'נחל אלכסנדר',
    riddle: 'אני זורם בלב אזור השרון, וידוע בכל הארץ בזכות צבי המים הרכים והענקיים שמוצאים אצלי בית בטוח. מי אני?',
    hint: 'חפשו נחל בשרון המזוהה עם צבים רכים.',
    basin: 'הים התיכון',
    target: { x: 44.1, y: 28.3 },
    mapText: 'סמנו את אזור שפך הנחל בשרון, מצפון לנתניה.'
  },
  {
    id: 'dan',
    name: 'נחל דן',
    riddle: 'אני מקור הירדן השופע והיציב ביותר. המעיינות שלי מניעים אותי בעוצמה לאורך כל השנה, ללא קשר לכמות הגשם שירדה לאחרונה. מי אני?',
    hint: 'זהו אחד משלושת מקורות הירדן, והוא נובע באזור תל דן.',
    basin: 'הירדן והכנרת',
    target: { x: 77.0, y: 4.0 },
    mapText: 'סמנו את אזור מקורות הירדן בצפון עמק החולה.'
  },
  {
    id: 'banias',
    name: 'נחל חרמון (בניאס)',
    riddle: 'אני פורץ מהסלע למרגלות החרמון, ובשיפולי ההר אני יוצר מפלים שוצפים ומרשימים במיוחד. מי אני?',
    hint: 'הנחל מוכר גם בשם בניאס.',
    basin: 'הירדן והכנרת',
    target: { x: 84.0, y: 4.8 },
    mapText: 'סמנו את אזור הנביעה למרגלות החרמון.'
  },
  {
    id: 'snir',
    name: 'נחל שניר (חצבאני)',
    riddle: 'מבין שלושת מקורות הירדן, אני הארוך ביותר, והמסע שלי מתחיל בכלל מעבר לגבול – בארץ לבנון. מי אני?',
    hint: 'הנחל מוכר גם בשם חצבאני.',
    basin: 'הירדן והכנרת',
    target: { x: 73.0, y: 5.3 },
    mapText: 'סמנו את אזור כניסת הנחל מצפון אל עמק החולה.'
  },
  {
    id: 'saar',
    name: 'נחל סער',
    riddle: 'אני חוצה את צפון הגולן בתוך קניון עמוק ומרהיב, ושני מפלים גבוהים לאורך מסלולי מושכים מטיילים רבים. מי אני?',
    hint: 'הנחל נמצא בצפון רמת הגולן, סמוך לדרך העולה לחרמון.',
    basin: 'הירדן והכנרת',
    target: { x: 85.2, y: 7.1 },
    mapText: 'סמנו את אזור צפון רמת הגולן, סמוך לחרמון.'
  },
  {
    id: 'taninim',
    name: 'נחל תנינים',
    riddle: 'אני נחל איתן הזורם במישור חוף הכרמל, והשם שלי יזכיר לכם זוחל עתיק ומפחיד שחי באזור בעבר הרחוק. מי אני?',
    hint: 'שמו של הנחל זהה לשמו של זוחל גדול.',
    basin: 'הים התיכון',
    target: { x: 47.7, y: 23.0 },
    mapText: 'סמנו את אזור שפך הנחל בחוף הכרמל.'
  },
  {
    id: 'sorek',
    name: 'נחל שורק',
    riddle: 'אני מתחיל את דרכי גבוה בהרי ירושלים, מתפתל באיטיות בין גבעות השפלה, ולבסוף נשפך אל הים הפתוח ליד חוף פלמחים. מי אני?',
    hint: 'הנחל נשפך לים ליד פלמחים.',
    basin: 'הים התיכון',
    target: { x: 39.0, y: 43.0 },
    mapText: 'סמנו את אזור שפך הנחל ליד פלמחים.'
  },
  {
    id: 'paran',
    name: 'נחל פארן',
    riddle: 'אני נחל עצום וארוך בנגב, ובמהלך שיטפונות יכולים לזרום בי כמויות אדירות, סוחפות ומרשימות בלב המדבר. מי אני?',
    hint: 'זהו אחד מנחלי האכזב הגדולים ביותר בנגב.',
    basin: 'הערבה וים המלח',
    target: { x: 57.5, y: 68.0 },
    mapText: 'סמנו את האזור שבו הנחל מגיע אל הערבה.'
  },
  {
    id: 'david',
    name: 'נחל דוד',
    riddle: 'אני נחל איתן הזורם בלב מדבר יהודה, ומייצר נווה מדבר ירוק, שוקק חיים ומים ממש ליד ים המלח. מי אני?',
    hint: 'הנחל נמצא בשמורת עין גדי.',
    basin: 'הערבה וים המלח',
    target: { x: 62.0, y: 50.5 },
    mapText: 'סמנו את אזור עין גדי בחוף המערבי של ים המלח.'
  }
];

const BASINS = ['הים התיכון', 'הירדן והכנרת', 'הערבה וים המלח'];


function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

let questionOrder = shuffleArray(RIVERS);

const state = {
  index: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  attempts: 0,
  selected: null,
  stage: 'name',
  solved: [],
  markers: [],
  zoom: 1,
  worksheetAnswers: {},
  selectedWord: null,
  summaryCompleted: false
};

const els = {
  scoreValue: document.getElementById('scoreValue'),
  streakValue: document.getElementById('streakValue'),
  progressValue: document.getElementById('progressValue'),
  progressBar: document.getElementById('progressBar'),
  stepLabel: document.getElementById('stepLabel'),
  questionNumber: document.getElementById('questionNumber'),
  riddleText: document.getElementById('riddleText'),
  feedback: document.getElementById('feedback'),
  hintBtn: document.getElementById('hintBtn'),
  namesStage: document.getElementById('namesStage'),
  riverOptions: document.getElementById('riverOptions'),
  mapStage: document.getElementById('mapStage'),
  mapTaskCopy: document.getElementById('mapTaskCopy'),
  mapInstruction: document.getElementById('mapInstruction'),
  selectedRiver: document.getElementById('selectedRiver'),
  basinTask: document.getElementById('basinTask'),
  basinOptions: document.getElementById('basinOptions'),
  mapCanvas: document.getElementById('mapCanvas'),
  riverMap: document.getElementById('riverMap'),
  mapMarkers: document.getElementById('mapMarkers'),
  mapViewport: document.getElementById('mapViewport'),
  clickPreview: document.getElementById('clickPreview'),
  worksheetStage: document.getElementById('worksheetStage'),
  wordBank: document.getElementById('wordBank'),
  worksheetFilled: document.getElementById('worksheetFilled'),
  checkWorksheetBtn: document.getElementById('checkWorksheetBtn'),
  clearWorksheetBtn: document.getElementById('clearWorksheetBtn'),
  worksheetFeedback: document.getElementById('worksheetFeedback'),
  completeStage: document.getElementById('completeStage'),
  finalScore: document.getElementById('finalScore'),
  finalStreak: document.getElementById('finalStreak'),
  printScore: document.getElementById('printScore'),
  printStreak: document.getElementById('printStreak'),
  printSummaryBtn: document.getElementById('printSummaryBtn'),
  downloadSummaryBtn: document.getElementById('downloadSummaryBtn'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  resetMapBtn: document.getElementById('resetMapBtn'),
  resetBtn: document.getElementById('resetBtn'),
  instructionsBtn: document.getElementById('instructionsBtn'),
  instructionsDialog: document.getElementById('instructionsDialog'),
  closeInstructionsBtn: document.getElementById('closeInstructionsBtn'),
  amitLogo: document.getElementById('amitLogo'),
  logoFallback: document.getElementById('logoFallback')
};

function currentRiver() {
  return questionOrder[state.index] ?? null;
}

function updateHud() {
  els.scoreValue.textContent = state.score;
  els.streakValue.textContent = state.streak;
  els.progressValue.textContent = `${state.solved.length}/${RIVERS.length}`;
  els.progressBar.style.width = `${(state.solved.length / RIVERS.length) * 100}%`;
}

function showFeedback(text, type) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${type}`;
  els.feedback.textContent = text;
}

function clearFeedback() {
  els.feedback.hidden = true;
  els.feedback.textContent = '';
  els.feedback.className = 'feedback';
}

function renderRiverOptions() {
  els.riverOptions.innerHTML = '';

  const randomizedOptions = shuffleArray(RIVERS);

  randomizedOptions.forEach((river) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'river-option';
    button.textContent = river.name;

    if (state.solved.includes(river.id)) {
      button.classList.add('solved');
      button.disabled = true;
      button.title = 'הנחל כבר הושלם';
    }

    button.addEventListener('click', () => chooseRiver(river, button));
    els.riverOptions.appendChild(button);
  });
}

function loadQuestion() {
  if (state.solved.length === RIVERS.length && state.index >= RIVERS.length) {
    finishStation();
    return;
  }

  const river = currentRiver();
  if (!river) {
    console.error('לא נמצא נחל עבור החידה הנוכחית.', state);
    return;
  }

  state.attempts = 0;
  state.selected = null;
  state.stage = 'name';
  state.zoom = 1;
  els.mapCanvas.style.width = '100%';

  els.questionNumber.textContent = state.index + 1;
  els.riddleText.textContent = river.riddle;
  els.stepLabel.textContent = 'שלב א׳ – זיהוי הנחל';

  els.namesStage.hidden = false;
  els.mapStage.hidden = true;
  els.worksheetStage.hidden = true;
  els.completeStage.hidden = true;
  els.mapTaskCopy.hidden = true;
  els.basinTask.hidden = true;
  els.hintBtn.hidden = true;
  els.clickPreview.hidden = true;

  clearFeedback();
  renderRiverOptions();
  renderMarkers();
}

function chooseRiver(river, button) {
  if (state.stage !== 'name') return;

  state.attempts += 1;
  const correct = currentRiver();

  if (river.id === correct.id) {
    state.selected = river;
    state.stage = 'map';

    const earned = state.attempts === 1 ? 100 : 50;
    state.score += earned;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);

    showFeedback(
      state.attempts === 1
        ? `מדויק! זיהיתם את ${river.name}. נוספו ${earned} נקודות.`
        : `מצוין, התיקון הצליח! זהו ${river.name}. נוספו ${earned} נקודות.`,
      'success'
    );

    updateHud();
    window.setTimeout(showMapStage, 650);
  } else {
    state.streak = 0;
    updateHud();

    button.classList.add('wrong');
    window.setTimeout(() => button.classList.remove('wrong'), 420);

    showFeedback(
      'כמעט שם. בדקו שוב את האזור, את כיוון הזרימה ואת הרמזים שבתיאור.',
      'try-again'
    );
    els.hintBtn.hidden = false;
  }
}

function showMapStage() {
  const river = currentRiver();

  state.stage = 'map';
  els.stepLabel.textContent = 'שלב ב׳ – איתור במפה';
  els.namesStage.hidden = true;
  els.mapStage.hidden = false;
  els.mapTaskCopy.hidden = false;
  els.basinTask.hidden = true;
  els.mapInstruction.textContent = river.mapText;
  els.selectedRiver.textContent = river.name;
  els.clickPreview.hidden = true;

  clearFeedback();
  els.hintBtn.hidden = true;
  els.mapViewport.scrollTop = 0;
  els.mapViewport.scrollLeft = 0;
}

function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function positionClickPreview(click) {
  els.clickPreview.hidden = false;
  els.clickPreview.style.left = `${click.x}%`;
  els.clickPreview.style.top = `${click.y}%`;
}

function handleMapClick(event) {
  if (state.stage !== 'map') return;

  const rect = els.riverMap.getBoundingClientRect();
  const click = {
    x: ((event.clientX - rect.left) / rect.width) * 100,
    y: ((event.clientY - rect.top) / rect.height) * 100
  };

  positionClickPreview(click);

  const river = currentRiver();
  const tolerance = river.id === 'paran' ? 8.5 : 6.5;

  if (distance(click, river.target) <= tolerance) {
    state.markers.push({
      id: river.id,
      number: state.index + 1,
      x: river.target.x,
      y: river.target.y
    });

    renderMarkers();
    els.clickPreview.hidden = true;
    state.stage = 'basin';

    showFeedback(
      `המיקום מתאים. ${river.name} סומן על המפה. עכשיו נשאר לזהות את יעד הניקוז.`,
      'success'
    );
    showBasinStage();
  } else {
    showFeedback(
      'הסימון נקלט, אך האזור עדיין אינו מתאים. התבוננו שוב במפת הארץ ובפרטי החידה.',
      'try-again'
    );
    els.hintBtn.hidden = false;
  }
}

function showBasinStage() {
  const river = currentRiver();

  els.stepLabel.textContent = 'שלב ג׳ – יעד הניקוז';
  els.basinTask.hidden = false;
  els.basinOptions.innerHTML = '';

  BASINS.forEach((basin) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'basin-option';
    button.textContent = basin;
    button.addEventListener('click', () => chooseBasin(basin, button));
    els.basinOptions.appendChild(button);
  });

  els.mapInstruction.textContent = `${river.name} סומן. בחרו לאן מתנקזים מימיו.`;
}

function chooseBasin(basin, button) {
  if (state.stage !== 'basin') return;

  const river = currentRiver();

  if (basin === river.basin) {
    state.stage = 'transition';
    state.score += 50;

    if (!state.solved.includes(river.id)) {
      state.solved.push(river.id);
    }

    updateHud();

    showFeedback(
      `נכון. ${river.name} שייך לאגן הניקוז של ${river.basin}.`,
      'success'
    );

    Array.from(els.basinOptions.children).forEach((item) => {
      item.disabled = true;
    });

    window.setTimeout(() => {
      if (state.solved.length === RIVERS.length) {
        state.index = RIVERS.length;
        showWorksheetStage();
        return;
      }

      state.index += 1;
      loadQuestion();
    }, 1100);
  } else {
    button.classList.add('wrong');
    window.setTimeout(() => button.classList.remove('wrong'), 420);

    showFeedback(
      'כיוון טוב, אבל בדקו שוב לאיזה גוף מים מגיע הנחל בסוף מסלולו.',
      'try-again'
    );
  }
}

function renderMarkers() {
  els.mapMarkers.innerHTML = '';

  state.markers.forEach((marker) => {
    const element = document.createElement('span');
    element.className = 'map-marker';
    element.dataset.number = marker.number;
    element.style.left = `${marker.x}%`;
    element.style.top = `${marker.y}%`;
    els.mapMarkers.appendChild(element);
  });
}


const WORKSHEET_ANSWERS = {
  1: 'קו פרשת המים',
  2: 'שפך הנחל',
  3: 'אגן ניקוז',
  4: 'מוצא הנחל',
  5: 'מדרון מתון',
  6: 'מדרון תלול',
  7: 'מצפון לדרום',
  8: 'ים המלח',
  9: 'מוצא של מים',
  10: 'נחל איתן',
  11: 'נחל אכזב',
  12: 'זיהום',
  13: 'רשות הניקוז והנחלים',
  14: 'שיקום'
};

const WORKSHEET_WORDS = Object.values(WORKSHEET_ANSWERS);

function showWorksheetStage() {
  state.stage = 'worksheet';
  state.selectedWord = null;

  els.namesStage.hidden = true;
  els.mapStage.hidden = true;
  els.completeStage.hidden = true;
  els.worksheetStage.hidden = false;
  els.mapTaskCopy.hidden = true;
  els.basinTask.hidden = true;
  els.hintBtn.hidden = true;

  els.stepLabel.textContent = 'שלב ד׳ – דף סיכום';
  els.riddleText.textContent = 'השלימו את דף הסיכום באמצעות מחסן המילים.';
  clearFeedback();

  renderWordBank();
  renderWorksheetSlots();
  updateWorksheetCounter();

  window.scrollTo({
    top: els.worksheetStage.getBoundingClientRect().top + window.scrollY - 100,
    behavior: 'smooth'
  });
}

function renderWordBank() {
  els.wordBank.innerHTML = '';

  shuffleArray(WORKSHEET_WORDS).forEach((word) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'word-chip';
    chip.textContent = word;
    chip.dataset.word = word;
    chip.draggable = true;

    const used = Object.values(state.worksheetAnswers).includes(word);
    if (used) {
      chip.classList.add('used');
      chip.disabled = true;
    }

    if (state.selectedWord === word) {
      chip.classList.add('selected');
    }

    chip.addEventListener('click', () => {
      if (chip.disabled) return;
      state.selectedWord = state.selectedWord === word ? null : word;
      renderWordBank();
    });

    chip.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', word);
      event.dataTransfer.effectAllowed = 'move';
      state.selectedWord = word;
    });

    els.wordBank.appendChild(chip);
  });
}

function renderWorksheetSlots() {
  document.querySelectorAll('.drop-slot').forEach((slot) => {
    const slotNumber = Number(slot.dataset.slot);
    const answer = state.worksheetAnswers[slotNumber];

    slot.classList.remove('filled', 'correct', 'incorrect', 'drag-over');
    slot.querySelectorAll('.slot-answer').forEach((node) => node.remove());

    if (answer) {
      const answerNode = document.createElement('span');
      answerNode.className = 'slot-answer';
      answerNode.textContent = answer;
      slot.appendChild(answerNode);
      slot.classList.add('filled');
    }

    slot.ondragover = (event) => {
      event.preventDefault();
      slot.classList.add('drag-over');
    };

    slot.ondragleave = () => {
      slot.classList.remove('drag-over');
    };

    slot.ondrop = (event) => {
      event.preventDefault();
      slot.classList.remove('drag-over');
      const word = event.dataTransfer.getData('text/plain');
      placeWordInSlot(slotNumber, word);
    };

    slot.onclick = () => {
      if (state.selectedWord) {
        placeWordInSlot(slotNumber, state.selectedWord);
        return;
      }

      if (state.worksheetAnswers[slotNumber]) {
        delete state.worksheetAnswers[slotNumber];
        renderWordBank();
        renderWorksheetSlots();
        updateWorksheetCounter();
      }
    };

    slot.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        slot.click();
      }
    };
  });
}

function placeWordInSlot(slotNumber, word) {
  if (!WORKSHEET_WORDS.includes(word)) return;

  Object.keys(state.worksheetAnswers).forEach((key) => {
    if (state.worksheetAnswers[key] === word) {
      delete state.worksheetAnswers[key];
    }
  });

  state.worksheetAnswers[slotNumber] = word;
  state.selectedWord = null;

  renderWordBank();
  renderWorksheetSlots();
  updateWorksheetCounter();

  els.worksheetFeedback.hidden = true;
}

function updateWorksheetCounter() {
  const count = Object.keys(state.worksheetAnswers).length;
  els.worksheetFilled.textContent = `${count}/14`;
}

function checkWorksheet() {
  const filledCount = Object.keys(state.worksheetAnswers).length;

  document.querySelectorAll('.drop-slot').forEach((slot) => {
    const slotNumber = Number(slot.dataset.slot);
    const current = state.worksheetAnswers[slotNumber];

    slot.classList.remove('correct', 'incorrect');

    if (!current) return;

    if (current === WORKSHEET_ANSWERS[slotNumber]) {
      slot.classList.add('correct');
    } else {
      slot.classList.add('incorrect');
    }
  });

  if (filledCount < 14) {
    els.worksheetFeedback.hidden = false;
    els.worksheetFeedback.className = 'worksheet-feedback try-again';
    els.worksheetFeedback.textContent = `כמעט שם. שובצו ${filledCount} מתוך 14 מושגים. השלימו את כל המשבצות ונסו שוב.`;
    return;
  }

  const incorrectSlots = Object.keys(WORKSHEET_ANSWERS).filter(
    (slotNumber) => state.worksheetAnswers[slotNumber] !== WORKSHEET_ANSWERS[slotNumber]
  );

  if (incorrectSlots.length > 0) {
    els.worksheetFeedback.hidden = false;
    els.worksheetFeedback.className = 'worksheet-feedback try-again';
    els.worksheetFeedback.textContent = `יש ${incorrectSlots.length} התאמות שכדאי לבדוק שוב. המשבצות מסומנות בצהוב, ואפשר ללחוץ עליהן כדי להחזיר את המילה למחסן.`;
    return;
  }

  state.summaryCompleted = true;
  state.score += 200;
  updateHud();

  els.worksheetFeedback.hidden = false;
  els.worksheetFeedback.className = 'worksheet-feedback success';
  els.worksheetFeedback.textContent = 'מדויק! כל 14 המושגים שובצו נכון. התחנה הושלמה ונוספו 200 נקודות.';

  window.setTimeout(finishStation, 900);
}

function clearWorksheet() {
  state.worksheetAnswers = {};
  state.selectedWord = null;
  renderWordBank();
  renderWorksheetSlots();
  updateWorksheetCounter();
  els.worksheetFeedback.hidden = true;
}

function buildDownloadableSummary() {
  const htmlContent = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="UTF-8">
<title>סיכום תחנה 1 – מערכת הנחלים של ישראל</title>
<style>
body{font-family:Arial,sans-serif;direction:rtl;max-width:900px;margin:40px auto;padding:0 24px;line-height:1.7;color:#173650}
h1{border-bottom:4px solid #21739e;padding-bottom:12px}
h2{color:#21739e;margin-top:28px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:22px 0}
.stats div{padding:14px;text-align:center;background:#eef7fb;border-radius:12px}
strong{color:#14365e}
@media print{body{margin:0;max-width:none}}
</style>
</head>
<body>
<h1>סיכום תחנה 1 – מערכת הנחלים של ישראל</h1>
<div class="stats">
<div>ניקוד<br><strong>${state.score}</strong></div>
<div>רצף מרבי<br><strong>${state.maxStreak}</strong></div>
<div>נחלים שהושלמו<br><strong>10/10</strong></div>
</div>
<h2>מערכת הנחלים</h2>
<p>מערכת הנחלים של ארץ ישראל נקבעת במידה רבה על ידי הטופוגרפיה של השדרה ההררית המרכזית, המהווה את <strong>קו פרשת המים</strong>. הנחל מתחיל את דרכו ב<strong>מוצא הנחל</strong>, והמקום שבו הוא נשפך אל ים או אגם נקרא <strong>שפך הנחל</strong>. השטח שממנו מתנקזים המים אל ערוץ נחל אחד נקרא <strong>אגן ניקוז</strong>.</p>
<h2>כיווני זרימה</h2>
<ul>
<li>נחלים הזורמים מערבה אל הים התיכון עוברים לרוב לאורך מדרון מתון וארוך.</li>
<li>נחלים הזורמים מזרחה אל בקע הירדן יורדים לרוב במדרון תלול וקצר.</li>
<li>נהר הירדן זורם מצפון לדרום, מן החרמון אל ים המלח.</li>
</ul>
<h2>סוגי נחלים</h2>
<ul>
<li><strong>נחל איתן:</strong> מים זורמים בו לאורך כל ימות השנה.</li>
<li><strong>נחל אכזב:</strong> מים זורמים בו בעיקר לאחר ירידת גשמים.</li>
</ul>
<h2>זיהום ושיקום</h2>
<p>נחלי ישראל סבלו מזיהום בעקבות הזרמת שפכים וביוב. רשות הניקוז והנחלים פועלת בשיתוף המשרד להגנת הסביבה לשיקום הנחלים ולהחזרת המערכת האקולוגית.</p>
<h2>הנחלים שנחקרו</h2>
<p>נחל קישון, נחל אלכסנדר, נחל דן, נחל חרמון (בניאס), נחל שניר (חצבאני), נחל סער, נחל תנינים, נחל שורק, נחל פארן ונחל דוד.</p>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'סיכום-תחנה-1-מערכת-הנחלים.html';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}


function finishStation() {
  if (state.solved.length !== RIVERS.length || !state.summaryCompleted) {
    console.warn('ניסיון לסיים את התחנה לפני השלמת כל הנחלים ודף הסיכום.', state);
    return;
  }

  state.stage = 'complete';
  els.namesStage.hidden = true;
  els.mapStage.hidden = true;
  els.worksheetStage.hidden = true;
  els.completeStage.hidden = false;
  els.stepLabel.textContent = 'התחנה הושלמה';
  els.riddleText.textContent = 'כל עשרת הנחלים אותרו בהצלחה.';
  els.mapTaskCopy.hidden = true;
  els.basinTask.hidden = true;
  els.hintBtn.hidden = true;
  clearFeedback();

  els.finalScore.textContent = state.score;
  els.finalStreak.textContent = state.maxStreak;
  els.printScore.textContent = state.score;
  els.printStreak.textContent = state.maxStreak;

  localStorage.setItem(
    'amitIsraelJourneyStation1',
    JSON.stringify({
      completed: true,
      score: state.score,
      maxStreak: state.maxStreak,
      solved: [...state.solved],
      worksheetCompleted: true,
      completedAt: new Date().toISOString()
    })
  );
}

function resetStation() {
  const confirmed = window.confirm('לאפס את כל ההתקדמות בתחנה ולהתחיל מחדש?');
  if (!confirmed) return;

  questionOrder = shuffleArray(RIVERS);

  Object.assign(state, {
    index: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    attempts: 0,
    selected: null,
    stage: 'name',
    solved: [],
    markers: [],
    zoom: 1,
    worksheetAnswers: {},
    selectedWord: null,
    summaryCompleted: false
  });

  localStorage.removeItem('amitIsraelJourneyStation1');

  els.worksheetStage.hidden = true;
  els.completeStage.hidden = true;
  clearWorksheet();
  updateHud();
  loadQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setZoom(nextZoom) {
  state.zoom = Math.min(2.4, Math.max(1, nextZoom));
  els.mapCanvas.style.width = `${state.zoom * 100}%`;
}

els.hintBtn.addEventListener('click', () => {
  showFeedback(`רמז: ${currentRiver().hint}`, 'try-again');
});

els.riverMap.addEventListener('click', handleMapClick);
els.zoomInBtn.addEventListener('click', () => setZoom(state.zoom + 0.25));
els.zoomOutBtn.addEventListener('click', () => setZoom(state.zoom - 0.25));
els.resetMapBtn.addEventListener('click', () => {
  setZoom(1);
  els.mapViewport.scrollTop = 0;
  els.mapViewport.scrollLeft = 0;
});

els.resetBtn.addEventListener('click', resetStation);
els.instructionsBtn.addEventListener('click', () => {
  els.instructionsDialog.hidden = false;
});
els.closeInstructionsBtn.addEventListener('click', () => {
  els.instructionsDialog.hidden = true;
});
els.instructionsDialog.addEventListener('click', (event) => {
  if (event.target === els.instructionsDialog) {
    els.instructionsDialog.hidden = true;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    els.instructionsDialog.hidden = true;
  }
});


els.checkWorksheetBtn.addEventListener('click', checkWorksheet);
els.clearWorksheetBtn.addEventListener('click', clearWorksheet);
els.printSummaryBtn.addEventListener('click', () => window.print());
els.downloadSummaryBtn.addEventListener('click', buildDownloadableSummary);

els.amitLogo.addEventListener('error', () => {
  els.amitLogo.hidden = true;
  els.logoFallback.hidden = false;
});

els.worksheetStage.hidden = true;
els.completeStage.hidden = true;
els.mapStage.hidden = true;
els.mapTaskCopy.hidden = true;
els.basinTask.hidden = true;
els.feedback.hidden = true;
els.hintBtn.hidden = true;
els.instructionsDialog.hidden = true;

updateHud();
loadQuestion();
