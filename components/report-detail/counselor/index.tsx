import { ReportCard } from '../shared/report-card';
import { ReportItemCountOnType } from '../shared/report-item-count-on-type';
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
      <ReportItemCountOnType
        reportItems={reportResponse.data.ec_report_items}
      />
      <div className="space-y-5">
        {reportResponse.data.ec_report_items.map((reportItem, idx) => (
          <ReportCard key={reportItem.id} idx={idx} reportItem={reportItem} />
        ))}
      </div>
    </div>
  );
}
