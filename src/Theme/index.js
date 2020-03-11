import { Colors, Metrics, Font } from './symbols';
import { border, transition } from './mixins';

function getResult (callbackOrValue) {
  if (typeof(callbackOrValue) === 'function') return callbackOrValue;
  return () => callbackOrValue;
}

export function getMetricFromTheme(key) {
  return props => props.theme.metric[key];
}

export function getFontFromTheme(key) {
  return props => props.theme.font[key];
}

export function getColorFromTheme(key) {
  return props => props.theme.color[key];
}

export function defaultProp (key, defaultValue) {
  return props => props[key] || getResult(defaultValue)(props);
}

export function ifProp (key, pass, fail = '') {
  return props => props[key] ? getResult(pass)(props) : getResult(fail)(props);
}

export function ifNotProp (key, pass, fail = '') {
  return props => !props[key] ? getResult(pass)(props) : getResult(fail)(props);
}

export {
  Colors,
  Metrics,
  Font,

  border,
  transition,
}