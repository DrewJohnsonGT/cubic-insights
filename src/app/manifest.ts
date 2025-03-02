import { MetadataRoute } from 'next';
import { APP_DESCRIPTION, APP_NAME } from '~/utils/constants';
import { IMAGES_DIR } from '~/utils/images';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#1a1c1e',
    description: APP_DESCRIPTION,
    display: 'standalone',
    icons: [
      {
        sizes: '192x192',
        src: `${IMAGES_DIR}/icon-192x192.png`,
        type: 'image/png',
      },
      {
        sizes: '512x512',
        src: `${IMAGES_DIR}/icon-512x512.png`,
        type: 'image/png',
      },
      {
        sizes: '100x100',
        src: `${IMAGES_DIR}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    name: APP_NAME,
    short_name: APP_NAME,
    start_url: '/',
    theme_color: '#0088cc',
  };
}
