import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { injectStyles } from "./styles/global";
import useViewport from "./hooks/useViewport";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import WhatsAppButton from "./components/WhatsAppButton";
import EnquiryPopup from "./components/EnquiryPopup";

export default function App() {
  const screen = useViewport();

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <Router>
      <div>
        <Nav screen={screen} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage screen={screen} />} />
            <Route path="/about" element={<AboutPage screen={screen} />} />
            <Route path="/courses" element={<CoursesPage screen={screen} />} />
            <Route path="/contact" element={<ContactPage screen={screen} />} />
            <Route path="*" element={<HomePage screen={screen} />} />
          </Routes>
        </main>
        <Footer screen={screen} />
        <WhatsAppButton />
        <EnquiryPopup screen={screen} />
      </div>
    </Router>
  );
}
