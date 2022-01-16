import {RgbaColor} from './types';

export function convertRgbaColorToString(color: RgbaColor): string {
  return `rgba(${color.r},${color.g},${color.b},${color.a})`;
}
