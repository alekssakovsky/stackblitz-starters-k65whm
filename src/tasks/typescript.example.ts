/*export type Valuable<T> = any;

function isNil(value: unknown): boolean {
  return value === undefined || value === null;
}
// export type Valuable<T> = {
//  [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
//};
export function objectWithoutNulls<T extends Record<string, unknown>>(
  obj: T
): Valuable<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => !isNil(v))
  ) as Valuable<T>;
}

const a = objectWithoutNulls({ age: null, name: 'Alex' });

console.log(a);*/
