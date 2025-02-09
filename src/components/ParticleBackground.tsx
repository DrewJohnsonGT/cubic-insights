'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export const ParticleBackground = () => {
  const { resolvedTheme } = useTheme();

  const [init, setInit] = useState(false);
  const [foreground, setForeground] = useState<string>('#2B261F');
  const [background, setBackground] = useState<string>('#FAF8F5');

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
      const bgValue = computedStyle.getPropertyValue('--background').trim();

      setForeground(`hsl(${fgValue})`);
      setBackground(`hsl(${bgValue})`);
    });
  }, [resolvedTheme]);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: background,
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
            distance: 200,
            duration: 0.8,
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
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [foreground, background],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};
