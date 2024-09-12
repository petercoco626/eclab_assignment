'use client';

import { useFetchReport } from '@/hooks/useFetchReport';
import { ReportCard } from '.';

export function ReportCardList() {
  const { data: reportResponse } = useFetchReport();

  return (
    <div className="space-y-5">
      {reportResponse.data.ec_report_items.map((reportItem, idx) => (
        <ReportCard key={reportItem.id} idx={idx} reportItem={reportItem} />
      ))}
    </div>
  );
}
