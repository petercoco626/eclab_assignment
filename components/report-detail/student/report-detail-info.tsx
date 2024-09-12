import clsx from 'clsx';
import { ReportDetailItem } from '../shared/report-detail-item';

interface ReportDetailInfoProps {
  title: string;
  counselor: string;
  receivedDate: string;
}

export function ReportDetailInfo({
  title,
  counselor,
  receivedDate,
}: ReportDetailInfoProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 mb-10',
        'p-5 bg-white border border-system-light-gray rounded-[10px] sm:p-0 sm:bg-transparent sm:border-none'
      )}
    >
      <ReportDetailItem title="Title" content={title} />
      <ReportDetailItem title="Counselor" content={counselor} />
      <ReportDetailItem title="Received Date" content={receivedDate} />
    </div>
  );
}
