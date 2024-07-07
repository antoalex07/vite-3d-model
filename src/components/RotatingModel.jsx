import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import Final from '../../public/Final'

const RotatingModel = () => {
    
    const modelRef = useRef();

    useFrame(() => {
        if(modelRef.current) {
            modelRef.current.rotation.y += 0.01
        }
    });

  return (
    <mesh ref={modelRef}>
        <Final/>
    </mesh>
  );
}

export default RotatingModel