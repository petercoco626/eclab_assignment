import clsx from 'clsx';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside
      className={clsx(
        'w-[300px] h-full bg-system-gray',
        'hidden sm:block',
        'px-10 py-4 box-border'
      )}
    >
      <section>
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-5 py-4 rounded flex items-center gap-[14px]"
          >
            <IcClipboard />
            <span className="text-white font-medium">{item.title}</span>
          </Link>
        ))}
      </section>
    </aside>
  );
}

const sidebarItems: {
  title: string;
  href: string;
}[] = [
  {
    title: 'EC Report_STU',
    href: '/',
  },
  {
    title: 'EC Report_CON',
    href: '/counselor',
  },
];

function IcClipboard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.8 2.40002C10.1372 2.40002 9.59999 2.93728 9.59999 3.60002C9.59999 4.26277 10.1372 4.80002 10.8 4.80002H13.2C13.8627 4.80002 14.4 4.26277 14.4 3.60002C14.4 2.93728 13.8627 2.40002 13.2 2.40002H10.8Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.79999 6.00002C4.79999 4.67454 5.8745 3.60002 7.19999 3.60002C7.19999 5.58825 8.81176 7.20002 10.8 7.20002H13.2C15.1882 7.20002 16.8 5.58825 16.8 3.60002C18.1255 3.60002 19.2 4.67454 19.2 6.00002V19.2C19.2 20.5255 18.1255 21.6 16.8 21.6H7.19999C5.8745 21.6 4.79999 20.5255 4.79999 19.2V6.00002ZM8.39999 10.8C7.73725 10.8 7.19999 11.3373 7.19999 12C7.19999 12.6628 7.73725 13.2 8.39999 13.2H8.41199C9.07473 13.2 9.61199 12.6628 9.61199 12C9.61199 11.3373 9.07473 10.8 8.41199 10.8H8.39999ZM12 10.8C11.3372 10.8 10.8 11.3373 10.8 12C10.8 12.6628 11.3372 13.2 12 13.2H15.6C16.2627 13.2 16.8 12.6628 16.8 12C16.8 11.3373 16.2627 10.8 15.6 10.8H12ZM8.39999 15.6C7.73725 15.6 7.19999 16.1373 7.19999 16.8C7.19999 17.4628 7.73725 18 8.39999 18H8.41199C9.07473 18 9.61199 17.4628 9.61199 16.8C9.61199 16.1373 9.07473 15.6 8.41199 15.6H8.39999ZM12 15.6C11.3372 15.6 10.8 16.1373 10.8 16.8C10.8 17.4628 11.3372 18 12 18H15.6C16.2627 18 16.8 17.4628 16.8 16.8C16.8 16.1373 16.2627 15.6 15.6 15.6H12Z"
        fill="white"
      />
    </svg>
  );
}
