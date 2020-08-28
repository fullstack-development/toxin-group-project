import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
`;

export const InputWrapper = styled.div`
  width: 22.8571rem;
  margin: 1rem 0;
`;

export const ErrorMessage = styled.div`
  font-size: ${(props) => props.theme.error.fontSize};
  color: ${(props) => props.theme.error.color};
`;

export const CheckboxWrapper = styled.div`
  width: 15.8571rem;
  margin: 1rem 0;
`;

export const ExpandableCheckboxWrapper = styled.div`
  margin: 1rem 0;
`;
