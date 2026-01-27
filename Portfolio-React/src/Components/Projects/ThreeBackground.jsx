import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function FloatingSpheres() {
  const meshRef = useRef([]);
  const sphereCount = 30;

  // Generate random positions once
  const positions = useMemo(
    () =>
      Array.from({ length: sphereCount }, () => [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20,
      ]),
    []
  );

  useFrame(({ clock }) => {
    meshRef.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.y = Math.sin(clock.getElapsedTime() + i) * 2;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  });

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} ref={(el) => (meshRef.current[i] = el)} position={pos}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#6c63ff" />
        </mesh>
      ))}
    </>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1, // behind content
        width: "100%",
        height: "100%",
        pointerEvents: "none", // don't block mouse
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingSpheres />
    </Canvas>
  );
}
