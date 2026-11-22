import React from 'react';
import ReactDOM from 'react-dom/client';
import ArtistApp from './ArtistApp';

// Fonts used by the PDF, self-hosted (font-display: swap).
import '@fontsource/aref-ruqaa/arabic-700.css';
import '@fontsource/reem-kufi/arabic-400.css';
import '@fontsource/reem-kufi/arabic-700.css';
import '@fontsource/reem-kufi/latin-400.css';
import '@fontsource/reem-kufi/latin-700.css';
import '@fontsource-variable/noto-naskh-arabic/index.css';
import '@fontsource/amiri/400.css';
import '@fontsource/amiri/700.css';
import './artist.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArtistApp />
  </React.StrictMode>
);
