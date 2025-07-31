import React from "react";
import Header from "./components/Header";
import NavigationCircles from "./components/NavigationCircles";
import HeroSection from "./components/HeroSection";
import SearchFilters from "./components/SearchFilters";
import LiveGurus from "./components/LiveGurus";
import FeaturedGurus from "./components/FeaturedGurus";
import BookSession from "./components/BookSession";
import Testimonials from "./components/Testimonials";
import OurBlogs from "./components/OurBlogs";
import GuideFeatures from "./components/GuideFeatures";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NavigationCircles />
      <HeroSection />
      <SearchFilters />
      <LiveGurus />
      <FeaturedGurus />
      <BookSession />
      <Testimonials />
      <OurBlogs />
      <GuideFeatures />
      <Footer />
    </div>
  );
}

export default App;
