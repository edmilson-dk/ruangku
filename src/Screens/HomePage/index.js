import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../../Components/UI/Header/'));
const BannerSection = React.lazy(() => import('../../Components/Banner/'));

function HomePage() {
  return (
    <Suspense fallback={null}>
      <Header />
      <BannerSection />
    </Suspense>
  );
}

export default HomePage;
