import * as S from './Benefits.style';

type Props = {
  items: Array<
    {
      term: string;
      definition: string;
      icon: string;
    } & S.Icon
  >;
};

const Benefits = ({ items }: Props): JSX.Element => (
  <S.Benefits>
    {items.map(({ term, icon, definition }) => (
      <S.Item key={term}>
        <S.Icon icon={icon} />
        <S.List>
          <S.Term>{term}</S.Term>
          <dd>{definition}</dd>
        </S.List>
      </S.Item>
    ))}
  </S.Benefits>
);

export default Benefits;
