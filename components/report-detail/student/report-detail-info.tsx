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
        'grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 mb-10',
        'p-5 bg-white border border-system-light-gray rounded-[10px] lg:p-0 lg:bg-transparent lg:border-none'
      )}
    >
      <ReportDetailItem title="Title" content={title} />
      <ReportDetailItem title="Counselor" content={counselor} />
      <ReportDetailItem title="Received Date" content={receivedDate} />
    </div>
  );
}
