import { Check, LockKeyhole, ArrowLeft } from 'lucide-react';

export default function StationCard({ station, onOpen }) {
  const Icon = station.icon;
  const isLocked = station.status === 'locked';
  const isComplete = station.status === 'complete';

  return (
    <article
      className={`station-card ${isLocked ? 'is-locked' : ''}`}
      style={{
        '--station-color': station.color,
        '--station-soft': station.softColor
      }}
    >
      <div className="station-card__topline" />
      <div className="station-card__header">
        <div className="station-card__number">{station.number}</div>
        <div className="station-card__icon">
          <Icon size={34} strokeWidth={2.2} />
        </div>
      </div>

      <div className="station-card__content">
        <h3>{station.title}</h3>
        <p>{station.subtitle}</p>
      </div>

      <button
        type="button"
        className="station-card__action"
        onClick={() => onOpen(station)}
        disabled={isLocked}
      >
        {isLocked ? (
          <>
            <LockKeyhole size={18} />
            התחנה נעולה
          </>
        ) : isComplete ? (
          <>
            <Check size={18} />
            כניסה חוזרת
          </>
        ) : (
          <>
            התחלת התחנה
            <ArrowLeft size={18} />
          </>
        )}
      </button>
    </article>
  );
}
