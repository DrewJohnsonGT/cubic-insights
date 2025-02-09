import clsx from 'clsx';

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
    '[transform:rotateY(0deg)_translateZ(calc(var(--cubeSize)/2))] bg-blue-500/50',
  back: '[transform:rotateY(180deg)_translateZ(calc(var(--cubeSize)/2))] bg-green-500/50',
  right:
    '[transform:rotateY(90deg)_translateZ(calc(var(--cubeSize)/2))] bg-red-500/50',
  left: '[transform:rotateY(-90deg)_translateZ(calc(var(--cubeSize)/2))] bg-yellow-500/50',
  top: '[transform:rotateX(-90deg)_translateZ(calc(var(--cubeSize)/2))] bg-purple-500/50',
  bottom:
    '[transform:rotateX(90deg)_translateZ(calc(var(--cubeSize)/2))] bg-pink-500/50',
};

export const Cube = () => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center overflow-visible',
        'h-[var(--cubeSize)] w-[var(--cubeSize)]',
        '[perspective:calc(var(--cubeSize)*5)]',
      )}
    >
      <div
        className={clsx(
          'relative h-full w-full transition-transform duration-1000 [transform-style:preserve-3d]',
          'animate-rotating [animation-duration:20s]',
        )}
      >
        {SIDES.map(({ position }) => (
          <div
            key={position}
            className={clsx(
              'absolute flex h-[var(--cubeSize)] w-[var(--cubeSize)] items-center justify-center border-2 border-foreground',
              sideClasses[position as keyof typeof sideClasses],
            )}
          />
        ))}
      </div>
    </div>
  );
};
