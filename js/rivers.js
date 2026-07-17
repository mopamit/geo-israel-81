const RIVER_LIBRARY = [
  {
    id: 'kishon',
    name: 'נחל קישון',
    riddle: 'אני נחל מרכזי בעמק יזרעאל, ולאחר מסע ארוך אני נשפך אל הים התיכון ממזרח לעיר חיפה. מי אני?',
    hint: 'אני זורם מעמק יזרעאל אל מפרץ חיפה.',
    outlet: 'מפרץ חיפה והים התיכון',
    outletChoices: ['מפרץ חיפה והים התיכון', 'הכנרת', 'ים המלח'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 28,
    path: [[486,411],[486,405],[480,397],[478,390],[472,385],[471,380],[464,376],[460,377],[454,374],[448,374],[424,352],[416,348],[414,328],[408,319],[398,309],[400,300],[390,289],[384,289],[381,286],[381,280]]
  },
  {
    id: 'alexander',
    name: 'נחל אלכסנדר',
    riddle: 'אני זורם בלב אזור השרון, וידוע בכל הארץ בזכות צבי המים הרכים והענקיים שמוצאים אצלי בית בטוח. מי אני?',
    hint: 'אני נמצא בשרון ומזוהה עם הצבים הרכים.',
    outlet: 'הים התיכון ליד מכמורת',
    outletChoices: ['הים התיכון ליד מכמורת', 'נהר הירדן', 'מפרץ אילת'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 30,
    path: [[308,501],[310,506],[319,506],[322,515],[327,517],[331,512],[339,512],[347,516],[352,522],[354,538],[361,553],[360,561],[362,566],[359,571],[359,583],[362,586],[374,590],[404,590],[409,593]]
  },
  {
    id: 'dan',
    name: 'נחל דן',
    riddle: 'אני מקור הירדן השופע והיציב ביותר. המעיינות שלי מניעים אותי בעוצמה לאורך כל השנה, ללא קשר לכמות הגשם שירדה לאחרונה. מי אני?',
    hint: 'אני אחד משלושת מקורות הירדן ונובע באזור תל דן.',
    outlet: 'נהר הירדן',
    outletChoices: ['נהר הירדן', 'הים התיכון', 'ים המלח'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 17,
    path: [[665,33],[663,43],[663,54],[664,66],[663,78],[661,91],[659,104],[657,118],[655,133],[654,149],[654,161]]
  },
  {
    id: 'banias',
    name: 'נחל חרמון (בניאס)',
    riddle: 'אני פורץ מהסלע למרגלות החרמון, ובשיפולי ההר אני יוצר מפלים שוצפים ומרשימים במיוחד. מי אני?',
    hint: 'אני מוכר גם בשם בניאס.',
    outlet: 'נהר הירדן',
    outletChoices: ['נהר הירדן', 'הים התיכון', 'מפרץ אילת'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 17,
    path: [[682,51],[679,59],[676,69],[673,79],[669,89],[665,99],[662,109],[659,120],[656,133],[654,148],[654,161]]
  },
  {
    id: 'snir',
    name: 'נחל שניר (חצבאני)',
    riddle: 'מבין שלושת מקורות הירדן, אני הארוך ביותר, והמסע שלי מתחיל בכלל מעבר לגבול – בארץ לבנון. מי אני?',
    hint: 'אני מוכר גם בשם חצבאני.',
    outlet: 'נהר הירדן',
    outletChoices: ['נהר הירדן', 'ים המלח', 'הים התיכון'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 17,
    path: [[650,35],[647,43],[645,53],[645,64],[646,76],[648,89],[650,102],[651,116],[652,132],[653,149],[654,161]]
  },
  {
    id: 'saar',
    name: 'נחל סער',
    riddle: 'אני חוצה את צפון הגולן בתוך קניון עמוק ומרהיב, ושני מפלים גבוהים לאורך מסלולי מושכים מטיילים רבים. מי אני?',
    hint: 'אני נמצא בצפון רמת הגולן, סמוך לדרך העולה לחרמון.',
    outlet: 'נחל חרמון ומשם לירדן',
    outletChoices: ['נחל חרמון ומשם לירדן', 'הים התיכון', 'ים המלח'],
    basin: 'אגן הירדן והכנרת',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 16,
    path: [[705,44],[700,51],[696,59],[692,68],[688,77],[683,87],[678,97],[672,108],[666,119],[660,132],[656,146],[654,161]]
  },
  {
    id: 'taninim',
    name: 'נחל תנינים',
    riddle: 'אני נחל איתן הזורם במישור חוף הכרמל, והשם שלי יזכיר לכם זוחל עתיק ומפחיד שחי באזור בעבר הרחוק. מי אני?',
    hint: 'שמי זהה לשמו של זוחל גדול.',
    outlet: 'הים התיכון ליד ג׳סר א־זרקא',
    outletChoices: ['הים התיכון ליד ג׳סר א־זרקא', 'הכנרת', 'ים המלח'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 28,
    path: [[419,411],[401,415],[388,412],[384,416],[376,418],[362,432],[351,435],[342,433],[335,421],[326,427],[323,426],[324,424]]
  },
  {
    id: 'sorek',
    name: 'נחל שורק',
    riddle: 'אני מתחיל את דרכי גבוה בהרי ירושלים, מתפתל באיטיות בין גבעות השפלה, ולבסוף נשפך אל הים הפתוח ליד חוף פלמחים. מי אני?',
    hint: 'אני נשפך לים ליד פלמחים.',
    outlet: 'הים התיכון ליד פלמחים',
    outletChoices: ['הים התיכון ליד פלמחים', 'נהר הירדן', 'ים המלח'],
    basin: 'אגן הים התיכון',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 30,
    path: [[236,746],[242,746],[252,759],[252,765],[255,769],[254,779],[256,783],[256,792],[265,804],[275,806],[281,812],[288,812],[295,815],[304,814],[313,816],[328,828],[328,832],[344,843],[350,843],[355,840],[365,842],[373,840],[383,841],[388,839],[391,843],[398,840],[400,846],[405,846],[410,842],[421,842],[427,836],[437,835],[441,826],[446,824],[451,818],[457,818],[462,812],[458,799],[454,795],[455,789],[452,783],[454,781]]
  },
  {
    id: 'paran',
    name: 'נחל פארן',
    riddle: 'אני נחל עצום וארוך בנגב, ובמהלך שיטפונות יכולים לזרום בי כמויות אדירות, סוחפות ומרשימות בלב המדבר. מי אני?',
    hint: 'אני אחד מנחלי האכזב הגדולים ביותר בנגב.',
    outlet: 'הערבה',
    outletChoices: ['הערבה', 'הים התיכון', 'הכנרת'],
    basin: 'אגן ים המלח והערבה',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 32,
    path: [[234,1714],[241,1709],[242,1703],[252,1694],[254,1689],[260,1683],[259,1676],[266,1673],[269,1664],[277,1658],[278,1652],[289,1645],[283,1641],[286,1637],[286,1632],[297,1625],[297,1619],[308,1611],[308,1608],[315,1598],[322,1597],[326,1599],[331,1594],[334,1594],[339,1598],[344,1606],[350,1602],[354,1602],[357,1605],[365,1604],[367,1606],[377,1608],[384,1597],[391,1590],[396,1588],[404,1589],[433,1572],[441,1564]]
  },
  {
    id: 'david',
    name: 'נחל דוד',
    riddle: 'אני נחל איתן הזורם בלב מדבר יהודה, ומייצר נווה מדבר ירוק, שוקק חיים ומים ממש ליד ים המלח. מי אני?',
    hint: 'אני נמצא בשמורת עין גדי.',
    outlet: 'ים המלח',
    outletChoices: ['ים המלח', 'הים התיכון', 'הכנרת'],
    basin: 'אגן ים המלח והערבה',
    basinChoices: ['אגן הים התיכון', 'אגן הירדן והכנרת', 'אגן ים המלח והערבה'],
    hitTolerance: 25,
    path: [[550,993],[545,994],[538,988],[530,988],[525,980],[517,978],[508,970],[502,969]]
  }
];

const REQUIRED_COUNT = 3;
const MAP_VIEWBOX = { width: 776, height: 2048 };
const STORAGE_KEY = 'amitRiversStationV8';

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

const HOT_WORDS = {
  'טופוגרפיה': 'צורת פני השטח, כגון הרים, עמקים, מישורים ושיפועים. הטופוגרפיה משפיעה על כיוון זרימת המים.',
  'אגן סגור': 'אזור ניקוז שאין ממנו יציאה טבעית של מים אל הים. המים מתנקזים אליו ונשארים בו או מתאדים.',
  'מערכת אקולוגית': 'כל היצורים החיים באזור מסוים והקשרים ביניהם לבין המים, הקרקע, האוויר והצמחייה.'
};

const state = {
  requiredSet: [],
  queue: [],
  currentRiver: null,
  completedIds: [],
  requiredCompleted: 0,
  bonusCompleted: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  attempts: 0,
  stage: 'name',
  zoom: 1,
  worksheetAnswers: {},
  selectedSlot: null
};

const els = {
  scoreValue: document.getElementById('scoreValue'),
  streakValue: document.getElementById('streakValue'),
  completedValue: document.getElementById('completedValue'),
  requiredValue: document.getElementById('requiredValue'),
  progressBar: document.getElementById('progressBar'),
  phaseChip: document.getElementById('phaseChip'),
  challengeNumber: document.getElementById('challengeNumber'),
  challengeType: document.getElementById('challengeType'),
  riddleText: document.getElementById('riddleText'),
  feedback: document.getElementById('feedback'),
  hintBtn: document.getElementById('hintBtn'),
  mapInstructions: document.getElementById('mapInstructions'),
  currentRiverName: document.getElementById('currentRiverName'),
  outletStep: document.getElementById('outletStep'),
  outletChoices: document.getElementById('outletChoices'),
  basinStep: document.getElementById('basinStep'),
  basinChoices: document.getElementById('basinChoices'),
  nameStage: document.getElementById('nameStage'),
  riverOptions: document.getElementById('riverOptions'),
  mapStage: document.getElementById('mapStage'),
  mapCanvas: document.getElementById('mapCanvas'),
  mapViewport: document.getElementById('mapViewport'),
  riverMap: document.getElementById('riverMap'),
  solvedRiverPaths: document.getElementById('solvedRiverPaths'),
  clickMarker: document.getElementById('clickMarker'),
  decisionStage: document.getElementById('decisionStage'),
  goWorksheetBtn: document.getElementById('goWorksheetBtn'),
  bonusBtn: document.getElementById('bonusBtn'),
  remainingBonusText: document.getElementById('remainingBonusText'),
  worksheetStage: document.getElementById('worksheetStage'),
  worksheetCounter: document.getElementById('worksheetCounter'),
  wordBank: document.getElementById('wordBank'),
  checkWorksheetBtn: document.getElementById('checkWorksheetBtn'),
  clearWorksheetBtn: document.getElementById('clearWorksheetBtn'),
  worksheetFeedback: document.getElementById('worksheetFeedback'),
  completeStage: document.getElementById('completeStage'),
  finalRivers: document.getElementById('finalRivers'),
  finalBonus: document.getElementById('finalBonus'),
  finalScore: document.getElementById('finalScore'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  resetMapBtn: document.getElementById('resetMapBtn'),
  instructionsBtn: document.getElementById('instructionsBtn'),
  closeInstructionsBtn: document.getElementById('closeInstructionsBtn'),
  instructionsModal: document.getElementById('instructionsModal'),
  resetBtn: document.getElementById('resetBtn'),
  wordPickerModal: document.getElementById('wordPickerModal'),
  closeWordPickerBtn: document.getElementById('closeWordPickerBtn'),
  pickerWords: document.getElementById('pickerWords'),
  hotWordModal: document.getElementById('hotWordModal'),
  closeHotWordBtn: document.getElementById('closeHotWordBtn'),
  hotWordTitle: document.getElementById('hotWordTitle'),
  hotWordExplanation: document.getElementById('hotWordExplanation'),
  amitLogo: document.getElementById('amitLogo'),
  logoFallback: document.getElementById('logoFallback')
};

function shuffle(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return array;
}

function initializeStation() {
  state.requiredSet = shuffle(RIVER_LIBRARY).slice(0, REQUIRED_COUNT).map((river) => river.id);
  state.queue = [...state.requiredSet];
  state.currentRiver = null;
  state.completedIds = [];
  state.requiredCompleted = 0;
  state.bonusCompleted = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.attempts = 0;
  state.stage = 'name';
  state.zoom = 1;
  state.worksheetAnswers = {};
  state.selectedSlot = null;

  localStorage.removeItem(STORAGE_KEY);
  loadNextRiver();
  updateHud();
}

function getRiver(id) {
  return RIVER_LIBRARY.find((river) => river.id === id);
}

function remainingRivers() {
  return RIVER_LIBRARY.filter((river) => !state.completedIds.includes(river.id));
}

function updateHud() {
  els.scoreValue.textContent = state.score;
  els.streakValue.textContent = state.streak;
  els.completedValue.textContent = `${state.completedIds.length}/10`;
  els.requiredValue.textContent = `${Math.min(state.requiredCompleted, REQUIRED_COUNT)}/${REQUIRED_COUNT}`;
  els.progressBar.style.width = `${Math.min(state.requiredCompleted / REQUIRED_COUNT, 1) * 100}%`;
}

function setFeedback(text, type) {
  els.feedback.hidden = false;
  els.feedback.className = `feedback ${type}`;
  els.feedback.textContent = text;
}

function clearFeedback() {
  els.feedback.hidden = true;
  els.feedback.className = 'feedback';
  els.feedback.textContent = '';
}

function hideAllMainStages() {
  els.nameStage.hidden = true;
  els.mapStage.hidden = true;
  els.decisionStage.hidden = true;
  els.worksheetStage.hidden = true;
  els.completeStage.hidden = true;
}

function resetChallengeSidebar() {
  els.mapInstructions.hidden = true;
  els.outletStep.hidden = true;
  els.basinStep.hidden = true;
  els.hintBtn.hidden = true;
  clearFeedback();
}

function loadNextRiver() {
  if (state.queue.length === 0) {
    showDecision();
    return;
  }

  const nextId = state.queue.shift();
  state.currentRiver = getRiver(nextId);
  state.stage = 'name';
  state.attempts = 0;

  hideAllMainStages();
  els.nameStage.hidden = false;
  resetChallengeSidebar();

  els.phaseChip.textContent = 'שלב א׳ – זיהוי הנחל';
  els.challengeNumber.textContent = state.completedIds.length + 1;
  els.challengeType.textContent =
    state.requiredCompleted < REQUIRED_COUNT
      ? 'מתוך 3 משימות החובה'
      : 'חידת בונוס';
  els.riddleText.textContent = state.currentRiver.riddle;

  renderRiverOptions();
  renderSolvedPaths();
  updateHud();
  saveState();
}

function renderRiverOptions() {
  els.riverOptions.innerHTML = '';

  shuffle(remainingRivers()).forEach((river) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'river-option';
    button.textContent = river.name;
    button.addEventListener('click', () => chooseRiverName(river, button));
    els.riverOptions.appendChild(button);
  });
}

function chooseRiverName(river, button) {
  if (state.stage !== 'name') return;

  state.attempts += 1;

  if (river.id === state.currentRiver.id) {
    const earned = state.attempts === 1 ? 100 : 50;
    state.score += earned;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);

    setFeedback(
      state.attempts === 1
        ? `מדויק! זיהיתם את ${river.name}. נוספו ${earned} נקודות.`
        : `הצלחתם לתקן. זהו ${river.name}. נוספו ${earned} נקודות.`,
      'success'
    );

    updateHud();
    window.setTimeout(showMapStage, 650);
    return;
  }

  state.streak = 0;
  updateHud();
  button.classList.add('wrong');
  window.setTimeout(() => button.classList.remove('wrong'), 400);

  setFeedback(
    'כמעט שם. קראו שוב את פרטי האזור, אופי הזרימה והמאפיין הייחודי של הנחל.',
    'try-again'
  );
  els.hintBtn.hidden = false;
}

function showMapStage() {
  state.stage = 'map';
  hideAllMainStages();
  els.mapStage.hidden = false;

  els.phaseChip.textContent = 'שלב ב׳ – סימון התוואי';
  els.mapInstructions.hidden = false;
  els.currentRiverName.textContent = state.currentRiver.name;
  els.outletStep.hidden = true;
  els.basinStep.hidden = true;
  els.hintBtn.hidden = true;
  els.clickMarker.hidden = true;
  clearFeedback();

  setMapZoom(1);
  els.mapViewport.scrollTop = 0;
  els.mapViewport.scrollLeft = 0;
}

function screenClickToViewBox(event) {
  const rect = els.riverMap.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * MAP_VIEWBOX.width,
    y: ((event.clientY - rect.top) / rect.height) * MAP_VIEWBOX.height,
    percentX: ((event.clientX - rect.left) / rect.width) * 100,
    percentY: ((event.clientY - rect.top) / rect.height) * 100
  };
}

function pointToSegmentDistance(point, start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];

  if (dx === 0 && dy === 0) {
    return Math.hypot(point.x - start[0], point.y - start[1]);
  }

  const t = Math.max(
    0,
    Math.min(
      1,
      ((point.x - start[0]) * dx + (point.y - start[1]) * dy) / (dx * dx + dy * dy)
    )
  );

  const projectedX = start[0] + t * dx;
  const projectedY = start[1] + t * dy;
  return Math.hypot(point.x - projectedX, point.y - projectedY);
}

function distanceToPolyline(point, path) {
  let minimum = Infinity;
  for (let index = 0; index < path.length - 1; index += 1) {
    minimum = Math.min(
      minimum,
      pointToSegmentDistance(point, path[index], path[index + 1])
    );
  }
  return minimum;
}

function positionClickMarker(click) {
  els.clickMarker.hidden = false;
  els.clickMarker.style.left = `${click.percentX}%`;
  els.clickMarker.style.top = `${click.percentY}%`;
}

function handleMapClick(event) {
  if (state.stage !== 'map') return;

  const click = screenClickToViewBox(event);
  positionClickMarker(click);

  const tolerance = state.currentRiver.hitTolerance || 34;
  const distance = distanceToPolyline(click, state.currentRiver.path);

  if (distance <= tolerance) {
    state.score += 50;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.stage = 'outlet';

    setFeedback(
      `הסימון נמצא לאורך תוואי ${state.currentRiver.name}. נוספו 50 נקודות.`,
      'success'
    );

    renderCurrentPath();
    showOutletStep();
    updateHud();
    return;
  }

  state.streak = 0;
  updateHud();
  setFeedback(
    'הסימון נקלט, אך הוא אינו קרוב מספיק לתוואי הנחל. הגדילו את המפה ונסו באזור אחר לאורך המסלול.',
    'try-again'
  );
  els.hintBtn.hidden = false;
}

function renderCurrentPath() {
  const existing = document.getElementById(`path-${state.currentRiver.id}`);
  if (existing) return;

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.id = `path-${state.currentRiver.id}`;
  polyline.classList.add('solved-river-line');
  polyline.setAttribute(
    'points',
    state.currentRiver.path.map((point) => point.join(',')).join(' ')
  );
  els.solvedRiverPaths.appendChild(polyline);
}

function renderSolvedPaths() {
  els.solvedRiverPaths.innerHTML = '';
  state.completedIds.forEach((id) => {
    const river = getRiver(id);
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.id = `path-${river.id}`;
    polyline.classList.add('solved-river-line');
    polyline.setAttribute('points', river.path.map((point) => point.join(',')).join(' '));
    els.solvedRiverPaths.appendChild(polyline);
  });
}

function showOutletStep() {
  els.phaseChip.textContent = 'שלב ג׳ – נקודת השפך או החיבור';
  els.outletStep.hidden = false;
  els.basinStep.hidden = true;
  els.outletChoices.innerHTML = '';

  shuffle(state.currentRiver.outletChoices).forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.textContent = choice;
    button.addEventListener('click', () => chooseOutlet(choice, button));
    els.outletChoices.appendChild(button);
  });
}

function chooseOutlet(choice, button) {
  if (state.stage !== 'outlet') return;

  if (choice === state.currentRiver.outlet) {
    state.stage = 'basin';
    state.score += 50;
    setFeedback(
      `נכון. ${state.currentRiver.name} מגיע אל ${state.currentRiver.outlet}.`,
      'success'
    );
    showBasinStep();
    updateHud();
    return;
  }

  button.classList.add('wrong');
  window.setTimeout(() => button.classList.remove('wrong'), 400);
  setFeedback(
    'כמעט. התבוננו במיקום הנחל ובכיוון שאליו הוא מתקדם.',
    'try-again'
  );
}

function showBasinStep() {
  els.phaseChip.textContent = 'שלב ד׳ – אגן הניקוז';
  els.basinStep.hidden = false;
  els.basinChoices.innerHTML = '';

  shuffle(state.currentRiver.basinChoices).forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.textContent = choice;
    button.addEventListener('click', () => chooseBasin(choice, button));
    els.basinChoices.appendChild(button);
  });
}

