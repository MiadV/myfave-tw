import React from 'react';

function RetailIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 28, width = 36, className, ...otherProps } = props;

  return (
    <svg
      viewBox="0 0 28 36"
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <path
        fill="#426C9D"
        fillRule="nonzero"
        d="M5.15 35.1h17.7c2.85 0 5.15-2.05 5.15-4.55L25.9 6.9h-5.05v-.05C20.85 3.05 17.8 0 14 0S7.15 3.05 7.15 6.85v.05H2.1L0 30.5v.05c0 2.5 2.3 4.55 5.15 4.55zM8.8 6.85c0-2.85 2.35-5.2 5.2-5.2s5.2 2.35 5.2 5.2v.05L8.8 6.85zm-5.2 1.7h3.55v3.1H8.8v-3.1h10.35v3.1h1.65v-3.1h3.55L26.3 30.6c0 1.6-1.6 2.85-3.5 2.85H5.1c-1.9 0-3.5-1.3-3.5-2.85l2-22.05z"
      />
    </svg>
  );
}

export default RetailIcon;
