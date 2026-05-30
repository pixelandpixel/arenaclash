'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RankingShieldProps {
  rank: number;
  tier?: 'gold' | 'silver';
  size?: number;
}

const VERTEX = `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vPosition = worldPos.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAGMENT = `
precision highp float;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uHighlightColor;
uniform float uMetalness;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(cameraPosition - vPosition);

  float fresnel = 1.0 - max(dot(normal, viewDir), 0.0);
  fresnel = pow(fresnel, 3.0);

  float shine = sin(vUv.x * 12.0 + vUv.y * 8.0 - uTime * 2.0) * 0.5 + 0.5;
  shine = pow(shine, 4.0);
  float sweep = smoothstep(0.7, 1.0, shine);

  float rim = sin(vUv.y * 20.0 - uTime * 1.5) * 0.5 + 0.5;
  float rimGlow = smoothstep(0.85, 1.0, rim);

  vec3 baseColor = uColor;
  vec3 fresnelColor = uHighlightColor * fresnel * 0.6;
  vec3 sweepColor = uHighlightColor * sweep * 0.9;
  vec3 rimColor = vec3(1.0, 0.95, 0.7) * rimGlow * 0.3;

  vec3 finalColor = baseColor + fresnelColor + sweepColor + rimColor;
  finalColor = mix(finalColor, finalColor * 0.5, pow(1.0 - dot(normal, viewDir), 2.0) * 0.3);

  float edgeGlow = 1.0 - abs(vUv.x - 0.5) * 1.6;
  edgeGlow = pow(max(edgeGlow, 0.0), 2.0);
  finalColor += uHighlightColor * edgeGlow * 0.15 * (sin(uTime * 0.8) * 0.5 + 0.5);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export function RankingShield({ rank, tier = 'gold', size = 140 }: RankingShieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh;
    clock: THREE.Clock;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const color = tier === 'gold'
      ? new THREE.Color(0.85, 0.65, 0.15)
      : new THREE.Color(0.75, 0.75, 0.8);
    const highlight = tier === 'gold'
      ? new THREE.Color(1.0, 0.9, 0.4)
      : new THREE.Color(1.0, 1.0, 1.0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const shape = new THREE.Shape();
    const w = 1.4;
    const h = 1.8;
    const neck = 0.6;

    shape.moveTo(-w * 0.3, h * 0.5);
    shape.lineTo(-w * 0.5, h * 0.2);
    shape.lineTo(-w * 0.5, -h * 0.3);
    shape.quadraticCurveTo(-w * 0.5, -h * 0.5, 0, -h * 0.5);
    shape.quadraticCurveTo(w * 0.5, -h * 0.5, w * 0.5, -h * 0.3);
    shape.lineTo(w * 0.5, h * 0.2);
    shape.lineTo(w * 0.3, h * 0.5);
    shape.quadraticCurveTo(0, h * 0.65, -w * 0.3, h * 0.5);

    const extrudeSettings = {
      steps: 1,
      depth: 0.25,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.04,
      bevelSegments: 6,
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: color },
        uHighlightColor: { value: highlight },
        uMetalness: { value: 0.9 },
      },
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(light);

    const clock = new THREE.Clock();

    sceneRef.current = { scene, camera, renderer, mesh, clock };

    function animate() {
      if (!sceneRef.current) return;
      const dt = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      mesh.rotation.y = Math.sin(elapsed * 0.3) * 0.3;
      mesh.rotation.x = Math.sin(elapsed * 0.2 + 1) * 0.1;

      material.uniforms.uTime.value = elapsed;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
    };
  }, [size, tier]);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      className="relative shrink-0"
    />
  );
}
