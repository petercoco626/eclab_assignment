import { FetchReportResponse } from '@/types/report';
import { client } from '.';

export const fetchReport = async () => {
  const { data } = await client().get<FetchReportResponse>('/test');

  return data;
};
