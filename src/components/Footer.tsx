import { SocialShareButtons } from './SocialShareButtons';
import { APP_NAME } from '~/utils/constants';

const FOOTER_LINKS = [
  {
    href: 'https://pcit-tracker.com/terms-of-service',
    label: 'Terms of Service',
  },
  { href: 'https://pcit-tracker.com/privacy-policy', label: 'Privacy Policy' },
  {
    href: 'https://pcit-tracker.com/responsible-use',
    label: 'Responsible Disclosure',
  },
];

export const Footer = () => (
  <footer className="mt-20 grid items-center gap-4 p-4 pt-20 xl:grid-cols-3">
    <p className="text-center text-xs xl:text-start">
      © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
    </p>
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs">Share us on</p>
      <SocialShareButtons />
    </div>
    <nav className="flex justify-center gap-4 xl:justify-end xl:gap-6">
      {FOOTER_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-xs underline-offset-4 hover:text-link hover:underline"
          aria-label={link.label}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </footer>
);
