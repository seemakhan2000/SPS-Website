import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/Hero";
import ServicesTabs from "../components/Home/ServicesTabs";
import OurStartups from "@/components/Home/OurStartups";
import FourCards from "@/components/Home/FourCards";
import EightCards from "@/components/Home/EightCards";
import OurTechnologyPartners from "@/components/Home/OurTechnologyPartners";
import SPSVerticalsSection from "@/components/Home/SPSVerticalsSection";
import AwardsSection from "@/components/Home/AwardsSection";
import ClientsSection from "@/components/Home/ClientsSection";
import LatestNews from "@/components/Home/LatestNews";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screenbg-white">
      <Navbar />
      <HeroSection />
      <ServicesTabs />
      <OurStartups />
        <FourCards />
         <EightCards />
         <OurTechnologyPartners/>
         <SPSVerticalsSection/>
         <AwardsSection/>
         <ClientsSection/>
         <LatestNews/>
         <Footer/>
    </main>
  );
}