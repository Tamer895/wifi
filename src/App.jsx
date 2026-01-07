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
import Form from "./components/blocks/Form/Form";

import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

// в App.jsx или index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

// Handle form open/close
useEffect(() => {
  const handleClick = (e) => {
    const target = e.target;
    const id = target?.id;

    if (id === 'open-fullscreen-form') setIsFormOpen(true);
    if (id === 'close-fullscreen-form') setIsFormOpen(false);
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
}, []);


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
        <AnimatePresence>
          {isFormOpen && <Form setOpen={setIsFormOpen} />}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
