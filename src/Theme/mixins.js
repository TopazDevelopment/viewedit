import { css } from 'styled-components';
import { getColorFromTheme } from './index';

export function transition(property, duration, delay) {
  return css`
  transition-property: ${ property };
  transition-duration: ${ duration || '1s' };
  transition-delay: ${ delay || '0'};
`;
}

export function border (color, thickness, style) {
  return css`
  border: ${ thickness || '1px' } ${ style || 'solid' } ${ getColorFromTheme(color) };
  border-radius: 3px;
`;
}