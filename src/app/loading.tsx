import { LoadingSpinner } from '~/components/ui/LoadingSpinner';

export default function Loading() {
  return (
    <div className="flex size-full items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
