import React, { Suspense } from 'react';
import Final from "../../public/Final";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import RotatingModel from '../components/RotatingModel';
import HoveringModel from '../components/HoveringModel';

const Home = () => {
  return (
    <div className='home'>
      <h1 style={{
        fontFamily: "Black Ops One, sans-seriff",
        position: "relative",
        paddingTop: "60rem",
        fontSize: "7rem"
      }}>
        LOOK BEYOND LIMITS</h1>

      <div style={{
            width: "80vw",
            borderRadius: "1.875em",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center"
      }}>
        <h2>CONFIGURATION - I</h2>      
        <div style={{display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"}}>

          <div style={{
            position: "relative",
            width: "60%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Canvas>
              <ambientLight intensity={1}/>
              <OrbitControls 
                  enableZoom={false}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                  minAzimuthAngle={-Infinity}
                  maxAzimuthAngle={Infinity}
              />
              <Suspense fallback={null}>
                <Final/>
              </Suspense>
              <Environment preset='sunset' />
            </Canvas>
          </div>
          <div style={{
            width: "35%",
            padding: "1.25em",
            textAlign: "left",
            marginTop: "5em"
          }}>
            <h3>Model Configuration Details:</h3>
            <ul>
              <li>Zoom: Disabled</li>
              <li>Rotation Restrictions: Enabled(360 degreees horizontal only)</li>
              <li>Lighting: Ambient light with low intensity</li>
              <li>Environment: Sunset preset</li>
              <li>The user can drag his mouse and move the 3d model so as to view it as he pleases but only in a horizontal path </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
            width: "80vw",
            borderRadius: "1.875em",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center"
      }}>
        <h2>CONFIGURATION - II</h2>      
        <div style={{display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"}}>

          <div style={{
            position: "relative",
            width: "60%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Canvas>
              <ambientLight intensity={1}/>
              <Suspense fallback={null}>
                <RotatingModel/>
              </Suspense>
              <Environment preset='sunset' />
            </Canvas>
          </div>
          <div style={{
            width: "35%",
            padding: "1.25em",
            textAlign: "left",
            marginTop: "5em"
          }}>
            <h3>Model Configuration Details:</h3>
            <ul>
              <li>Zoom: Disabled</li>
              <li>Rotation Restrictions: Enabled</li>
              <li>Lighting: Ambient light with low intensity</li>
              <li>Environment: Sunset preset</li>
              <li>The model here acts like a video and is coded to rotate in a given speed user cannot drag on it or anything</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={{
            width: "80vw",
            borderRadius: "1.875em",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            textAlign: "center"
      }}>
        <h2>CONFIGURATION - III</h2>      
        <div style={{display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"}}>

          <div style={{
            position: "relative",
            width: "60%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Canvas>
              <ambientLight intensity={1}/>
              <Suspense fallback={null}>
                <HoveringModel/>
              </Suspense>
              <Environment preset='sunset' />
            </Canvas>
          </div>
          <div style={{
            width: "35%",
            padding: "1.25em",
            textAlign: "left",
            marginTop: "5em"
          }}>
            <h3>Model Configuration Details:</h3>
            <ul>
              <li>Zoom: Disabled</li>
              <li>Rotation Restrictions: Disabled</li>
              <li>Lighting: Ambient light with low intensity</li>
              <li>Environment: Sunset preset</li>
              <li>In this Configuration you can hover your mouse through the model and 
                it will move accordingly no need for any dragging. 
                The speed in which the rotation occurs can be changed and further modifications are possible </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home