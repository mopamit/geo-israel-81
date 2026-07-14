import { useMemo, useState } from 'react';
import { Compass, RotateCcw, X } from 'lucide-react';
import AmitLogo from './components/AmitLogo';
import HeroIllustration from './components/HeroIllustration';
import StationCard from './components/StationCard';
import { stations as stationData } from './data/stations';

export default function App() {
  const [started, setStarted] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  const progress = useMemo(() => {
    const completed = stationData.filter((station) => station.status === 'complete').length;
    return Math.round((completed / stationData.length) * 100);
  }, []);

  function scrollToStations() {
    setStarted(true);
    requestAnimationFrame(() => {
      document.querySelector('#stations')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  function resetGame() {
    setStarted(false);
    setSelectedStation(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <AmitLogo />
          <div className="brand-copy">
            <span>מסע בארץ ישראל</span>
            <small>משחק למידה בגאוגרפיה</small>
          </div>
        </div>

        <button className="topbar-action" type="button" onClick={resetGame}>
          <RotateCcw size={18} />
          איפוס
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero__content">
            <div className="eyebrow">לומדים • חוקרים • מתקדמים</div>
            <h1>מסע בארץ ישראל</h1>
            <p>
              יוצאים למסע דיגיטלי בין נחלים, ערים, אתרי מורשת,
              יישובי ספר ורכסי הרים.
            </p>

            <button className="primary-action" type="button" onClick={scrollToStations}>
              <span className="primary-action__icon">
                <Compass size={26} />
              </span>
              מתחילים במסע
            </button>

            <div className="progress-summary" aria-label={`התקדמות ${progress}%`}>
              <div className="progress-summary__labels">
                <span>התקדמות במסע</span>
                <strong>{progress}%</strong>
              </div>
              <div className="progress-track">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <HeroIllustration />
        </section>

        <section className="stations-section" id="stations">
          <div className="section-heading">
            <span>מפת המסע</span>
            <h2>תחנות הלמידה</h2>
            <p>כל תחנה תיפתח לאחר השלמת התחנה הקודמת.</p>
          </div>

          <div className="stations-grid">
            {stationData.map((station) => (
              <StationCard
                key={station.id}
                station={station}
                onOpen={setSelectedStation}
              />
            ))}
          </div>
        </section>
      </main>

      {selectedStation && (
        <div className="modal-backdrop" role="presentation">
          <section
            className="station-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="station-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="סגירת החלון"
              onClick={() => setSelectedStation(null)}
            >
              <X size={22} />
            </button>

            <div
              className="station-modal__icon"
              style={{ backgroundColor: selectedStation.color }}
            >
              {(() => {
                const Icon = selectedStation.icon;
                return <Icon size={42} />;
              })()}
            </div>

            <h2 id="station-modal-title">{selectedStation.title}</h2>
            <p>{selectedStation.subtitle}</p>
            <div className="placeholder-note">
              מעטפת התחנה מוכנה. את התוכן האינטראקטיבי נבנה בשלב הבא.
            </div>

            <button
              type="button"
              className="secondary-action"
              onClick={() => setSelectedStation(null)}
            >
              חזרה למסלול
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
