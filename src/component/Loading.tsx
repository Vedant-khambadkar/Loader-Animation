import Ankou from "./Ankou"
import {Young} from "./Young"
import Background from "./Background";

import { OrbitControls,Environment, ContactShadows } from '@react-three/drei';



export const Loading = () => {
  return (
    <>
   <OrbitControls
      minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={15}
        />
   <ambientLight
  position={[5, 5, 5]}
  intensity={1}
  castShadow
/>
   <Environment preset='forest'  blur={0.8} />
   <group position={[0,0,2]}  >
   <Background/>
   <Ankou rotation={[0,-Math.PI/2,0]} position={[3,-1,4]} scale={0.7}/>
   <Young rotation={[0,-Math.PI/2,0]} position={[-1,-1,4]} scale={0.3}/>
   </group>
 <ContactShadows
  position={[0, -1.1, 0]}
  scale={10}                
  opacity={0.2}
  // blur={30}
/>
 
  </>
  )
}