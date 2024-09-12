import { Button } from '@/components/base/button';

interface ReportCardDetailButtonListOnMobileProps {
  isAdded: boolean;
}

export function ReportCardDetailButtonListOnMobile({
  isAdded,
}: ReportCardDetailButtonListOnMobileProps) {
  return (
    <div className="sm:hidden mt-[30px] grid grid-cols-2 gap-[10px]">
      <Button
        className="w-full"
        size="middle"
        variant={isAdded ? 'secondary' : 'primary'}
      >
        <>{isAdded ? 'already added!' : 'add to EC List'}</>
      </Button>
      <Button className="w-full" size="middle" variant={'tertiary'}>
        Visit Website
      </Button>
    </div>
  );
}
