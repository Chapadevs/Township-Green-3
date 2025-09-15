const Footer = () => {
  return (
    <footer className="bg-[#23a867] py-12 px-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="h-8 w-auto">
                <img 
                  src="/src/assets/LOGO ARVORE APENAS.svg" 
                  alt="Township Community Logo"
                  className="h-full w-auto brightness-0 invert"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Township Community</h3>
            </div>
            <p className="text-green-100 text-base leading-relaxed">
              A creative sanctuary for artists and free spirits in a 
              cannabis-friendly environment.
            </p>
            <p className="text-green-200 text-sm mt-4">
              © 2024 Township Community. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-100">
                <span className="text-green-200">📍</span>
                <span>15 Scott Street, Riverside, NJ, United States</span>
              </div>
              <div className="flex items-center gap-2 text-green-100">
                <span className="text-green-200">📞</span>
                <span>(+1) 856-544-3065</span>
              </div>
              <div className="flex items-center gap-2 text-green-100">
                <span className="text-green-200">✉️</span>
                <span>info@townshipgreen.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Hours</h4>
            <div className="space-y-1 text-green-100">
              <p>Monday - Friday: 10am - 10pm</p>
              <p>Saturday - Sunday: 9am - 11pm</p>
              <p className="text-green-200 text-sm mt-3">
                Private sessions available 24/7
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            Please consume responsibly and in accordance with local laws.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;