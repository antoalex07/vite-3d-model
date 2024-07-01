import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Cube from "../public/Cube"

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={1}/>
        <OrbitControls/>
        <Suspense>
          <Cube/>
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>
    </>
  )
}

export default App
