import styled from 'styled-components';
import { Input } from './index.styles';

export const NumberInputWrapper = styled.div`
  display: inline-block;
  position: relative;
  
  ${ Input } {
    padding-left: 12px;
  }
`;

const NumberInputSpan = styled.span`
  background: white;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  display: none;
  font-size: 12px;
  font-weight: 800;
  height: 60%;
  left: 12px;
  padding-top: -3px;
  position: absolute;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  width: 10px;
  
  ${ NumberInputWrapper }:hover > & {
    display: inline-block;
  }
`;

export const UpArrow = styled(NumberInputSpan)`
  top: -5px;
`;

export const DownArrow = styled(NumberInputSpan)`
  bottom: -5px;
`;