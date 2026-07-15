// Termine & Turniere. Später halbautomatisch aus Facebook befüllbar.
// date: ISO (YYYY-MM-DD) für Sortierung/Anzeige. time optional.
export const events = [
  {
    date: '2025-10-31',
    time: '19:00',
    title: 'Halloween-Turnier',
    desc: 'Offenes Turnier für alle – Kostüm erwünscht, Anmeldung vor Ort.',
    tag: 'Turnier',
  },
  {
    date: '2025-08-22',
    time: '19:30',
    title: 'Geburtstags-Turnier',
    desc: 'Wir feiern – und ihr spielt mit. Jeder kann teilnehmen.',
    tag: 'Turnier',
  },
  {
    date: '2025-08-16',
    time: '19:00',
    title: 'Geburtstags-Turnier',
    desc: 'Gemütlicher Turnierabend in der Lounge.',
    tag: 'Turnier',
  },
  {
    date: '2025-07-26',
    time: '',
    title: 'Vereinsabend',
    desc: 'Offener Spielabend für Mitglieder und Gäste.',
    tag: 'Abend',
  },
];

// Nur kommende Termine (nach heute) für die Startseite.
export function upcoming(events, todayISO) {
  return [...events]
    .filter((e) => e.date >= todayISO)
    .sort((a, b) => a.date.localeCompare(b.date));
}
