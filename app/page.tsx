import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Vision from "./components/vision/Vision";
import Do from "./components/do/Do";
import Experiences from "./components/experiences/Experiences";
import Contact from "./components/contact/Contact";
export default function Home() {
  return (
    <div className="bg-blue-100">
     <Hero />
     <About />
     <Vision />
     <Do />
     <Experiences/>
     <Contact/>
    </div>
  );
}
