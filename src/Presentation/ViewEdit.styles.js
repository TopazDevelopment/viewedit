import styled, { css } from 'styled-components';
import { ifProp, ifNotProp, getColorFromTheme, Colors } from '../Theme';
import { Input } from '../components/Inputs/index.styles';
import { transition } from '../Theme';

const isNotEditing = css`
  ${ transition('border-color') };
  cursor: pointer;
  
  &:hover {
    border-bottom-color: ${ getColorFromTheme(Colors.Black) };
  }
`;

export const Wrapper = styled.div`
  border: 1px solid ${ ifProp('isEditing', 'transparent', getColorFromTheme(Colors.PrimaryColor)) };
  border-radius: 3px;
  padding: ${ ifProp('isEditing', 0, '2px 4px') };
  margin: 2px;
  min-height: 20px;
  ${ ifNotProp('isEditing', isNotEditing) };
  
  ${ Input } {
    border-color: ${ getColorFromTheme(Colors.Black) };
  }
`;