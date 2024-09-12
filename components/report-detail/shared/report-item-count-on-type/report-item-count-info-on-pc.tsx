import { ItemCountOnType } from '@/types/report';
import { ReportItemCountInfo } from './report-item-count-info';
import clsx from 'clsx';

const dividerDefaultStyle = 'w-px h-full bg-[#B3B3B3]';

export function ReportItemCountInfosOnPc({
  itemCountOnType,
}: {
  itemCountOnType: ItemCountOnType;
}) {
  return (
    <div
      className={clsx(
        'hidden lg:flex bg-[rgba(151,71,255,0.20)] rounded-[10px]',
        'px-10 py-4 box-border h-[98px]',
        'grid grid-cols-5 items-center gap-3'
      )}
    >
      <div className="space-y-2 w-full">
        <ReportItemCountInfo
          reportItemInfo={itemCountOnType['Writing Competitions']}
        />
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Competitions']} />
      </div>
      <div className={dividerDefaultStyle} />
      <div className="space-y-2 w-full">
        <ReportItemCountInfo
          reportItemInfo={itemCountOnType['Pre-college/Summer Programs']}
        />
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Internship']} />
      </div>
      <div className={dividerDefaultStyle} />
      <div className="space-y-2 w-full">
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Volunteering']} />
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Research']} />
      </div>
    </div>
  );
}