function chooseBasin(choice, button) {
  if (state.stage !== 'basin') return;

  if (choice !== state.currentRiver.basin) {
    button.classList.add('wrong');
    window.setTimeout(() => button.classList.remove('wrong'), 400);
    setFeedback(
      'היעד כבר ידוע. חשבו לאיזו מערכת ניקוז רחבה יותר הוא שייך.',
      'try-again'
    );
    return;
  }

  state.score += 50;
  state.completedIds.push(state.currentRiver.id);

  if (state.requiredCompleted < REQUIRED_COUNT) {
    state.requiredCompleted += 1;
  } else {
    state.bonusCompleted += 1;
  }

  setFeedback(
    `הנחל הושלם. ${state.currentRiver.name} שייך ל${state.currentRiver.basin}.`,
    'success'
  );

  updateHud();
  saveState();

  window.setTimeout(() => {
    if (state.requiredCompleted >= REQUIRED_COUNT) {
      showDecision();
    } else {
      loadNextRiver();
    }
  }, 900);
}

function showDecision() {
  state.stage = 'decision';
  hideAllMainStages();
  els.decisionStage.hidden = false;

  els.phaseChip.textContent = 'בחירת המשך';
  els.riddleText.textContent = 'שלושת נחלי החובה הושלמו.';
  resetChallengeSidebar();

  const remaining = remainingRivers().length;
  els.remainingBonusText.textContent =
    remaining > 0
      ? `נותרו ${remaining} נחלים זמינים לבונוס.`
      : 'השלמתם את כל עשרת הנחלים.';
  els.bonusBtn.hidden = remaining === 0;
}

