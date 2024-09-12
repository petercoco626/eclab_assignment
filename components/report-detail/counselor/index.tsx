import { ReportItemCountOnType } from '../shared/report-item-count-on-type';
import { ReportDetailInfo } from './report-detail-info';
import { ReportCardList } from '../shared/report-card/report-card-list';

export function ReportDetailOnCounselor() {
  return (
    <div className="lg:p-10 lg:bg-white lg:rounded-[20px]">
      <ReportDetailInfo />
      <ReportItemCountOnType />
      <ReportCardList />
    </div>
  );
}
