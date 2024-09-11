import { ReportDetailItem } from '../shared/report-detail-item';

interface ReportDetailInfoProps {
  title: string;
  school: string;
  counselor: string;
  receivedDate: string;
  student: string;
  grade: string;
  status: string;
  deliveredDate: string;
}

export function ReportDetailInfo({
  title,
  school,
  counselor,
  receivedDate,
  student,
  grade,
  status,
  deliveredDate,
}: ReportDetailInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-10 mb-10">
      <ReportDetailItem title="Title" content={title} />
      <ReportDetailItem title="Student" content={student} />
      <ReportDetailItem title="School" content={school} />
      <ReportDetailItem title="Grade" content={grade} />
      <ReportDetailItem title="Counselor" content={counselor} />
      <ReportDetailItem title="Status" content={status} />
      <ReportDetailItem title="Received Date" content={receivedDate} />
      <ReportDetailItem title="Delivered Date" content={deliveredDate} />
    </div>
  );
}
