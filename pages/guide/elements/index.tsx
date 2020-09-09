import React from 'react';
import Input from 'components/Input/Input';
import LikeButton from '@components/LikeButton/LikeButton';
import fieldValidator from 'shared/helpers/validators/validators';
import {
  Container, InputWrapper, ErrorMessage, LikeButtonWrapper,
} from './elements.styles';

type ElementsState = {
  name: string;
  email: string;
  formErrors: { name: string, email: string };
  isLikeButtonPressed: boolean;
  likesCount: number;
}

class Elements extends React.Component {
  state: ElementsState = {
    name: '',
    email: '',
    formErrors: { name: '', email: '' },
    isLikeButtonPressed: false,
    likesCount: 0,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      formErrors: { [name]: fieldValidator(name, value) },
    });
  };

  handleLikeButtonClick = () => {
    const { isLikeButtonPressed } = this.state;
    let { likesCount } = this.state;

    if (isLikeButtonPressed) {
      this.setState({
        likesCount: likesCount -= 1,
        isLikeButtonPressed: false,
      });
    } else {
      this.setState({
        likesCount: likesCount += 1,
        isLikeButtonPressed: true,
      });
    }
  }

  render() {
    const { name, formErrors, email, isLikeButtonPressed, likesCount } = this.state;
    return (
      <Container>
        <form>
          <InputWrapper>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
            />
            <ErrorMessage>{formErrors.name}</ErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <ErrorMessage>{formErrors.email}</ErrorMessage>
          </InputWrapper>
          <LikeButtonWrapper>
            <LikeButton
              count={likesCount}
              isActive={isLikeButtonPressed}
              onCheckboxChange={this.handleLikeButtonClick}
            />
          </LikeButtonWrapper>
        </form>
      </Container>
    );
  }
}

export default Elements;
