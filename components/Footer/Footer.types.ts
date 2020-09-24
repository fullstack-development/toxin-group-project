export type SubscriptionProps = {
  title: string;
  text: string;
};

export type LogoProps = {
  description: string;
};

export type FooterProps = {
  subscription: SubscriptionProps;
} & LogoProps;
