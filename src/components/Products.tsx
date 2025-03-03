import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { AppImage, IMAGES } from '~/utils/images';

interface Product {
  name: string;
  description: string[];
  logo: AppImage;
  images: { light: AppImage; dark: AppImage }[];
}

const PRODUCTS: Product[] = [
  {
    name: 'PCIT Tracker',
    description: [
      'A comprehensive tool designed to simplify processes for PCIT therapists.',
      'Streamline paperwork, manage data efficiently, and focus more time on supporting families through effective intervention.',
      'Built with security and HIPAA compliance at its core.',
    ],
    logo: IMAGES.PCITTrackerLogo,
    images: [
      {
        light: IMAGES.PCITTracker1,
        dark: IMAGES.PCITTracker1Dark,
      },
    ],
  },
  {
    name: 'Handle With Care Portal',
    description: ['Coming Soon!'],
    logo: IMAGES.HandleWithCarePortalLogo,
    images: [],
  },
];

function ProductCard({ name, description, logo, images }: Product) {
  return (
    <Card className="mx-auto max-w-4xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center gap-12 py-8">
        <div className="relative w-full px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-30"></div>
          <Image
            src={logo.src}
            alt={`${name} logo`}
            width={logo.width}
            height={logo.height}
            className="h-36 w-full object-contain py-2"
            aria-label={`${name} logo`}
          />
        </div>

        <CardHeader className="pb-0 text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            {name}
          </CardTitle>
        </CardHeader>

        <CardContent className="max-w-2xl flex-1 px-8">
          {description.map((paragraph, index) => (
            <p
              className="mb-4 text-lg leading-relaxed text-muted-foreground"
              key={index}
            >
              {paragraph}
            </p>
          ))}
        </CardContent>

        {images.length > 0 && (
          <div className="w-full max-w-2xl px-8 pt-4">
            <div className="overflow-hidden rounded-lg border-2 border-border shadow-md">
              {images.map(({ light, dark }, index) => (
                <div key={index} className="relative">
                  <Image
                    src={light.src}
                    alt={`${name} screenshot ${index + 1}`}
                    width={light.width}
                    height={light.height}
                    className="h-auto w-full object-cover dark:hidden"
                  />
                  <Image
                    src={dark.src}
                    alt={`${name} screenshot ${index + 1}`}
                    width={dark.width}
                    height={dark.height}
                    className="hidden h-auto w-full object-cover dark:block"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export const Products = () => (
  <div className="flex flex-wrap gap-4">
    {PRODUCTS.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);
