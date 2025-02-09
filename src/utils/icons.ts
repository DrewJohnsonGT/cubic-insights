import {
  LuCircleHelp,
  LuCircleUser,
  LuHouse,
  LuInfo,
  LuMailQuestion,
  LuMessageCircle,
  LuSettings,
} from 'react-icons/lu';

export enum Icons {
  About = 'About',
  Account = 'Account',
  Contact = 'Contact',
  FAQ = 'FAQ',
  Help = 'Help',
  Home = 'Home',
  Settings = 'Settings',
}

export const ICONS = {
  [Icons.About]: LuInfo,
  [Icons.Account]: LuCircleUser,
  [Icons.Contact]: LuMessageCircle,
  [Icons.FAQ]: LuMailQuestion,
  [Icons.Help]: LuCircleHelp,
  [Icons.Home]: LuHouse,
  [Icons.Settings]: LuSettings,
};
