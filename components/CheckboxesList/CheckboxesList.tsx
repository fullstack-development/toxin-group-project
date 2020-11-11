import React from 'react';
import { Field } from 'react-final-form';
import { withTranslation, WithTranslation } from 'react-i18next';

import Checkbox from 'components/Checkbox/Checkbox';

import { Props } from './CheckboxesList.model';
import * as S from './CheckboxesList.styles';

const CheckboxesList: React.ComponentType<WithTranslation & Props> = ({
  roomOptions,
  t,
}: Props): JSX.Element => (
  <S.List>
    {roomOptions.map((option) => {
      const { title, label, name, isChecked } = option;
      return (
        <S.ListItem key={name} title={title}>
          <Field
            type="checkbox"
            name={name}
            render={(props) => (
              <Checkbox
                title={title}
                label={label}
                {...props.input}
                {...props.meta}
                isChecked={isChecked}
              />
            )}
          />
        </S.ListItem>
      );
    })}
  </S.List>
);

export default withTranslation()(CheckboxesList);
