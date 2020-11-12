import { TFunction } from 'i18next';

export type NavItem = {
  href: string;
  text: string;
};

export type NavItemProps = {
  title: string;
  items: NavItem[];
  t?: TFunction;
};

export type NavProps = {
  items?: NavItemProps[];
};
