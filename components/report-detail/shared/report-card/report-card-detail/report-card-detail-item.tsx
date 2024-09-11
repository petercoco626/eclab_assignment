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
    <div>
      {icon && icon}
      <div>{title}:</div>
      <div>{content}</div>
    </div>
  );
}
