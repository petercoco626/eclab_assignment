import { ReportItemInfo } from '@/types/report';

export function ReportItemCountInfo({
  reportItemInfo,
}: {
  reportItemInfo: ReportItemInfo;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-[10px]">
        <div>{reportItemInfo.icon}</div>
        <div>{reportItemInfo.title}</div>
      </div>
      <div>{reportItemInfo.count || '-'}</div>
    </div>
  );
}
