import { useState } from 'react';
import ImagePreview from './ImagePreview';

const mockArtworks = [
  {
    id: 1,
    image: "/assets/istockphoto-1391364518-612x612.jpg",
    title: "Smoke Dreams",
    artist: "Sarah M.",
    frameStyle: "modern-clean",
    size: 'medium'
  },
  {
    id: 2,
    image: "/assets/images.jpeg",
    title: "Doodle Vision", 
    artist: "Mike R.",
    frameStyle: "warm-wood",
    size: 'medium'
  },
  {
    id: 3,
    image: "/assets/Logo.png",
    title: "Township Community Logo",
    artist: "Township Design Team",
    frameStyle: "modern-clean", 
    size: 'large'
  },
  {
    id: 4,
    image: "/assets/fciar2zeyhe31.png",
    title: "Cannabis Spirit",
    artist: "Zen D.",
    frameStyle: "warm-wood",
    size: 'medium'
  },
  {
    id: 5,
    image: "/assets/ed3679e4aa35e0b09fc81f31a60f78a4.jpg",
    title: "Mushroom Sunshine", 
    artist: "River T.",
    frameStyle: "modern-clean",
    size: 'medium'
  },
  {
    id: 6,
    image: "/assets/blunt-weed-cannabis-medical-marijuana-pot-stone-high-life-smoker-drug-420-mary-jane-T0B89R.jpg",
    title: "Joint & Leaf",
    artist: "Alex K.", 
    frameStyle: "warm-wood",
    size: 'large'
  },
  {
    id: 7,
    image: "/assets/rasta-bart-stoner-wall-art.webp",
    title: "Cosmic Mushroom Sage",
    artist: "Maya S.",
    frameStyle: "warm-wood",
    size: 'medium'
  },
  {
    id: 8,
    image: "/assets/il_fullxfull.2820111067_n983.webp",
    title: "Rasta Spirit",
    artist: "Jasper M.",
    frameStyle: "modern-clean",
    size: 'medium'
  }
];

const getFrameClasses = (frameStyle) => {
  const frames = {
    'modern-clean': 'frame-modern-clean',
    'warm-wood': 'frame-warm-wood'
  };
  return frames[frameStyle] || frames['modern-clean'];
};

const getSizeClasses = (size) => {
  const sizes = {
    'medium': 'artwork-medium', 
    'large': 'artwork-large'
  };
  return sizes[size] || sizes['medium'];
};

export const CommunityMural = () => {
  const [hoveredArt, setHoveredArt] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setSelectedArtwork(null);
  };

  const handleNavigatePreview = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <section className="py-20 px-10 bg-white relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#23a867] to-transparent opacity-30"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#23a867] to-[#2d5a49] rounded-full"></div>
            <span className="text-[#23a867] text-2xl">🎨</span>
            <div className="w-12 h-1 bg-gradient-to-r from-[#2d5a49] to-[#23a867] rounded-full"></div>
          </div>
          <h2 className="text-[#2d5a49] text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Community Art Mural
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Discover the creative expressions of our Township community members. Each 
            piece tells a story, born from moments of inspiration and connection in our 
            shared creative space.
          </p>
        </div>
        
        <div className="relative">
          
          {/* Clean Grid Layout */}
          <div className="gallery-grid">
            {mockArtworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className={`
                  gallery-item ${getSizeClasses(artwork.size)} ${getFrameClasses(artwork.frameStyle)}
                  ${hoveredArt === artwork.id ? 'artwork-hovered' : hoveredArt ? 'artwork-dimmed' : ''}
                `}
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredArt(artwork.id)}
                onMouseLeave={() => setHoveredArt(null)}
                onClick={() => handleArtworkClick(artwork)}
              >
                <div className="artwork-container">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="artwork-image"
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="artwork-overlay">
                    <h3 className="artwork-title">{artwork.title}</h3>
                    <p className="artwork-artist">by {artwork.artist}</p>
                    <div className="artwork-cta">
                      <span>👁️ View Full Size</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Card */}
          <div className="text-center mt-16">
            <div className="add-art-card">
              <div className="add-art-icon">🎨</div>
              <h3 className="add-art-title">Share Your Art</h3>
              <p className="add-art-subtitle">Join our creative community</p>
              <div className="add-art-button">
                Upload Artwork
              </div>
            </div>
          </div>
        </div>

        {/* Image Preview Modal */}
        <ImagePreview 
          artwork={selectedArtwork}
          isOpen={isPreviewOpen}
          onClose={handleClosePreview}
          allArtworks={mockArtworks}
          onNavigate={handleNavigatePreview}
        />
      </div>
    </section>
  );
};

export default CommunityMural;
