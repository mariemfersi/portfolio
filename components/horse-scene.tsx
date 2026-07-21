'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type HorseProfile = {
  name: string;
  breed: string;
  mood: string;
  speed: number;
  accent: string;
  description: string;
};

// Abstract Waving Golden Sandscape/Risk Manifold (longevity risk surface)
function GoldManifold() {
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  useFrame((state) => {
    if (!geomRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = geomRef.current.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      // Dynamic mathematical wave formula representing dunes / volatility landscape
      const dist = Math.sqrt(x * x + y * y);
      const wave = Math.sin(dist - time * 1.5) * 0.12 + Math.cos(x + time * 1.0) * 0.06;
      
      // Interact with mouse position (state.pointer maps x/y to [-1, 1])
      const px = state.pointer.x * 2.5;
      const py = state.pointer.y * 2.5;
      const mouseDist = Math.sqrt((x - px) ** 2 + (y - py) ** 2);
      const warp = Math.exp(-mouseDist * 1.0) * 0.38;

      pos.setZ(i, wave + warp);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -0.6, 0]}>
      <planeGeometry ref={geomRef} args={[6.5, 6.5, 24, 24]} />
      <meshStandardMaterial 
        color="#c5a059" 
        wireframe={true} 
        transparent={true} 
        opacity={0.28} 
        emissive="#8a692a"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// Low-poly equestrian wireframe constellation
function PegasusVector({ accent }: { accent: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Vector line segments forming the horse & wing shapes
  const horseLines = [
    // Torso/Backbone
    [-0.6, 0.4, 0], [0.6, 0.5, 0],
    // Neck
    [0.6, 0.5, 0], [0.85, 1.1, 0],
    // Head
    [0.85, 1.1, 0], [1.05, 1.0, 0],
    [1.05, 1.0, 0], [0.95, 0.85, 0],
    [0.95, 0.85, 0], [0.75, 0.85, 0],
    [0.75, 0.85, 0], [0.6, 0.5, 0],

    // Front Leg 1
    [0.6, 0.5, 0], [0.68, 0.0, 0.2],
    [0.68, 0.0, 0.2], [0.72, -0.5, 0.2],
    // Front Leg 2
    [0.6, 0.5, 0], [0.52, 0.0, -0.2],
    [0.52, 0.0, -0.2], [0.48, -0.5, -0.2],

    // Back Leg 1
    [-0.6, 0.4, 0], [-0.5, -0.1, 0.2],
    [-0.5, -0.1, 0.2], [-0.55, -0.55, 0.2],
    // Back Leg 2
    [-0.6, 0.4, 0], [-0.68, -0.1, -0.2],
    [-0.68, -0.1, -0.2], [-0.72, -0.55, -0.2],

    // Tail
    [-0.6, 0.4, 0], [-0.9, 0.15, 0.05],
    [-0.9, 0.15, 0.05], [-1.05, -0.12, 0.1],

    // Left Wing
    [0.0, 0.45, 0], [0.2, 1.3, 0.65],
    [0.2, 1.3, 0.65], [-0.45, 1.1, 0.45],
    [-0.45, 1.1, 0.45], [0.0, 0.45, 0],

    // Right Wing
    [0.0, 0.45, 0], [0.2, 1.3, -0.65],
    [0.2, 1.3, -0.65], [-0.45, 1.1, -0.45],
    [-0.45, 1.1, -0.45], [0.0, 0.45, 0],
  ];

  // Map to Vector3 format for Three.js geometry setup
  const linePoints = horseLines.map(p => new THREE.Vector3(...p));
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Slow majestic float/rotation physics
    groupRef.current.position.y = Math.sin(time * 1.2) * 0.1 + 0.35;
    groupRef.current.rotation.y = time * 0.16;
    groupRef.current.rotation.z = Math.sin(time * 0.6) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Draw the wireframe skeleton */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial 
          color={accent} 
          linewidth={2} 
          transparent={true} 
          opacity={0.85} 
        />
      </lineSegments>

      {/* Adding glowing nodes at critical joint vertices */}
      {[
        [-0.6, 0.4, 0], [0.6, 0.5, 0], [0.85, 1.1, 0], [1.05, 1.0, 0],
        [0.2, 1.3, 0.65], [0.2, 1.3, -0.65], [-0.45, 1.1, 0.45], [-0.45, 1.1, -0.45]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Ambient glowing core inside the body */}
      <mesh position={[0, 0.45, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color={accent} transparent={true} opacity={0.35} />
      </mesh>
    </group>
  );
}

function Scene({ accent }: { accent: string }) {
  return (
    <>
      <ambientLight intensity={0.5} color="#fff3e0" />
      <directionalLight position={[6, 8, 4]} intensity={1.8} color="#ffcc80" />
      <directionalLight position={[-6, 3, -4]} intensity={0.7} color="#f97316" />
      <pointLight position={[0, 3, 0]} intensity={1.4} color="#fbbf24" />
      
      {/* Warm golden particles */}
      <Sparkles 
        count={60} 
        scale={5} 
        size={3} 
        speed={0.25} 
        opacity={0.6} 
        color="#f97316"
      />
      <Sparkles 
        count={30} 
        scale={4.5} 
        size={2.2} 
        speed={0.18} 
        opacity={0.45} 
        color="#fbbf24"
      />

      <GoldManifold />
      <PegasusVector accent={accent} />
    </>
  );
}

export function HorseScene() {
  const [horseProfile, setHorseProfile] = useState<HorseProfile | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch('/api/horse');
        const data = (await response.json()) as HorseProfile;
        setHorseProfile(data);
      } catch {
        setHorseProfile({
          name: 'Astra-Constellation',
          breed: 'Equestrian Vector Core',
          mood: 'disciplined',
          speed: 80,
          accent: '#d4af37',
          description: 'A structural model outlining forward momentum, precision geometry, and temporal balance.',
        });
      }
    };

    void loadProfile();
  }, []);

  const accent = horseProfile?.accent ?? '#d4af37';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative h-[480px] w-full overflow-hidden rounded-[2.5rem] border border-[#c5a059]/20 bg-[#061e15]/90 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-md"
    >
      {/* Tech-grid overlay lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(197,160,89,0.06),_transparent_45%),radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.02),_transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061e15] to-transparent pointer-events-none" />

      {/* Diagnostics HUD Panel - Top Left */}
      <div className="absolute left-6 top-6 z-20 flex flex-col gap-1 select-none pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#c5a059] font-mono">system: operational</span>
        <div className="rounded-md border border-[#c5a059]/15 bg-black/40 px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#ded6bf] backdrop-blur">
          {horseProfile?.name ?? 'Astra-Constellation'}
        </div>
      </div>

      {/* Diagnostics HUD Panel - Top Right */}
      <div className="absolute right-6 top-6 z-20 max-w-[250px] rounded-[1.3rem] border border-[#c5a059]/15 bg-black/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md select-none">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37] font-mono">Visual Core Engine</p>
        <h3 className="mt-1 text-base font-semibold text-stone-200">{horseProfile?.breed ?? 'Equestrian Vector Core'}</h3>
        <p className="mt-2 text-xs leading-5 text-stone-400 font-sans">
          {horseProfile?.description ?? 'A structural model outlining forward momentum, precision geometry, and temporal balance.'}
        </p>
      </div>

      {/* Diagnostics HUD Panel - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-full border border-[#c5a059]/15 bg-black/50 px-4 py-2 text-xs font-mono text-[#ded6bf] shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur">
        <span className="flex items-center gap-1.5 text-[#d4af37] font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          State: {horseProfile?.mood ?? 'disciplined'}
        </span>
        <span className="text-[#c5a059]/30">•</span>
        <span>Output: {horseProfile?.speed ?? 80} FPS</span>
      </div>

      {/* 3D Canvas element */}
      <div className="absolute inset-0 z-10 h-full w-full">
        <Canvas camera={{ position: [0, 0.8, 5.0], fov: 42 }} shadows>
          <Scene accent={accent} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        </Canvas>
      </div>

      {/* Ambient Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.01),_transparent_75%)]" />
    </motion.div>
  );
}
