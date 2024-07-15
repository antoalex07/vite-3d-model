import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Shoe, { Picker } from '../components/Shoe'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'

const Sample = () => {
  return (
      <div>
        <Picker/>
        <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
          <ambientLight intensity={0.5}/>
          <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
          <Suspense fallback={null}>
            <Shoe/>
            <Environment files="royal.hdr" />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />  
          </Suspense>
          <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
        </Canvas>
      </div>  
  )
}

export default Sample