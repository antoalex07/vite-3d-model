import React, { Suspense } from 'react';
import Final from "../../public/Final";
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import RotatingModel from '../components/RotatingModel';
import HoveringModel from '../components/HoveringModel';
import { Picker } from '../components/Shoe';
import Shoe from "../components/Shoe"

const Home = () => {
  return (
    <div className='home'>

      <div className='config'>
        <h2>CONFIGURATION - I</h2>      
        <div className="config__container">
          <div className="model__container">
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
          <div className="details__container">
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

      <div className='config'>
        <h2>CONFIGURATION - II</h2>      
        <div className="config__container">
          <div className="model__container">
            <Canvas>
              <ambientLight intensity={1}/>
              <Suspense fallback={null}>
                <RotatingModel/>
              </Suspense>
              <Environment preset='city' />
            </Canvas>
          </div>
          <div className="details__container">
            <h3>Model Configuration Details:</h3>
            <ul>
              <li>Zoom: Disabled</li>
              <li>Rotation Restrictions: Enabled</li>
              <li>Lighting: Ambient light with low intensity</li>
              <li>Environment: City preset</li>
              <li>The model here acts like a video and is coded to rotate in a given speed user cannot drag on it or anything</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="config">
        <h2>CONFIGURATION - III</h2>      
        <div className="config__container">
          <div className="model__container">
            <Canvas>
              <ambientLight intensity={1}/>
              <Suspense fallback={null}>
                <HoveringModel/>
              </Suspense>
              <Environment preset='lobby' />
            </Canvas>
          </div>
          <div className="details__container">
            <h3>Model Configuration Details:</h3>
            <ul>
              <li>Zoom: Disabled</li>
              <li>Rotation Restrictions: Disabled</li>
              <li>Lighting: Ambient light with low intensity</li>
              <li>Environment: Dawn preset</li>
              <li>In this Configuration you can hover your mouse through the model and 
                it will move accordingly no need for any dragging. 
                The speed in which the rotation occurs can be changed and further modifications are possible </li>
            </ul>
          </div>
        </div>
      </div>  
      
      <div className='config'>
        <h2>CONFIGURATION - IV</h2>      
        <div className="config__container">
          <div className="model__container">
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
          <div className="details__container">
            <h3>Model Configuration Details:</h3>
            <ul>
              <li>Zoom: Disabled</li>
              <li>Rotation Restrictions: Enabled(360 degreees horizontal only)</li>
              <li>Lighting: Ambient light with low intensity, Spot lights </li>
              <li>Environment: trace backs to a file that uses an image with hdr format as the environment</li>
              <li>Product Configurator that enables the user to design the Product 
                with various colors of choice. The color selection now can be chosen from all
                the hexadecimal options available. This can be limited to the colors of client
                choice. Also a floating effect is also included in the model </li>
              <li>Working: Just click a part of the model you want to change the color 
                then the color palette and the part will be shown make necessary changes 
                click somwhere other than the model the color palette will be gone
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home