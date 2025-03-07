import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { AppImage, IMAGES } from '~/utils/images';

interface Product {
  name: string;
  description: string[];
  href: string;
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
    href: 'https://pcit-tracker.com',
    images: [
      {
        light: IMAGES.PCITTracker1,
        dark: IMAGES.PCITTracker1Dark,
      },
    ],
  },
];

function ProductCard({ name, description, images, href }: Product) {
  return (
    <Card className="mx-auto max-w-4xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center gap-4">
        <CardHeader className="w-full p-0">
          <CardTitle className="inset-0 bg-gradient-to-r from-primary/20 via-background to-primary/20 py-8 text-center text-3xl font-bold text-primary">
            {name}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex max-w-2xl flex-1 flex-col gap-4 px-8">
          {description.map((paragraph, index) => (
            <p
              className="text-lg leading-relaxed text-muted-foreground"
              key={index}
            >
              {paragraph}
            </p>
          ))}
          <Link href={href} target="_blank" rel="noreferrer">
            <Button variant="outline" className="mx-auto">
              Visit
            </Button>
          </Link>
        </CardContent>

        {images.length > 0 && (
          <div className="w-full max-w-2xl px-8 pb-8">
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
