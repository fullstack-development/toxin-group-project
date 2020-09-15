import * as S from './Benefit.style';

type Benefit = {
  items: {
    icon: string,
    title: string,
    description: string,
  }[];
}

const Benefit: React.FC<Benefit> = (props: Benefit) => {
  const { items } = props;

  return (
    <S.Benefit>
      { items.map((item, index) => (
        <S.BenefitItem key={Symbol(index).toString()}>
          <S.Icon className="material-icons" icon={item.icon} />
          <S.TextWrapper>
            <S.Title>
              {item.title}
            </S.Title>
            <S.Description>
              {item.description}
            </S.Description>
          </S.TextWrapper>
        </S.BenefitItem>
      ))}
    </S.Benefit>
  );
};

export default Benefit;
