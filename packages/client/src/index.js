import next from 'next';
import { resolve } from 'path';

export const createClient = () => {
  return next({
    dir: resolve(__dirname, '../'),
  });
};
