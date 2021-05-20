import next from 'next';
import { resolve } from 'path';

const dev = process.env.NODE_ENV !== 'production';

export const createClient = () => {
  console.log(__dirname);
  return next({
    dir: resolve(__dirname, '../'),
  });
};
