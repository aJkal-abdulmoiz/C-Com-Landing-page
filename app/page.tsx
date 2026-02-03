import AboutMeSection from "@/components/AboutMeSection";
import CalBooking from "@/components/CalBooking";
import ClientSuccessSection from "@/components/ClientSuccessSection";
import ContactSection from "@/components/ContactSection";
import FrameworkSection from "@/components/FrameworkSection";
import FutureConversationalSection from "@/components/FutureConversationalSection";
import Hero from "@/components/Hero";
import IdeasEssaysSection from "@/components/IdeasEssaysSection";
import ServicesSection from "@/components/ServicesSection";



export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMeSection/>
      <FutureConversationalSection/>
      <FrameworkSection/>
      <ServicesSection/>
      <IdeasEssaysSection/>
      <ClientSuccessSection/>
      <CalBooking/>
      <ContactSection/>
    </main>
  );
}
