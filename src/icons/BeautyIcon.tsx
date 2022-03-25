import React from 'react';

function BeautyIcon(props: React.SVGProps<SVGSVGElement>) {
  const { height = 20, width = 29, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 20 29'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <g fill='none' fillRule='evenodd'>
        <path
          fill='#DD4C85'
          fillRule='nonzero'
          stroke='#DD4C85'
          strokeWidth='.88'
          d='M14.023 6.725c0-.353.447-.639.988-.639h.803c.546 0 .988.286.988.64v9.191c0 .353-.447.64-.988.64h-.803c-.546 0-.988-.286-.988-.64V6.725z'
        />
        <path
          fill='#FFF'
          d='M14.813 6.799v9.12c0 .07.088.127.198.127h.803c.107 0 .198-.058.198-.127v-9.12c0-.071-.088-.128-.198-.128h-.803c-.107 0-.198.059-.198.128z'
        />
        <path
          fill='#DD4C85'
          fillRule='nonzero'
          stroke='#DD4C85'
          strokeWidth='.88'
          d='M12.84 2.887c-.114-.7.389-1.266 1.11-1.266h2.924c.728 0 1.225.568 1.112 1.266l-.515 3.172c-.114.699-.801 1.265-1.523 1.265h-1.071c-.727 0-1.41-.567-1.523-1.265l-.515-3.172z'
        />
        <path
          fill='#FFF'
          d='M14.135 5.94c.053.326.404.619.742.619h1.071c.335 0 .69-.294.742-.62l.516-3.171c.038-.235-.09-.382-.332-.382h-2.923c-.239 0-.37.149-.331.382l.515 3.172z'
        />
        <path
          fill='#DD4C85'
          fillRule='nonzero'
          stroke='#DD4C85'
          strokeWidth='.88'
          d='M15.44 28.45c-4.836 0-3.577-12.237-3.577-12.237.057-.786.695-1.423 1.418-1.423h4.317c.726 0 1.368.64 1.419 1.436 0 0 1.258 12.224-3.577 12.224z'
        />
        <path
          fill='#FFF'
          d='M15.44 27.689c1.552 0 2.491-1.946 2.816-5.425.154-1.65.149-3.425.047-5.095a31.8 31.8 0 0 0-.05-.688l-.024-.277c-.022-.344-.315-.644-.63-.644H13.28c-.313 0-.607.299-.633.668l-.022.24c-.016.201-.033.433-.049.69-.102 1.672-.107 3.448.046 5.1.325 3.483 1.264 5.43 2.817 5.43z'
        />
        <g>
          <path
            fill='#DD4C85'
            fillRule='nonzero'
            stroke='#DD4C85'
            strokeWidth='.88'
            d='M8.309 12.334l-.09.735H1.341l-.09-.734a1.561 1.561 0 0 1-.012-.191V5.218c0-.667.355-1.516.795-1.954.2-.236.536-.564.99-.892.363-.263.75-.482 1.16-.643.88-.345 1.704-.524 2.209-.583C7.423.959 8.32 1.66 8.32 2.64v9.505c0 .063-.004.126-.011.189z'
          />
          <path
            fill='#DD4C85'
            fillRule='nonzero'
            stroke='#DD4C85'
            strokeWidth='.88'
            d='M.563 12.536h8.773V26.88c0 .84-.712 1.514-1.592 1.514H2.156c-.876 0-1.593-.678-1.593-1.514V12.536z'
          />
          <path
            fill='#FFF'
            d='M7.533 4.263l-.001 8.272H2.034L2.028 5.95a11.43 11.43 0 0 0 2.385-.19c.753-.146 1.415-.377 1.957-.71a3.622 3.622 0 0 0 1.163-.787zM6.627 1.96c.389-.068.72.103.848.397l-.009.001a1.849 1.849 0 0 1-.09.35c-.095.28-.241.56-.448.818a2.819 2.819 0 0 1-1.109.828c-.487.292-1.021.479-1.646.6-.7.136-1.443.181-2.14.167.034-.448.3-1.03.621-1.342 0 0 .763-.87 1.863-1.285 1.1-.416 2.11-.534 2.11-.534zM8.545 25.352l.001 1.528c0 .378-.328.685-.743.685H2.095c-.41 0-.743-.31-.743-.685v-1.528h7.193zm.001-11.987v11.158H1.351V13.365h7.194z'
          />
        </g>
      </g>
    </svg>
  );
}

export default BeautyIcon;
