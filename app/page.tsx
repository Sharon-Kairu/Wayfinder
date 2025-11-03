import Hero from "./components/hero/hero";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Do from "./components/do/Do";
import Experiences from "./components/experiences/Experiences";
import Call from "./components/call/Call"
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <div className="bg-blue-100">
    <ResponsiveNav />
     <Hero />
     <Do />
     <Experiences/>
     <Call/>
     <Footer/>
   
    </div>
  );
}
