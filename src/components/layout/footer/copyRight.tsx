import { TextNormal } from '@/components/common/text/textNormal';
import { Link } from 'react-router-dom';

type CopyRightProps = {
  Company: string;
  year: number;
};

export function CopyRight({ Company, year }: CopyRightProps) {
  return (
    <TextNormal>
      © {year} {Company}. All Rights Reserved. Designed By{' '}
      <Link
        to="https://github.com/Trung112277/"
        target="_blank"
        className="text-secondary font-bold hover:text-primary"
      >
        Nhật Trung
      </Link>
      .
    </TextNormal>
  );
}
