import type { MetadataRoute } from 'next';
import { APP_DESCRIPTION, APP_NAME } from '~/utils/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#1a1c1e',
    description: APP_DESCRIPTION,
    display: 'standalone',
    name: APP_NAME,
    short_name: APP_NAME,
    start_url: '/',
    theme_color: '#ff7b1a',
  };
}
