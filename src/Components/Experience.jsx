import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Avatar } from "../Components/Avatar";
import { Office } from "../Components/Office";

export const Experience = () => {
   const animation = "Typing"
  return (
    <>
      <OrbitControls /> 
      <ambientLight intensity={1} />
      <group position-y={-1}>
         <ContactShadows
            opacity={1}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
            />
      
      {/* Avatar and Office Components below */}
         <Avatar animation={animation}position-y={-50} />
         <Office scale={90} position-x={-170} position-y={-50} position-z={-67}/>
         {/* { animation === "Typing" && (
            <mesh scale={[1,1,1]} position-y={0}>
            </mesh>
         )}          */}
         <mesh scale={500} rotation-x={-Math.PI*0.5} position-y={-50}>
            <planeGeometry />
            <meshStandardMaterial color="white" />
         </mesh>

      </group>
    </>
  );
};
