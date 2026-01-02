import Hero from "./components/blocks/Hero/Hero"
import Header from "./components/blocks/Header/Header"
import Brands from "./components/blocks/Brands/Brands"
import Types from "./components/blocks/Types/Types";

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
      </main>
    </> 
  )
}

export default App
