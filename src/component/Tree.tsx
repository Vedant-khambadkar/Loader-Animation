
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const  Tree=(props:any)=> {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/tree-spruce/model.gltf");
  console.log(materials)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes["tree-spruce"].geometry}
        material={materials.color_main}
        />
        
    </group>
  );
}

useGLTF.preload("./models/tree-spruce/model.gltf");