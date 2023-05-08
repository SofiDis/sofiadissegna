import { Link } from 'react-router-dom';
import Layout from '@/components/old-portfolio/Layout/Layout';

function ParallaxIllustr() {
  return (
    <Layout className="dark">
      <div className="parallaxlist-page">
        <h1 className="ml14 standard-title inner">
          <span className="text-wrapper">
            <span className="letters">Parallax Illustrations</span>
            <span className="line"></span>
          </span>
        </h1>
        <div className="wrap-simple parallaxlist-items">
          <p className="homeTxt wrap-lateral">
            Coding and painting are two completely different skills, but I
            always considered writing code as art. I love the idea of creating a
            different kind of web site, with more interaction between the code
            and the graphic contents. I started this series of projects when I
            discovered a really nice technique to create a parallax effect
            between layers, and after that, I tried to experiment and to
            applicate this technique to my personal illustration style.
            <br />
            <br />
          </p>
          <div>
            <div className="flexImg">
              <Link
                className="parallaxPr"
                to="/parallax-illustrations/follow-me"
                title="Follow me Illustration"
              >
                <img
                  src="public/images/works_pr/follow_me_pr.png"
                  title="Follow me digital illustrarion "
                />
                <span className="homeTxt">Follow me</span>
              </Link>
              <Link
                className="parallaxPr"
                to="/parallax-illustrations/moon-watcher"
                title="Moon Watcher Illustration"
              >
                <img
                  src="public/images/works_pr/moon_watcher_pr.png"
                  title="Moon Watcher digital illustrarion "
                />
                <span className="homeTxt">Moon Watcher</span>
              </Link>
              <Link
                className="parallaxPr"
                to="/parallax-illustrations/golden-forest"
                title="Golden Forest Illustration"
              >
                <img
                  src="public/images/works_pr/golden_forest_pr.png"
                  title="Golden Forest digital illustrarion "
                />
                <span className="homeTxt">Moon Watcher</span>
              </Link>
              <Link
                className="parallaxPr"
                to="/parallax-illustrations/fallen"
                title="Fallen Illustration"
              >
                <img
                  src="public/images/works_pr/sunset_sea_pr.png"
                  title="Fallen digital illustrarion "
                />
                <span className="homeTxt">Moon Watcher</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ParallaxIllustr;
