import ParticleField from 'react-particles-webgl';

const Particle = () => {
  return (
    <div className='z-[1] absolute w-full h-full'>
      <ParticleField config={config} />
    </div>
  );
};

const config = {
  showCube: false,
  dimension: '3D',
  velocity: 0.1,
  boundaryType: 'bounce',
  antialias: false,
  direction: {
    xMin: -0.6,
    xMax: 0.3,
    yMin: -1,
    yMax: -0.6,
    zMin: -0.6,
    zMax: 0.3,
  },
  lines: {
    colorMode: 'rainbow',
    color: '#351CCB',
    transparency: 0.9,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 138,
    visible: false,
  },
  particles: {
    colorMode: 'solid',
    color: '#ffffff',
    transparency: 0.9,
    shape: 'circle',
    boundingBox: 'canvas',
    count: 500,
    minSize: 1,
    maxSize: 20,
    visible: true,
  },
  cameraControls: {
    enabled: false,
    enableDamping: false,
    dampingFactor: 0.2,
    enableZoom: false,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    resetCameraFlag: true,
  },
  limitConnections: true,
};

export default Particle;
