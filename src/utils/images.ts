export interface AppImage {
  src: string;
  width: number;
  height: number;
}

export enum AppImageKey {
  Drew = 'drew',
  Logo = 'logo',
  Madeline = 'madeline',
  PCITTrackerLogo = 'PCITTrackerLogo',
  PCITTracker1 = 'PCITTracker1',
  PCITTracker1Dark = 'PCITTracker1Dark',
}

const IMAGES_DIR = '/images';

export const IMAGES: Record<AppImageKey, AppImage> = {
  [AppImageKey.Drew]: {
    src: `${IMAGES_DIR}/drew.webp`,
    width: 500,
    height: 500,
  },
  [AppImageKey.Logo]: {
    src: '/logo.png',
    width: 128,
    height: 128,
  },
  [AppImageKey.Madeline]: {
    src: `${IMAGES_DIR}/madeline.webp`,
    width: 410,
    height: 609,
  },
  [AppImageKey.PCITTrackerLogo]: {
    src: `${IMAGES_DIR}/pcit-tracker-logo.webp`,
    width: 128,
    height: 128,
  },
  [AppImageKey.PCITTracker1]: {
    src: `${IMAGES_DIR}/pcit-tracker-1.png`,
    width: 2000,
    height: 1168,
  },
  [AppImageKey.PCITTracker1Dark]: {
    src: `${IMAGES_DIR}/pcit-tracker-1-dark.png`,
    width: 2000,
    height: 1168,
  },
};
