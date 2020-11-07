import { useEffect, Fragment } from 'react';

import GlobalStyle from '../global-style';
import { initGA, logPageView } from '../../lib/analytics';
import { Nav } from '../nav';

const DefaultLayout: React.FC = ({ children }) => {
  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
    }

    logPageView();
  }, []);

  return (
    <Fragment>
      <Nav />
      <main className="flex justify-center flex-col max-w-screen-lg mx-auto">
        {children}
      </main>
      <GlobalStyle />
    </Fragment>
  );
};

export default DefaultLayout;
