'use client';

import clsx from 'clsx';
import { ReportDetailItem } from '../shared/report-detail-item';
import { formatDate } from '@/libs/utils';
import { useFetchReport } from '@/hooks/useFetchReport';

export function ReportDetailInfo() {
  const { data: reportResponse } = useFetchReport();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10 mb-10',
        'p-5 bg-white border border-system-light-gray rounded-[10px] lg:p-0 lg:bg-transparent lg:border-none'
      )}
    >
      <ReportDetailItem title="Title" content={reportResponse.data.title} />
      <ReportDetailItem
        title="Student"
        content={reportResponse.data.student.name}
      />
      <ReportDetailItem
        title="School"
        content={reportResponse.data.student.profile.school.name}
      />
      <ReportDetailItem
        title="Grade"
        content={reportResponse.data.student.profile.grade}
      />
      <ReportDetailItem
        title="Counselor"
        content={reportResponse.data.counselor.name}
      />
      <ReportDetailItem
        title="Status"
        content={reportResponse.data.student.profile.status_type}
      />
      <ReportDetailItem
        title="Received Date"
        content={formatDate(reportResponse.data.send_dt)}
      />
      <ReportDetailItem
        title="Delivered Date"
        content={formatDate(reportResponse.data.delivered_dt)}
      />
    </div>
  );
}
