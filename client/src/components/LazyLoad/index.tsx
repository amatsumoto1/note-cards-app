import React, { Suspense } from 'react';

type Props = {
  lazyElement: React.ReactNode,
  fallback?: React.ReactNode
}

const LazyLoad: React.VFC<Props> = ({ lazyElement, fallback}: Props) => {
  return (
    <Suspense fallback={fallback ?? null}>
      { lazyElement }
    </Suspense>
  )
}

export function createLazyComponent<T>(
    LazyComponent: React.ComponentType<T>,
    fallback: NonNullable<React.ReactNode> | null = null
  ) {
  const Component: React.FC<T> = (props: T) => {
    return (
      <LazyLoad
        lazyElement={
          <LazyComponent {...props} />
        }
        fallback={fallback}
      />
    )
  }

  return Component;
}

export default LazyLoad;