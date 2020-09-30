import * as S from './RangeSlider.styles';

const RangeSlider: React.FC = (props) => {
  return (
    <>
      <S.RangeSlider
        aria-labelledby="range-slider"
        max={100000}
        min={0}
        defaultValue={[5000, 10000]}
      />
    </>
  );
};

export default RangeSlider;
