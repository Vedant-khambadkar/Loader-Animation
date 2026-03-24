import { Loader } from '@react-three/drei';
import { Loading } from './component/Loading';
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense, useEffect } from 'react';
const audio = new Audio("/audios/Song Of Unity.mp3")

const App = () => {
 useEffect(()=>{
   audio.play()
 }
 )
  return (
    <>
    <Loader/>
      <Canvas shadows camera={{ fov: 64, position: [0, 0, 10] }}>
     
        <fog attach="fog" args={["#37e615", 12, 30]} />

        <Suspense fallback={null}>
          <Loading />
        </Suspense>

        <EffectComposer>
          <Bloom mipmapBlur radius={0.5} intensity={0.1} luminanceThreshold={0} />
        </EffectComposer>
      </Canvas>


    </>
  )
}
export default App;