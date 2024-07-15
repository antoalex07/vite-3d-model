import React from 'react'

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]}/>
        <shadowMaterial opacity={-10} /> 
        <meshStandardMaterial color="gray"/>
    </mesh>
  );
};

export default Floor