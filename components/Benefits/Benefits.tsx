import * as S from './Benefits.style';

type Benefits = {
  items: Array<
    {
      title: string;
      description: string;
    } & S.Icon
  >;
};

const Benefits: React.FC<Benefits> = ({ items }: Benefits) => (
  <S.Benefits>
    {items.map((item) => (
      <S.Item key={item.title}>
        <S.Icon icon={item.icon} />
        <S.List>
          <S.Title>{item.title}</S.Title>
          <dd>{item.description}</dd>
        </S.List>
      </S.Item>
    ))}
  </S.Benefits>
);

export default Benefits;
