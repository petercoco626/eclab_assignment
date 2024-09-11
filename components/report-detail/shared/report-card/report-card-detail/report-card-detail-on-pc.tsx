'use client';

import { ReportItemType } from '@/types/report';
import { ReportCardDetailItem } from './report-card-detail-item';
import IcFilter from '@/assets/icons/ic-filter.svg';
import IcAddCheck from '@/assets/icons/ic-add-check.svg';

interface ReportCardDetailOnPcProps {
  recognitionLevel: string;
  nationality: string;
  gradeLimit: string[];
  ageLimit: string[];
  participateWay: string[];
  reportItemType: ReportItemType; // 이게 맞는지 모르겠음...
}

export function ReportCardDetailOnPc({
  recognitionLevel,
  nationality,
  gradeLimit,
  ageLimit,
  participateWay,
  reportItemType,
}: ReportCardDetailOnPcProps) {
  return (
    <div className="hidden sm:block space-y-[18px]">
      <div>
        <ReportCardDetailItem
          icon={<IcFilter />}
          title="Type"
          content={reportItemType}
        />
        <div />
        <ReportCardDetailItem
          title="Participation"
          content={participateWay.join(',')}
        />
        <div />
        <ReportCardDetailItem title="Recognition" content={recognitionLevel} />
      </div>
      <div>
        <ReportCardDetailItem
          icon={<IcAddCheck />}
          title="Nationality"
          content={nationality}
        />
        <div />
        <ReportCardDetailItem title="Grade" content={gradeLimit.join(',')} />
        <div />
        <ReportCardDetailItem title="Age" content={ageLimit.join(',')} />
      </div>
    </div>
  );
}
