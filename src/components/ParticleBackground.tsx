'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export const ParticleBackground = () => {
  const { resolvedTheme } = useTheme();

  const [init, setInit] = useState(false);
  const [foreground, setForeground] = useState<string>('#2B261F');

  // Load tsparticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Update the CSS colors when the theme changes.
  useEffect(() => {
    requestAnimationFrame(() => {
      const computedStyle = getComputedStyle(document.documentElement);
      const fgValue = computedStyle.getPropertyValue('--foreground').trim();

      setForeground(`hsl(${fgValue})`);
    });
  }, [resolvedTheme]);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 20,
            duration: 2,
          },
        },
      },
      particles: {
        color: {
          value: foreground,
        },
        links: {
          color: foreground,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: {
            default: 'bounce' as const,
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0.25, max: 2 },
        },
      },
      detectRetina: true,
      zIndex: 1,
    }),
    [foreground],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};
