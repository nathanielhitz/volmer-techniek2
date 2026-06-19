import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Workflow } from "@/components/sections/Workflow";
import { About } from "@/components/sections/About";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Contact } from "@/components/sections/Contact";
import { StickyCallBar } from "@/components/ui/StickyCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Work />
        <Workflow />
        <About />
        <ServiceArea />
        <Contact />
      </main>
      <StickyCallBar />
    </>
  );
}
