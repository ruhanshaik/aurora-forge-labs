import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const isMobile = w < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particleCount = isMobile ? 400 : 1500;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.3,
      color: 0x2563EB,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    const meshes: THREE.Mesh[] = [];
    if (!isMobile) {
      const shapes = [
        new THREE.IcosahedronGeometry(5, 1),
        new THREE.TorusGeometry(4, 1.2, 8, 16),
        new THREE.OctahedronGeometry(4, 0),
      ];
      const positions = [[-18, 8, -15], [16, -8, -20], [-12, -12, -10]];
      const colors = [0x2563EB, 0x0EA5E9, 0x2563EB];

      shapes.forEach((g, i) => {
        const m = new THREE.MeshBasicMaterial({
          color: colors[i],
          wireframe: true,
          transparent: true,
          opacity: 0.12,
        });
        const mesh = new THREE.Mesh(g, m);
        mesh.position.set(positions[i][0], positions[i][1], positions[i][2]);
        scene.add(mesh);
        meshes.push(mesh);
      });
    }

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / w - 0.5);
      mouseY = (e.clientY / h - 0.5);
    };
    window.addEventListener('mousemove', onMouseMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;
      meshes.forEach((m, i) => {
        m.rotation.y += [0.0012, 0.0008, 0.0015][i];
        m.rotation.x += [0.0008, 0.0012, 0.0006][i];
      });
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default HeroCanvas;
