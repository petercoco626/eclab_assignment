import { ItemCountOnType } from '@/types/report';
import { ReportItemCountInfo } from './report-item-count-info';

interface ReportItemCountInfosOnMobileProps {
  itemCountOnType: ItemCountOnType;
}

const infoWrapperOnMobileDefaultStyle =
  'h-[64px] rounded-[10px] bg-[rgba(151,71,255,0.20)] flex items-center px-10';

export function ReportItemCountInfosOnMobile({
  itemCountOnType,
}: ReportItemCountInfosOnMobileProps) {
  return (
    <div className="lg:hidden space-y-[10px]">
      <div className={infoWrapperOnMobileDefaultStyle}>
        <ReportItemCountInfo
          reportItemInfo={itemCountOnType['Writing Competitions']}
        />
      </div>
      <div className={infoWrapperOnMobileDefaultStyle}>
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Competitions']} />
      </div>
      <div className={infoWrapperOnMobileDefaultStyle}>
        <ReportItemCountInfo
          reportItemInfo={itemCountOnType['Pre-college/Summer Programs']}
        />
      </div>
      <div className={infoWrapperOnMobileDefaultStyle}>
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Internship']} />
      </div>
      <div className={infoWrapperOnMobileDefaultStyle}>
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Volunteering']} />
      </div>
      <div className={infoWrapperOnMobileDefaultStyle}>
        <ReportItemCountInfo reportItemInfo={itemCountOnType['Research']} />
      </div>
    </div>
  );
}
