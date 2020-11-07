import { useEffect, Fragment } from 'react';

import GlobalStyle from '../global-style';
import { initGA, logPageView } from '../../lib/analytics';
import Navigation from '../nav';

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
      <Navigation />
      <main className="flex justify-center flex-col max-w-screen-md mx-auto px-4 md:px-12">
        {children}
      </main>
      <GlobalStyle />
    </Fragment>
  );
};

export default DefaultLayout;
