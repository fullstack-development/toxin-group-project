import { ElementType } from 'react';

import { MergeElementProps } from 'shared/helpers/mergeElementProps/mergeElementProps';

export type CustomProps = {
  isFilled?: boolean;
}

export type ButtonProps<P extends ElementType = 'button'> = {
  as?: P;
} & MergeElementProps<P, CustomProps>

export type LinkProps<P extends ElementType = 'a'> = {
  as?: P;
} & MergeElementProps<P, CustomProps>
