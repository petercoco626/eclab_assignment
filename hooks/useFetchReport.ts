import { fetchReport } from '@/services/report';
import { useSuspenseQuery } from '@tanstack/react-query';

export function useFetchReport() {
  return useSuspenseQuery({
    queryKey: ['report'],
    queryFn: fetchReport,
    staleTime: Infinity,
  });
}
