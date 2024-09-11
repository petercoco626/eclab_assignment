import { ItemCountOnType } from '@/types/report';
import { ReportItemCountInfo } from './report-item-count-info';

interface ReportItemCountInfosOnMobileProps {
  itemCountOnType: ItemCountOnType;
}

export function ReportItemCountInfosOnMobile({
  itemCountOnType,
}: ReportItemCountInfosOnMobileProps) {
  return (
    <div className="sm:hidden space-y-[10px]">
      <ReportItemCountInfo
        reportItemInfo={itemCountOnType['Writing Competitions']}
      />
      <ReportItemCountInfo reportItemInfo={itemCountOnType['Competitions']} />
      <ReportItemCountInfo
        reportItemInfo={itemCountOnType['Pre-college/Summer Programs']}
      />
      <ReportItemCountInfo reportItemInfo={itemCountOnType['Internship']} />
      <ReportItemCountInfo reportItemInfo={itemCountOnType['Volunteering']} />
      <ReportItemCountInfo reportItemInfo={itemCountOnType['Research']} />
    </div>
  );
}
