// src/App.jsx
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Journey from './components/Journey';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}

export default App;
