import HeroSlider from '../../components/hero'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer';
import WhatWeDo from '../../components/whatWeDo';
import WhoWeAre from '../../components/whoAreWe';
import AffiliatedLogos from '../affiliates';
import Testimonials from '../../components/testimonials';



export default function LandingPage() {
    return (
        <section>
            <Navbar />
            <HeroSlider />
            <AffiliatedLogos />
            <WhatWeDo />
            <WhoWeAre />
            <Testimonials />
            <Footer />
        </section>
    );
}