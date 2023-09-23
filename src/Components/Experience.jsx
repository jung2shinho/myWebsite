import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";

const Experience = () => {
   return (
      // Allows users to control the object
      <PresentationControls
         speed={1.5}
         global
         zoom={0.7}
         polar={[-1, Math.PI / 4]}
      >
      <mesh> 
         <boxGeometry />
         <meshNormalMaterial />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0,0]}>
         <planeGeometry args={[170,170]} />
         <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1,2}
            minDepthThreshold={.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5} />
      </mesh>
      </PresentationControls>
   )
};

export default Experience; 