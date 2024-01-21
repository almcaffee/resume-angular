import { baseObject } from '../models';

/**
 * Returns a map of items with the given property as key
   @param items - The array of items to map
   @param prop - The property to use as the key defaults to 'id' or the first property
*/
export const mapItems = <T>(
  items: Array<T>,
  prop?: string,
): Record<string | number, T> =>
  items.reduce((acc: Record<string | number, T>, item: T) => {
    const data = item as baseObject;
    const keys = Object.keys(data);
    const ID = 'id';
    const key: string | number =
      !prop && keys.includes(ID)
        ? ID
        : prop && keys.includes(prop)
          ? prop
          : Object.keys(data)[0];
    return {
      ...acc,
      [key]: item,
    };
  }, {});
