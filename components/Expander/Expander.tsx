import React from 'react';
import onClickOutside from 'react-onclickoutside';

import ExpandIcon from '../Expand-Icon/Expend-Icon';
import {
  StyledExpander, Title, Header, Content,
} from './Expander.styles';

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
      <StyledExpander>
        <Header onClick={this.handleHeaderClick}>
          <Title>{title}</Title>
          <ExpandIcon direction={isOpen ? 'less' : 'more'} />
        </Header>
        <Content isOpen={isOpen}>
          {children}
        </Content>
      </StyledExpander>
    );
  }
}

export default onClickOutside(Expander);
