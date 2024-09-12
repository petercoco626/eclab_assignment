'use client';

import { Button } from '@/components/base/button';
import { useToggle } from '@/hooks/use-toggle';

export function SendReportToStudentForm() {
  const { toggle, handleToggle } = useToggle();

  return (
    <div className="space-y-6 pb-0 lg:pb-10">
      <p className="text-center text-base font-medium max-w-[500px] 2xl:max-w-full mx-auto">
        Once sent, the report is final and cannot be retrieved. The counselor is
        solely responsible for any incorrections in the report.
      </p>
      <div className="flex justify-center items-center gap-2">
        <button type="button" onClick={handleToggle}>
          {toggle ? (
            <IcCheckedBox />
          ) : (
            <div className="border border-system-gray bg-transparent w-[21px] h-[21px] rounded" />
          )}
        </button>
        <p className="text-center text-base font-medium">
          I agree to the above.
        </p>
      </div>
      <Button
        variant="tertiary"
        size="large"
        className="hidden lg:block lg:w-[240px] mx-auto"
      >
        Sent to Student
      </Button>
      <Button
        variant="tertiary"
        size="large"
        className="w-full lg:hidden"
        isRounded={false}
      >
        Sent to Student
      </Button>
    </div>
  );
}

function IcCheckedBox() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <rect width="22" height="22" rx="5" fill="#7A40F2" />
      <path
        d="M5 11.4583L8.69231 15.125L17 6.875"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
