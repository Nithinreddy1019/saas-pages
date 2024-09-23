import { CallToAction } from "@/components/call-to-action";
import { Features } from "@/components/features";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}
