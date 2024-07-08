import React, { useRef, useState } from 'react'
import Final from '../../public/Final'
import { useFrame } from '@react-three/fiber';

const HoveringModel = () => {
    
    const modelRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1,
        });
    };

    useFrame(() => {
        if (modelRef.current) {
          modelRef.current.rotation.y = mousePosition.x * Math.PI * 3;
          modelRef.current.rotation.x = mousePosition.y * Math.PI / 10; // Adjust the factor to control rotation speed
        }
    });
    

  return (
    <mesh ref={modelRef} onPointerMove={handleMouseMove}>
        <Final/>
    </mesh>
  )
}

export default HoveringModel