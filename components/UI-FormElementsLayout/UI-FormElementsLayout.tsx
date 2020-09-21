import React from 'react';
import { Form, Field } from 'react-final-form';

import Benefits from 'components/Benefits/Benefits';
import BulletList from 'components/BulletList/BulletList';
import Button from 'components/Button/Button';
import CheckboxesList from 'components/CheckboxesList/CheckboxesList';
import checkboxData from 'components/CheckboxesList/CheckboxesListData.json';
import Dropdown from 'components/Dropdown/Dropdown';
import expandableCheckboxData from 'components/Expander/ExpandableList.data.json';
import Expander from 'components/Expander/Expander';
import Input from 'components/Input/Input';
import RadioButton from 'components/RadioButton/RadioButton';
import LikeButton from 'components/LikeButton/LikeButton';
import StarRating from 'components/StarRating/StarRating';
import TextButton from 'components/TextButton/TextButton';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators/';

import * as S from './UI-FormElementsLayout.styles';

class UIFormElementsLayout extends React.Component {
  handleFormSubmit = () => {};

  render() {
    return (
      <S.Container>
        <Form
          onSubmit={this.handleFormSubmit}
          initialValues={{ gender: 'female' }}
          render={() => (
            <form>
              <S.InputWrapper>
                <Field
                  name="email"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.input}
                      {...props.meta}
                      placeholder="Email"
                      label="text field"
                      validators={[emailValidator]}
                    />
                  )}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <Field
                  name="name"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.rest}
                      {...props.input}
                      placeholder="This is pretty awesome"
                      label="text field"
                      isRequired
                    />
                  )}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <Field
                  name="date"
                  type="text"
                  render={(props) => (
                    <Input
                      {...props.rest}
                      {...props.input}
                      placeholder="ДД.ММ.ГГГГ"
                      validators={[dateValidator]}
                      mask={dateFormatMask}
                      label="Masked text field"
                    />
                  )}
                />
              </S.InputWrapper>
              <S.ButtonWrapper>
                <Button type="button" isLink={false} isFilled>
                  click me
                </Button>
              </S.ButtonWrapper>
              <S.ButtonWrapper>
                <Button isLink href="https://google.com">
                  click me
                </Button>
              </S.ButtonWrapper>
              <S.LikeButtonWrapper>
                <LikeButton count={2} />
              </S.LikeButtonWrapper>
              <S.DropdownWrapper>
                <Dropdown
                  placeholder="Сколько гостей"
                  enableControls={false}
                  name="guests"
                  items={[
                    {
                      title: 'Спальни',
                      wordForms: ['спальня', 'спальни', 'спален'],
                    },
                    {
                      title: 'Кровати',
                      wordForms: ['кровать', 'кровати', 'кроватей'],
                    },
                    {
                      title: 'Ванные комнаты',
                      wordForms: ['ванная', 'ванные', 'ванных'],
                    },
                  ]}
                />
              </S.DropdownWrapper>
              <S.DropdownWrapper>
                <Dropdown
                  placeholder="Сколько гостей"
                  name="guests"
                  enableControls
                  groups={[
                    {
                      name: 'guests',
                      wordForms: ['гость', 'гостя', 'гостей'],
                    },
                  ]}
                  items={[
                    {
                      title: 'взрослые',
                      groupName: 'guests',
                    },
                    {
                      title: 'дети',
                      groupName: 'guests',
                    },
                    {
                      title: 'младенцы',
                      wordForms: ['младенец', 'младенца', 'младенцев'],
                    },
                  ]}
                />
              </S.DropdownWrapper>
              <S.CheckboxWrapper>
                <CheckboxesList roomOptions={checkboxData} />
              </S.CheckboxWrapper>
              <S.RadioWrapper>
                <RadioButton
                  label="Мужчина"
                  name="gender"
                  value="male"
                />
                <RadioButton
                  label="Женщина"
                  name="gender"
                  value="female"
                />
              </S.RadioWrapper>
              <S.ExpandableCheckboxWrapper>
                <Expander title="expandable checkbox list" isDefaultOpen={false}>
                  <CheckboxesList roomOptions={expandableCheckboxData} />
                </Expander>
              </S.ExpandableCheckboxWrapper>
              <S.ExpandableCheckboxWrapper>
                <Expander title="expandable checkbox list" isDefaultOpen>
                  <CheckboxesList roomOptions={expandableCheckboxData} />
                </Expander>
              </S.ExpandableCheckboxWrapper>
            </form>
          )}
        />
        <S.TextButtonWrapper>
          <TextButton isLink href="https://google.com">
            Click me
          </TextButton>
        </S.TextButtonWrapper>
        <S.TextButtonWrapper>
          <TextButton isLink={false} isSecondary>
            Click me
          </TextButton>
        </S.TextButtonWrapper>
        <S.BulletListWrapper>
          <BulletList
            items={[
              'Нельзя с питомцами',
              'Без вечеринок и мероприятий',
              'Время прибытия — после 13:00, а выезд до 12:00',
            ]}
          />
        </S.BulletListWrapper>
        <S.BenefitsWrapper>
          <Benefits
            items={[
              { icon: 'insert_emoticon', title: 'Комфорт', description: 'Шумопоглощающие стены' },
              { icon: 'location_city', title: 'Удобство', description: 'Окно в каждой из спален' },
            ]}
          />
        </S.BenefitsWrapper>
        <S.StarRatingWrapper>
          <StarRating rating={4} />
          <StarRating rating={5} />
        </S.StarRatingWrapper>
      </S.Container>
    );
  }
}

export default UIFormElementsLayout;
