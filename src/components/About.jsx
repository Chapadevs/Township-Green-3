const About = () => {
  return (
    <section className="py-20 px-10 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#2d5a49] text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Meet the Community
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Township Community is more than just a space – it's a creative sanctuary 
            designed for artists, dreamers, and free spirits who find inspiration in a relaxed, 
            cannabis-friendly environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-[var(--primary-color)] flex-shrink-0 mt-1">
                🎨
              </div>
              <div>
                <h3 className="text-[#2d5a49] text-2xl font-bold mb-3">Creative Sessions</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Rent our space for private art sessions, group workshops, or creative 
                  gatherings. All skill levels welcome in our judgment-free zone.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-[var(--primary-color)] flex-shrink-0 mt-1">
                🌿
              </div>
              <div>
                <h3 className="text-[#2d5a49] text-2xl font-bold mb-3">Cannabis-Friendly</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A safe, legal space where you can enjoy cannabis while exploring your 
                  artistic side. Enhance your creativity in a welcoming environment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-[var(--primary-color)] flex-shrink-0 mt-1">
                🤝
              </div>
              <div>
                <h3 className="text-[#2d5a49] text-2xl font-bold mb-3">Community Vibes</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Connect with like-minded individuals, share techniques, and be part of a 
                  growing community of creative cannabis enthusiasts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/public/assets/music-party-gathering-stockcake.jpeg" 
              alt="Modern green lounge with comfortable seating for Township Community creative sessions" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;