import { ReportDetailOnCounselor } from '@/components/report-detail/counselor';
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
        <h3>EC Report Details</h3>
        {reportResponse && (
          <ReportDetailOnCounselor reportResponse={reportResponse} />
        )}
        {!reportResponse && <div>no report data</div>}
      </div>
    </HydrationBoundary>
  );
}
