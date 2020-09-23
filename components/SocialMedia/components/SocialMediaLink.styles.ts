import { AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import fontAwesome from 'shared/styles/mixins/font-awesome';
import faIconsMapping from 'shared/styles/mixins/font-awesome-mapping';
import visuallyHidden from 'shared/styles/mixins/visually-hidden.styles';

import { SocialMediaItem } from '../SocialMedia.types';

type LinkProps = SocialMediaItem & AnchorHTMLAttributes<HTMLAnchorElement>;

const Label = styled.span`
  ${visuallyHidden}
`;

const Link = styled.a<LinkProps>`
  ${(props) => {
    const { gradients } = props.theme;
    const { icon } = props;
    return css`
      display: inline-block;
      ${fontAwesome}
      background-image: ${gradients.primary};

      &::before {
        content: '${faIconsMapping[icon]}';
        font-size: 1.7143rem;
      }

      &:hover {
        background-image: ${gradients.primaryLight};
      }
    `;
  }}
`;

export { Label, Link };
