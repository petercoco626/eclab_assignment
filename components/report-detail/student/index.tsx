import { ReportCard } from '../shared/report-card';
import { ReportItemCountOnType } from '../shared/report-item-count-on-type';
import { ReportDetailInfo } from './report-detail-info';
import { FetchReportResponse } from '@/types/report';

export function ReportDetailOnStudent({
  reportResponse,
}: {
  reportResponse: FetchReportResponse;
}) {
  return (
    <div className="lg:p-10 lg:bg-white lg:rounded-[20px] max-w-[1024px]">
      <ReportDetailInfo
        counselor={reportResponse.data.counselor.name}
        receivedDate={reportResponse.data.send_dt}
        title={reportResponse.data.title}
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
