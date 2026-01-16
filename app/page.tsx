import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import IntroGallery from "../src/components/IntroGallery";
import BioSection from "../src/components/BioSection";
import ServicesCarousel from "../src/components/ServicesCarousel";
import Portfolio from "../src/components/Portfolio";
import BookingSection from "../src/components/BookingSection";
import Footer from "../src/components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroGallery />
      <BioSection />
      <ServicesCarousel />
      <BookingSection />
      <Footer />
    </main>
  );
}
