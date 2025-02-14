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
    logo: IMAGES.logo,
    images: [
      {
        light: IMAGES.PCITTracker1,
        dark: IMAGES.PCITTracker1Dark,
      },
    ],
  },
];

function ProductCard({ name, description, logo, images }: Product) {
  return (
    <Card className="mx-auto max-w-4xl overflow-hidden rounded-lg border-none bg-transparent shadow-none">
      <div className="flex flex-col items-center gap-8">
        <div className="relative h-32 w-full">
          <div className="absolute bottom-0 z-0 size-[120px] w-full bg-primary" />
          <div className="relative z-10">
            <Image
              src={logo.src}
              alt={`${name} logo`}
              width={logo.width}
              height={logo.height}
              className="h-32 w-full object-contain"
              aria-label={`${name} logo`}
            />
          </div>
        </div>
        <CardHeader className="bg-card p-4 text-center">
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 bg-card p-4">
          {description.map((paragraph, index) => (
            <p className="mb-4" key={index}>
              {paragraph}
            </p>
          ))}
        </CardContent>
        <div className="w-full">
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
    </Card>
  );
}

export const Products = () => (
  <div className="grid gap-10">
    {PRODUCTS.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);