function startBonusRiver() {
  const candidates = remainingRivers();
  if (candidates.length === 0) {
    showWorksheet();
    return;
  }

  const chosen = shuffle(candidates)[0];
  state.queue = [chosen.id];
  loadNextRiver();
}

function showWorksheet() {
  state.stage = 'worksheet';
  hideAllMainStages();
  els.worksheetStage.hidden = false;

  els.phaseChip.textContent = 'דף העבודה';
  els.riddleText.textContent = 'השלימו את כל 14 המושגים.';
  resetChallengeSidebar();

  renderWorksheet();
  window.scrollTo({
    top: els.worksheetStage.getBoundingClientRect().top + window.scrollY - 90,
    behavior: 'smooth'
  });
}

function usedWords() {
  return Object.values(state.worksheetAnswers);
}

function availableWords() {
  return Object.values(WORKSHEET_ANSWERS).filter((word) => !usedWords().includes(word));
}

function renderWorksheet() {
  renderSlots();
  renderWordBank();
  updateWorksheetCounter();
}

function renderSlots() {
  document.querySelectorAll('.answer-slot').forEach((slot) => {
    const number = Number(slot.dataset.slot);
    const answer = state.worksheetAnswers[number];

    slot.classList.remove('filled', 'correct', 'incorrect', 'drag-over');
    slot.textContent = answer || '';
    if (answer) slot.classList.add('filled');

    slot.onclick = () => openWordPicker(number);
    slot.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openWordPicker(number);
      }
    };

    slot.ondragover = (event) => {
      event.preventDefault();
      slot.classList.add('drag-over');
    };
    slot.ondragleave = () => slot.classList.remove('drag-over');
    slot.ondrop = (event) => {
      event.preventDefault();
      slot.classList.remove('drag-over');
      const word = event.dataTransfer.getData('text/plain');
      placeWord(number, word);
    };
  });
}

