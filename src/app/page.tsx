"use client"
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Categories from "./(components)/Categories/Categories";
import Destination from "./(components)/Destination/Destination";
import Gallery from "./(components)/Gallery/Gallery";
import Hero from "./(components)/Hero/Hero";
import Navbar from "./(components)/Navbar/Navbar";
import Plan from "./(components)/Plan/Plan";
import PopularDestination from "./(components)/PopularDestination/PopularDestination";
import TourGuide from "./(components)/TourGuide/TourGuide";
import Testimonial from "./(components)/Testimonial/Testimonial";
import ElementsSection from "./(components)/ElementsSection/ElementsSection";
import DetailFooter from "./(components)/DetailFooter/DetailFooter";
import Footer from "./(components)/Footer/Footer";


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Categories />
        <Destination />
        <Plan />
        <PopularDestination />
        <Gallery />
        <TourGuide/>
        <Testimonial/>
        <ElementsSection />
        <DetailFooter />
        <Footer />
      </div>
    </>
  );
}
5;
