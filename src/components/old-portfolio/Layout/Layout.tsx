import Navigation from '@/components/old-portfolio/Navigation/Navigation';
import { FunctionComponent, ReactNode } from 'react';
import Footer from '../Footer/Footer';

type Props = {
  children: ReactNode;
  className?: string;
};

const Layout: FunctionComponent<Props> = (props) => {
  return (
    <div className={props.className + ' App'}>
      <Navigation />
      <div className="wrapper">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
