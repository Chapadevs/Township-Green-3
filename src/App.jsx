import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import BookingSection from './components/BookingSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white dark group/design-root overflow-x-hidden font-['Space_Grotesk','Noto_Sans',sans-serif]">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;