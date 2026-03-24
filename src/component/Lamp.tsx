
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const  Lamp=(props)=> {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/lamp-post/model.gltf");
  
  return (
    <group ref={group} {...props} dispose={null}>
        <group  >
      <mesh
        geometry={nodes.Cylinder096.geometry}
        material={materials["Black.012"]}
        />
      <mesh
        geometry={nodes.Cylinder096_1.geometry}
        material={materials["Yellow.007"]}
        >
            <meshBasicMaterial color={[1.2, 1.2, 0.6]} toneMapped={false} />
            
            </mesh>

        </group>
    </group>
  );
}

useGLTF.preload("./models/rock/model.gltf");