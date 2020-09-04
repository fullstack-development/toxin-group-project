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

const Dropdown : React.FC<DropdownProps> = ({ placeholder = 'No placeholder passed', items = [{ title: 'No items passed' }] }: DropdownProps) => (
  <S.Dropdown>
    <S.Result type="button">{placeholder}</S.Result>
    <S.List>
      {items.map((el) => {
        const {
          title, min, max, initialValue,
        } = el;
        return (
          <S.Item key={title}>
            <S.ItemTitle>
              {title}
            </S.ItemTitle>
            <S.InputContainer>
              <S.Button type="button">-</S.Button>
              <S.Input type="number" min={min || DEFAULT_SETTINGS.min} max={max || DEFAULT_SETTINGS.max} defaultValue={initialValue || DEFAULT_SETTINGS.initialValue} />
              <S.Button type="button">+</S.Button>
            </S.InputContainer>
          </S.Item>
        );
      })}
    </S.List>
  </S.Dropdown>
);

export default Dropdown;
