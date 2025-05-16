
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const SpinningMesh: React.FC = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#9b87f5" emissive="#7E69AB" roughness={0.3} metalness={0.1} />
    </mesh>
  );
};

const Luna3DAvatar: React.FC = () => {
  return (
    <Canvas style={{ width: '60px', height: '60px' }} camera={{ position: [0, 0, 2.5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <SpinningMesh />
    </Canvas>
  );
};

export default Luna3DAvatar;
