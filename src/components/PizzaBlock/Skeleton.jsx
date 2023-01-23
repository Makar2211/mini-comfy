import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={310}
    height={350}
    viewBox='0 0 300 350'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='73' y='438' rx='0' ry='0' width='1' height='0' />
    <rect x='0' y='-1' rx='9' ry='9' width='280' height='230' />
    <rect x='0' y='237' rx='9' ry='9' width='280' height='50' />
    <rect x='0' y='298' rx='10' ry='10' width='112' height='40' />
    <rect x='141' y='297' rx='9' ry='9' width='138' height='40' />
  </ContentLoader>
);
