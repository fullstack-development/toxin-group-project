import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, { css } from 'styled-components';

type FormElement = {
  type?: 'single' | 'double';
}

const Form = styled.form`
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

const FormElement = styled.div<FormElement>`
  ${(props) => {
    const { type } = props;

    return css`
      position: relative;
      width: ${type === 'single' ? '100%' : '47%'};
      max-width: ${type === 'single' ? '19.0714rem' : '100%'};
    `;
  }}
`;

export { Form, ExpandIcon, FormElement };
