import styled from 'styled-components';
import {
  Colors,
  border,
  getColorFromTheme,
  ifProp,
  transition,
} from '../../Theme/';

export const Input = styled.input`
  ${ transition('border-color', '1s') }
  ${ props => !props.warning && !props.error && border(Colors.PrimaryColor) }
  ${ ifProp('warning', border(Colors.WarningColor)) }
  ${ ifProp('error', border(Colors.ErrorColor)) }
  
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    border-color: ${ getColorFromTheme(Colors.PrimaryColor) };
    border-bottom-color: ${ getColorFromTheme(Colors.SecondaryColor) };
  }
  
  &:focus {
    cursor: text;
    border-color: ${ getColorFromTheme(Colors.SecondaryColor) };
  }
  
  &::selection {
    background: ${ getColorFromTheme(Colors.PrimaryColor) };
  }
`;
