import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../../Components/UI/Header/'));
const BannerSection = React.lazy(() => import('../../Components/Banner/'));
const GenericSection = React.lazy(() => import('../../Components/GenericSection/'));

function HomePage() {
  return (
    <Suspense fallback={null}>
      <Header />
      <BannerSection />
      <GenericSection 
        title='How it works'
        text="Ruangku online course provides learning method that enjoyable and relaxing for all our member."
        isBackgroundWhite={false}
      ></GenericSection>
      <GenericSection 
        title="Popular course"
        text="here are some popular courses in premium class"
        isBackgroundWhite={true}
      ></GenericSection>
    </Suspense>
  );
}

export default HomePage;
