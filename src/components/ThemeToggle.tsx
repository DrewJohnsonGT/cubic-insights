'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Skeleton } from './ui/Skeleton';
import { useTheme } from 'next-themes';
import { RxMoon, RxSun } from 'react-icons/rx';
import { cn } from '~/utils/cn';

export const ThemeToggle = () => {
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
        className={cn(
          'size-[1.2rem] transition-transform duration-300',
          resolvedTheme === 'light'
            ? 'rotate-0 scale-100'
            : '-rotate-90 scale-0',
        )}
      />
      <RxMoon
        className={cn(
          'absolute size-[1.2rem] transition-transform duration-300',
          resolvedTheme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0',
        )}
      />
    </Button>
  );
};
