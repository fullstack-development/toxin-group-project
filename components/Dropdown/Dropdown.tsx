import { useState, useRef, useEffect } from 'react';
import { getCorrectWordForm, WordForms } from './utils/getCorrectWord';
import * as S from './Dropdown.styles';

type DropdownProps = {
  groups?: {
    name: string;
    wordForms: WordForms;
  }[];
  items: {
    title: string;
    groupName?: string;
    wordForms?: WordForms;
    min?: number;
    max?: number;
    initialValue?: number;
  }[];
  placeholder: string;
  enableControls?: boolean;
};

const DEFAULT_SETTINGS = {
  min: 0,
  max: 5,
  initialValue: 0,
};

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = 'No placeholder passed',
  groups,
  items = [{ title: 'No items passed' }],
  enableControls = true,
}: DropdownProps) => {
  const initialState = items.map((item) => ({
    ...item,
    currentValue: item.initialValue || DEFAULT_SETTINGS.initialValue,
    min: item.min || DEFAULT_SETTINGS.min,
    max: item.max || DEFAULT_SETTINGS.max,
  }));
  const [dropdownState, setDropdownState] = useState([...initialState]);
  const [isOpen, setIsOpen] = useState(false);
  const [resultString, setResultString] = useState(placeholder);
  const dropdown = useRef(null);

  const applyChanges = (): void => {
    let groupResults;
    if (groups) {
      const groupNames = groups.map((group) => group.name);
      groupResults = groupNames.map((name) => {
        const groupCount = dropdownState
          .filter((el) => el.groupName === name && el.currentValue)
          .reduce((acc, el) => acc + el.currentValue, 0);

        const { wordForms } = groups.find((group) => group.name === name);
        return groupCount && `${groupCount} ${getCorrectWordForm(groupCount, wordForms)}`;
      }).filter((group) => group);
    }

    const restResults = dropdownState
      .filter((item) => !item.groupName && item.currentValue)
      .map((item) => {
        const { currentValue, title, wordForms } = item;
        return `${currentValue} ${
          wordForms ? getCorrectWordForm(currentValue, wordForms) : title
        }`;
      });
    const result = [...(groupResults || []), ...restResults];
    setResultString(result.join(', ') || placeholder);
  };

  const handleResetClick = (): void => {
    setDropdownState([...initialState]);
  };

  const handleResultBarClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleApplyClick = (): void => {
    applyChanges();
    handleResultBarClick();
  };

  const handleDocumentClick = (event: globalThis.MouseEvent) => {
    if (isOpen && !dropdown.current.contains(event.target)) {
      handleApplyClick();
    }
  };

  useEffect(() => {
    if (!enableControls) {
      applyChanges();
    }

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  });

  return (
    <S.Dropdown ref={dropdown}>
      <S.Result
        onClick={handleResultBarClick}
        type="button"
      >
        {resultString}
      </S.Result>
      <S.ListContainer modifiers={isOpen && 'open'}>
        <S.List>
          {dropdownState.map((el) => {
            const {
              title, min, max, currentValue,
            } = el;

            const titleElement = useRef(null);
            const makeButtonHandler = (
              increment: number,
            ): (() => void
              ) => (): void => {
              const currentTitle = titleElement.current.textContent;

              setDropdownState((prevState) => {
                const copiedState = [...prevState];
                const elementToUpdate = copiedState.find(
                  (item) => item.title === currentTitle,
                );
                elementToUpdate.currentValue += increment;
                return copiedState;
              });
            };
            const handleIncrementClick = makeButtonHandler(1);
            const handleDecrementClick = makeButtonHandler(-1);
            return (
              <S.Item key={title}>
                <S.ItemTitle ref={titleElement}>{title}</S.ItemTitle>
                <S.InputContainer>
                  <S.Button
                    disabled={currentValue === min}
                    onClick={handleDecrementClick}
                    type="button"
                  >
                    -
                  </S.Button>
                  <S.Input readOnly type="number" value={currentValue} />
                  <S.Button
                    disabled={currentValue === max}
                    onClick={handleIncrementClick}
                    type="button"
                  >
                    +
                  </S.Button>
                </S.InputContainer>
              </S.Item>
            );
          })}
        </S.List>
        {enableControls && (
          <S.Controls>
            <S.ResetButton type="button" onClick={handleResetClick}>
              Очистить
            </S.ResetButton>
            <S.ApplyButton type="button" onClick={handleApplyClick}>
              Применить
            </S.ApplyButton>
          </S.Controls>
        )}
      </S.ListContainer>
    </S.Dropdown>
  );
};

export default Dropdown;
