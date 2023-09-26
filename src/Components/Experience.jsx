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
         <Avatar animation={animation} />
         <Office position-x={-1.9} position-z={-.8} position-y={-.1}/>
         { animation === "Typing" && (
            <mesh scale={[0.8,0.5,0.8]} position-y={0.25}>
            </mesh>
         )}         
         <mesh scale={5} rotation-x={-Math.PI*0.5} position-y={-0.001}>
            <planeGeometry />
            <meshStandardMaterial color="white" />
         </mesh>

      </group>
    </>
  );
};
