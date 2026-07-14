import {
  Waves,
  MapPinned,
  Landmark,
  ShieldCheck,
  Mountain
} from 'lucide-react';

export const stations = [
  {
    id: 'rivers',
    number: 1,
    title: 'נחלי ישראל',
    subtitle: 'נחקור את מערכת הנחלים, כיווני הזרימה וקו פרשת המים.',
    color: '#2badde',
    softColor: '#e8f7fd',
    icon: Waves,
    status: 'open'
  },
  {
    id: 'regional-capitals',
    number: 2,
    title: 'בירות חבלי הארץ',
    subtitle: 'נבין כיצד עיר הופכת למרכז אזורי ולמה מיקומה חשוב.',
    color: '#21739e',
    softColor: '#e8f2f7',
    icon: MapPinned,
    status: 'locked'
  },
  {
    id: 'heritage',
    number: 3,
    title: 'מרכזי מורשת',
    subtitle: 'נכיר מקומות שמספרים את סיפור הארץ והחברה.',
    color: '#b0bd21',
    softColor: '#f4f7dc',
    icon: Landmark,
    status: 'locked'
  },
  {
    id: 'border-settlements',
    number: 4,
    title: 'יישובי ספר בישראל',
    subtitle: 'נחקור את החיים, האתגרים והחוסן של יישובים סמוכי גבול.',
    color: '#6db580',
    softColor: '#edf7f0',
    icon: ShieldCheck,
    status: 'locked'
  },
  {
    id: 'mountains',
    number: 5,
    title: 'הרי ישראל',
    subtitle: 'נכיר את רכסי ההרים ואת השפעתם על האקלים וההתיישבות.',
    color: '#637840',
    softColor: '#f0f3e8',
    icon: Mountain,
    status: 'locked'
  }
];
