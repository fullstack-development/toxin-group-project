import React from 'react';
import onClickOutside from 'react-onclickoutside';

import ExpandIcon from '../Expand-Icon/Expend-Icon';
import * as S from './Expander.styles';

type Props = {
  title: string;
  isOpen: boolean;
  children: JSX.Element;
}

type State = {
  isOpen: boolean;
}

class Expander extends React.Component<Props> {
  state: State = {
    isOpen: false,
  };

  componentDidMount() {
    const { isOpen } = this.props;

    this.setState({ isOpen });
  }

  handleHeaderClick = () => {
    this.setState((prevState: {isOpen: boolean}) => ({ isOpen: !prevState.isOpen }));
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <S.Expander>
        <S.Header onClick={this.handleHeaderClick}>
          <S.Title>{title}</S.Title>
          <ExpandIcon direction={isOpen ? 'less' : 'more'} />
        </S.Header>
        <S.Content isOpen={isOpen}>
          {children}
        </S.Content>
      </S.Expander>
    );
  }
}

export default onClickOutside(Expander);
