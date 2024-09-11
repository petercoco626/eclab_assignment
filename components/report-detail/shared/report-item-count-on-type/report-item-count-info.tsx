import { ReportItemInfo } from '@/types/report';

export function ReportItemCountInfo({
  reportItemInfo,
}: {
  reportItemInfo: ReportItemInfo;
}) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-[10px]">
        <div className="text-base font-bold">{reportItemInfo.icon}</div>
        <div className="text-base font-bold">{reportItemInfo.title}</div>
      </div>
      <div className="text-base font-normal">{reportItemInfo.count || '-'}</div>
    </div>
  );
}
