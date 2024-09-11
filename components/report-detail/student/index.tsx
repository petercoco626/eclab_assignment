import { ReportItemCountOnType } from '../shared/report-item-count-on-type';
import { ReportDetailInfo } from './report-detail-info';
import { FetchReportResponse } from '@/types/report';

export function ReportDetailOnStudent({
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
      />
      <ReportItemCountOnType
        reportItems={reportResponse.data.ec_report_items}
      />
    </div>
  );
}
