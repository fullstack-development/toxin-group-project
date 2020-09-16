import UIColor from 'components/UI-Color/UI-Color';

import * as S from './UI-ColorsList.styles';

type Color = {
  color: string;
  title: string;
  opacity: number;
};

type Props = {
  colors: Array<Color>;
}

const UIColorsList: React.FC<Props> = (props: Props) => {
  const { colors } = props;

  return (
    <section>
      <S.Title>Цветовая палитра</S.Title>
      <S.List lang="en">
        {colors.map((color) => (
          <li key={color.title}>
            <UIColor
              color={color.color}
              title={color.title}
              opacity={color.opacity}
            />
          </li>
        ))}
      </S.List>
    </section>
  );
};

export default UIColorsList;