function renderWordBank() {
  els.wordBank.innerHTML = '';

  shuffle(availableWords()).forEach((word) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'word-chip';
    chip.textContent = word;
    chip.draggable = true;

    chip.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', word);
      event.dataTransfer.effectAllowed = 'move';
    });

    chip.addEventListener('click', () => {
      const firstEmpty = Object.keys(WORKSHEET_ANSWERS)
        .map(Number)
        .find((number) => !state.worksheetAnswers[number]);

      if (firstEmpty) placeWord(firstEmpty, word);
    });

    els.wordBank.appendChild(chip);
  });
}

function openWordPicker(slotNumber) {
  state.selectedSlot = slotNumber;
  els.pickerWords.innerHTML = '';

  const current = state.worksheetAnswers[slotNumber];
  const choices = current
    ? [current, ...availableWords()]
    : availableWords();

  if (current) {
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'picker-word';
    removeButton.textContent = 'החזרת המילה למחסן';
    removeButton.addEventListener('click', () => {
      delete state.worksheetAnswers[slotNumber];
      closeWordPicker();
      renderWorksheet();
    });
    els.pickerWords.appendChild(removeButton);
  }

  shuffle([...new Set(choices)]).forEach((word) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'picker-word';
    button.textContent = word;
    button.addEventListener('click', () => {
      placeWord(slotNumber, word);
      closeWordPicker();
    });
    els.pickerWords.appendChild(button);
  });

  els.wordPickerModal.hidden = false;
}

