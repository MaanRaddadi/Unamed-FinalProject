import React from "react";
export const ArLogo = ({
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
    viewBox="0 0 192 83"
    width={width || size}
    {...props}
  >
    <path d="M20.8535 24.688C19.1042 24.688 18.2295 23.792 18.2295 22C18.2295 20.2933 19.1042 19.44 20.8535 19.44C22.5175 19.44 23.3495 20.2933 23.3495 22C23.3495 23.792 22.5175 24.688 20.8535 24.688ZM44.5335 50.032H46.7735V54H44.0215C41.3762 54 39.1788 53.3813 37.4295 52.144C37.1308 56.624 35.3388 60.144 32.0535 62.704C29.1522 65.008 25.4828 66.16 21.0455 66.16C15.6268 66.16 11.4242 64.24 8.4375 60.4C6.09083 57.456 4.9175 53.936 4.9175 49.84C4.9175 46.1707 5.85617 43.0133 7.7335 40.368L11.8935 39.536C9.8455 42.6507 8.8215 45.9787 8.8215 49.52C8.8215 53.2747 10.0375 56.368 12.4695 58.8C14.7308 61.0613 17.5895 62.192 21.0455 62.192C25.0988 62.192 28.2348 60.9973 30.4535 58.608C32.2882 56.6453 33.2055 54.064 33.2055 50.864V28.848L37.4935 26.608V42.736C37.4935 47.6 39.8402 50.032 44.5335 50.032ZM66.093 50.032H68.333V54H65.581C61.741 54 58.861 52.6987 56.941 50.096C54.9357 52.6987 52.0343 54 48.237 54H45.485V50.032H47.725C52.4183 50.032 54.765 47.6 54.765 42.736V28.848L59.053 26.608V42.736C59.053 47.6 61.3997 50.032 66.093 50.032ZM51.565 60.72C53.2717 60.72 54.125 61.5947 54.125 63.344C54.125 65.0933 53.2717 65.968 51.565 65.968C49.8583 65.968 49.005 65.0933 49.005 63.344C49.005 61.5947 49.8583 60.72 51.565 60.72ZM58.861 60.72C60.5677 60.72 61.421 61.5947 61.421 63.344C61.421 65.0933 60.5677 65.968 58.861 65.968C57.1543 65.968 56.301 65.0933 56.301 63.344C56.301 61.5947 57.1543 60.72 58.861 60.72ZM112.744 54H96.9355C94.6315 54 92.2848 53.5093 89.8955 52.528C87.4635 53.5093 85.0955 54 82.7915 54H67.0475V50.032H82.5355C83.3888 50.032 84.2635 49.968 85.1595 49.84C81.7888 47.408 78.1195 43.3973 74.1515 37.808V35.184C78.5888 28.9547 83.8155 25.84 89.8315 25.84C95.8048 25.84 101.053 28.9973 105.576 35.312V37.808C101.608 43.3973 97.9595 47.408 94.6315 49.84C95.4848 49.968 96.3382 50.032 97.1915 50.032H112.68L112.744 54ZM77.8635 36.528C82.3435 42.5013 86.3328 46.384 89.8315 48.176C93.2875 46.384 97.2982 42.48 101.864 36.464C98.4502 31.984 94.4395 29.744 89.8315 29.744H89.6395C85.2875 29.744 81.3622 32.0053 77.8635 36.528ZM111.485 54V50.032H120.189V54H111.485Z" fill="white"/>
    <ellipse cx="158.617" cy="5.91358" rx="6.08855" ry="5.91358" fill="white"/>
    <path d="M176.757 3.20691L176.757 6.25156L175.405 9.96867L174.187 12.1651L173.491 13.0944L172.36 14.6995L170.36 16.8115L168.794 18.3321L163.923 21.7113L162.01 22.8095L159.748 24.4991L157.748 26.6956L156.269 30.9196L160.531 31.5954L165.315 33.2005L168.359 35.8194L170.36 38.5228L165.315 36.7487L162.706 36.1573L160.357 35.9884L156.791 35.9884L155.399 36.1573L150.789 37.2556L150.529 34.8901L150.529 31.173L150.789 28.4697L151.485 26.3577L152.442 24.1612L154.182 21.7958L156.269 19.7683L163.228 16.6425L165.924 15.0374L168.359 13.2634L172.882 8.61699L176.757 3.20691Z" fill="white"/>
    <path d="M167.815 41.2235C167.445 44.3444 166.186 47.3031 164.179 49.7674C162.173 52.2317 159.5 54.104 156.458 55.1739C153.417 56.2438 150.129 56.4691 146.964 55.8244C143.798 55.1796 140.88 53.6905 138.538 51.5241C136.195 49.3577 134.521 46.5999 133.703 43.5605C132.885 40.521 132.956 37.3203 133.908 34.3177C134.859 31.3152 136.654 28.6298 139.09 26.5631C141.526 24.4964 144.507 23.1303 147.698 22.6181" stroke="white" stroke-width="4" stroke-linecap="round"/>
    <path d="M133.193 37.7202C132.909 40.7784 131.772 43.7047 129.905 46.1849C127.786 49 124 52 120 52" stroke="white" stroke-width="4" stroke-linecap="round"/>
  </svg>
);
