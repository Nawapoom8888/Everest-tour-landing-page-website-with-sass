import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import OurGuide from "./components/OurGuide";
import Service from "./components/Service";
import Step from "./components/Step";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Step />
      <div className="bg-2-section">
        <OurGuide />
        <Testimonial />
      </div>
      <ImageGrid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
