import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type ContainerElement = {
  type?: 'single' | 'double';
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const ExpandIcon = styled(ExpandMoreIcon)`
  position: absolute;
  bottom: 2rem;
  right: 0.8rem;
  cursor: pointer;
`;

const ContainerElement = styled.div<ContainerElement>`
  ${(props) => {
    const { type } = props;

    return css`
      position: relative;
      max-width: ${type === 'single' ? '19.0714rem' : '100%'};

      &:not(:last-child) {
        margin-right: 1.4rem;
      }
    `;
  }}
`;

export { Container, ExpandIcon, ContainerElement };
