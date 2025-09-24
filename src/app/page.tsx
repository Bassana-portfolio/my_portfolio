import AboutComponent from "./about/About";
import CertificatesComponent from "./certificates/Certificates";
import EndContactComponent from "./contact/EndContact";
import MiddleContactComponent from "./contact/MiddelContact";
import CounterComponent from "./counter/Counter";
import HomeComponent from "./home/Home";
import ServicesComponent from "./services/Services";
import SkillsComponent from "./skills/Skills";
import TestimonialComponent from "./testimonies/testimonies";

export default function Home() {
  return (
    <>
      <HomeComponent />
      <CounterComponent />
      <AboutComponent />
      <SkillsComponent />
      <ServicesComponent />
      <MiddleContactComponent />
      <CertificatesComponent />
      <TestimonialComponent />
      <EndContactComponent />
    </>
  );
}
