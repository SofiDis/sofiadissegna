import Layout from '@/components/old-portfolio/Layout/Layout';
import { useEffect } from 'react';

function TheGift() {
  useEffect(() => {
    const scriptTween = document.createElement('script');
    scriptTween.src = '/src/assets/libraries/tween.js';
    scriptTween.async = true;
    scriptTween.crossOrigin = 'anonymous';

    const scriptIllustration = document.createElement('script');
    scriptIllustration.src = '/src/assets/libraries/parallax/moonwatcher.js';
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
    <Layout>
      <div className="parallax-name">
        <div className="parallax_illustration the-gift">
          <h1 className="innerTitle">Code and Art - The Gift</h1>
          <div className="image-container">
            <canvas
              className="canvas"
              width="900"
              height="1200"
              id="canvas"
            ></canvas>
          </div>
          <a href="javascript:history.back()" className="back-arrow">
            Back to the works
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default TheGift;
