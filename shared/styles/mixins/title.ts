import { css } from 'styled-components';

import purpleThemePalette from '../theme';

const { colors, typography } = purpleThemePalette;

const h1 = css`
  color: ${colors.basicDarkest};
  font-weight: bold;
  font-family: ${typography.secondaryFontName};
  font-size: 1.7rem;
  line-height: 2rem;
`;

const h2 = css`
  color: ${colors.basicDarkest};
  font-weight: bold;
  font-family: ${typography.secondaryFontName};
  font-size: 1.385rem;
  line-height: 1.9rem;
`;

const h3 = css`
  color: ${colors.basicDarkest};
  font-weight: bold;
  font-family: ${typography.fontName};
  font-size: 0.87rem;
  line-height: 1.25rem;
  text-transform: uppercase;
`;

export {
  h1,
  h2,
  h3,
};
