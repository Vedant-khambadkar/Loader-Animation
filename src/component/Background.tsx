import { Rock } from "./Rock"
import {Tree}  from "./Tree"
import { Lamp } from "./Lamp"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"

const OFFSET_X=20;
const LAMPS_NB=20;
const SPEED_LAMPS=0.1;
const ROCKS_NB=20;
const SPEED_ROCKS=0.1;
const TREES_NB=20;
const SPEED_TREES=0.1;
const FAR_TREES=8;
const SPEED_FAR_TREES=0.8;
const MovingItem =(props)=>{
    const ref=useRef()

    useFrame((_state,delta)=>{
        ref.current.position.x+=delta * props.speed;

        if(ref.current.position.x>=OFFSET_X){
            ref.current.position.x=-OFFSET_X
        }
    })
return <group ref={ref}  position={props.position}>{props.children}</group>

}
const Background = () => {
    const ref=useRef()
    const { lampsNb,treesNb,farTreesNb,rocksNb,speedLamps,speedTrees,speedRocks,speedFarTrees } = useControls({
        lampsNb:{
            value:LAMPS_NB,
            min:1,
            max:100,
            step:1
        },
        farTreesNb:{
            value:FAR_TREES,
            min:1,
            max:100,
            step:1
        },
        rocksNb:{
            value:ROCKS_NB,
            min:1,
            max:100,
            step:1
        },
        treesNb:{
            value:TREES_NB,
            min:1,
            max:100,
            step:1
        },
        speedLamps:{
            value:SPEED_LAMPS,
            min:1,
            max:100,
            step:1
        },
        speedTrees:{
            value:SPEED_TREES,
            min:1,
            max:100,
            step:1
        },
        speedFarTrees:{
            value:SPEED_FAR_TREES,
            min:1,
            max:100,
            step:1
        },
        speedRocks:{
            value:SPEED_ROCKS,
            min:1,
            max:100,
            step:1
        }
    })

  return (
   <>
   <group ref={ref}>
    {[...Array(lampsNb)].map((data,i)=>(
        <MovingItem key={i} position={[-OFFSET_X +(i/lampsNb)*OFFSET_X*2,-1,1.5]} speed={speedLamps}>
            <Lamp/>
        </MovingItem>
    ))}

    {[...Array(rocksNb)].map((data,i)=>(
        <MovingItem key={i} position={[-OFFSET_X +(i/rocksNb)*OFFSET_X*2,-1,6]} speed={speedRocks}>
            <Rock/>
        </MovingItem>
     ))}

    {[...Array(treesNb)].map((data,i)=>(
        <MovingItem key={i} position={[-OFFSET_X +(i/treesNb)*OFFSET_X*2,-1,0]} speed={speedTrees}>
            <Tree  scale={0.15}/>
        </MovingItem>
    ))}
    {[...Array(farTreesNb)].map((data,i)=>(
    <MovingItem key={i} position={[-OFFSET_X +(i/farTreesNb)*OFFSET_X*2,-1,-3]} speed={speedFarTrees}>
        <Tree  scale={0.30}/>
    </MovingItem>
    ))}
   </group>
     </>
  )
}

export default Background