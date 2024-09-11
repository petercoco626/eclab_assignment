import { ReportDetailInfo } from './report-detail-info';
import { FetchReportResponse } from '@/types/report';

export function ReportDetailOnCounselor({
  reportResponse,
}: {
  reportResponse: FetchReportResponse;
}) {
  return (
    <div>
      <ReportDetailInfo
        counselor={reportResponse.data.counselor.name}
        receivedDate={reportResponse.data.send_dt}
        title={reportResponse.data.title}
        student={reportResponse.data.student.name}
        deliveredDate={reportResponse.data.delivered_dt}
        grade={reportResponse.data.student.profile.grade}
        school={reportResponse.data.student.profile.school.name}
        status={reportResponse.data.student.profile.status_type}
      />
    </div>
  );
}
