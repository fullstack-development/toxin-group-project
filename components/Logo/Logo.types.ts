import { AnchorHTMLAttributes, ComponentProps, ElementType } from 'react';

type DefaultProps = {
  isLink: false;
  as?: ElementType;
} & ComponentProps<'div'>;

type AnchorProps = {
  isLink: true;
  as?: ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type LogoProps = DefaultProps | AnchorProps;
