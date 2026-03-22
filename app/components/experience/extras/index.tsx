'use client';

import { Html, Text, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import * as THREE from "three";

import { usePortalStore } from "@stores";

const writingLinks = [
  {
    title: "ChainWatch AI: An Agentverse-Powered Crypto Companion",
    url: "https://medium.com/@aliyasiraltowaiji/chainwatch-ai-an-agentverse-powered-crypto-companion-91fe49efcc38",
  },
  {
    title: "How Hackathons Supercharged My Technical and Career Growth",
    url: "https://medium.com/@aliyasiraltowaiji/how-hackathons-supercharged-my-technical-and-career-growth-and-how-to-win-your-first-one-24d868993493",
  },
  {
    title: "What I Wish I Knew Before Starting University CS",
    url: "https://medium.com/@aliyasiraltowaiji/what-i-wish-i-knew-before-starting-university-cs-bfb9635be985",
  },
];

const gallery = [
  "/portfolio/photos/photo1.jpg",
  "/portfolio/photos/photo3.jpg",
  "/portfolio/photos/photo6.jpg",
  "/portfolio/photos/photo8.jpg",
  "/portfolio/photos/photo10.jpg",
  "/portfolio/photos/photo12.jpg",
];

const Extras = () => {
  const { camera } = useThree();
  const isActive = usePortalStore((state) => state.activePortalId === "extras");
  const data = useScroll();

  useEffect(() => {
    data.el.style.overflow = isActive ? "hidden" : "auto";

    if (isActive) {
      if (isMobile) {
        gsap.to(camera.position, { x: 0, y: -41.8, z: 11.8, duration: 1 });
      } else {
        gsap.to(camera.position, { x: 0, y: -42.2, z: 11.1, duration: 1 });
      }
    }
  }, [camera, data.el, isActive]);

  useFrame((state, delta) => {
    if (isActive && !isMobile) {
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -(state.pointer.x * Math.PI) / 9, 0.025);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, 11.1 - state.pointer.y * 0.6, 5, delta);
    }
  });

  return (
    <group>
      <Text
        font="./soria-font.ttf"
        fontSize={0.38}
        maxWidth={3.4}
        color="#0b0b0b"
        anchorX="left"
        anchorY="top"
        position={[-1.8, 1.25, 0.08]}>
        MORE THAN CODE
      </Text>
      {isActive && <Html
        transform
        position={[0, -0.05, 0.12]}
        distanceFactor={2.6}
        wrapperClass="extras-html">
        <div className="extras-card">
          <div className="extras-topline">
            <span>Writing</span>
            <span>Photography</span>
            <span>Contact</span>
          </div>

          <div className="extras-grid">
            <section>
              <h3>Writing</h3>
              <p>I write about hackathons, student growth, and building in public.</p>
              <div className="extras-links">
                {writingLinks.map((item) => (
                  <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h3>Photography</h3>
              <p>A creative lane outside code that sharpens visual taste and composition.</p>
              <div className="extras-gallery">
                {gallery.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Ali Towaiji photography"
                    width={320}
                    height={320}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="extras-bottom">
            <div>
              <h4>Resume-backed highlights</h4>
              <ul>
                <li>FastAPI + React work at Scotiabank tied to high-scale customer data workflows.</li>
                <li>Dockerized tools for 200+ users at the University of Toronto.</li>
                <li>Club leadership growth to 40+ members with workshops and hackathons.</li>
              </ul>
            </div>
            <div>
              <h4>Reach out</h4>
              <p>aliyasiraltowaiji@gmail.com</p>
              <p>linkedin.com/in/alitowaiji</p>
              <a href="https://ali-towaiji.tiiny.site" target="_blank" rel="noreferrer">
                Open resume
              </a>
            </div>
          </div>
        </div>
      </Html>}
    </group>
  );
};

export default Extras;
