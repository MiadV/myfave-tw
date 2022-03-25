import React from 'react';

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 29, width = 29, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 29 29'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <g fill='none' fillRule='evenodd'>
        <path
          fill='#FFF'
          fillRule='nonzero'
          d='M10.055 16.94h3.584l-2.867 10.754H7.187z'
        />
        <path
          stroke='#426C9D'
          strokeWidth='1.32'
          d='M10.055 16.51h-.33l-.086.32-2.867 10.753-.145.541h4.475l.085-.319 2.868-10.753.144-.541h-.56z'
        />
        <path
          fill='#FFF'
          fillRule='nonzero'
          d='M21.525 16.94h-3.584l2.867 10.754h3.585z'
        />
        <path
          stroke='#426C9D'
          strokeWidth='1.32'
          d='M21.525 16.51h.33l.086.32 2.867 10.753.145.541h-4.475l-.085-.319-2.868-10.753-.144-.541h.56z'
        />
        <g transform='translate(3.603 .452)'>
          <circle
            cx='12.319'
            cy='11.829'
            r='11.829'
            fill='#FFF'
            fillRule='nonzero'
            transform='translate(0 .717)'
          />
          <circle
            cx='12.319'
            cy='12.546'
            r='12.259'
            stroke='#426C9D'
            strokeWidth='1.32'
          />
        </g>
        <g transform='translate(7.187 4.037)'>
          <circle
            cx='8.735'
            cy='8.244'
            r='8.244'
            fill='#FFF'
            fillRule='nonzero'
            transform='translate(0 .717)'
          />
          <circle
            cx='8.735'
            cy='8.961'
            r='8.674'
            stroke='#426C9D'
            strokeWidth='1.32'
          />
        </g>
        <g transform='translate(10.772 7.621)'>
          <circle
            cx='5.15'
            cy='4.66'
            r='4.66'
            fill='#FFF'
            fillRule='nonzero'
            transform='translate(0 .717)'
          />
          <circle
            cx='5.15'
            cy='5.377'
            r='5.09'
            stroke='#426C9D'
            strokeWidth='1.32'
          />
        </g>
        <path
          fill='#FFF'
          stroke='#426C9D'
          strokeWidth='1.32'
          d='M1.452 10.13h5.399l1.053 2.868-1.053 2.867H1.452l1.053-2.867z'
        />
        <path
          fill='#FFF'
          fillRule='nonzero'
          stroke='#426C9D'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.014'
          d='M1.452 13.07H15.79'
        />
      </g>
    </svg>
  );
}

export default ActivityIcon;
