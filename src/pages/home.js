import React from 'react';
import AboutSection from '../components/AboutSection';
import DownloadSection from '../components/DownloadSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import '../styles/styles.scss';

const Home = () => {
    return(
        <div>
            <Nav />
            <HeroSection />
            <AboutSection />
            <DownloadSection />
            <FooterSection />
        </div>
    )
}

export default Home;

