import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Office2(props) {
  const { scene } = useGLTF('models/Office2.glb')
  
  // Clone the scene to avoid issues with reuse
  const clonedScene = React.useMemo(() => scene.clone(), [scene])
  
  return <primitive object={clonedScene} {...props} />
}

// Preload the model
useGLTF.preload('models/Office2.glb')