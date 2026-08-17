import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider index="01" label="SELECTED WORK" />
      <Portfolio />
      <SectionDivider index="02" label="CAPABILITIES & SERVICES" />
      <Services />
      <SectionDivider index="03" label="CUSTOM PRICING & SCOPE" />
      <Pricing />
      <SectionDivider index="04" label="THE CREW & TEAM" />
      <Team />
    </>
  );
}
