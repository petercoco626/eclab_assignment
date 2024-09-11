import { ItemCountOnType } from '@/types/report';
import { ReportItemCountInfo } from './report-item-count-info';

export function ReportItemCountInfosOnPc({
  itemCountOnType,
}: {
  itemCountOnType: ItemCountOnType;
}) {
  return (
    <div className="hidden sm:flex">
      <div>
        <ReportItemCountInfo
          reportItemInfo={itemCountOnType['Writing Competitions']}
        />
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Competitions']} />
      </div>
      <div />
      <div>
        <ReportItemCountInfo
          reportItemInfo={itemCountOnType['Pre-college/Summer Programs']}
        />
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Internship']} />
      </div>
      <div>
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Volunteering']} />
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Research']} />
      </div>
    </div>
  );
}
