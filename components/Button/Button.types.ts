import { ComponentPropsWithRef } from 'react';

export type CustomProps = {
  isFilled?: boolean;
  href?: string;
}

export type ButtonProps = CustomProps & ComponentPropsWithRef<'a'> & ComponentPropsWithRef<'button'>
