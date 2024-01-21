import { HttpErrorResponse } from '@angular/common/http';
import { baseObject } from '../models';
import { Message } from 'primeng/api';

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

export const getToastMessage = (err: HttpErrorResponse): Message => {
  const {
    status,
    error: { error, message },
  } = err;
  const severity =
    status < 300
      ? 'success'
      : status < 400
        ? 'info'
        : status < 500
          ? 'warning'
          : 'error';
  const summary =
    status < 300
      ? 'Success'
      : status < 400
        ? 'Info'
        : status < 500
          ? 'Warning'
          : 'Server error';
  return {
    severity,
    summary,
    detail: message ?? error ?? 'Unknown error',
  };
};