function closeWordPicker() {
  els.wordPickerModal.hidden = true;
  state.selectedSlot = null;
}

function placeWord(slotNumber, word) {
  if (!Object.values(WORKSHEET_ANSWERS).includes(word)) return;

  Object.keys(state.worksheetAnswers).forEach((key) => {
    if (state.worksheetAnswers[key] === word) {
      delete state.worksheetAnswers[key];
    }
  });

  state.worksheetAnswers[slotNumber] = word;
  els.worksheetFeedback.hidden = true;
  renderWorksheet();
  saveState();
}

function updateWorksheetCounter() {
  els.worksheetCounter.textContent =
    `${Object.keys(state.worksheetAnswers).length}/14`;
}

function clearWorksheet() {
  const confirmed = window.confirm('להחזיר את כל המילים למחסן?');
  if (!confirmed) return;

  state.worksheetAnswers = {};
  els.worksheetFeedback.hidden = true;
  renderWorksheet();
  saveState();
}

function checkWorksheet() {
  const filled = Object.keys(state.worksheetAnswers).length;

  document.querySelectorAll('.answer-slot').forEach((slot) => {
    const number = Number(slot.dataset.slot);
    const current = state.worksheetAnswers[number];

    slot.classList.remove('correct', 'incorrect');

    if (!current) return;

    slot.classList.add(
      current === WORKSHEET_ANSWERS[number] ? 'correct' : 'incorrect'
    );
  });

  if (filled < 14) {
    els.worksheetFeedback.hidden = false;
    els.worksheetFeedback.className = 'worksheet-feedback try-again';
    els.worksheetFeedback.textContent =
      `שובצו ${filled} מתוך 14 מילים. השלימו את כל המקומות ונסו שוב.`;
    return;
  }

  const wrong = Object.keys(WORKSHEET_ANSWERS).filter(
    (number) => state.worksheetAnswers[number] !== WORKSHEET_ANSWERS[number]
  );

  if (wrong.length > 0) {
    els.worksheetFeedback.hidden = false;
    els.worksheetFeedback.className = 'worksheet-feedback try-again';
    els.worksheetFeedback.textContent =
      `יש ${wrong.length} התאמות שצריך לבדוק. הן מסומנות בצהוב.`;
    return;
  }

  state.score += 200;
  updateHud();

  els.worksheetFeedback.hidden = false;
  els.worksheetFeedback.className = 'worksheet-feedback success';
  els.worksheetFeedback.textContent =
    'מדויק! דף העבודה הושלם. נוספו 200 נקודות.';

  window.setTimeout(showComplete, 850);
}

