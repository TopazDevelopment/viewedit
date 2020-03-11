import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './index.styles';
import { DownArrow, UpArrow, NumberInputWrapper } from './number.styles';

function NumberInput (props) {
  return (
    <NumberInputWrapper>
      <Input
        { ...props }
        onChange={ e => props.onChange(e.target.value) }
      />
      <UpArrow
        children="+"
        onClick={ () => props.onChange(props.value + 1) }
      />
      <DownArrow
        children="-"
        onClick={ () => props.onChange(props.value - 1) }
      />
    </NumberInputWrapper>
  );
}

NumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

export default NumberInput;