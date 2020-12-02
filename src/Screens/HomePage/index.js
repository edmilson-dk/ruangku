import React, { Suspense } from 'react';
import { FiVideo } from 'react-icons/fi';

const Header = React.lazy(() => import('../../Components/UI/Header/'));
const BannerSection = React.lazy(() => import('../../Components/Banner/'));
const GenericSection = React.lazy(() => import('../../Components/GenericSection/'));
const WorksBox = React.lazy(() => import('../../Components/WorksBox'));

function HomePage() {
  return (
    <Suspense fallback={null}>
      <Header />
      <BannerSection />
      <GenericSection 
        title='How it works'
        text="Ruangku online course provides learning method that enjoyable and relaxing for all our member."
        isBackgroundWhite={false}
      >
        <WorksBox
          icon={<FiVideo size="2.5rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
        <WorksBox
          icon={<FiVideo size="2.5rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
        <WorksBox
          icon={<FiVideo size="2.5rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
        <WorksBox
          icon={<FiVideo size="2.5rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
        <WorksBox
          icon={<FiVideo size="2.5rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
        <WorksBox
          icon={<FiVideo size="2.5rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
      </GenericSection>
      <GenericSection 
        title="Popular course"
        text="here are some popular courses in premium class"
        isBackgroundWhite={true}
      ></GenericSection>
    </Suspense>
  );
}

export default HomePage;
