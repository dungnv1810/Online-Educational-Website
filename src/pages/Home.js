import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/CompanySection/CompanySection";
import AboutUs from "../components/AboutUs/AboutUs";
import CoursesSection from "../components/CoursesSection/CoursesSection";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import FreeCourseSection from "../components/FreeCourseSection/FreeCourseSection";
import Testimonial from "../components/Testimonial/Testimonial";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
const Home = () => {
    return(
        <>  
            <Header/>
            <HeroSection/>
            <CompanySection/>
            <AboutUs/>
            <CoursesSection/>
            <ChooseUs/>
            <FeatureSection/>
            <FreeCourseSection/>
            <Testimonial/>
            <Newsletter/>
            <Footer/>
        </>
    )
}
export default Home;