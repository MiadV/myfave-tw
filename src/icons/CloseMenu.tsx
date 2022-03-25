import React from 'react';

function CloseMenu(props: React.SVGProps<SVGSVGElement>) {
  const { height = 20, width = 20, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 18 18'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <g fill='#FFF' fillRule='evenodd' transform='rotate(45 14.955 6.646)'>
        <rect width='3.086' height='23.548' x='10.895' y='.797' rx='1.5' />
        <path d='M22.41 11.035c1.025 0 1.856.682 1.856 1.536 0 .848-.842 1.536-1.856 1.536H2.466c-1.026 0-1.857-.682-1.857-1.536 0-.848.843-1.536 1.857-1.536H22.41z' />
      </g>
    </svg>
  );
}

export default CloseMenu;
