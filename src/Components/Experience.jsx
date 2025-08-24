import { OrbitControls, Preload } from "@react-three/drei";
import { Avatar } from "../Components/Avatar";
import { Office2 } from "../Components/Office2";

export const Experience = () => {
   const animation = "Typing"
  return (
    <>
      <Preload all />
      <OrbitControls 
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        maxDistance={10000}
        minDistance={50}
      /> 
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[0, 10, 0]} intensity={0.5} />
      <group position-y={-1}>
      
      {/* Avatar and Office Components below */}
         <Avatar animation={animation} position-x={0} position-y={-46} position-z={6} />
         <Office2 scale={100} position-x={5} position-y={-50} position-z={0}/>
         {/* { animation === "Typing" && (
            <mesh scale={[1,1,1]} position-y={0}>
            </mesh>
         )}          */}
         <mesh scale={500} rotation-x={-Math.PI*0.5} position-y={-50}>
            <planeGeometry args={[1, 1, 1, 1]} />
            <meshBasicMaterial color="white" />
         </mesh>

      </group>
    </>
  );
};
