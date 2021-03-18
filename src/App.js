import React from 'react';
import {Translator, Translate} from 'react-auto-translate';


export default App() {
  // example procider
  const CacheProvider = {
  get: (language, key) =>
    ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
      language
    ],
  set: (language, key, value) => {
    const existing = JSON.parse(localStorage.getItem('translations')) || {
      [key]: {},
    };
    existing[key] = {...existing[key], [language]: value};
    localStorage.setItem('translations', JSON.stringify(existing));
  },
  };

  return (
    <Translator
        cacheProvider={CacheProvider}
        from='en'
        to='es'
        googleApiKey=''
      >
      
      <h1><Translate>Welcome!</Translate></h1>
    </Translator>
  );
}
