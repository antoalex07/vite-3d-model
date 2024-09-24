import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful';
import { useFrame } from '@react-three/fiber';


const state = proxy({
  current: null,
  items: {
    laces: "#ff0000",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff"
  }
});

export default function Model(props) {
  
  const ref = useRef();
  const { nodes, materials } = useGLTF('/shoe.glb')
  const snap = useSnapshot(state);
  const [hover, setHover] = useState(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })


  const handlePointerOver = (e) => {
    e.stopPropagation()
    setHover(e.object.material.name)
  }

  const handlePointerOut = (e) => {
    e.intersections.length === 0 && setHover(null)
  }

  const handlePointerDown = (e) => {
    e.stopPropagation();
    state.current = e.object.material.name;
  }

  const handlePointerMissed = (e) => {
    state.current = null;
  }
  
  return (
    <group 
      ref={ref}
      {...props} 
      dispose={null}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerMissed={handlePointerMissed}  
    >
      <mesh material-color={snap.items.laces} geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh material-color={snap.items.caps} geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh material-color={snap.items.mesh} geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh material-color={snap.items.inner} geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh material-color={snap.items.sole} geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh material-color={snap.items.stripes} geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh material-color={snap.items.band} geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh material-color={snap.items.patch} geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

export function Picker() {

  const snap = useSnapshot(state);
  
  const handleColorChange = (color) => {
    state.items[snap.current] = color;
  }

  return (
    <div style={{display: snap.current ? "block" : "none",
      alignItems: "center",
      position: "relative"
    }}>
      <HexColorPicker className='picker'
        color={snap.items[snap.current]}
        onChange={handleColorChange}
      /> 
      <h1 className='heading'>{snap.current}</h1>
    </div>
  )
}

useGLTF.preload('/shoe.glb')