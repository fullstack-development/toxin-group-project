import { memo } from 'react';
import { Field } from 'react-final-form';
import { withTranslation } from 'react-i18next';

import Checkbox from 'components/Checkbox/Checkbox';

import * as S from './CheckboxesList.styles';
import { Props } from './CheckboxesList.types';

const CheckboxesList = memo(({ roomOptions }: Props) => (
  <S.List>
    {roomOptions.map((option) => {
      const { title, label, name, isChecked } = option;
      return (
        <S.ListItem key={name} title={title}>
          <Field
            type="checkbox"
            name={name}
            render={({ input }) => (
              <Checkbox title={title} label={label} {...input} isChecked={isChecked} />
            )}
          />
        </S.ListItem>
      );
    })}
  </S.List>
));

export default withTranslation()(CheckboxesList);
