import * as S from './UI-Type.styles';

type Props = {
  type: string;
  example: string;
  fontSize: string;
};

const UIType: React.FC<Props> = (props: Props) => {
  const { type, example, fontSize } = props;

  return (
    <S.Type>
      <S.Title fontSize={fontSize}>{type}</S.Title>
      <S.Example fontSize={fontSize} type={type}>
        {example}
      </S.Example>
    </S.Type>
  );
};

export default UIType;
