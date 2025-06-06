import { ContactForm } from '~/components/ContactForm';
import { Cube } from '~/components/Cube';
import { Footer } from '~/components/Footer';
import { Founders } from '~/components/Founders';
import { Header } from '~/components/Header';
import { ParticleBackground } from '~/components/ParticleBackground';
import { Products } from '~/components/Products';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { APP_NAME, APP_SLOGAN } from '~/utils/constants';

const NUM_CUBES = 8;
const CUBE_SIZE_DIFFERENCE = 1;
const STARTING_CUBE_SIZE = 1;

const Section = ({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="w-full py-12">
    <h2 className="mb-2 text-center text-4xl font-bold">{title}</h2>
    {description && (
      <p className="text-muted-foreground mx-auto mb-8 max-w-md text-center text-lg">
        {description}
      </p>
    )}
    <div className="px-4 md:px-8">{children}</div>
  </section>
);

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <ScrollArea className="h-screen w-screen">
        <Header />

        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="bg-pattern"></div>

          <div className="bg-background/10 relative my-32 flex flex-col items-center gap-20 p-10 px-12 backdrop-blur-sm md:flex-row">
            <ParticleBackground />
            <div className="flex w-full items-center gap-4">
              <div className="flex flex-col gap-20 text-center sm:flex-row">
                <div className="relative">
                  {Array.from({ length: NUM_CUBES }).map((_, i) => (
                    <Cube
                      key={i}
                      size={`${STARTING_CUBE_SIZE + i * CUBE_SIZE_DIFFERENCE}rem`}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-foreground font-['Qube'] text-4xl leading-none font-bold drop-shadow-[0px_0px_16px_hsl(var(--foreground))] sm:text-7xl">
                    {APP_NAME}
                  </h1>
                  <h2 className="text-lg leading-none font-bold italic sm:text-2xl">
                    {APP_SLOGAN}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-radial">
          <div className="flex flex-col items-center justify-center">
            <Section
              id="products"
              title="Products"
              description="Innovative healthcare technology solutions designed to address specific challenges in the medical field."
            >
              <Products />
            </Section>

            <Section
              id="founders"
              title="Founders"
              description="Meet the team behind Cubic Insights - healthcare professionals and technologists combining their expertise to improve patient outcomes."
            >
              <Founders />
            </Section>

            <Section
              id="contact"
              title="Contact"
              description="Have questions or interested in our services? Reach out to our team for more information."
            >
              <ContactForm />
            </Section>
          </div>
          <Footer />
        </div>
      </ScrollArea>
    </div>
  );
}
