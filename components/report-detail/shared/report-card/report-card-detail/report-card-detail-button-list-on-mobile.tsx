'use client';

import { Button } from '@/components/base/button';
import { usePathname } from 'next/navigation';
import IcLink from '@/assets/icons/ic-link.svg';
import clsx from 'clsx';

interface ReportCardDetailButtonListOnMobileProps {
  isAdded: boolean;
}

export function ReportCardDetailButtonListOnMobile({
  isAdded,
}: ReportCardDetailButtonListOnMobileProps) {
  const currentPath = usePathname();

  const isStudentPage = currentPath === '/';

  return (
    <div
      className={clsx(
        'lg:hidden mt-[30px] grid gap-[10px]',
        isStudentPage ? 'grid-cols-2' : 'grid-cols-1'
      )}
    >
      {isStudentPage && (
        <Button
          className="w-full"
          size="middle"
          variant={isAdded ? 'secondary' : 'primary'}
        >
          {isAdded ? 'already added!' : 'add to EC List'}
        </Button>
      )}
      <Button className="w-full" size="middle" variant={'tertiary'}>
        <div className="flex items-center gap-[10px]">
          {!isStudentPage && <IcLink className="stroke-white" />}
          <span>Visit Website</span>
        </div>
      </Button>
    </div>
  );
}
