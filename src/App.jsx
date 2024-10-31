import "./App.css";
import { MyNavbar } from "./components/MyNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import { I18nextProvider } from "react-i18next";
import i18n from './lib/i18next';
function App() {


  return (
    <div >
         <I18nextProvider i18n={i18n}>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
