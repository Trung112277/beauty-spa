import { Strip } from '@/components/common/deco/Strip';
import { useStripCount } from '@/hooks/useStripCount';

function FullStrip({ count, stripWidth, stripHeight }: { count: number; stripWidth: number; stripHeight: number }) {
  return (
    <div className="w-full h-[40px] flex overflow-hidden text-primary" style={{ fontSize: 0 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Strip
          key={i}
          width={stripWidth}
          height={stripHeight}
          className="flex-none h-full block"    
        />
      ))}
    </div>
  );
}

export function FullScreenStrip() {
  const stripWidth = 500;
  const stripHeight = 40;
  const extraStrip = 10;
  const count = useStripCount(stripWidth, extraStrip);

  return <FullStrip count={count} stripWidth={stripWidth} stripHeight={stripHeight} />;
}
