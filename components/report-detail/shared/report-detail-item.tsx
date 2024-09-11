interface ReportDetailItemProps {
  title: string;
  content: string;
}

export function ReportDetailItem({ title, content }: ReportDetailItemProps) {
  return (
    <div className="grid grid-cols-2">
      <div className="text-lg font-bold">{title}</div>
      <div className="text-lg font-normal">{content}</div>
    </div>
  );
}
