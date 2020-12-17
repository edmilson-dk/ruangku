import React, { Suspense } from 'react';

import Spinner from './Components/UI/Spinner/';

const Theme = React.lazy(() => import('./styles/theme'));
const GlobalStyles = React.lazy(() => import('./styles/reboot'));

const Header = React.lazy(() => import('./Components/UI/Header/'));
const Footer = React.lazy(() => import('./Components/UI/Footer/'));
const HomePage = React.lazy(() => import('./Screens/HomePage/'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Theme>
        <GlobalStyles />
        <Header />
        <HomePage />
        <Footer />
      </Theme>
    </Suspense>
  );
}

export default App;
