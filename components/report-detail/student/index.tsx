import { ReportCardList } from '../shared/report-card/report-card-list';
import { ReportItemCountOnType } from '../shared/report-item-count-on-type';
import { ReportDetailInfo } from './report-detail-info';

export function ReportDetailOnStudent() {
  return (
    <div className="lg:p-10 lg:bg-white lg:rounded-[20px] max-w-[1024px]">
      <ReportDetailInfo />
      <ReportItemCountOnType />
      <ReportCardList />
    </div>
  );
}
