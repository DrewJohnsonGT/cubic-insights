import { Cube } from '~/components/Cube';
import { ParticleBackground } from '~/components/ParticleBackground';
import { ThemeToggle } from '~/components/ThemeToggle';
import { APP_NAME } from '~/utils/constants';

const NUM_CUBES = 5;
const CUBE_SIZE_DIFFERENCE = 1;
const STARTING_CUBE_SIZE = 3;

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen">
      <ParticleBackground />
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <div className="relative flex size-full items-center justify-center gap-24">
        <div className="relative">
          {Array.from({ length: NUM_CUBES }).map((_, i) => (
            <Cube
              key={i}
              size={`${STARTING_CUBE_SIZE + i * CUBE_SIZE_DIFFERENCE}rem`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          ))}
        </div>
        <h1 className="text-5xl font-bold leading-none text-foreground">
          {APP_NAME}
        </h1>
      </div>
    </div>
  );
}
