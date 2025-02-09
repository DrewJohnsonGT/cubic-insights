'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Skeleton } from './ui/Skeleton';
import { Tabs, TabsList, TabsTrigger } from './ui/Tabs';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun } from 'react-icons/rx';
import { useIsMobile } from '~/hooks/useIsMobile';

export const ThemeToggle = () => {
  const isMobile = useIsMobile();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isMobile) {
    if (!mounted) {
      return <Skeleton className="size-input" />;
    }
    return (
      <Tabs value={resolvedTheme}>
        <TabsList onClick={(e) => e.stopPropagation()} variant="compact">
          <TabsTrigger
            value="light"
            onClick={() => setTheme('light')}
            variant="compact"
          >
            <RxSun className="mr-1 size-4" />
            Light
          </TabsTrigger>
          <TabsTrigger
            value="dark"
            onClick={() => setTheme('dark')}
            variant="compact"
          >
            <RxMoon className="mr-1 size-4" />
            Dark
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  }

  return <ThemeToggleCompact />;
};

export const ThemeToggleCompact = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-input" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
      aria-label="Theme Toggle"
    >
      <RxSun
        className={`size-[1.2rem] transition-transform duration-300 ${resolvedTheme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
      />
      <RxMoon
        className={`absolute size-[1.2rem] transition-transform duration-300 ${resolvedTheme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
    </Button>
  );
};
