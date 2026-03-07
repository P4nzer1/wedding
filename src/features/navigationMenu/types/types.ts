import { ComponentType } from 'react';

export type NavigationSectionDesktopId =
  | 'welcome'
  | 'invite'
  | 'scheduleDress'
  | 'questionnaire'
  | 'venue';
export type NavigationSectionMobileId =
  | 'welcome'
  | 'invite'
  | 'schedule'
  | 'dress'
  | 'questionnaire'
  | 'venue';
export type NavigationSectionId = NavigationSectionDesktopId | NavigationSectionMobileId;

export type SectionDesktop = {
  id: NavigationSectionDesktopId;
  Component: ComponentType;
};

export type SectionMobile = {
  id: NavigationSectionMobileId;
  Component: ComponentType;
};

export type NavigationDesktop = {
  id: NavigationSectionDesktopId;
  label: string;
};

export type NavigationMobile = {
  id: NavigationSectionMobileId;
  label: string;
};

export interface INavigationMenuMobileProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

export interface INavigationMenuDesktopProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}
