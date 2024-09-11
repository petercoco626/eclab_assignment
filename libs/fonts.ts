import localFont from 'next/font/local';

export const pretendardFont = localFont({
  preload: true,
  src: [
    {
      path: '../assets/fonts/Pretendard-Bold.subset.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/fonts/Pretendard-Medium.subset.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/fonts/Pretendard-Regular.subset.woff2',
      style: 'normal',
      weight: '400',
    },
  ],
});
