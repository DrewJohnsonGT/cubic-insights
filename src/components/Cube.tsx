import React from 'react';
import { cn } from '~/utils/cn';

const SIDES = [
  { position: 'front' },
  { position: 'back' },
  { position: 'top' },
  { position: 'bottom' },
  { position: 'left' },
  { position: 'right' },
];

const sideClasses = {
  front:
    '[transform:rotateY(0deg)_translateZ(calc(var(--cubeSize)/2))] bg-blue-500/20',
  back: '[transform:rotateY(180deg)_translateZ(calc(var(--cubeSize)/2))] bg-green-500/20',
  right:
    '[transform:rotateY(90deg)_translateZ(calc(var(--cubeSize)/2))] bg-red-500/20',
  left: '[transform:rotateY(-90deg)_translateZ(calc(var(--cubeSize)/2))] bg-yellow-500/20',
  top: '[transform:rotateX(-90deg)_translateZ(calc(var(--cubeSize)/2))] bg-purple-500/20',
  bottom:
    '[transform:rotateX(90deg)_translateZ(calc(var(--cubeSize)/2))] bg-pink-500/20',
};

export const Cube = ({
  size = '4rem',
  className,
}: {
  size: string;
  className?: string;
}) => {
  return (
    <div
      style={{ '--cubeSize': size } as React.CSSProperties}
      className={cn(
        'flex items-center justify-center overflow-visible',
        'size-[var(--cubeSize)]',
        '[perspective:calc(var(--cubeSize)*5)]',
        className,
      )}
    >
      <div
        className={cn(
          'relative size-full transition-transform duration-1000 [transform-style:preserve-3d]',
          'animate-rotating [animation-duration:20s]',
        )}
      >
        {SIDES.map(({ position }) => (
          <div
            key={position}
            className={cn(
              'absolute flex size-[var(--cubeSize)] items-center justify-center border border-foreground',
              sideClasses[position as keyof typeof sideClasses],
            )}
          />
        ))}
      </div>
    </div>
  );
};
