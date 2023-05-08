import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

import './navigation.scss';
import { useState, useEffect, useLayoutEffect } from 'react';
import react from 'react';
import firmaB from '@/assets/images/firma_b.png';
import firmaW from '@/assets/images/firma_w.png';

// Animated squares component.
function AnimatedSquares(props: any) {
  // This is default configuration for all the ticks

  var littleSquares = [];

  for (let i = 0; i < 25; i++) {
    littleSquares.push(
      <div className="m-el" key={i} ref={react.createRef()}></div>
    );

    //const animatedElem = littleSquares[i].ref;
  }

  return (
    <div id="menuAnimation" className="menuAnimation">
      {littleSquares}
    </div>
  );
}

// Main menu wrapper component.
function MenuContainer(props: any) {
  const menuStyle = useSpring({
    opacity: props.animation ? 1 : 0,
    display: props.animation ? 'block' : 'none',
    from: { opacity: 0, display: 'none' },
  });

  return (
    <animated.div className="menuPage" style={menuStyle}>
      {props.children}
    </animated.div>
  );
}

// Methods.
function Navigation() {
  const [burgerClasses, setClasses] = useState('open');
  const [animation, setAnimation] = useState(false);
  const [animationMenu, setAnimationMenu] = useState(false);

  // Methods.
  function toggleMenu() {
    setClasses((burgerClasses) => {
      return burgerClasses === 'closed' ? 'open' : 'closed';
    });
    setAnimation(!animation);
    setAnimationMenu(true);
  }

  // I had to do this because anime js doesn't work inside React.
  // I can explore the related package in the future.
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/src/assets/libraries/old-navigation.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    document.body.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <nav className="frameWrap">
        <div id="menuFrame">
          <Link
            to="/portfolio"
            className="mainLogo"
            title="Homepage Sofia Dissegna"
          >
            <img src={firmaW} alt="" />
            <img src={firmaB} alt="" />
          </Link>

          <div
            className={`burgerMenu ${burgerClasses}`}
            onClick={() => toggleMenu()}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <MenuContainer animation={animation}>
            <AnimatedSquares play={animationMenu} />
            <ul>
              <li id="voce1" className="menuItems">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li id="voce3" className="menuItems">
                <Link to="/skills">Skills</Link>
              </li>
              <li id="voce4" className="menuItems">
                <Link to="/parallax-illustrations">Parallax Illustrations</Link>
              </li>
              <li id="voce4" className="menuItems">
                <Link to="/my-works">My Works</Link>
              </li>
              <li id="voce5" className="menuItems">
                <Link to="/contact-me">Contact Me</Link>{' '}
              </li>
            </ul>
          </MenuContainer>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
