import * as S from './BulletList.styles';

type BulletListProps = {
  items: string[];
};

const BulletList: React.FC<BulletListProps> = ({
  items = ['No items passed'],
}: BulletListProps) => (
  <S.List>
    {items.map((el) => (
      <S.Item key={el}>{el}</S.Item>
    ))}
  </S.List>
);

export default BulletList;
