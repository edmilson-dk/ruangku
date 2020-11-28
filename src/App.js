import React, { Suspense } from 'react';

const Theme = React.lazy(() => import('./styles/theme'));
const GlobalStyles = React.lazy(() => import('./styles/reboot'));
const HomePage = React.lazy(() => import('./Screens/HomePage/'));

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Theme>
        <GlobalStyles />
        <HomePage />
      </Theme>
    </Suspense>
  );
}

export default App;
