import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';


function BallAnimate() {
  const dodeca = React.useRef()
  useFrame(({ clock }) => {
    dodeca.current.rotation.x = clock.getElapsedTime()
    dodeca.current.rotation.y = Math.sin(clock.getElapsedTime())
  })

return (
  <mesh ref={dodeca}>
    <ambientLight intensity={1} />
    <dodecahedronGeometry args={[10, 1]} />
    <meshLambertMaterial
      wireframe={true}
      transparent={true}
      opacity={0.5}
      />
  </mesh>
  );
}

function Ball() {

  return (
    <div className="Ball">
      <Canvas>
        <BallAnimate/>
      </Canvas>
    </div>
  );
}

export default Ball;
