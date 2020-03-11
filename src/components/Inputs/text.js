import React, { Component } from 'react';
import { Input } from './index.styles';

class TextInput extends Component {
  render() {
    return (
      <Input
        {...this.props }
        onChange={ e => this.props.onChange(e.target.value) }
      />
    );
  }
}

export default TextInput;