'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IcClipboard from '@/assets/icons/ic-clipboard.svg';
import { Pathname } from '@/libs/path';

export function Sidebar() {
  const currentPath = usePathname();

  return (
    <aside
      className={clsx(
        'w-[300px] h-full bg-system-gray',
        'hidden sm:block',
        'px-10 py-4 box-border'
      )}
    >
      <section>
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'px-5 py-4 rounded-[10px] flex items-center gap-[14px]',
              currentPath === item.href ? 'bg-system-purple' : 'bg-transparent'
            )}
          >
            <IcClipboard
              className={clsx(
                currentPath === item.href ? 'fill-white' : 'fill-[#9CA3AF]'
              )}
            />
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
      </section>
    </aside>
  );
}

const sidebarItems: {
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
