'use client';

import { useScrollStore } from '@/app/stores/scrollStore';
import { useProgress } from '@react-three/drei';
import { usePortalStore, useThemeStore } from '@stores';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

const AwwardsBadge = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const isPortalActive = usePortalStore((state) => !!state.activePortalId);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const color = useThemeStore((state) => state.theme.color);
  const { progress } = useProgress();

  const [loaded, setLoaded] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => { setLoaded(progress === 100) }, [progress]);

  useEffect(() => {
    if (loaded) {
      gsap.to(badgeRef.current, {
        duration: 2,
        delay: 2,
        right: 0,
        onComplete: () => setStartAnimation(true),
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (isPortalActive) return;
    if (startAnimation && badgeRef.current) {
      gsap.to(badgeRef.current, {
        right: -scrollProgress * 1000,
        duration: 0,
        ease: 'power2.out',
      });
    }

    return () => {
      gsap.killTweensOf(badgeRef.current);
    }
  }, [startAnimation, scrollProgress]);

  useEffect(() => {
    if (!badgeRef.current) return;
    badgeRef.current.style.scale = isMobile ? '0.7' : '0.9';
  }, [isMobile]);

  useEffect(() => {
    if (fillRef.current) {
      gsap.to(fillRef.current, {
        color,
        duration: 1,
      });
    }
  }, [color]);

  return (
    <div
      id="awwwards"
      ref={badgeRef}
      style={{
        position: 'fixed',
        zIndex: 999,
        transform: 'translateY(-50%)',
        transformOrigin: 'right top',
        top: '50%',
        right: -100,
      }}
    >
      <div
        style={{
          width: 56,
          minHeight: 178,
          background: '#fff',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          writingMode: 'vertical-rl',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          fontSize: '0.7rem',
          padding: '0.9rem 0.55rem',
          gap: '0.5rem',
        }}
      >
        <span style={{ color }} ref={fillRef}>3x Hackathon Wins</span>
        <span>Scotiabank</span>
        <span>UofT</span>
      </div>
    </div>
  );
};

export default AwwardsBadge;
