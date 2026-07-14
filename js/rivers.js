const RIVERS = [
  {
    id:'kishon',
    name:'נחל קישון',
    riddle:'אני נחל מרכזי בצפון ישראל. לאחר מסע ארוך אני נשפך אל הים התיכון ממזרח לעיר חיפה.',
    hint:'חפשו נחל שעובר בעמק יזרעאל ומגיע אל מפרץ חיפה.',
    basin:'הים התיכון',
    target:{x:52.5,y:13.2},
    mapText:'סמנו את אזור השפך במפרץ חיפה.'
  },
  {
    id:'yarkon',
    name:'נחל ירקון',
    riddle:'אני זורם בלב אזור השרון וגוש דן, עובר סמוך לערים הגדולות ונשפך לים ליד תל אביב.',
    hint:'זהו הנחל המזוהה ביותר עם פארק גדול בתל אביב.',
    basin:'הים התיכון',
    target:{x:47.2,y:25.4},
    mapText:'סמנו את נקודת השפך באזור תל אביב.'
  },
  {
    id:'dan',
    name:'נחל דן',
    riddle:'אני הקצר והשופע ביותר מבין מקורות הירדן. המעיינות שלי יוצאים למרגלות תל דן.',
    hint:'שמי זהה לשמו של הקיבוץ והשמורה בצפון עמק החולה.',
    basin:'הירדן והכנרת',
    target:{x:84.2,y:2.7},
    mapText:'סמנו את אזור מקורות הירדן בצפון עמק החולה.'
  },
  {
    id:'banias',
    name:'נחל חרמון (בניאס)',
    riddle:'אני פורץ ממעיין למרגלות החרמון, עובר בקניון ובמפל מרשים ומתחבר למקורות הירדן.',
    hint:'אני מוכר גם בשם בניאס.',
    basin:'הירדן והכנרת',
    target:{x:88.1,y:4.0},
    mapText:'סמנו את אזור המעיינות למרגלות החרמון.'
  },
  {
    id:'snir',
    name:'נחל שניר (חצבאני)',
    riddle:'אני הארוך שבשלושת מקורות הירדן. ראשיתי בלבנון ואני זורם דרומה אל עמק החולה.',
    hint:'אני מוכר גם בשם חצבאני.',
    basin:'הירדן והכנרת',
    target:{x:79.4,y:4.6},
    mapText:'סמנו את אזור כניסת הנחל מצפון אל עמק החולה.'
  },
  {
    id:'saar',
    name:'נחל סער',
    riddle:'אני חוצה את צפון רמת הגולן בקניון קצר ומרהיב, ובחורף מפל מפורסם שלי שוצף בעוצמה.',
    hint:'המפל שלי נמצא סמוך לכביש העולה לחרמון.',
    basin:'הירדן והכנרת',
    target:{x:85.0,y:7.2},
    mapText:'סמנו את אזור צפון רמת הגולן סמוך לחרמון.'
  },
  {
    id:'taninim',
    name:'נחל תנינים',
    riddle:'אני זורם באזור חוף הכרמל, ושמי מזכיר בעל חיים גדול. סמוך לשפך שלי נמצאים שרידי מפעל מים עתיק.',
    hint:'שמי זהה לשמו של זוחל גדול.',
    basin:'הים התיכון',
    target:{x:50.1,y:18.4},
    mapText:'סמנו את אזור השפך בחוף הכרמל.'
  },
  {
    id:'sorek',
    name:'נחל שורק',
    riddle:'אני מתחיל באזור הרי ירושלים, מתפתל בין גבעות השפלה ולבסוף נשפך לים בחוף פלמחים.',
    hint:'השפך שלי נמצא סמוך לפלמחים, מדרום לראשון לציון.',
    basin:'הים התיכון',
    target:{x:41.0,y:40.3},
    mapText:'סמנו את אזור השפך ליד פלמחים.'
  },
  {
    id:'paran',
    name:'נחל פארן',
    riddle:'אני מנקז שטח עצום בנגב ובסיני. בעת שיטפונות אני יוצר זרימה עזה בדרכי אל הערבה.',
    hint:'אני אחד מנחלי האכזב הגדולים ביותר בישראל.',
    basin:'הערבה וים המלח',
    target:{x:60.0,y:64.0},
    mapText:'סמנו את האזור שבו הנחל מגיע אל הערבה.'
  },
  {
    id:'david',
    name:'נחל דוד',
    riddle:'אני נחל איתן במדבר יהודה. סביבי נווה מדבר ירוק, מפלים ויעלים, ואני נשפך אל ים המלח.',
    hint:'אני נמצא בשמורת עין גדי.',
    basin:'הערבה וים המלח',
    target:{x:61.0,y:48.0},
    mapText:'סמנו את אזור עין גדי בחוף המערבי של ים המלח.'
  }
];

const BASINS = ['הים התיכון','הירדן והכנרת','הערבה וים המלח'];

