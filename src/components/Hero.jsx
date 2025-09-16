import { ASSETS } from '../utils/assets';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      <div 
        className="flex min-h-screen flex-col gap-8 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 168, 103, 0.8) 0%, rgba(35, 168, 103, 0.7) 100%), 
            url("https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop")`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="h-20 md:h-24 w-auto">
              <img 
                src={ASSETS.LOGO} 
                alt="Township Community Logo"
                className="h-full w-auto brightness-0 invert drop-shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-white text-6xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Township Community
          </h1>
          <p className="text-white text-xl md:text-2xl font-normal leading-normal max-w-3xl mx-auto mb-8">
            A creative sanctuary where stoners gather to smoke, draw, and connect
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button 
            onClick={scrollToBooking}
            className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white text-[#23a867] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all shadow-lg border-2 border-white"
          >
            <span className="truncate">Book Your Session</span>
          </button>
          
          <button 
            onClick={scrollToAbout}
            className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white hover:bg-opacity-10 transition-all border-2 border-white"
          >
            <span className="truncate">Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;