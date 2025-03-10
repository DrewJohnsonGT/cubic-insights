import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoReddit } from 'react-icons/io5';
import { LuFacebook, LuLinkedin } from 'react-icons/lu';
import { Button } from '~/components/ui/Button';

const URL = 'https://cubic-insights.com';
const TITLE = 'Check out Cubic Insights!';

export const SocialShareButtons = () => {
  const encodedUrl = encodeURIComponent(URL);
  const encodedTitle = encodeURIComponent(TITLE);

  const SOCIAL_SHARES = [
    {
      name: 'Twitter',
      icon: FaXTwitter,
      href: `https://twitter.com/share?url=${encodedUrl}&text=${encodedTitle}&via=cubicinsights&hashtags=Healthcare,DataAnalytics,BusinessIntelligence`,
    },
    {
      name: 'Facebook',
      icon: LuFacebook,
      href: `https://www.facebook.com/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: LuLinkedin,
      href: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      name: 'Reddit',
      icon: IoLogoReddit,
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        {SOCIAL_SHARES.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${social.name}`}
            >
              <Button
                variant="outline"
                size="sm"
                aria-label={`Share on ${social.name}`}
              >
                <Icon className="size-4 sm:mr-2" />
                <span className="hidden sm:inline">{social.name}</span>
              </Button>
            </a>
          );
        })}
      </div>
    </div>
  );
};
