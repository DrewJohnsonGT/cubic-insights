import { Founders } from '~/components/Founders';
import { NavigationHeader } from '~/components/NavigationHeader';
import { ParticleBackground } from '~/components/ParticleBackground';
import { Products } from '~/components/Products';
import { Card } from '~/components/ui/Card';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { APP_NAME, APP_SLOGAN } from '~/utils/constants';

const Header = ({ id, label }: { id: string; label: string }) => (
  <h2 className="my-8 text-center text-4xl font-bold" id={id}>
    {label}
  </h2>
);

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <ScrollArea className="h-screen w-screen pb-4">
        <NavigationHeader />
        <div className="relative flex size-full flex-col items-center justify-center">
          <div className="flex flex-col gap-4">
            <Card className="my-32 flex flex-col items-center gap-20 bg-background/20 p-10 backdrop-blur-sm md:flex-row">
              <ParticleBackground />
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold leading-none text-foreground">
                  {APP_NAME}
                </h1>
                <h2 className="text-2xl font-bold italic leading-none text-primary">
                  {APP_SLOGAN}
                </h2>
              </div>
            </Card>
          </div>
          <Card className="container flex flex-col gap-4 bg-background/20 backdrop-blur-sm">
            <Header id="products" label="Products" />
            <Products />
            <Header id="founders" label="Founders" />
            <Founders />
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
