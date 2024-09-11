import { ReportItem } from '@/types/report';
import { ReportCardTitle } from './report-card-title';
import { ReportCardDetailOnPc } from './report-card-detail/report-card-detail-on-pc';
import { ReportCardDetailOnMobile } from './report-card-detail/report-card-detail-on-mobile';

interface ReportCardProps {
  idx: number;
  reportItem: ReportItem;
}

export function ReportCard({ idx, reportItem }: ReportCardProps) {
  return (
    <div>
      <ReportCardTitle
        idx={idx}
        is_added={reportItem.is_added}
        link_url={reportItem.ec_db.url}
        title={reportItem.ec_db.name}
      />
      <div className="w-full border-[2px] border-[#E6E9EC] border-dashed" />
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
    </div>
  );
}