const state = {
  index:0,
  score:0,
  streak:0,
  maxStreak:0,
  attempts:0,
  selected:null,
  stage:'name',
  solved:[],
  markers:[],
  zoom:1
};

const els = {
  introScreen:document.getElementById('introScreen'),
  gameScreen:document.getElementById('gameScreen'),
  startStationBtn:document.getElementById('startStationBtn'),
  scoreValue:document.getElementById('scoreValue'),
  streakValue:document.getElementById('streakValue'),
  progressValue:document.getElementById('progressValue'),
  progressBar:document.getElementById('progressBar'),
  stepLabel:document.getElementById('stepLabel'),
  questionNumber:document.getElementById('questionNumber'),
  riddleText:document.getElementById('riddleText'),
  feedback:document.getElementById('feedback'),
  hintBtn:document.getElementById('hintBtn'),
  namesStage:document.getElementById('namesStage'),
  riverOptions:document.getElementById('riverOptions'),
  mapStage:document.getElementById('mapStage'),
  mapTaskCopy:document.getElementById('mapTaskCopy'),
  mapInstruction:document.getElementById('mapInstruction'),
  selectedRiver:document.getElementById('selectedRiver'),
  basinTask:document.getElementById('basinTask'),
  basinOptions:document.getElementById('basinOptions'),
  mapCanvas:document.getElementById('mapCanvas'),
  riverMap:document.getElementById('riverMap'),
  mapMarkers:document.getElementById('mapMarkers'),
  mapViewport:document.getElementById('mapViewport'),
  completeStage:document.getElementById('completeStage'),
  finalScore:document.getElementById('finalScore'),
  finalStreak:document.getElementById('finalStreak'),
  zoomInBtn:document.getElementById('zoomInBtn'),
  zoomOutBtn:document.getElementById('zoomOutBtn'),
  resetMapBtn:document.getElementById('resetMapBtn'),
  resetBtn:document.getElementById('resetBtn'),
  instructionsBtn:document.getElementById('instructionsBtn'),
  instructionsDialog:document.getElementById('instructionsDialog'),
  closeInstructionsBtn:document.getElementById('closeInstructionsBtn'),
  amitLogo:document.getElementById('amitLogo'),
  logoFallback:document.getElementById('logoFallback')
};

function currentRiver() {
  return RIVERS[state.index];
}

function updateHud() {
  els.scoreValue.textContent = state.score;
  els.streakValue.textContent = state.streak;
  els.progressValue.textContent = `${state.solved.length}/10`;
  els.progressBar.style.width = `${state.solved.length * 10}%`;
}

function showFeedback(text,type) {
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

  RIVERS.forEach(river => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'river-option';
    button.textContent = river.name;

    if (state.solved.includes(river.id)) {
      button.classList.add('solved');
      button.disabled = true;
      button.title = 'הנחל כבר הושלם';
    }

    button.addEventListener('click',() => chooseRiver(river,button));
    els.riverOptions.appendChild(button);
  });
}

function loadQuestion() {
  if (state.index >= RIVERS.length) {
    finishStation();
    return;
  }

  state.attempts = 0;
  state.selected = null;
  state.stage = 'name';
  state.zoom = 1;
  els.mapCanvas.style.width = '100%';

  const river = currentRiver();
  els.questionNumber.textContent = state.index + 1;
  els.riddleText.textContent = river.riddle;
  els.stepLabel.textContent = 'שלב א׳ – זיהוי הנחל';

  els.namesStage.hidden = false;
  els.mapStage.hidden = true;
  els.mapTaskCopy.hidden = true;
  els.basinTask.hidden = true;
  els.hintBtn.hidden = true;
  clearFeedback();
  renderRiverOptions();
  renderMarkers();
}

function chooseRiver(river,button) {
  if (state.stage !== 'name') return;

  state.attempts += 1;
  const correct = currentRiver();

  if (river.id === correct.id) {
    state.selected = river;
    state.stage = 'map';

    const earned = state.attempts === 1 ? 100 : 50;
    state.score += earned;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak,state.streak);

    showFeedback(
      state.attempts === 1
        ? `מדויק! זיהיתם את ${river.name}. נוספו ${earned} נקודות.`
        : `מצוין, התיקון הצליח! זהו ${river.name}. נוספו ${earned} נקודות.`,
      'success'
    );

    updateHud();
    setTimeout(showMapStage,700);
  } else {
    state.streak = 0;
    updateHud();
    button.classList.add('wrong');
    setTimeout(() => button.classList.remove('wrong'),420);
    showFeedback('כמעט שם. בדקו שוב את האזור, את כיוון הזרימה ואת הרמזים שבתיאור.','try-again');
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
  clearFeedback();
  els.hintBtn.hidden = true;
  els.mapViewport.scrollTop = 0;
}

function distance(a,b) {
  return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2));
}

