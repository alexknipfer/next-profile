import '@testing-library/jest-dom/extend-expect';
import { cache } from 'swr';

import { server } from './server';

beforeAll(() => server.listen());

afterEach(() => {
  cache.clear();
  server.resetHandlers();
});

afterAll(() => server.close());
