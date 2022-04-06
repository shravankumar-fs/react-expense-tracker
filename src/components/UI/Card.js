import React from 'react';
import './Card.css';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let classInit = 'Card ' + this.props.className;
    return <div className={classInit}>{this.props.children}</div>;
  }
}

export default Card;
