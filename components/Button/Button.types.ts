import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';

type CustomProps = {
  isFilled?: boolean;
  isFlat?: boolean;
  as?: ElementType;
};

type Props = {
  isLink: false;
} & CustomProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
  isLink: true;
} & CustomProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Props | AnchorProps;
