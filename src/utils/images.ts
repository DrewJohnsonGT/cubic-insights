export interface AppImage {
  src: string;
  width: number;
  height: number;
}

export enum AppImageKey {
  LogoFull = 'logoFull',
  LogoSmall = 'logoSmall',
}

export const IMAGES: Record<AppImageKey, AppImage> = {
  [AppImageKey.LogoFull]: {
    src: '/logo-full.png',
    width: 128,
    height: 128,
  },
  [AppImageKey.LogoSmall]: {
    src: '/logo-small.png',
    width: 64,
    height: 64,
  },
};
