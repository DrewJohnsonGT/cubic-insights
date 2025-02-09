export interface AppImage {
  src: string;
  width: number;
  height: number;
}

export enum AppImageKey {
  Logo = 'logo',
}

export const IMAGES: Record<AppImageKey, AppImage> = {
  [AppImageKey.Logo]: {
    src: '/logo.png',
    width: 128,
    height: 128,
  },
};