function showComplete() {
  state.stage = 'complete';
  hideAllMainStages();
  els.completeStage.hidden = false;

  els.phaseChip.textContent = 'התחנה הושלמה';
  els.riddleText.textContent = 'דף העבודה הושלם וכל התשובות נכונות.';
  resetChallengeSidebar();

  els.finalRivers.textContent = state.completedIds.length;
  els.finalBonus.textContent = state.bonusCompleted;
  els.finalScore.textContent = state.score;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completed: true,
      completedIds: [...state.completedIds],
      bonusCompleted: state.bonusCompleted,
      score: state.score,
      completedAt: new Date().toISOString()
    })
  );
}

function setMapZoom(nextZoom) {
  state.zoom = Math.max(1, Math.min(2.5, nextZoom));
  els.mapCanvas.style.width = `${state.zoom * 100}%`;
}

function saveState() {
  localStorage.setItem(
    `${STORAGE_KEY}-progress`,
    JSON.stringify({
      requiredSet: state.requiredSet,
      queue: state.queue,
      currentRiverId: state.currentRiver?.id || null,
      completedIds: state.completedIds,
      requiredCompleted: state.requiredCompleted,
      bonusCompleted: state.bonusCompleted,
      score: state.score,
      streak: state.streak,
      maxStreak: state.maxStreak,
      stage: state.stage,
      worksheetAnswers: state.worksheetAnswers
    })
  );
}

