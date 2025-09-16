import type { FunctionComponent, JSX } from 'react';
import { Layout } from './Layout';
import { AppContextProvider, IAppContext } from '@/context/app.context';

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T & IAppContext>
) => {
  return function withLayoutComponent(props: T & IAppContext): JSX.Element {
    return (
      <AppContextProvider gitUrl={props.gitUrl}>
      <Layout>
        <Component {...props} />
      </Layout>
      </AppContextProvider>
    );
  };
};
