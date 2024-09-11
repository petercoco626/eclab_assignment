interface ReportDetailItemProps {
  title: string;
  content: string;
}

export function ReportDetailItem({ title, content }: ReportDetailItemProps) {
  return (
    <div className="grid grid-cols-2">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}
