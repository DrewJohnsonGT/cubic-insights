import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
import { Cube } from '~/components/Cube';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Button } from '~/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/DropdownMenu';
import { APP_NAME } from '~/utils/constants';

const NUM_CUBES = 5;
const CUBE_SIZE_DIFFERENCE = 0.65;
const STARTING_CUBE_SIZE = 0.5;

const HEADER_LINKS = [
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#products',
    label: 'Products',
  },
  {
    href: '#founders',
    label: 'Founders',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

export const NavigationHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center bg-transparent p-2">
      <div className="mx-auto flex size-full max-w-4xl flex-1 items-center justify-between gap-2 rounded-lg border border-border bg-background/20 px-4 backdrop-blur-md lg:px-6">
        <Link
          href="#"
          aria-label="Home"
          prefetch={false}
          className="relative ml-2 mr-8"
        >
          {Array.from({ length: NUM_CUBES }).map((_, i) => (
            <Cube
              key={i}
              size={`${STARTING_CUBE_SIZE + i * CUBE_SIZE_DIFFERENCE}rem`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          ))}
        </Link>
        <span className="text-lg font-bold">{APP_NAME}</span>
        <nav className="mx-auto hidden flex-1 items-center justify-center gap-4 sm:gap-6 md:flex">
          {HEADER_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-medium underline-offset-4 hover:underline"
              aria-label={`Scroll to ${link.label}`}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Menu">
                  <LuMenu className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {HEADER_LINKS.map((link, index) => (
                  <DropdownMenuItem key={index}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium underline-offset-4 hover:underline"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
