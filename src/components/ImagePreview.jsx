import { useState, useEffect } from 'react';

const ImagePreview = ({ artwork, isOpen, onClose, allArtworks, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (artwork && allArtworks) {
      const index = allArtworks.findIndex(art => art.id === artwork.id);
      setCurrentIndex(index);
    }
  }, [artwork, allArtworks]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex]);

  const handleNext = () => {
    if (currentIndex < allArtworks.length - 1) {
      const nextArtwork = allArtworks[currentIndex + 1];
      setCurrentIndex(currentIndex + 1);
      onNavigate(nextArtwork);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevArtwork = allArtworks[currentIndex - 1];
      setCurrentIndex(currentIndex - 1);
      onNavigate(prevArtwork);
    }
  };

  if (!isOpen || !artwork) return null;

  return (
    <div className="image-preview-overlay" onClick={onClose}>
      <div className="image-preview-container" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button 
          className="image-preview-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          ✕
        </button>

        {/* Navigation buttons */}
        {currentIndex > 0 && (
          <button 
            className="image-preview-nav image-preview-prev"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
        )}
        
        {currentIndex < allArtworks.length - 1 && (
          <button 
            className="image-preview-nav image-preview-next"
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        )}

        {/* Main content */}
        <div className="image-preview-content">
          <div className="image-preview-image-container">
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="image-preview-image"
            />
          </div>
          
          <div className="image-preview-info">
            <div className="image-preview-header">
              <h3 className="image-preview-title">{artwork.title}</h3>
              <div className="image-preview-artist">
                <span className="artist-label">Artist:</span>
                <span className="artist-name">{artwork.artist}</span>
              </div>
            </div>
            
            <div className="image-preview-meta">
              <div className="meta-item">
                <span className="meta-label">Style:</span>
                <span className="meta-value">{artwork.frameStyle.replace('-', ' ')}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Size:</span>
                <span className="meta-value">{artwork.size}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Gallery:</span>
                <span className="meta-value">{currentIndex + 1} of {allArtworks.length}</span>
              </div>
            </div>

            <div className="image-preview-description">
              <p>
                This piece represents the creative spirit of our Township Community, 
                born from moments of inspiration and artistic expression in our 
                cannabis-friendly creative space.
              </p>
            </div>

            <div className="image-preview-actions">
              <button className="preview-action-btn primary">
                <span>💚</span>
                Appreciate
              </button>
              <button className="preview-action-btn secondary">
                <span>📤</span>
                Share
              </button>
              <button className="preview-action-btn secondary">
                <span>🎨</span>
                View Similar
              </button>
            </div>
          </div>
        </div>

        {/* Image counter */}
        <div className="image-preview-counter">
          {allArtworks.map((_, index) => (
            <div 
              key={index}
              className={`counter-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                onNavigate(allArtworks[index]);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;

