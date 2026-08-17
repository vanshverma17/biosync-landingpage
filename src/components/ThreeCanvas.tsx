import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleDNA = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const particlesCount = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Create a double helix pattern
      const t = i * 0.05; // Time/angle
      const y = (i / particlesCount) * 20 - 10;
      const radius = 4;
      
      // Helix 1
      if (i % 2 === 0) {
        positions[i * 3] = Math.cos(t) * radius;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = Math.sin(t) * radius;
      } else {
        // Helix 2
        positions[i * 3] = Math.cos(t + Math.PI) * radius;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = Math.sin(t + Math.PI) * radius;
      }
      
      // Add slight noise
      positions[i * 3] += (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 1] += (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 2] += (Math.random() - 0.5) * 0.3;
    }
    return positions;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const ThreeCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <ParticleDNA />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
};
