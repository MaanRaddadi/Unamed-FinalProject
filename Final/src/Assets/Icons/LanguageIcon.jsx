import React from "react";
export const LanguageIcon = ({
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
    viewBox="0 0 30 30"
    width={width || size}
    {...props}
  >
    <path
      d="M15 -0.0012207C12.0333 -0.0012207 9.13319 0.87851 6.66645 2.52673C4.19972 4.17495 2.27713 6.51764 1.14181 9.25853C0.00649798 11.9994 -0.29055 15.0154 0.288228 17.9251C0.867006 20.8349 2.29562 23.5076 4.3934 25.6054C6.49119 27.7032 9.16394 29.1318 12.0737 29.7106C14.9834 30.2893 17.9994 29.9923 20.7403 28.857C23.4812 27.7217 25.8238 25.7991 27.4721 23.3323C29.1203 20.8656 30 17.9655 30 14.9988C29.9955 11.0219 28.4137 7.20923 25.6016 4.39717C22.7896 1.5851 18.9769 0.00330005 15 -0.0012207ZM28.7645 14.3884H22.6293C22.5877 12.1559 22.1688 9.94653 21.3902 7.85381C22.6876 7.24177 23.8903 6.44629 24.9612 5.49181C27.2671 7.89772 28.6189 11.0603 28.7645 14.3896V14.3884ZM15.61 1.75197C16.5345 2.51505 17.3633 3.38723 18.0782 4.34945C18.7417 5.24081 19.3108 6.19865 19.7765 7.20759C18.4394 7.70101 17.0339 7.98377 15.61 8.04576V1.75197ZM17.0472 1.37172C19.6573 1.7645 22.0989 2.90127 24.0796 4.64592C23.1269 5.4818 22.0633 6.18195 20.9188 6.72649C19.9959 4.70299 18.6799 2.8832 17.0472 1.37295V1.37172ZM11.9841 4.35025C12.6831 3.4098 13.4906 2.55515 14.39 1.80403V8.04658C12.9848 7.98584 11.5974 7.70974 10.276 7.22793C10.7436 6.21186 11.3161 5.24739 11.9841 4.35025ZM9.13202 6.75211C7.96783 6.20414 6.88635 5.49543 5.91924 4.64672C7.91858 2.88608 10.387 1.7452 13.0235 1.36318C11.3798 2.88202 10.0567 4.71445 9.13202 6.75252V6.75211ZM14.39 9.26662V14.3908H8.65335C8.69955 12.3292 9.08921 10.2898 9.80629 8.35647C11.2771 8.89794 12.8239 9.2048 14.39 9.26662ZM14.39 15.6108V20.648C12.8605 20.708 11.3494 21.0024 9.90918 21.5207C9.1457 19.6398 8.72056 17.6388 8.65335 15.61L14.39 15.6108ZM14.39 21.868V28.0707C12.752 26.5089 11.4038 24.6693 10.4078 22.637C11.6898 22.185 13.0318 21.9256 14.39 21.8672V21.868ZM13.2269 28.6628C10.4947 28.3091 7.93214 27.1415 5.87247 25.3118C6.88372 24.414 8.02195 23.6705 9.25036 23.1051C10.2457 25.1728 11.591 27.0527 13.2269 28.662V28.6628ZM15.61 28.1289V21.866C16.987 21.9252 18.3472 22.1911 19.6451 22.6549C18.6374 24.7054 17.2708 26.559 15.61 28.128V28.1289ZM20.8001 23.1291C22.0091 23.6917 23.13 24.4269 24.1275 25.3118C22.0861 27.1252 19.5503 28.2886 16.8443 28.6535C18.4702 27.0524 19.8083 25.1834 20.8001 23.1283V23.1291ZM15.61 20.6484V15.61H21.4081C21.341 17.6459 20.9133 19.6537 20.1449 21.5402C18.6886 21.0096 17.1588 20.7083 15.61 20.6472V20.6484ZM15.61 14.3912V9.26702C17.195 9.20407 18.7599 8.88958 20.2462 8.33532C20.9685 10.2746 21.3608 12.3211 21.4069 14.39L15.61 14.3912ZM5.03878 5.49343C6.12421 6.46112 7.34488 7.26545 8.6623 7.88105C7.89015 9.96632 7.47468 12.1667 7.43331 14.39H1.2355C1.38161 11.0612 2.73339 7.89913 5.03878 5.49343ZM1.2355 15.61H7.43331C7.49557 17.7974 7.94384 19.9566 8.75746 21.988C7.3852 22.6176 6.11609 23.4513 4.99323 24.4606C2.71461 22.0599 1.38011 18.9168 1.2355 15.61ZM25.0048 24.461C23.897 23.4646 22.6466 22.6391 21.295 22.012C22.1145 19.9736 22.566 17.8061 22.6285 15.61H28.7645C28.6193 18.9171 27.2841 22.0604 25.0048 24.461Z"
      fill="black"
      stroke="black"
      strokeWidth="0.00064"
    />
  </svg>
);
