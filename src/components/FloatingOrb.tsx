'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth mouse-follow rotation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.6,
        0.04
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -mouse.y * 0.3,
        0.04
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0}
          metalness={0.9}
          wireframe={false}
        />
      </Sphere>
      {/* Outer wireframe ring */}
      <Sphere args={[1.18, 32, 32]}>
        <meshBasicMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.12}
        />
      </Sphere>
    </Float>
  );
}

export default function FloatingOrb() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[520px] md:h-[520px] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        frameloop="always"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={2} color="#3b82f6" />
        <pointLight position={[-3, -3, 2]} intensity={1.5} color="#a855f7" />
        <FloatingSphere />
      </Canvas>
    </div>
  );
}