function handleMapClick(event) {
  if (state.stage !== 'map') return;

  const rect = els.riverMap.getBoundingClientRect();
  const click = {
    x:((event.clientX-rect.left)/rect.width)*100,
    y:((event.clientY-rect.top)/rect.height)*100
  };

  const river = currentRiver();
  const tolerance = river.id === 'paran' ? 8.5 : 6.2;

  if (distance(click,river.target) <= tolerance) {
    state.markers.push({
      id:river.id,
      number:state.index+1,
      x:river.target.x,
      y:river.target.y
    });
    renderMarkers();
    state.stage = 'basin';
    showFeedback(`המיקום מתאים. ${river.name} סומן במפה. עכשיו נשאר לזהות את יעד הניקוז.`,'success');
    showBasinStage();
  } else {
    showFeedback('קרוב, אבל עדיין לא באזור היעד. התבוננו בכיוון הזרימה ובמקום המתואר בחידה.','try-again');
    els.hintBtn.hidden = false;
  }
}

function showBasinStage() {
  const river = currentRiver();
  els.stepLabel.textContent = 'שלב ג׳ – יעד הניקוז';
  els.basinTask.hidden = false;
  els.basinOptions.innerHTML = '';

  BASINS.forEach(basin => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'basin-option';
    button.textContent = basin;
    button.addEventListener('click',() => chooseBasin(basin,button));
    els.basinOptions.appendChild(button);
  });

  els.mapInstruction.textContent = `${river.name} סומן. בחרו לאן מתנקזים מימיו.`;
}

function chooseBasin(basin,button) {
  if (state.stage !== 'basin') return;
  const river = currentRiver();

  if (basin === river.basin) {
    state.score += 50;
    state.solved.push(river.id);
    updateHud();
    showFeedback(`נכון. ${river.name} שייך לאגן הניקוז של ${river.basin}.`,'success');
    Array.from(els.basinOptions.children).forEach(btn => btn.disabled = true);

    setTimeout(() => {
      state.index += 1;
      loadQuestion();
    },1100);
  } else {
    button.classList.add('wrong');
    setTimeout(() => button.classList.remove('wrong'),420);
    showFeedback('כיוון טוב, אבל בדקו שוב לאיזה גוף מים מגיע הנחל בסוף מסלולו.','try-again');
  }
}

function renderMarkers() {
  els.mapMarkers.innerHTML = '';
  state.markers.forEach(marker => {
    const el = document.createElement('span');
    el.className = 'map-marker';
    el.textContent = marker.number;
    el.style.right = `${100-marker.x}%`;
    el.style.top = `${marker.y}%`;
    els.mapMarkers.appendChild(el);
  });
}

function finishStation() {
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

  localStorage.setItem('amitIsraelJourneyStation1',JSON.stringify({
    completed:true,
    score:state.score,
    maxStreak:state.maxStreak,
    completedAt:new Date().toISOString()
  }));
}

function resetStation() {
  const confirmed = window.confirm('לאפס את כל ההתקדמות בתחנה ולהתחיל מחדש?');
  if (!confirmed) return;

  Object.assign(state,{
    index:0,
    score:0,
    streak:0,
    maxStreak:0,
    attempts:0,
    selected:null,
    stage:'name',
    solved:[],
    markers:[],
    zoom:1
  });

  localStorage.removeItem('amitIsraelJourneyStation1');
  els.completeStage.hidden = true;
  els.introScreen.hidden = false;
  els.gameScreen.hidden = true;
  updateHud();
  window.scrollTo({top:0,behavior:'smooth'});
}

function setZoom(next) {
  state.zoom = Math.min(2.2,Math.max(1,next));
  els.mapCanvas.style.width = `${state.zoom*100}%`;
}

els.startStationBtn.addEventListener('click',() => {
  els.introScreen.hidden = true;
  els.gameScreen.hidden = false;
  loadQuestion();
  window.scrollTo({top:0,behavior:'smooth'});
});

els.hintBtn.addEventListener('click',() => {
  showFeedback(`רמז: ${currentRiver().hint}`,'try-again');
});

els.riverMap.addEventListener('click',handleMapClick);
els.zoomInBtn.addEventListener('click',() => setZoom(state.zoom+.25));
els.zoomOutBtn.addEventListener('click',() => setZoom(state.zoom-.25));
els.resetMapBtn.addEventListener('click',() => {
  setZoom(1);
  els.mapViewport.scrollTop = 0;
  els.mapViewport.scrollLeft = 0;
});

els.resetBtn.addEventListener('click',resetStation);
els.instructionsBtn.addEventListener('click',() => els.instructionsDialog.hidden = false);
els.closeInstructionsBtn.addEventListener('click',() => els.instructionsDialog.hidden = true);
els.instructionsDialog.addEventListener('click',event => {
  if (event.target === els.instructionsDialog) els.instructionsDialog.hidden = true;
});

document.addEventListener('keydown',event => {
  if (event.key === 'Escape') els.instructionsDialog.hidden = true;
});

els.amitLogo.addEventListener('error',() => {
  els.amitLogo.hidden = true;
  els.logoFallback.hidden = false;
});

updateHud();
