'use client';

import { Button } from '@/components/base/button';
import clsx from 'clsx';
import Link from 'next/link';
import IcLink from '@/assets/icons/ic-link.svg';
import { usePathname } from 'next/navigation';

interface ReportCardTitleProps {
  idx: number;
  title: string;
  year: string;
  linkUrl: string;
  isAdded: boolean;
}

export function ReportCardTitle({
  idx,
  title,
  year,
  linkUrl,
  isAdded,
}: ReportCardTitleProps) {
  const currentPath = usePathname();

  const isStudentPage = currentPath === '/';

  return (
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-start gap-[10px]">
        <div
          className={clsx(
            'w-6 h-7 rounded bg-system-purple flex items-center justify-center',
            'text-xl font-bold text-white',
            'min-w-6'
          )}
        >
          {idx}
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="text-xl font-bold">{title}</div>
          {/** TODO : 무슨 데이터를 써야하는건지? */}
          <div className="text-base font-normal">Young Arts</div>
          {!isStudentPage && (
            <span className="rounded-xl bg-[#6B7280] px-[10px] py-[3px] text-sm font-bold text-white w-fit">
              {year}
            </span>
          )}
        </div>
        <Link href={linkUrl} className="hidden sm:block">
          <IcLink className="stroke-[#111827]" />
        </Link>
      </div>
      {isStudentPage && (
        <Button
          className="hidden sm:block"
          size="small"
          variant={isAdded ? 'secondary' : 'primary'}
        >
          <>{isAdded ? 'already added!' : 'add to EC List'}</>
        </Button>
      )}
    </div>
  );
}
