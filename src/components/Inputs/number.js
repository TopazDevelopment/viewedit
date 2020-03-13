import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './index.styles';
import { Button, Wrapper } from './number.styles';
import Icon from '../../Presentation/Icon';

class NumberInput extends React.Component {
  state = { preventBlur: false };
  _inputRef = React.createRef();

  onBlur (e) {
    if (!this.props.onBlur) return;
    if (this.state.preventBlur) {
      this.setState({ preventBlur: false });
    } else {
      this.props.onBlur(e);
    }
  }

  onMouseDown () {
    this.setState({ preventBlur: true });
  }

  updateValue (adjustment) {
    return (e) => {
      e.stopPropagation();
      this.props.onChange(this.props.value + adjustment);
      this._inputRef.current.focus();
    }
  }

  renderControl (value) {
    const positive = value > 0;
    return (
      <Button
        children={ <Icon size="smallest" type={ positive ? 'plus' : 'minus' } /> }
        onClick={ this.updateValue(value) }
        onMouseDown={ this.onMouseDown.bind(this) }
        top={ positive }
      />
    );
  }

  render () {
    return (
      <Wrapper>
        <Input
          { ...this.props }
          onBlur={ this.onBlur.bind(this) }
          ref={ this._inputRef }
        />
        { this.renderControl(1) }
        { this.renderControl(-1) }
      </Wrapper>
    );
  }
}

NumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.number,
};

NumberInput.defaultProps = {
  value: 0,
};

export default NumberInput;