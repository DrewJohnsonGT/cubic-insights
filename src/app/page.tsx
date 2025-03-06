import { ContactForm } from '~/components/ContactForm';
import { Footer } from '~/components/Footer';
import { Founders } from '~/components/Founders';
import { NavigationHeader } from '~/components/NavigationHeader';
import { ParticleBackground } from '~/components/ParticleBackground';
import { Products } from '~/components/Products';
import { ScrollArea } from '~/components/ui/ScrollArea';
import { APP_NAME, APP_SLOGAN } from '~/utils/constants';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="w-full py-12">
    <h2 className="mb-8 text-center text-4xl font-bold">{title}</h2>
    <div className="px-4 md:px-8">{children}</div>
  </section>
);

export default function HomePage() {
  return (
    <div className="h-screen w-screen">
      <ScrollArea className="h-screen w-screen">
        <NavigationHeader />

        {/* Hero section with pattern background */}
        <div className="hero-section">
          {/* Pattern background applied only to hero */}
          <div className="bg-pattern"></div>

          {/* Hero content */}
          <div className="hero-content my-32 flex flex-col items-center gap-20 bg-background/10 p-10 backdrop-blur-sm md:flex-row">
            <ParticleBackground />
            <div className="flex w-full flex-col items-center gap-4">
              <h1 className="text-center font-['Qube'] text-7xl font-bold leading-none text-foreground drop-shadow-[0px_0px_16px_hsl(var(--foreground))]">
                {APP_NAME}
              </h1>
              <h2 className="text-2xl font-bold italic leading-none">
                {APP_SLOGAN.split(',').map((word, index) => (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>

        {/* Main content with radial background */}
        <div className="bg-radial w-full">
          <div className="flex flex-col items-center justify-center">
            <Section id="products" title="Products">
              <Products />
            </Section>

            <Section id="founders" title="Founders">
              <Founders />
            </Section>

            <Section id="contact" title="Contact">
              <ContactForm />
            </Section>
          </div>
          <Footer />
        </div>
      </ScrollArea>
    </div>
  );
}
