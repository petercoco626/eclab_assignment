import { ReportDetailOnCounselor } from '@/components/report-detail/counselor';
import { SendReportToStudentForm } from '@/components/report-detail/counselor/send-report-to-student-form';
import { fetchReport } from '@/services/report';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function CounselorPage() {
  const queryClient = new QueryClient();

  const reportResponse = await fetchReport();

  await queryClient.prefetchQuery({
    queryKey: ['report'],
    queryFn: () => Promise.resolve(reportResponse),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full h-full">
        <h3 className="mb-[30px] sm:mb-12">EC Report Details</h3>
        {reportResponse && (
          <div className="space-y-10">
            <ReportDetailOnCounselor reportResponse={reportResponse} />
            <SendReportToStudentForm />
          </div>
        )}
        {!reportResponse && <div>no report data</div>}
      </div>
    </HydrationBoundary>
  );
}
