import React from 'react';

function ServiceIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 18, width = 32, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 18 32'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <g fill='#FFF' fillRule='evenodd'>
        <path
          stroke='#9F6AA9'
          strokeWidth='1.584'
          d='M12.114 16.289l.776 10.696c.167 2.301-1.586 4.185-3.892 4.185h-.416c-2.306 0-4.059-1.885-3.892-4.185l.776-10.696c-2.653-1.291-4.398-4.038-4.398-7.115 0-2.84 1.487-5.42 3.854-6.82l1.195-.708v6.216a2.672 2.672 0 1 0 5.346 0V1.646l1.195.708c2.367 1.4 3.854 3.98 3.854 6.82 0 3.077-1.745 5.824-4.398 7.115zM8.79 26.438a.902.902 0 1 0 0 1.804.902.902 0 0 0 0-1.804z'
        />
        <path d='M8.79 28.11a.77.77 0 1 0 0-1.54.77.77 0 0 0 0 1.54z' />
      </g>
    </svg>
  );
}

export default ServiceIcon;
