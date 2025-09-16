/**
 * Utility function to get the correct asset path for both development and production
 * @param {string} assetPath - The asset path relative to public (e.g., "/assets/image.jpg")
 * @returns {string} - The correct asset path with base URL
 */
export const getAssetPath = (assetPath) => {
  // Get the base URL from Vite's import.meta.env or fallback
  const base = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash from assetPath if it exists
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // Combine base URL with asset path
  return `${base}${cleanPath}`;
};

/**
 * Asset paths constants for easy maintenance
 */
export const ASSETS = {
  LOGO: getAssetPath('assets/LOGO ARVORE APENAS.svg'),
  FAVICON: getAssetPath('assets/favicon.svg'),
  HERO_BG: getAssetPath('assets/music-party-gathering-stockcake.jpg'),
  ARTWORK: {
    SMOKE_DREAMS: getAssetPath('assets/istockphoto-1391364518-612x612.jpg'),
    DOODLE_VISION: getAssetPath('assets/images.jpeg'),
    TOWNSHIP_LOGO: getAssetPath('assets/Logo.png'),
    CANNABIS_SPIRIT: getAssetPath('assets/fciar2zeyhe31.png'),
    MUSHROOM_SUNSHINE: getAssetPath('assets/ed3679e4aa35e0b09fc81f31a60f78a4.jpg'),
    JOINT_LEAF: getAssetPath('assets/blunt-weed-cannabis-medical-marijuana-pot-stone-high-life-smoker-drug-420-mary-jane-T0B89R.jpg'),
    COSMIC_SAGE: getAssetPath('assets/rasta-bart-stoner-wall-art.webp'),
    RASTA_SPIRIT: getAssetPath('assets/il_fullxfull.2820111067_n983.webp')
  }
};
