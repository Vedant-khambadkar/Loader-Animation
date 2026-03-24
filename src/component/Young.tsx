import { useAnimations,useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

export const Young = (props:any) => {
    const {nodes,materials,animations}=useGLTF("./models/young-korrigan/model.gltf")
  console.log(nodes)
  const group:any = useRef()
  const {actions,mixer}=useAnimations(animations,group)
  useEffect(()=>{
  actions["course_jeune"]?.play()
  mixer.timeScale =1.6;
  },[])
  return (
   
   <group ref={group} {...props} dispose={null} >
 

    <primitive object={nodes.root}/>
    <skinnedMesh 
    geometry={nodes.Jeune.geometry}
   material={materials["color_main.003"]}
    skeleton={nodes.Jeune.skeleton}
    />
  
   </group>

  
  )
}

useGLTF.preload("./models/young-korrigan/model.gltf")