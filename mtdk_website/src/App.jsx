// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Journey from './components/Journey';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Lazy load pages for better performance
const About = lazy(() => import('./pages/navPages/About'));
const Academics = lazy(() => import('./pages/navPages/Academics'));
const AdmissionFee = lazy(() => import('./pages/navPages/Admission_Fee'));
const ContactUs = lazy(() => import('./pages/navPages/ContactUs'));
const RnD = lazy(() => import('./pages/navPages/RnD'));
const StudentLife = lazy(() => import('./pages/navPages/StudentLife'));
const Governance = lazy(() => import('./pages/navPages/Governance'));
const Gallery = lazy(() => import('./pages/navPages/Gallery'));
const Administration = lazy(() => import('./pages/navPages/Administration'));

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsInitialLoad(false);
    };
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <Router>
      <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
        <Header />
        <main>
          <Suspense fallback={isInitialLoad ? <Loader /> : null}>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <Features />
                  <Journey />
                </>
              } />
              <Route path="/about" element={<About />} /> 
              <Route path="/academics" element={<Academics />} />
              <Route path="/admission_fee" element={<AdmissionFee />} />
              <Route path="/rnd" element={<RnD />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/student_life" element={<StudentLife />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/administration" element={<Administration />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
