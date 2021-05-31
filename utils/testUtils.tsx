import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { SWRConfig } from 'swr';

const Wrapper: React.FC = ({ children }) => {
  console.log('wrapper!!!!!');

  return <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>;
};

const customerRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customerRender as render };
