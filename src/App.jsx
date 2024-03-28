import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <div className=" bg-black h-full">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
