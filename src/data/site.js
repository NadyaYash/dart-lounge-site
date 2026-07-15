// Zentrale Daten – einmal hier pflegen, überall auf der Seite verwendet.
// Platzhalter (TODO) bitte mit echten Angaben ersetzen.
export const site = {
  name: 'Dart Lounge Mitte',
  tagline: 'Bei uns dreht sich alles um Darts.',
  intro:
    'Eingetragener Dart-Verein in Salzburg. Komm vorbei, wirf ein paar Pfeile, triff Leute – ganz gleich ob Anfänger oder Liga-Spieler.',

  // Kontakt
  phone: '0660 40 40 644',
  phoneHref: '+436604040644',
  email: 'info@dartloungemitte.at', // TODO: echte Adresse bestätigen
  // TODO: genaue Straße + Hausnummer eintragen
  address: 'Salzburg',
  addressFull: 'Adresse folgt · 5020 Salzburg',
  mapsQuery: 'Dart Lounge Mitte Salzburg',

  // Social
  facebook: 'https://www.facebook.com/DartLoungeMitte',

  // Öffnungszeiten
  hours: [
    { d: 'Montag – Samstag', t: '18:00 – 23:00' },
    { d: 'Sonntag', t: 'Ruhetag' },
  ],

  // Kennzahlen für die Statistik-Leiste
  stats: [
    { n: '5', label: 'Teams' },
    { n: '6', label: 'Steel- & Soft-Boards' }, // TODO: echte Anzahl
    { n: 'Mo–Sa', label: 'geöffnet ab 18 Uhr' },
    { n: 'Verein', label: 'eingetragen & offen für alle' },
  ],
};
