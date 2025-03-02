import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
import { LogoSVG } from '~/components/LogoSVG';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Button } from '~/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/DropdownMenu';
import { APP_NAME } from '~/utils/constants';

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
    <header className="fixed inset-x-0 top-0 z-50 h-14 items-center bg-transparent p-2">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-2 rounded-lg border border-border bg-background/20 px-4 backdrop-blur-md lg:px-6">
        <Link href="#" aria-label="Home" prefetch={false}>
          <LogoSVG className="-ml-4 h-16 shrink-0" />
          <span className="sr-only">{APP_NAME}</span>
        </Link>
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
          <a
            href="/signin"
            aria-label="Sign In"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            <Button variant="outline" aria-label="Sign In">
              Sign In
            </Button>
          </a>
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
