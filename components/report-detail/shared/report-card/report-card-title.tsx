import Link from 'next/link';

interface ReportCardTitleProps {
  idx: number;
  title: string;
  year: string;
  link_url: string;
  is_added: boolean;
}

export function ReportCardTitle({
  idx,
  title,
  year,
  link_url,
  is_added,
}: ReportCardTitleProps) {
  return (
    <div>
      <div>
        <div>{idx}</div>
        <div>
          <div>{title}</div>
          <div>Young Arts</div> {/** TODO : 무슨 데이터를 써야하는건지? */}
          <div>{year}</div>
        </div>
        <Link href={link_url}>
          <IcLink />
        </Link>
      </div>
      {/**TODO : button-design 시스템 적용해야함 */}
      <button>{is_added ? 'already added' : 'add to EC List'}</button>
    </div>
  );
}

function IcLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.8284 10.1716C12.2663 8.60948 9.73367 8.60948 8.17157 10.1716L4.17157 14.1716C2.60948 15.7337 2.60948 18.2663 4.17157 19.8284C5.73367 21.3905 8.26633 21.3905 9.82843 19.8284L10.93 18.7269M10.1716 13.8284C11.7337 15.3905 14.2663 15.3905 15.8284 13.8284L19.8284 9.82843C21.3905 8.26633 21.3905 5.73367 19.8284 4.17157C18.2663 2.60948 15.7337 2.60948 14.1716 4.17157L13.072 5.27118"
        stroke="#111827"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
