import { Cube } from '~/components/Cube';
import { Founders } from '~/components/Founders';
import { NavigationHeader } from '~/components/NavigationHeader';
import { ParticleBackground } from '~/components/ParticleBackground';
import { Products } from '~/components/Products';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { APP_NAME } from '~/utils/constants';

const NUM_CUBES = 5;
const CUBE_SIZE_DIFFERENCE = 1;
const STARTING_CUBE_SIZE = 2;

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <ScrollArea className="h-screen w-screen pb-4">
        <ParticleBackground />
        <NavigationHeader />
        <div className="relative flex size-full flex-col items-center justify-center gap-32 pt-16">
          <div className="mt-20 flex flex-col items-center gap-24 md:flex-row">
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
          <Products />
          <Founders />
        </div>
      </ScrollArea>
    </div>
  );
}
