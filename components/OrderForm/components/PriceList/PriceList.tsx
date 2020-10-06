import * as S from './PriceList.styles';
import { Props } from './PriceList.types';

const PriceList: React.FC<Props> = ({ items }: Props) => {
  return (
    <S.List>
      {items &&
        items.map((item) => {
          const { label, tooltip, price, currency = '₽' } = item;
          return (
            <S.Item key={label}>
              <S.Label>
                <S.LabelText>{label}</S.LabelText>
                {tooltip && (
                  <S.Tooltip tabIndex={0}>
                    i<S.TooltipText>{tooltip}</S.TooltipText>
                  </S.Tooltip>
                )}
              </S.Label>
              <S.PriceWrapper>
                <S.Price>{price}</S.Price>
                {currency}
              </S.PriceWrapper>
            </S.Item>
          );
        })}
    </S.List>
  );
};

export default PriceList;
