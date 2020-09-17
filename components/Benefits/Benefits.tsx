import * as S from './Benefits.style';

type Benefits = {
  items: {
    icon: string,
    title: string,
    description: string,
  }[];
}

const Benefits: React.FC<Benefits> = (props: Benefits) => {
  const { items } = props;

  return (
    <S.Benefits>
      { items.map((item) => (
        <S.BenefitItem key={item.title}>
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
    </S.Benefits>
  );
};

export default Benefits;
