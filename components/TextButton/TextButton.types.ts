import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';

type ButtonProps = {
  isLink: false;
  isSecondary?: boolean;
  as?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
  isLink: true;
  isSecondary?: boolean;
  as?: ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type TextButtonProps = ButtonProps | AnchorProps;
