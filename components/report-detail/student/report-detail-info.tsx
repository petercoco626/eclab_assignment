'use client';

import clsx from 'clsx';
import { ReportDetailItem } from '../shared/report-detail-item';
import { useFetchReport } from '@/hooks/useFetchReport';
import { formatDate } from '@/libs/utils';

export function ReportDetailInfo() {
  const { data: reportResponse } = useFetchReport();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 mb-10',
        'p-5 bg-white border border-system-light-gray rounded-[10px] lg:p-0 lg:bg-transparent lg:border-none'
      )}
    >
      <ReportDetailItem
        title="Title"
        content={reportResponse.data.counselor.name}
      />
      <ReportDetailItem title="Counselor" content={reportResponse.data.title} />
      <ReportDetailItem
        title="Received Date"
        content={formatDate(reportResponse.data.send_dt)}
      />
    </div>
  );
}
