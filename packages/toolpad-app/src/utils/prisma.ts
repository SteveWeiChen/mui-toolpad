// See https://github.com/prisma/prisma/issues/5042#issuecomment-1104679760
export function excludeFields<T, K extends (keyof T)[]>(
  fields: T,
  excluded: K,
): Record<Exclude<keyof T, K[number]>, boolean> {
  const result = {} as Record<Exclude<keyof T, K[number]>, boolean>;
  for (const key of Object.keys(fields)) {
    if (!excluded.includes(key as any)) {
      result[key as Exclude<keyof T, K[number]>] = true;
    }
  }
  return result;
}