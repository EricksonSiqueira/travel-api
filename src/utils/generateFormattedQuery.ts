import { decamelizeKeys } from 'humps';

export const getFormattedColumnNames = (object: any): string =>
  Object.keys(decamelizeKeys(object)).join(',');

export const getFormattedPlaceholders = (object: any): string =>
  Object.keys(object)
    .map(() => '?')
    .join(',');

export const getFormattedUpdateColumns = (object: any) =>
  Object.keys(object)
    .map((key) => `${key} = ?`)
    .join(', ');
