export const size = {
  maxMob: "767px", // Máximo ancho para dispositivos móviles
  minTab: "768px", // Mínimo ancho para dispositivos tablet
  maxTab: "1279px", // Máximo ancho para dispositivos tablet
  minDesk: "1280px", // Mínimo ancho para dispositivos de escritorio
};

export const breakpoints = {
  maxMobile: `(max-width: ${size.maxMob})`,
  maxTablet: `(max-width: ${size.maxTab})`,
  tabletDimensions: `(min-width: ${size.minTab}) and (max-width: ${size.maxTab})`,
};
