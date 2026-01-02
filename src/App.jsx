import Hero from "./components/blocks/Hero/Hero"
import Header from "./components/blocks/Header/Header"
import Brands from "./components/blocks/Brands/Brands"
import Types from "./components/blocks/Types/Types";
import Advantages from "./components/blocks/Advantages/Advantages";
import Plans from "./components/blocks/Plans/Plans";

// в App.jsx или index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Header />
      <main className="w-full h-500">
        <Hero />
        <Brands />
        <Types />
        <Advantages />
        <Plans />
      </main>
    </>
  )
}

export default App
