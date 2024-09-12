'use client';

import { ReportItemType } from '@/types/report';
import { ReportCardDetailItem } from './report-card-detail-item';
import IcFilter from '@/assets/icons/ic-filter.svg';
import IcAddCheck from '@/assets/icons/ic-add-check.svg';

interface ReportCardDetailOnMobileProps {
  recognitionLevel: string;
  nationality: string;
  gradeLimit: string[];
  ageLimit: string[];
  participateWay: string[];
  reportItemType: ReportItemType; // 이게 맞는지 모르겠음...
}

export function ReportCardDetailOnMobile({
  recognitionLevel,
  nationality,
  gradeLimit,
  ageLimit,
  participateWay,
  reportItemType,
}: ReportCardDetailOnMobileProps) {
  return (
    <div className="space-y-5 lg:hidden">
      <ReportCardDetailItem
        icon={<IcFilter />}
        title="Type"
        content={reportItemType}
      />
      <ReportCardDetailItem
        icon={<IcFilter />}
        title="Participation"
        content={participateWay.join(', ')}
      />
      <ReportCardDetailItem
        icon={<IcFilter />}
        title="Recognition"
        content={recognitionLevel}
      />
      <ReportCardDetailItem
        icon={<IcAddCheck />}
        title="Nationality"
        content={nationality}
      />
      <ReportCardDetailItem
        icon={<IcAddCheck />}
        title="Grade"
        content={gradeLimit.join(', ')}
      />
      <ReportCardDetailItem
        icon={<IcAddCheck />}
        title="Age"
        content={ageLimit.join(', ')}
      />
    </div>
  );
}
