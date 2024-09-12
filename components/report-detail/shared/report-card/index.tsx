import { ReportItem } from '@/types/report';
import { ReportCardTitle } from './report-card-title';
import { ReportCardDetailOnPc } from './report-card-detail/report-card-detail-on-pc';
import { ReportCardDetailOnMobile } from './report-card-detail/report-card-detail-on-mobile';
import { ReportCardDetailButtonListOnMobile } from './report-card-detail/report-card-detail-button-list-on-mobile';

interface ReportCardProps {
  idx: number;
  reportItem: ReportItem;
}

export function ReportCard({ idx, reportItem }: ReportCardProps) {
  return (
    <div className="w-full rounded-[10px] border border-system-light-gray 2xl:px-10 lg:py-7 px-5 py-5">
      <ReportCardTitle
        idx={idx + 1}
        isAdded={reportItem.is_added}
        linkUrl={reportItem.ec_db.url}
        title={reportItem.ec_db.name}
        year={reportItem.ec_db.year}
      />
      <div className="w-full border-[2px] border-[#E6E9EC] border-dashed mb-5" />
      <ReportCardDetailOnPc
        ageLimit={reportItem.ec_db.age_limit}
        gradeLimit={reportItem.ec_db.grade_limit}
        nationality={reportItem.ec_db.nationality}
        participateWay={reportItem.ec_db.participate_way}
        recognitionLevel={reportItem.ec_db.recognition_level}
        reportItemType={reportItem.ec_db.ec_type}
      />
      <ReportCardDetailOnMobile
        ageLimit={reportItem.ec_db.age_limit}
        gradeLimit={reportItem.ec_db.grade_limit}
        nationality={reportItem.ec_db.nationality}
        participateWay={reportItem.ec_db.participate_way}
        recognitionLevel={reportItem.ec_db.recognition_level}
        reportItemType={reportItem.ec_db.ec_type}
      />
      <ReportCardDetailButtonListOnMobile isAdded={reportItem.is_added} />
    </div>
  );
}
