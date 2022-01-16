import {RgbaColor} from './types';

export function createRgbaColor(
  initialValues: Partial<RgbaColor> = {},
): RgbaColor {
  return {r: 0, g: 0, b: 0, a: 0, ...initialValues};
}
