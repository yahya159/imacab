import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import About from "./_components/About";
import Certification from "./_components/Certification";
import Testimonials from "./_components/Testimonials";
import ContactUs from "./_components/ContactUs";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <About /> 
      <Certification />
      <Testimonials /> 
      <ProductSection />
     <ContactUs /> 
    </div>
  );
}
