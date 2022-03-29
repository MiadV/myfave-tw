import React from 'react';

function ProfileIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.001 3.75c-2.696 0-4.896 2.122-4.896 4.741 0 1.752.985 3.282 2.443 4.103-3.09.995-5.325 3.819-5.326 7.146a.502.502 0 0 0 .258.442c.16.09.357.09.517 0 .16-.09.26-.258.258-.442 0-3.507 2.856-6.367 6.454-6.515a5.049 5.049 0 0 0 .584 0c3.598.148 6.451 3.008 6.452 6.515a.502.502 0 0 0 .258.442c.16.09.357.09.517 0 .16-.09.26-.259.258-.442 0-3.327-2.235-6.15-5.324-7.146 1.458-.82 2.443-2.351 2.443-4.103 0-2.619-2.2-4.741-4.896-4.741ZM8.137 8.491c0-2.062 1.72-3.733 3.864-3.733 2.143 0 3.863 1.67 3.863 3.733 0 1.972-1.572 3.587-3.582 3.725a7.933 7.933 0 0 0-.562 0c-2.01-.138-3.583-1.753-3.583-3.725Z"
      />
    </svg>
  );
}

export default ProfileIcon;
