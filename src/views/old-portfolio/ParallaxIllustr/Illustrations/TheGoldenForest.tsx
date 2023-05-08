import Layout from '@/components/old-portfolio/Layout/Layout';
import { useEffect } from 'react';

function TheGoldenForest() {
  useEffect(() => {
    const scriptTween = document.createElement('script');
    scriptTween.src = '/src/assets/libraries/tween.js';
    scriptTween.async = true;
    scriptTween.crossOrigin = 'anonymous';

    const scriptIllustration = document.createElement('script');
    scriptIllustration.src = '/src/assets/libraries/parallax/goldenforest.js';
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
      <div className="parallax-page">
        <div className="parallax_illustration golden-forest">
          <h1 className="innerTitle">Code and Art - The Golden Forest</h1>
          <div className="image-container">
            <canvas
              className="canvas"
              width="1200"
              height="849"
              id="canvas"
            ></canvas>
          </div>
          <div className="testimage">
            <div></div>
          </div>
          <a href="javascript:history.back()" className="back-arrow">
            Back to the works
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default TheGoldenForest;
