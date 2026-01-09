"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
            <MeshDistortMaterial
                color="#0ea5e9" // sky-500
                attach="material"
                distort={0.4} // Strength of distortion
                speed={1.5} // Speed of distortion
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const Particles = () => {
    const count = 200;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = new THREE.Object3D();

    // Generate random positions
    const particles = new Array(count).fill(0).map(() => ({
        position: [
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
        ],
        factor: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.01 + 0.002
    }));

    useFrame(() => {
        if (!mesh.current) return;

        particles.forEach((particle, i) => {
            const { position, speed } = particle;
            // Rotate particles slowly
            const t = speed;

            // Update dummy object position
            dummy.position.set(position[0], position[1], position[2]);
            dummy.rotation.x += t;
            dummy.rotation.y += t;
            dummy.updateMatrix();

            // Apply to instance
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.05, 0]} />
            <meshBasicMaterial color="#34d399" wireframe />
        </instancedMesh>
    );
};

export const Scene3D = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-30 pointer-events-none md:opacity-50">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
                <Particles />
                {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
            </Canvas>
        </div>
    );
};
