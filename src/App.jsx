import Hero from "./components/blocks/Hero/Hero"
import Header from "./components/blocks/Header/Header"
import Brands from "./components/blocks/Brands/Brands"
import Types from "./components/blocks/Types/Types";
import Advantages from "./components/blocks/Advantages/Advantages";
import Plans from "./components/blocks/Plans/Plans";
import InternetInstallation from "./components/blocks/Installation/Installations";
import OurWorks from "./components/blocks/OurWorks/OurWorks";
import WorkPrinciples from "./components/blocks/WorkPrinciples/WorkPrinciples";
import Testimonials from "./components/blocks/Testimonials/Testimonials";
import Contacts from "./components/blocks/Contacts/Contacts";
import Footer from "./components/blocks/Footer/Footer";
import "./builder";


// в App.jsx или index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <Brands />
        <Types />
        <Plans />
        <Advantages />
        <InternetInstallation />
        <OurWorks />
        <WorkPrinciples />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
