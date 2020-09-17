import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type ContainerElement = {
  type?: 'single' | 'double';
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const ExpandIcon = styled(ExpandMoreIcon)`
  position: absolute;
  bottom: 1.6rem;
  right: 0.8rem;
  cursor: pointer;
`;

const ContainerElement = styled.div<ContainerElement>`
  ${(props) => {
    const { type } = props;

    return css`
      position: relative;
      width: ${type === 'single' ? '100%' : '47%'};
      max-width: ${type === 'single' ? '19.0714rem' : '100%'};
    `;
  }}
`;

export {
  Container,
  ExpandIcon,
  ContainerElement,
};
