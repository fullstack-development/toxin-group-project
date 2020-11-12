import { TFunction } from 'i18next';

export type SubscriptionProps = {
  title: string;
  text: string;
  t?: TFunction;
};

export type LogoProps = {
  description: string;
  t?: TFunction;
};

export type CopyrightProps = {
  copyrightText: string;
  t?: TFunction;
};

export type SubscriptionBlockProps = {
  subscription?: SubscriptionProps;
};

export type FooterProps = Partial<SubscriptionBlockProps & CopyrightProps & LogoProps>;
