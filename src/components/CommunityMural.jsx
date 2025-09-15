import { useState } from 'react';
import ImagePreview from './ImagePreview';

const mockArtworks = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop&auto=format",
    title: "Abstract Dreams",
    artist: "Sarah M.",
    frameStyle: "modern-clean",
    size: 'medium'
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop&auto=format",
    title: "Nature's Flow", 
    artist: "Mike R.",
    frameStyle: "warm-wood",
    size: 'medium'
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=500&fit=crop&auto=format",
    title: "Cosmic Journey",
    artist: "Luna P.",
    frameStyle: "modern-clean", 
    size: 'large'
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
    title: "Meditation",
    artist: "Zen D.",
    frameStyle: "warm-wood",
    size: 'medium'
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1578662015441-462cfbcf319e?w=400&h=400&fit=crop&auto=format",
    title: "Peaceful Mind", 
    artist: "River T.",
    frameStyle: "modern-clean",
    size: 'medium'
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop&auto=format",
    title: "City Lights",
    artist: "Alex K.", 
    frameStyle: "warm-wood",
    size: 'large'
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
