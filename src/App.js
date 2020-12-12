import React, { Suspense } from 'react';

import Spinner from './Components/UI/Spinner/';

const Theme = React.lazy(() => import('./styles/theme'));
const GlobalStyles = React.lazy(() => import('./styles/reboot'));
const HomePage = React.lazy(() => import('./Screens/HomePage/'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Theme>
        <GlobalStyles />
        <HomePage />
      </Theme>
    </Suspense>
  );
}

export default App;
