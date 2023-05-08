import Layout from '@/components/old-portfolio/Layout/Layout';
import './skills.scss';

function Skills() {
  return (
    <Layout>
      <div className="skills-page">
        <h1 className="ml14 standard-title inner">
          <span className="text-wrapper">
            <span className="letters">My Skills</span>
            <span className="line"></span>
          </span>
        </h1>
        <div className="two-col">
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fas fa-code"></i>
              <span className="skill-title">
                <strong>PROGRAMMING LANGUAGE</strong>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">HTML5</span>
              <span className="percentage">
                <span style={{ width: '90%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">CSS3</span>
              <span className="percentage">
                <span style={{ width: '80%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">SASS</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">LESS</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Javascript</span>
              <span className="percentage">
                <span style={{ width: '50%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">MYSQL</span>
              <span className="percentage">
                <span style={{ width: '30%' }}></span>
              </span>
              <p className="skill-desc">
                Basic knowledge in order to build databases and run queries.
              </p>
            </li>
            <li className="skill-item">
              <span className="skill-title">.NET / VISUAL STUDIO</span>
              <span className="percentage">
                <span style={{ width: '30%' }}></span>
              </span>
              <p className="skill-desc">
                Knowledge gained working on .NET ambient (Visual Studio).
                Interacting with back-end elements, understanding and working on
                the site's architecture.
              </p>
            </li>
          </ul>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fas fa-book"></i>
              <span className="skill-title">
                <strong>CMS AND LIBRARIES</strong>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">WORDPRESS</span>
              <span className="percentage">
                <span style={{ width: '50%' }}></span>
              </span>
              <p className="skill-desc">
                Installation, configuration and customization of a theme.
              </p>
            </li>
            <li className="skill-item">
              <span className="skill-title">BOOTSTRAP</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
              <p className="skill-desc"></p>
            </li>
          </ul>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fas fa-pencil-ruler"></i>
              <span className="skill-title">
                <strong>GRAPHIC AND UX DESIGN</strong>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Wireframe Study</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
              <p className="skill-desc"></p>
            </li>
            <li className="skill-item">
              <span className="skill-title">Graphic Template</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Prototype (Adobe XD)</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Banner and Landing Page </span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
          </ul>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fas fa-paint-brush"></i>
              <span className="skill-title">
                <strong>DRAWING AND PAINTING</strong>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">
                Digital Painting (Photoshop - Procreate)
              </span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Illustrations</span>
              <span className="percentage">
                <span style={{ width: '80%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Photo-manipulation</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">Vector Art</span>
              <span className="percentage">
                <span style={{ width: '70%' }}></span>
              </span>
            </li>
          </ul>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fas fa-poll"></i>
              <span className="skill-title">
                <strong>MARKETING</strong>
              </span>
            </li>
            <li className="skill-item">
              <span className="skill-title">SEO </span>
              <span className="percentage">
                <span style={{ width: '50%' }}></span>
              </span>
              <p className="skill-desc"></p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
