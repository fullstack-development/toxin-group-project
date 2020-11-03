import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from 'redux/Language/redux/actions';
import { AppState } from 'redux/store.types';
import formatLanguage from 'shared/helpers/formatLanguage';

import * as S from './LanguageDropdown.styles';

type StateToProps = {
  currentLanguage: string;
};

type Props = {
  currentLanguage: string;
  setNewLanguage: (newLanguage: string) => void;
};

const mapState = (state: AppState): StateToProps => ({
  currentLanguage: state.language.currentLanguage,
});

const mapDispatch = {
  setNewLanguage: changeLanguage,
};

const LanguageDropdown: React.FC<Props> = ({
  currentLanguage,
  setNewLanguage,
}: Props): JSX.Element => {
  const [isShownMenu, setShownMenu] = useState(false);

  const openMenu = () => setShownMenu(true);

  const setLanguage = (evt: React.MouseEvent<HTMLDivElement>) => {
    const targetElement: HTMLDivElement = evt.target as HTMLDivElement;

    const targetLanguage = targetElement.getAttribute('data-language');

    setNewLanguage(targetLanguage);
  };

  const dropdownLink = useRef(null);

  useEffect(() => {
    const handleDocumentMouseMove = (e: TouchEvent) => {
      if (isShownMenu && !dropdownLink.current.contains(e.target)) setShownMenu(false);
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    return () => document.removeEventListener('mousemove', handleDocumentMouseMove);
  }, [isShownMenu]);

  return (
    <S.Container ref={dropdownLink} onMouseOver={openMenu} onTouchStart={openMenu}>
      {formatLanguage(currentLanguage)}
      <S.MenuContainer isShownMenu={isShownMenu}>
        <S.MenuItem data-language="ru" onClick={setLanguage}>
          Русский
        </S.MenuItem>
        <S.MenuItem data-language="en" onClick={setLanguage}>
          English
        </S.MenuItem>
      </S.MenuContainer>
    </S.Container>
  );
};

export default connect(mapState, mapDispatch)(LanguageDropdown);
