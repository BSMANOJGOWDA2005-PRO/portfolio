import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCore({ mousePos }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Gentle mouse parallax interpolation
      const targetX = mousePos.current.x * 0.5;
      const targetY = mousePos.current.y * 0.5;
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#00f2fe"
          emissive="#7928ca"
          emissiveIntensity={0.4}
          wireframe
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ mousePos, isMobile }) {
  const pointsRef = useRef();
  const count = isMobile ? 350 : 900;

  const [positions, colors] = useMemo(() => {
    const posArr = new Float32Array(count * 3);
    const colorArr = new Float32Array(count * 3);
    const color1 = new THREE.Color('#00f2fe');
    const color2 = new THREE.Color('#7928ca');
    const color3 = new THREE.Color('#3b82f6');

    for (let i = 0; i < count; i++) {
      posArr[i * 3] = (Math.random() - 0.5) * 20;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colorArr[i * 3] = mixedColor.r;
      colorArr[i * 3 + 1] = mixedColor.g;
      colorArr[i * 3 + 2] = mixedColor.b;
    }
    return [posArr, colorArr];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;

      // Mouse influence
      pointsRef.current.position.x = mousePos.current.x * 0.3;
      pointsRef.current.position.y = mousePos.current.y * 0.3;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Scene3D() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f2fe" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#7928ca" />
        
        <FloatingCore mousePos={mousePos} />
        <ParticleField mousePos={mousePos} isMobile={isMobile} />
        <Stars radius={50} depth={50} count={isMobile ? 800 : 2500} factor={4} saturation={0} fade speed={1.5} />
      </Canvas>
    </div>
  );
}
