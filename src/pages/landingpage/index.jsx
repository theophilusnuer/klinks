import HeroSlider from '../../components/hero'
import Navbar from '../../components/navbar'
import CategoryButtons from '../../components/categoryButtons';
import TopratedPage from '../topratedPage';
import Footer from '../../components/footer';
import AboutUs from '../../components/aboutUs';
import FeaturedPage from '../featuredPage';
import WhatWeDo from '../../components/whatWeDo';
import WhoWeAre from '../../components/whoAreWe';
import AffiliatedLogos from '../affiliates';



export default function LandingPage() {
    return (
        <section>
            <Navbar />
            <HeroSlider />
            {/* <CategoryButtons /> */}
            <AffiliatedLogos/>
            <WhatWeDo/>
            <WhoWeAre/>
            <FeaturedPage />
            {/* <TopratedPage /> */}
            {/* <AboutUs /> */}
            <Footer />
        </section>
    );
}