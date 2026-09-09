import AboutMe from "@/components/About";
import ClaimCTA from "@/components/claims/ClaimCTA";
import ComunidadCards from "@/components/ComunidadCards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LegislativeWork from "@/components/TrabajoLegislativo";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <LegislativeWork />
      <ComunidadCards />
      <ClaimCTA />
      <Footer />
    </div>
  );
}