import xcampLogo from './xcamp-logo.png';

export default function XCamp() {
  return (
    <img 
      src={xcampLogo.src} // Extracts the string path: 'StaticImageData' -> 'string'
      alt="X-Camp Logo" 
      style = {{
        filter: 'brightness(0.95) contrast(1.35)',
        width: '220px',
        height: 'auto'
     }}
    />
  );
}