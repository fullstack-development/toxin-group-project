import styled, { css } from 'styled-components';

import visuallyHidden from 'shared/styles/mixins/visually-hidden';

const Label = styled.span`
  ${visuallyHidden}
`;

const Link = styled.a`
  ${(props) => {
    const { gradients } = props.theme;
    return css`
      display: inline-block;

      .svg-inline--fa {
        font-size: 1.7143rem;
        background: ${gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
  }}
`;

export { Label, Link };
