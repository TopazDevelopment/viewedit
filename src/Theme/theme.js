import { colors } from './colors';
import { Colors } from './symbols';

const color = {
  // Specify the actual Theme colors.
  [Colors.PrimaryColor]:    colors[Colors.LightBlue],
  [Colors.SecondaryColor]:  colors[Colors.LightGrey],
  [Colors.ErrorColor]:      colors[Colors.Red],
  [Colors.WarningColor]:    colors[Colors.Salmon],
  // Pass along other colors for ease of use.
  ...colors,
};

const metric = {};
const font = {};

export default {
  color,
  metric,
  font,
}