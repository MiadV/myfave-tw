import React from 'react';

function HamburgerMenu(props: React.SVGProps<SVGSVGElement>) {
  const { height = 20, width = 20, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 20 17'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <g fill='none' fillRule='evenodd'>
        <path d='M-14-15h48v48h-48z' />
        <path
          fill='#FFF'
          fillRule='nonzero'
          d='M0 15.435c0 .794.746 1.435 1.67 1.435h16.66c.924 0 1.67-.641 1.67-1.435S19.254 14 18.33 14H1.67c-.924.03-1.67.672-1.67 1.435zm6.58-8.37h11.84c.874 0 1.58.641 1.58 1.435s-.706 1.435-1.58 1.435H6.58C5.707 9.935 5 9.294 5 8.5s.706-1.435 1.58-1.435zM18.355 2.87H1.646C.736 2.87 0 2.229 0 1.435S.736 0 1.646 0h16.708C19.264 0 20 .641 20 1.435s-.736 1.435-1.646 1.435z'
        />
      </g>
    </svg>
  );
}

export default HamburgerMenu;
