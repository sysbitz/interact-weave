import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

export type SceneVariant = "torus" | "knot" | "grid" | "rings" | "crystal";

interface Props {
  variant: SceneVariant;
  accent?: string;
  className?: string;
}

/* ---------- Variant: torus (Work) ---------- */
const TorusObj = ({ accent }: { accent: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    const { mouse } = state;
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += (mouse.y * 0.4 - mesh.current.rotation.x) * 0.04;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={mesh} scale={1.4}>
        <torusGeometry args={[1, 0.35, 64, 128]} />
        <MeshDistortMaterial color={accent} distort={0.3} speed={1.4} roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
};

/* ---------- Variant: knot (Services) ---------- */
const KnotObj = ({ accent }: { accent: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.004;
    mesh.current.rotation.x += (state.mouse.x * 0.3 - mesh.current.rotation.x) * 0.04;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.2}>
        <torusKnotGeometry args={[0.9, 0.28, 200, 32]} />
        <MeshWobbleMaterial color={accent} factor={0.25} speed={1.2} roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
};

/* ---------- Variant: grid (Process) ---------- */
const GridObj = ({ accent }: { accent: string }) => {
  const group = useRef<THREE.Group>(null);
  const cubes = useMemo(() => {
    const arr: { p: [number, number, number]; d: number }[] = [];
    const N = 5;
    for (let x = 0; x < N; x++) {
      for (let z = 0; z < N; z++) {
        arr.push({
          p: [(x - (N - 1) / 2) * 0.55, 0, (z - (N - 1) / 2) * 0.55],
          d: Math.hypot(x - (N - 1) / 2, z - (N - 1) / 2),
        });
      }
    }
    return arr;
  }, []);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.004;
    group.current.rotation.x += (state.mouse.y * 0.2 - group.current.rotation.x) * 0.04;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((c, i) => {
      const d = cubes[i].d;
      c.position.y = Math.sin(t * 1.6 - d * 0.9) * 0.4;
    });
  });
  return (
    <group ref={group} rotation={[-0.5, 0.4, 0]} scale={1.1}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.p}>
          <boxGeometry args={[0.42, 0.42, 0.42]} />
          <meshStandardMaterial color={accent} roughness={0.35} metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
};

/* ---------- Variant: rings (About) ---------- */
const RingsObj = ({ accent }: { accent: string }) => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z += 0.003;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + state.mouse.y * 0.3;
    group.current.rotation.y += 0.002;
  });
  return (
    <group ref={group}>
      {[1, 1.4, 1.8].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2.2 + i * 0.3, i * 0.5, 0]}>
          <torusGeometry args={[r, 0.04, 16, 128]} />
          <meshStandardMaterial color={i === 1 ? accent : "#ffffff"} roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
      <mesh>
        <icosahedronGeometry args={[0.45, 1]} />
        <MeshDistortMaterial color={accent} distort={0.4} speed={2} roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
};

/* ---------- Variant: crystal (Contact) ---------- */
const CrystalObj = ({ accent }: { accent: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.006;
    mesh.current.rotation.x += (state.mouse.y * 0.5 - mesh.current.rotation.x) * 0.05;
    const s = 1.3 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    mesh.current.scale.set(s, s, s);
  });
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={accent} roughness={0.05} metalness={0.95} flatShading />
      </mesh>
    </Float>
  );
};

const Particles = ({ count = 250 }: { count?: number }) => {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);
  useFrame((_, d) => {
    if (points.current) points.current.rotation.y += d * 0.03;
  });
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#ffffff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const Variant = ({ variant, accent }: { variant: SceneVariant; accent: string }) => {
  switch (variant) {
    case "knot": return <KnotObj accent={accent} />;
    case "grid": return <GridObj accent={accent} />;
    case "rings": return <RingsObj accent={accent} />;
    case "crystal": return <CrystalObj accent={accent} />;
    case "torus":
    default: return <TorusObj accent={accent} />;
  }
};

const PageScene = ({ variant, accent = "#ff6a1a", className }: Props) => {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 5, 4]} intensity={1.1} />
          <directionalLight position={[-4, -2, -3]} intensity={0.6} color={accent} />
          <Variant variant={variant} accent={accent} />
          <Particles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PageScene;
