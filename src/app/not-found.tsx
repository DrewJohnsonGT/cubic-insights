import { LuArrowLeft } from 'react-icons/lu';
import { Button } from '~/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-primary animate-pulse text-6xl font-bold">404</h1>
        <div className="animate-expand bg-primary mx-auto h-1 w-20 rounded-full"></div>
        <h2 className="text-primary text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital void.
        </p>
        <Button variant="outline" className="mt-4">
          <a href="/" className="inline-flex items-center">
            <LuArrowLeft className="mr-2 size-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
}
