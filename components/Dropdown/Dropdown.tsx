import {
  useState, useRef, useCallback,
} from 'react';
import * as S from './Dropdown.styles';

type DropdownProps = {
  items: {
    title: string;
    min?: number;
    max?: number;
    initialValue?: number;
  }[];
  placeholder: string;
}

const DEFAULT_SETTINGS = {
  min: 0,
  max: 5,
  initialValue: 0,
};

const Dropdown : React.FC<DropdownProps> = ({ placeholder = 'No placeholder passed', items = [{ title: 'No items passed' }] }: DropdownProps) => {
  const initialState = items.map((item) => ({
    ...item,
    currentValue: item.initialValue || DEFAULT_SETTINGS.initialValue,
  }));
  const [dropdownState, setDropdownState] = useState(initialState);

  return (
    <S.Dropdown>
      <S.Result type="button">{placeholder}</S.Result>
      <S.List>
        {dropdownState.map((el) => {
          const {
            title, min, max, currentValue,
          } = el;

          const titleElement = useRef(null);
          const makeButtonHandler = (increment: number): () => void => (): void => {
            const currentTitle = titleElement.current.textContent;

            setDropdownState((prevState) => {
              const copiedState = [...prevState];
              const elementToUpdate = copiedState.find((item) => item.title === currentTitle);
              elementToUpdate.currentValue += increment;
              return copiedState;
            });
          };
          const handleIncrementClick = useCallback(makeButtonHandler(1), []);
          const handleDecrementClick = useCallback(makeButtonHandler(-1), []);
          return (
            <S.Item key={title}>
              <S.ItemTitle ref={titleElement}>
                {title}
              </S.ItemTitle>
              <S.InputContainer>
                <S.Button onClick={handleDecrementClick} type="button">-</S.Button>
                <S.Input readOnly type="number" min={min || DEFAULT_SETTINGS.min} max={max || DEFAULT_SETTINGS.max} value={currentValue} />
                <S.Button onClick={handleIncrementClick} type="button">+</S.Button>
              </S.InputContainer>
            </S.Item>
          );
        })}
      </S.List>
    </S.Dropdown>
  );
};

export default Dropdown;
