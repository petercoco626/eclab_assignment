import clsx from 'clsx';
import { ReactNode } from 'react';

interface ReportCardDetailItemProps {
  icon?: ReactNode;
  title: string;
  content: string;
}

export function ReportCardDetailItem({
  icon,
  title,
  content,
}: ReportCardDetailItemProps) {
  return (
    <div className="flex items-center">
      {icon && icon}
      <div className={clsx('text-base font-bold', icon && 'ml-[10px] sm:ml-4')}>
        {title}:
      </div>
      <div className="text-base font-normal ml-1">{content}</div>
    </div>
  );
}
