export const mapItems = <T>(
  items: Array<T>,
  prop?: string,
): Record<string | number, T> =>
  items.reduce((acc: Record<string | number, T>, item: T) => {
    return {
      ...acc,
      [prop ?? 'id']: item,
    };
  }, {});
