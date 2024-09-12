'use client';

import { Pathname } from '@/libs/path';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function HamburgerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentPath = usePathname();

  return (
    <>
      <div className="sm:hidden">
        <button type="button" onClick={() => setIsDrawerOpen((pre) => !pre)}>
          {isDrawerOpen ? <IcCancel /> : <IcHamburger />}
        </button>
      </div>
      {isDrawerOpen && (
        <section className="sm:hidden w-full h-[calc(100%-55px)] absolute top-[55px] left-0 z-20 bg-[#3B3A48]/60 ">
          <div className="h-[130px] w-full bg-system-gray rounded-b-xl">
            {drawerItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'px-5 py-4 flex items-center gap-[14px]',
                  currentPath === item.href
                    ? 'bg-system-purple'
                    : 'bg-transparent'
                )}
              >
                <span
                  className={clsx(
                    'text-white font-medium text-base',
                    currentPath === item.href ? 'text-white' : 'text-[#9CA3AF]'
                  )}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="w-full h-[calc(100%-130px)] blur-md" />
        </section>
      )}
    </>
  );
}

const drawerItems: {
  title: string;
  href: string;
}[] = [
  {
    title: 'EC Report_STU',
    href: Pathname.HOME,
  },
  {
    title: 'EC Report_CON',
    href: Pathname.COUNSELOR,
  },
];

function IcHamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IcCancel() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
        fill="white"
      />
    </svg>
  );
}
