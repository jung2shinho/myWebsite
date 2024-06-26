/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/myAvatar.glb
*/

import React, { useEffect, useRef} from 'react'
import { useFBX, useGLTF, useAnimations } from '@react-three/drei'

export function Avatar(props) {
  const {animation} = props;
  const group = useRef();
  const { nodes, materials } = useGLTF('models/Avatar.glb');

  // Create animation variables
  const { animations: typingAnimation } = useFBX("animations/Typing_2.fbx");
  const { animations: standingAnimation } = useFBX("animations/Standing Idle.fbx");
  const { animations: fallingAnimation } = useFBX("animations/Falling Idle.fbx");
  
  // Rename the animation name within array
  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";

  // Takes an array of animation clip
  const { actions } = useAnimations(
    [typingAnimation[0],
    standingAnimation[0],
    fallingAnimation[0]], 
    group 
  ); 

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeIn(0.5).stop();
    };
  }, [animation]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group >

        <primitive object={nodes.Armature_1} /> 

        <skinnedMesh name="Wolf3D_Hair"
        geometry={nodes.Wolf3D_Hair.geometry} 
        material={materials.Wolf3D_Hair} 
        skeleton={nodes.Wolf3D_Hair.skeleton} />

        <skinnedMesh name="EyeLeft" 
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye} 
        skeleton={nodes.EyeLeft.skeleton} 
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />

        <skinnedMesh name="EyeRight" 
        geometry={nodes.EyeRight.geometry} 
        material={materials.Wolf3D_Eye} 
        skeleton={nodes.EyeRight.skeleton} 
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />

        <skinnedMesh name="Wolf3D_Body" 
        geometry={nodes.Wolf3D_Body.geometry} 
        material={materials.Wolf3D_Body} 
        skeleton={nodes.Wolf3D_Body.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences} />

        <skinnedMesh name="Wolf3D_Head" 
        geometry={nodes.Wolf3D_Head.geometry} 
        material={materials.Wolf3D_Skin} 
        skeleton={nodes.Wolf3D_Head.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />

        <skinnedMesh name="Wolf3D_Teeth" 
        geometry={nodes.Wolf3D_Teeth.geometry} 
        material={materials.Wolf3D_Teeth} 
        skeleton={nodes.Wolf3D_Teeth.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />

        <skinnedMesh name="Wolf3D_Outfit_Top" 
        geometry={nodes.Wolf3D_Outfit_Top.geometry} 
        material={materials.Wolf3D_Outfit_Top} 
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences} />

        <skinnedMesh name="Wolf3D_Outfit_Bottom" 
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry} 
        material={materials.Wolf3D_Outfit_Bottom} 
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary} 
        morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences} />

        <skinnedMesh name="Wolf3D_Outfit_Footwear" 
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry} 
        material={materials.Wolf3D_Outfit_Footwear} 
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary} 
        morphTargetInfluences={nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences} />
        
      </group>
    </group>
  )
}

useGLTF.preload('models/Avatar.glb')
