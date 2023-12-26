import React from "react";
export const ShoppingIcon = ({
  icon,
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M2.66667 25C1.93333 25 1.30556 24.7669 0.783333 24.3006C0.261111 23.8343 0 23.2738 0 22.619V8.33333C0 7.67857 0.261111 7.11806 0.783333 6.65179C1.30556 6.18552 1.93333 5.95238 2.66667 5.95238H5.33333C5.33333 4.30556 5.98333 2.90179 7.28333 1.74107C8.58333 0.580357 10.1556 0 12 0C13.8444 0 15.4167 0.580357 16.7167 1.74107C18.0167 2.90179 18.6667 4.30556 18.6667 5.95238H21.3333C22.0667 5.95238 22.6944 6.18552 23.2167 6.65179C23.7389 7.11806 24 7.67857 24 8.33333V22.619C24 23.2738 23.7389 23.8343 23.2167 24.3006C22.6944 24.7669 22.0667 25 21.3333 25H2.66667ZM12 15.4762C13.8444 15.4762 15.4167 14.8958 16.7167 13.7351C18.0167 12.5744 18.6667 11.1706 18.6667 9.52381H16C16 10.5159 15.6111 11.3591 14.8333 12.0536C14.0556 12.748 13.1111 13.0952 12 13.0952C10.8889 13.0952 9.94444 12.748 9.16667 12.0536C8.38889 11.3591 8 10.5159 8 9.52381H5.33333C5.33333 11.1706 5.98333 12.5744 7.28333 13.7351C8.58333 14.8958 10.1556 15.4762 12 15.4762ZM8 5.95238H16C16 4.96032 15.6111 4.11706 14.8333 3.42262C14.0556 2.72817 13.1111 2.38095 12 2.38095C10.8889 2.38095 9.94444 2.72817 9.16667 3.42262C8.38889 4.11706 8 4.96032 8 5.95238Z"
      fill="#005B41"
    />
  </svg>
);
