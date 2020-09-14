import { ComponentPropsWithRef, ElementType } from 'react';

export type MergeElementProps<
  T extends ElementType,
  P extends object = {}
> = Omit<ComponentPropsWithRef<T>, keyof P> & P;
