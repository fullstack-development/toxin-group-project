import * as S from './Benefits.style';

type Benefits = {
  items: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const Benefits: React.FC<Benefits> = ({ items }: Benefits) => (
  <div>
    {items.map((item) => (
      <S.BenefitItem key={item.title}>
        <S.Icon icon={item.icon} />
        <S.TextWrapper>
          <S.Title>{item.title}</S.Title>
          <p>{item.description}</p>
        </S.TextWrapper>
      </S.BenefitItem>
    ))}
  </div>
);

export default Benefits;
