import { Canvas } from '@react-three/fiber'
import './App.css'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Final from "../public/Final"

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={0}/>
        <OrbitControls/>
        <Suspense>
          <Final/>
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>
    </>
  )
}

export default App

// apartment: string;
//     city: string;
//     dawn: string;
//     forest: string;
//     lobby: string;
//     night: string;
//     park: string;
//     studio: string;
//     sunset: string;
//     warehouse: string;