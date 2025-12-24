import AboutMeSection from "@/components/AboutMeSection";
import ClientSuccessSection from "@/components/ClientSuccessSection";
import ContactSection from "@/components/ContactSection";
import FrameworkSection from "@/components/FrameworkSection";
import FutureConversationalSection from "@/components/FutureConversationalSection";
import Hero from "@/components/Hero";
import IdeasEssaysSection from "@/components/IdeasEssaysSection";
import KeyImperativesSection from "@/components/KeyImperativesSection";
import PitfallsSection from "@/components/PitfallsSection";
import PrerequisitesSection from "@/components/PrerequisitesSection";
import ServicesSection from "@/components/ServicesSection";
import TransformationSection from "@/components/TransformationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection/>
      <FutureConversationalSection/>
      <KeyImperativesSection/>
      <PrerequisitesSection/>
      <FrameworkSection/>
      <PitfallsSection/>
      <IdeasEssaysSection/>
      <AboutMeSection/>
      <ClientSuccessSection/>
      <ContactSection/>
    </main>
  );
}
