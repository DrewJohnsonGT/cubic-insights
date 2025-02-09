import { LuHouse, LuRefreshCcw } from 'react-icons/lu';
import { Button } from '~/components/ui/Button';
import { SUPPORT_EMAIL } from '~/utils/constants';

export const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-primary">Oops!</h1>
        <p className="text-2xl font-semibold text-primary">
          Something went wrong.
        </p>
        <p className="text-muted-foreground">
          Our team has been notified. If you continue to experience issues,
          please contact support at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            <Button variant="link">{SUPPORT_EMAIL}</Button>
          </a>
          .
        </p>
        {error.message && (
          <pre className="max-h-48 overflow-y-auto text-wrap rounded-md border border-dashed border-destructive bg-muted p-4 text-left text-destructive">
            {error.message}
          </pre>
        )}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => {
              if (reset) {
                reset();
              } else {
                window.location.reload();
              }
            }}
          >
            <LuRefreshCcw className="mr-2 size-4" />
            Refresh
          </Button>
          <a href="/">
            <Button variant="outline">
              <LuHouse className="mr-2 size-4" />
              Back to Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
