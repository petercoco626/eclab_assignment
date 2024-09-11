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
    <div className="grid grid-cols-2">
      <ReportDetailItem title="Title" content={title} />
      <ReportDetailItem title="Counselor" content={counselor} />
      <ReportDetailItem title="Received Date" content={receivedDate} />
    </div>
  );
}
