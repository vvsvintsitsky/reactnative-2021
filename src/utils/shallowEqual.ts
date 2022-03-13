export function shallowEqual(left: any, right: any) {
  if (typeof left !== typeof right) {
    return false;
  }

  if ((left && !right) || (!left && right)) {
    return false;
  }

  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);

  return (
    leftKeys.length === rightKeys.length &&
    leftKeys.every(key => left[key] === right[key])
  );
}
