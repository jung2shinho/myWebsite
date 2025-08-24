import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export function LoadingProgress() {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        minWidth: '200px'
      }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>
          Loading
        </div>
        <div style={{ 
          width: '200px', 
          height: '10px', 
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#000000',
            transition: 'width 0.3s ease',
            borderRadius: '5px'
          }} />
        </div>
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          {Math.round(progress)}% loaded
        </div>
      </div>
    </Html>
  );
}