import { Slider } from '@material-ui/core';
import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Field } from 'react-final-form';

import Avatar from 'components/Avatar/Avatar';
import Button from 'components/Button/Button';

import * as S from './AvatarLoader.styles';

type Props = {
  name: string;
};

const AvatarLoader: React.FC<Props> = ({ name }: Props) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [zoomSize, setZoomSize] = useState(1);
  let canvas: AvatarEditor;

  const setEditorRef = (editor: AvatarEditor) => {
    canvas = editor;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      setImage(event.target.result);
      setEditorVisible(true);
    };

    reader.readAsDataURL(file);
  };

  const handleSliderChange = (_e: React.ChangeEvent<HTMLInputElement>, value: number) => {
    setZoomSize(value);
  };

  const handleCancelButtonClick = () => {
    setEditorVisible(false);
  };

  return (
    <S.AvatarLoader>
      <Field
        name={name}
        render={({ input: { value, onChange, ...input } }) => {
          const handleSaveButtonClick = () => {
            if (canvas) {
              const canvasScaled = canvas.getImageScaledToCanvas();

              setImage(null);
              setEditorVisible(false);
              setCroppedImage(canvasScaled.toDataURL());
              canvasScaled.toBlob((blob) => {
                onChange(blob);
              });
            }
          };

          return (
            <>
              <Avatar photoURL={croppedImage} />
              <S.UploadButton>
                <S.HiddenInput
                  {...input}
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </S.UploadButton>
              {isEditorVisible && (
                <S.CropperWrapper>
                  <S.CancelButton onClick={handleCancelButtonClick} />
                  <S.CropperTitle>Выберите область отображения</S.CropperTitle>
                  <S.Description>
                    Выбранная миниатюра будет использоваться в оставленных вами комментариях.
                  </S.Description>
                  <AvatarEditor
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
                    <Slider
                      min={1}
                      max={10}
                      step={0.1}
                      value={zoomSize}
                      onChange={handleSliderChange}
                      style={{ width: 200 }}
                    />
                    <Button isFilled isFlat onClick={handleSaveButtonClick}>
                      Сохранить
                    </Button>
                  </S.Controls>
                </S.CropperWrapper>
              )}
            </>
          );
        }}
      />
    </S.AvatarLoader>
  );
};

export default AvatarLoader;
