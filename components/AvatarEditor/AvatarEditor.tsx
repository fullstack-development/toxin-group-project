import { useState } from 'react';
import Editor from 'react-avatar-editor';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button/Button';
import Slider from 'components/Slider/Slider';

import * as S from './AvatarEditor.styes';

type Props = {
  image: string;
  onSave: (canvasScaled: HTMLCanvasElement) => void;
  onClose: () => void;
};

const AvatarEditor: React.FC<Props> = ({ image, onSave, onClose }: Props) => {
  const [zoomSize, setZoomSize] = useState(1);
  let canvas: Editor;

  const { t } = useTranslation(['AvatarLoader', 'Shared']);

  const setEditorRef = (editor: Editor) => {
    canvas = editor;
  };

  const handleSliderChange = (value: number) => {
    setZoomSize(value);
  };

  const handleCancelButtonClick = () => {
    onClose();
  };

  const handleSaveButtonClick = () => {
    let canvasScaled = null;
    if (canvas) {
      canvasScaled = canvas.getImageScaledToCanvas();
    }
    onSave(canvasScaled);
  };

  return (
    <S.AvatarEditor>
      <S.CancelButton onClick={handleCancelButtonClick} />
      <S.CropperTitle>{t('Select display area')}</S.CropperTitle>
      <S.Description>
        {t('The selected thumbnail will be used in the comments you leave.')}
      </S.Description>
      <Editor
        ref={setEditorRef}
        image={image}
        width={300}
        height={300}
        border={5}
        borderRadius={150}
        color={[255, 255, 255, 0.6]}
        scale={zoomSize}
        rotate={0}
      />
      <S.Controls>
        <S.SliderWrapper>
          <Slider
            name="zoom-size"
            min={1}
            max={10}
            step={0.1}
            initialValue={zoomSize}
            onChange={handleSliderChange}
          />
        </S.SliderWrapper>
        <Button isFilled isFlat onClick={handleSaveButtonClick}>
          {t('Shared:Save')}
        </Button>
      </S.Controls>
    </S.AvatarEditor>
  );
};

export default AvatarEditor;
