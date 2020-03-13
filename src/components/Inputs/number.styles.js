import styled from 'styled-components';
import { ifProp, getColorFromTheme, Colors, border } from '../../Theme';

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const size = '8px';
const margin = '2px';

const getDirection = () => ifProp('top', 'top', 'bottom');

export const Button = styled.span`
  ${ border(Colors.Black) };
  
  color: ${ getColorFromTheme(Colors.Black) };
  background: ${ getColorFromTheme(Colors.White) };
  
  height: ${ size };
  width: ${ size };
  
  right: ${ margin };
  ${ getDirection }: ${ margin };
  
  cursor: pointer;
  display: none;
  position: absolute;
  user-select: none;
  line-height: 0;
  padding: 1px;
  
  ${ Wrapper }:hover > & {
    display: inline-block;
  }
  
  &:hover {
    background: ${ getColorFromTheme(Colors.LightestGrey) }
  }
`;
