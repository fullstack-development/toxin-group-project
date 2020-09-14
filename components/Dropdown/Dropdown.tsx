import { useState, useRef, useEffect } from 'react';
import { Field } from 'react-final-form';

import NumberInput from '../NumberInput/NumberInput';
import * as S from './Dropdown.styles';
import { getCorrectWordForm, WordForms } from './utils/getCorrectWord';

type Item = {
  title: string;
  groupName?: string;
  wordForms?: WordForms;
  min?: number;
  max?: number;
  initialValue?: number;
  inputName?: string;
};

type Group = {
  name: string;
  wordForms: WordForms;
};

type DropdownProps = {
  items: Item[];
  placeholder: string;
  name: string;
  groups?: Group[];
  enableControls?: boolean;
};

const DEFAULT_SETTINGS = {
  min: 0,
  max: 5,
  initialValue: 0,
};

const Dropdown: React.FC<DropdownProps> = ({
  groups,
  name = '',
  placeholder = 'No placeholder passed',
  items = [{ title: 'No items passed' }],
  enableControls = true,
}: DropdownProps) => {
  const initialState = items.map((item) => ({
    ...item,
    currentValue: item.initialValue || DEFAULT_SETTINGS.initialValue,
    inputName: item.inputName || item.title,
    min: item.min || DEFAULT_SETTINGS.min,
    max: item.max || DEFAULT_SETTINGS.max,
  }));

  const [dropdownState, setDropdownState] = useState([...initialState]);
  const [isOpen, setIsOpen] = useState(false);
  const [resultString, setResultString] = useState(placeholder);
  const dropdown = useRef(null);

  const applyChanges = (): void => {
    function getResultStringPart(count: number, wordForms: WordForms): string {
      return count && `${count} ${getCorrectWordForm(count, wordForms)}`;
    }

    const resultStrings: string[] = Array.from(
      new Set(
        dropdownState.map((item, _, state) => {
          const { groupName } = item;
          const { currentValue, wordForms } = item;

          if (!groupName) return getResultStringPart(currentValue, wordForms);

          const { wordForms: groupWordForms } = groups.find(
            (group) => group.name === groupName,
          );
          const groupCount = state
            .filter((stateItem) => stateItem.groupName === groupName)
            .reduce((sum, element) => sum + element.currentValue, 0);
          return getResultStringPart(groupCount, groupWordForms);
        }),
      ),
    ).filter((el) => el);

    setResultString(resultStrings.join(', ') || placeholder);
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
      handleResultBarClick();
    }
  };

  useEffect(() => {
    if (!enableControls) {
      applyChanges();
    }

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  });

  const isResetHidden = dropdownState.every((item) => !item.currentValue);

  return (
    <Field name={name}>
      {(fieldState) => (
        <S.Dropdown ref={dropdown}>
          {/* <pre>
            {JSON.stringify(fieldState, undefined, 2)}
          </pre> */}
          <S.Result onClick={handleResultBarClick} type="button">
            {resultString}
            <S.ExpandIcon />
          </S.Result>
          <S.ListContainer isOpen={isOpen}>
            <S.List>
              {dropdownState.map((el) => {
                const {
                  title, min, max, currentValue, inputName,
                } = el;

                const makeButtonHandler = (
                  increment: number,
                ): (() => void
              ) => (): void => {
                  setDropdownState((prevState) => {
                    const state = [...prevState];
                    const elementToUpdate = state.find(
                      (item) => item.title === title,
                    );
                    elementToUpdate.currentValue += increment;
                    return state;
                  });
                };
                const handleIncrementClick = makeButtonHandler(1);
                const handleDecrementClick = makeButtonHandler(-1);
                return (
                  <S.Item key={title}>
                    <S.ItemTitle>{title}</S.ItemTitle>
                    <NumberInput
                      currentValue={currentValue}
                      min={min}
                      max={max}
                      onIncrement={handleIncrementClick}
                      onDecrement={handleDecrementClick}
                      name={inputName}
                    />
                  </S.Item>
                );
              })}
            </S.List>
            {enableControls && (
            <S.Controls>
              <S.ResetButton
                type="button"
                isHidden={isResetHidden}
                onClick={handleResetClick}
              >
                Очистить
              </S.ResetButton>
              <S.ApplyButton type="button" onClick={handleApplyClick}>
                Применить
              </S.ApplyButton>
            </S.Controls>
            )}
          </S.ListContainer>
        </S.Dropdown>
      )}
    </Field>
  );
};

export default Dropdown;
