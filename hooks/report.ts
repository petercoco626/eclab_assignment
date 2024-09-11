import { fetchReport } from '@/services/report';
import { useQuery } from '@tanstack/react-query';

export function useFetchReport() {
  return useQuery({
    queryKey: ['report'],
    queryFn: fetchReport,
    staleTime: Infinity,
  });
}
