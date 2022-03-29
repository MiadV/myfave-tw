import React from 'react';

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 24, width = 24, className, ...otherProps } = props;

  return (
    <svg
      height={height}
      width={width}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11.405 4.488-7.333 6.254a.917.917 0 0 0-.322.697v7.375c0 .506.41.916.917.916H9.75v-3.444a2.25 2.25 0 0 1 4.5 0v3.444h5.083c.507 0 .917-.41.917-.916v-7.375a.917.917 0 0 0-.322-.697l-7.333-6.254a.917.917 0 0 0-1.19 0ZM15.75 18.23v-1.944a3.75 3.75 0 1 0-7.5 0v1.944h-3v-6.522L12 5.952l6.75 5.756v6.522h-3Z"
      />
    </svg>
  );
}

export default HomeIcon;
