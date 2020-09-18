import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useState, useRef, useEffect } from 'react';

import * as S from './Expander.styles';

type Props = {
  title: string;
  isDefaultOpen: boolean;
  children: JSX.Element;
}

type State = {
  isOpen: boolean;
}

const Expander: React.FC<Props> = ({ title, isDefaultOpen, children }: Props) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const expander = useRef(null);

  const handleDocumentClick = (event: globalThis.MouseEvent) => {
    if (isOpen && !expander.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  });

  const handleHeaderClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Expander ref={expander}>
      <S.Header onClick={handleHeaderClick}>
        <S.Title>{title}</S.Title>
        { isOpen ? <ExpandLess /> : <ExpandMore /> }
      </S.Header>
      <S.Content isOpen={isOpen}>
        {children}
      </S.Content>
    </S.Expander>
  );
};

export default Expander;
