import { Route, Routes, Link } from 'react-router-dom';
import Home from './views/old-portfolio/Home/Home';
import Skills from './views/old-portfolio/Skills/Skills';
import ParallaxIllustr from './views/old-portfolio/ParallaxIllustr/ParallaxIllustr';
import MyWorks from './views/old-portfolio/MyWorks/MyWorks';
import ContactMe from './views/old-portfolio/ContactMe/ContactMe';
import { useEffect } from 'react';
import FollowMe from './views/old-portfolio/ParallaxIllustr/Illustrations/FollowMe';
import Fallen from './views/old-portfolio/ParallaxIllustr/Illustrations/Fallen';
import MoonWatcher from './views/old-portfolio/ParallaxIllustr/Illustrations/MoonWatcher';
import TheGift from './views/old-portfolio/ParallaxIllustr/Illustrations/TheGift';
import TheGoldenForest from './views/old-portfolio/ParallaxIllustr/Illustrations/TheGoldenForest';
// import { useScript } from './hooks/useScriptLoader';
// import * as libraries from './assets/libraries/anything.js';
// import * as anime from './assets/libraries/anime.min.js';
// import './assets/library/scrollMonitor.js';
// import './assets/library/lodash.min.js';
// import './assets/library/common.js';

function App() {
  // useScript('./assets/libraries/anime.min.js');

  // I had to do this because anime js doesn't work inside React.
  // I can explore the related package in the future.
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/src/assets/libraries/old-title-animation.js';

    script.async = true;

    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Old portfolio routes  */}
        <Route path="portfolio" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="parallax-illustrations" element={<ParallaxIllustr />} />
        <Route path="my-works" element={<MyWorks />} />
        <Route path="contact-me" element={<ContactMe />} />
        {/* Old portfolio routes -- parallax  */}
        <Route path="parallax-illustrations/follow-me" element={<FollowMe />} />
        <Route path="parallax-illustrations/fallen" element={<Fallen />} />
        <Route
          path="parallax-illustrations/moon-watcher"
          element={<MoonWatcher />}
        />
        <Route path="parallax-illustrations/the-gift" element={<TheGift />} />
        <Route
          path="parallax-illustrations/golden-forest"
          element={<TheGoldenForest />}
        />
      </Routes>
    </div>
  );
}

export default App;
