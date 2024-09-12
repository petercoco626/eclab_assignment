import { Button } from '@/components/base/button';

export function SendReportToStudentForm() {
  return (
    <div className="space-y-6 pb-0 lg:pb-10">
      <p className="text-center text-base font-medium">
        Once sent, the report is final and cannot be retrieved. The counselor is
        solely responsible for any incorrections in the report.
      </p>
      <div className="flex justify-center items-center gap-2">
        <IcCheckedBox />
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
