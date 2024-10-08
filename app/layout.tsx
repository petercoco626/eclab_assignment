import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import clsx from 'clsx';
import { ClientLayout } from './client-layout';
import { pretendardFont } from '@/libs/fonts';

export const metadata: Metadata = {
  title: 'EC Report',
  description: 'EC Report dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(pretendardFont.className, 'w-screen h-dvh')}>
        <ClientLayout>
          <>
            <Header />
            <main className="w-full h-[calc(100%-55px)] lg:h-[calc(100%-80px)] flex ">
              <Sidebar />
              <section
                className={clsx(
                  'w-full lg:w-[calc(100%-300px)] h-full',
                  'bg-[#F1F4F6]',
                  'overflow-scroll'
                )}
              >
                {children}
              </section>
            </main>
          </>
        </ClientLayout>
      </body>
    </html>
  );
}
