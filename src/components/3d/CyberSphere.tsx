import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vec3 color1 = vec3(0.1, 0.4, 0.8);
      vec3 color2 = vec3(0.2, 0.6, 1.0);
      
      float noise = sin(vPosition.x * 10.0 + time) * 
                    sin(vPosition.y * 10.0 + time) * 
                    sin(vPosition.z * 10.0 + time);
      
      vec3 finalColor = mix(color1, color2, noise);
      
      float alpha = 0.6 + 0.4 * sin(time + vUv.x * 10.0);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  return (
    <Sphere args={[2, 64, 64]} ref={meshRef}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </Sphere>
  );
};

const CyberSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
    </Canvas>
  );
};

export default CyberSphere;