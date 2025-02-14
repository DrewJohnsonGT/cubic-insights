import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '~/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';
import { AppImage, IMAGES } from '~/utils/images';

const FOUNDERS: {
  altText: string;
  content: React.ReactNode[];
  image: AppImage;
  linkedInUrl: string;
  name: string;
}[] = [
  {
    altText: 'Madeline DeShazer',
    content: [
      "Hi, I'm Madeline! I am a 5th-year graduate student working toward a doctoral degree in clinical psychology.",
      'I am passionate about providing evidence-based clinical services to families of children with social, emotional, and behavioral challenges.',
      'As a PCIT therapist in training, I understand the challenges therapists face when preparing paperwork, managing data, and handling administrative tasks.',
      'My partner, a skilled software engineer, and I combined our expertise to create PCIT Tracker —a comprehensive tool designed to simplify processes, reduce prep time, and support families through effective intervention.',
    ],
    image: IMAGES.madeline,
    linkedInUrl: 'https://www.linkedin.com/in/madeline-deshazer-228a2015b/',
    name: 'Madeline DeShazer, MS',
  },
  {
    altText: 'Drew Johnson',
    content: [
      "Hi, I'm Drew! With nearly a decade of experience as a software engineer, I specialize in building secure, compliant applications.",
      'My experience includes roles with fortune 100 companies like Delta Air Lines and The Home Depot, as well as contributions to innovative, fast growing startups in the Cybersecurity and AI industries.',
      'I am currently a Staff Software Engineer for an AI startup in the healthcare space, engineering HIPAA compliant software solutions that save clinicians time and improve patient outcomes.',
      'Understanding the need for secure and efficient tools in healthcare, Madeline and I created PCIT Tracker to empower PCIT therapists to make data-driven decisions with ease.',
    ],
    image: IMAGES.drew,
    linkedInUrl: 'https://www.linkedin.com/in/drewjohnsongt/',
    name: 'Drew Johnson',
  },
];

function FounderCard({
  altText,
  content,
  image,
  linkedInUrl,
  name,
}: {
  name: string;
  image: AppImage;
  altText: string;
  content: React.ReactNode[];
  linkedInUrl: string;
}) {
  return (
    <Card className="mx-auto max-w-md overflow-hidden rounded-lg border-none bg-transparent shadow-none">
      <div className="relative h-64 w-full">
        <div className="absolute bottom-0 z-0 size-[200px] w-full bg-primary" />
        <div className="relative z-10">
          <Image
            src={image.src}
            alt={altText}
            width={image.width}
            height={image.height}
            className="h-64 w-full object-contain"
            aria-label={name}
          />
        </div>
      </div>
      <CardHeader className="bg-card p-4 text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          {name}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn of ${name}`}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-[#0077b5] hover:bg-muted hover:text-[#0077b5]"
              aria-label={`LinkedIn of ${name}`}
            >
              <FaLinkedin className="size-6" />
            </Button>
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 bg-card p-4">
        {content.map((paragraph, index) => (
          <p className="mb-4" key={index}>
            {paragraph}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

export const Founders = () => (
  <div className="grid gap-10 md:grid-cols-2">
    {FOUNDERS.map((founder, index) => (
      <FounderCard key={index} {...founder} />
    ))}
  </div>
);
