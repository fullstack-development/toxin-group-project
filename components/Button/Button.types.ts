import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';

type Props = {
  isLink: false;
  isFilled?: boolean;
  as?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
  isLink: true;
  isFilled?: boolean;
  as?: ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Props | AnchorProps;
