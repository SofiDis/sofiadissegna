import Layout from '@/components/old-portfolio/Layout/Layout';
import { useEffect } from 'react';

function Fallen() {
  // I had to do this because anime js doesn't work inside React.
  // I can explore the related package in the future.
  useEffect(() => {
    const scriptTween = document.createElement('script');
    scriptTween.src = '/src/assets/libraries/tween.js';
    scriptTween.async = true;
    scriptTween.crossOrigin = 'anonymous';

    const scriptIllustration = document.createElement('script');
    scriptIllustration.src = '/src/assets/libraries/parallax/fall.js';
    scriptIllustration.async = true;
    scriptIllustration.crossOrigin = 'anonymous';

    document.body.appendChild(scriptTween);
    document.body.appendChild(scriptIllustration);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(scriptTween);
      document.body.removeChild(scriptIllustration);
    };
  }, []);

  return (
    <Layout className="dark">
      <div className="parallax-page">
        <div className="parallax_illustration sunset-sea">
          <h1 className="innerTitle">Code and Art - Fallen</h1>
          <div className="image-container">
            <canvas className="canvas" width="1417" height="1780" id="canvas">
              {' '}
            </canvas>
          </div>
        </div>
        <a href="javascript:history.back()" className="back-arrow">
          Back to the works
        </a>
      </div>
    </Layout>
  );
}

export default Fallen;
