import { Suspense } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const ComponentLoader = (props: IProps) => {
  const { children } = props;

  return <Suspense fallback="Loading...">{children}</Suspense>;
};
