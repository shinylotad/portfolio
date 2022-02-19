import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';


function BallAnimate() {
  const dodeca = React.useRef()
  useFrame(({ clock }) => {
    dodeca.current.rotation.x = clock.getElapsedTime() * 0.1
    dodeca.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1)
    dodeca.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5)
  })

return (
  <mesh ref={dodeca}>
    <ambientLight intensity={1} />
    <dodecahedronGeometry args={[10, 1]} />
    <meshLambertMaterial
      wireframe={true}
      transparent={true}
      opacity={0.2}
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