function resetStation() {
  const confirmed = window.confirm('לאפס את כל התחנה ולהגריל שלושה נחלים חדשים?');
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(`${STORAGE_KEY}-progress`);
  els.solvedRiverPaths.innerHTML = '';
  initializeStation();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openHotWord(term) {
  els.hotWordTitle.textContent = term;
  els.hotWordExplanation.textContent = HOT_WORDS[term];
  els.hotWordModal.hidden = false;
}

els.hintBtn.addEventListener('click', () => {
  setFeedback(`רמז: ${state.currentRiver.hint}`, 'try-again');
});

els.riverMap.addEventListener('click', handleMapClick);
els.zoomInBtn.addEventListener('click', () => setMapZoom(state.zoom + .25));
els.zoomOutBtn.addEventListener('click', () => setMapZoom(state.zoom - .25));
els.resetMapBtn.addEventListener('click', () => {
  setMapZoom(1);
  els.mapViewport.scrollTop = 0;
  els.mapViewport.scrollLeft = 0;
});

els.goWorksheetBtn.addEventListener('click', showWorksheet);
els.bonusBtn.addEventListener('click', startBonusRiver);
els.checkWorksheetBtn.addEventListener('click', checkWorksheet);
els.clearWorksheetBtn.addEventListener('click', clearWorksheet);

els.instructionsBtn.addEventListener('click', () => {
  els.instructionsModal.hidden = false;
});
els.closeInstructionsBtn.addEventListener('click', () => {
  els.instructionsModal.hidden = true;
});
els.closeWordPickerBtn.addEventListener('click', closeWordPicker);
els.closeHotWordBtn.addEventListener('click', () => {
  els.hotWordModal.hidden = true;
});

[els.instructionsModal, els.wordPickerModal, els.hotWordModal].forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.hidden = true;
  });
});

document.querySelectorAll('.hot-word').forEach((button) => {
  button.addEventListener('click', () => openHotWord(button.dataset.term));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    els.instructionsModal.hidden = true;
    els.wordPickerModal.hidden = true;
    els.hotWordModal.hidden = true;
  }
});

els.resetBtn.addEventListener('click', resetStation);

els.amitLogo.addEventListener('error', () => {
  els.amitLogo.hidden = true;
  els.logoFallback.hidden = false;
});

initializeStation();
