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
  zoom: 1
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
  completeStage: document.getElementById('completeStage'),
  finalScore: document.getElementById('finalScore'),
  finalStreak: document.getElementById('finalStreak'),
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
  return RIVERS[state.index] ?? null;
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

  RIVERS.forEach((river) => {
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
        finishStation();
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

function finishStation() {
  if (state.solved.length !== RIVERS.length) {
    console.warn('ניסיון לסיים את התחנה לפני השלמת כל הנחלים.', state);
    return;
  }

  state.stage = 'complete';
  els.namesStage.hidden = true;
  els.mapStage.hidden = true;
  els.completeStage.hidden = false;
  els.stepLabel.textContent = 'התחנה הושלמה';
  els.riddleText.textContent = 'כל עשרת הנחלים אותרו בהצלחה.';
  els.mapTaskCopy.hidden = true;
  els.basinTask.hidden = true;
  els.hintBtn.hidden = true;
  clearFeedback();

  els.finalScore.textContent = state.score;
  els.finalStreak.textContent = state.maxStreak;

  localStorage.setItem(
    'amitIsraelJourneyStation1',
    JSON.stringify({
      completed: true,
      score: state.score,
      maxStreak: state.maxStreak,
      solved: [...state.solved],
      completedAt: new Date().toISOString()
    })
  );
}

function resetStation() {
  const confirmed = window.confirm('לאפס את כל ההתקדמות בתחנה ולהתחיל מחדש?');
  if (!confirmed) return;

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
    zoom: 1
  });

  localStorage.removeItem('amitIsraelJourneyStation1');

  els.completeStage.hidden = true;
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

els.amitLogo.addEventListener('error', () => {
  els.amitLogo.hidden = true;
  els.logoFallback.hidden = false;
});

updateHud();
loadQuestion();
