import {Point} from './types';

export function createPoint(pointPart: Partial<Point> = {}): Point {
  return {x: 0, y: 0, ...pointPart};
}
