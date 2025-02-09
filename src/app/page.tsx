import { Cube } from '~/components/Cube';
import { ParticleBackground } from '~/components/ParticleBackground';
import { ThemeToggle } from '~/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <div className="flex size-full items-center justify-center">
        <ParticleBackground />
        <Cube />
      </div>
    </div>
  );
}
