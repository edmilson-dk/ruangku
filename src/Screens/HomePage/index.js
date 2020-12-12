import React, { Suspense } from 'react';

// icons
import { FiVideo } from 'react-icons/fi';
import { FaCertificate, FaCalendarCheck } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import { BiCheckShield } from 'react-icons/bi';

// courses images
import fullstack from '../../assets/images/course-1.jpg';
import frontend from '../../assets/images/course-2.jpg';
import backend from '../../assets/images/course-3.jpg';

// components
const Header = React.lazy(() => import('../../Components/UI/Header/'));
const BannerSection = React.lazy(() => import('../../Components/Banner/'));
const GenericSection = React.lazy(() => import('../../Components/UI/GenericSection/'));
const GenericButton = React.lazy(() => import('../../Components/UI/GenericButton/'));
const WorksBox = React.lazy(() => import('../../Components/WorksBox/'));
const CourseBox = React.lazy(() => import('../../Components/CourseBox/'));
const AboutSection = React.lazy(() => import('../../Components/AboutSection/'));
const SlideAbout = React.lazy(() => import('../../Components/SlideAbout/'));
const SlideAboutBox = React.lazy(() => import('../../Components/SlideAboutBox/'));

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
          icon={<FiVideo size="2.8rem" color="#0BE881"/>}
          title="HD Video"
          text="1080HD 60 FPS all course video for our member"
        />
        <WorksBox
          icon={<FaCalendarCheck size="2.8rem" color="#0BE881"/>}
          title="Up-To-Date"
          text="Our module course always up-to-date for the technology these days and the future"
        />
        <WorksBox
          icon={<FaCertificate size="2.8rem" color="#0BE881"/>}
          title="Certificated"
          text="After you passed the course we will give you official certificated"
        />
        <WorksBox
          icon={<IoMdTime size="2.8rem" color="#0BE881"/>}
          title="Unlimited Access"
          text="All our courses can be access anytime"
        />
        <WorksBox
          icon={<MdMessage size="2.8rem" color="#0BE881"/>}
          title="Consultation Service"
          text="Dont't worry if you had a problem on your course we will help and guide you"
        />
        <WorksBox
          icon={<BiCheckShield size="2.8rem" color="#0BE881"/>}
          title="Verified Mentors"
          text="Our mentorys are the best on their own field"
        />
      </GenericSection>

      <GenericSection 
        title="Popular course"
        text="here are some popular courses in premium class"
        isBackgroundWhite={true}
      >
        <CourseBox 
          title="FullStack Developer"
          listProperties={
            [
              '120 modules',
              'Unlimited access',
              'HD video',
              'Certificated',
              'Up-to-date',
            ]
          }
          courseBanner={fullstack}
          avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          name="Alex Oliveira"
          description="Full stack developer"
          courseValue="460.00"
        />
        <CourseBox 
          title="Front-end Developer"
          listProperties={
            [
              '80 modules',
              'Unlimited access',
              'HD video',
              'Certificated',
              'Up-to-date',
            ]
          }
          courseBanner={frontend}
          avatar={frontend}
          name="Alex Oliveira"
          description="Full stack developer"
          courseValue="270.00"
        />
        <CourseBox 
          title="Back-end Developer"
          listProperties={
            [
              '90 modules',
              'Unlimited access',
              'HD video',
              'Certificated',
              'Up-to-date',
            ]
          }
          courseBanner={backend}
          avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          name="Alex Oliveira"
          description="Full stack developer"
          courseValue="290.00"
        />

        <GenericButton label="See more courses"/>
      </GenericSection>

      <AboutSection
        startTitle="What They"
        midTitle="say"
        endTitle="about us"
      >
        <SlideAbout>
          <SlideAboutBox 
            name="Alex oliveira"
            description="Full stack developer"
            text="Hello! I'm alex, I'm a full stack web developer and instructor"
            avatar={fullstack}
          />
          <SlideAboutBox 
            name="Denise Camargo"
            description="Front-end developer"
            text="Hi! I'm Denise, Front End Developer and Instructor"
            avatar={frontend}
          />
          <SlideAboutBox 
            name="Pedro Kray"
            description="Back-end developer"
            text="I'm Pedro, back-end developer and instructor"
            avatar={backend}
          />
        </SlideAbout>
      </AboutSection>
    </Suspense>
  );
}

export default HomePage;
