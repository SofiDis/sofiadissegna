import Layout from '@/components/old-portfolio/Layout/Layout';
import { useEffect } from 'react';

function Home() {
  // I had to do this because anime js doesn't work inside React.
  // I can explore the related package in the future.
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/src/assets/libraries/old-home-animation.js';

    script.async = true;

    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="body-wrap home-page">
        <section id="home-intro" className="home-intro sec-full">
          <div className="animeline">
            <svg
              viewBox="0 0 993 824"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
              }}
            >
              <g clipPath="url(#_clip1)">
                <path
                  d="M986.091,3.598c0.515,0.603 0.274,-1.648 0.8,-2.242c0.506,-0.57 2.273,-1.721 2.062,-0.988c-3.586,12.45 -8.193,23.793 -15.37,34.488c-19.605,29.216 -51.868,41.628 -85.367,46.977c-25.388,4.054 -53.866,0.131 -78.599,-4.097c-12.968,-2.218 -25.739,-5.469 -38.577,-8.345c-17.56,-3.935 -35.003,-8.395 -52.615,-12.089c-18.299,-3.838 -34.802,-6.065 -53.513,-6.524c-6.891,-0.17 -13.801,0.18 -20.665,0.824c-49.042,4.602 -111.351,31.872 -118.813,87.415c-7.942,59.113 58.421,92.624 107.693,96.883c11.684,1.01 23.824,0.744 35.386,-1.384c20.59,-3.789 41.96,-13.586 54.056,-31.415c17.406,-25.657 3.329,-62.198 -27.418,-69.661c-23.636,-5.736 -43.838,1.475 -60.091,19.347c-6.182,6.798 -11.063,16.513 -11.263,25.851c-0.12,5.633 4.461,3.784 6.763,0.772c4.015,-5.252 8.001,-10.529 11.814,-15.929c7.118,-10.083 14.031,-25.153 26.849,-29.966c11.333,-4.255 27.873,0.163 38.019,3.788c22.672,8.103 54.338,28.323 51.33,56.654c-2.51,23.645 -32.513,33.195 -51.682,36.791c-24.934,4.678 -51.465,9.549 -77.085,7.008c-28.371,-2.814 -63.981,-18.892 -91.328,-2.454c-4.023,2.418 -7.611,5.515 -11.161,8.586c-11.04,9.549 5.906,17.555 14.124,19.335c10.357,2.243 36.279,6.089 46.419,9.411c5.75,1.883 12.927,7.236 9.535,14.176c-21.232,43.437 -71.976,71.086 -120.008,65.698c-21.278,-2.387 -46.274,-17.177 -67.279,-5.986c-19.513,10.395 -2.45,33.059 -1.388,48.08c1.052,14.878 -12.841,25.133 -24.604,31.01c-22.636,11.31 -46.968,17.314 -71.743,22.138c-60.84,11.845 -123.632,14.827 -185.375,8.999c-23.296,-2.2 -46.649,-9.375 -70.249,-8.998c-11.751,0.188 -28.956,0.595 -38.371,9.874c-9.882,9.739 -8.603,26.557 -8.354,38.788c0.417,20.399 4.569,40.626 3.974,61.072c-1.266,43.48 -13.659,85.91 -13.06,129.468c0.267,19.357 6.052,113.956 6.052,133.324"
                  style={{
                    fill: 'none',
                    stroke: '#a3a3a3',
                    strokeWidth: '3.13px',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 1.5,
                  }}
                />
              </g>
            </svg>
          </div>
          <h1 className="ml14 standard-title">
            <span className="text-wrapper">
              <span className="letters">Code Design Art</span>
              <span className="line"></span>
            </span>
          </h1>
        </section>
        {/* Animated sections */}
        <div id="animateSection">
          <div className="outerHeight">
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
            <div className="el"></div>
          </div>
          <section className="home-parallax2 srow">
            <div className="scol-s6"></div>
            <div className="scol-s6">
              <div>
                <h2>Parallax Illustrations</h2>
                <a
                  href="../parallax-illustrations.html"
                  className="btn-color"
                  title="Parallax Illustrations"
                >
                  See all
                </a>
              </div>
            </div>
          </section>

          <section className="home-description  dark">
            <h2>About Me</h2>
            <p className="homeTxt">
              Hello! I am <strong>Sofia Dissegna</strong> and this is a personal
              Web site used as a Portfolio, in order to share with you some
              works, stuff, and projects I am working on. My life is focused
              basically on two big and very different passions; the one for
              drawing, Art, and Design, and the second for programming.
              <br />
              <br />I worked as{' '}
              <strong>Front End Developer, UX Designer</strong>, and enjoyed
              projects as a <strong>Concept Artist, and illustrator</strong>. I
              really like the idea to merge these two passions together in order
              to share new types of content on the web, and to bring these two
              seemingly incompatible things closer. For more projects, works,
              and information:
            </p>
          </section>

          <section className="home-contacts">
            <a
              href="https://it.linkedin.com/in/sofiadissegna"
              className="btn-color"
              target="_blank"
              title="Visit my Linkedin profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.artstation.com/fuss"
              className="btn-color"
              title="Visit my Artstation profile"
              target="_blank"
            >
              <i className="fab fa-artstation"></i>
            </a>
            <a
              href="mailto:sofia.dissegna93@gmail.com"
              title="write me an email"
              target="_blank"
              className="btn-color"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
