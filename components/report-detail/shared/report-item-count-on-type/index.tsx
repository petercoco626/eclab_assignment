import { ItemCountOnType, ReportItem } from '@/types/report';
import { ReportItemCountInfosOnMobile } from './report-item-count-info-on-mobile';
import { ReportItemCountInfosOnPc } from './report-item-count-info-on-pc';

interface ReportItemCountOnTypeProps {
  reportItems: ReportItem[];
}

export function ReportItemCountOnType({
  reportItems,
}: ReportItemCountOnTypeProps) {
  const itemCountOnType = getItemCountOnType(reportItems);

  return (
    <div className="mb-5">
      <div className="text-base font-bold mb-4">
        Total : {reportItems.length}
      </div>
      <ReportItemCountInfosOnPc itemCountOnType={itemCountOnType} />
      <ReportItemCountInfosOnMobile itemCountOnType={itemCountOnType} />
    </div>
  );
}

function getItemCountOnType(reportItems: ReportItem[]): ItemCountOnType {
  return {
    Competitions: {
      icon: '🏆',
      title: 'Competition',
      count: reportItems.filter(
        (report) => report.ec_db.ec_type === 'Competitions'
      ).length,
    },
    Internship: {
      icon: '💼',
      title: 'Internship',
      count: reportItems.filter(
        (report) => report.ec_db.ec_type === 'Internship'
      ).length,
    },
    'Pre-college/Summer Programs': {
      icon: '🏫',
      title: 'Pre-college',
      count: reportItems.filter(
        (report) => report.ec_db.ec_type === 'Pre-college/Summer Programs'
      ).length,
    },
    Research: {
      icon: '🔎',
      title: 'Research',
      count: reportItems.filter((report) => report.ec_db.ec_type === 'Research')
        .length,
    },
    Volunteering: {
      icon: '⛑️',
      title: 'Volunteering',
      count: reportItems.filter(
        (report) => report.ec_db.ec_type === 'Volunteering'
      ).length,
    },
    'Writing Competitions': {
      icon: '✍️',
      title: 'Writing Competition',
      count: reportItems.filter(
        (report) => report.ec_db.ec_type === 'Writing Competitions'
      ).length,
    },
  };
}
