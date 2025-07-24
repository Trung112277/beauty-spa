import { useEffect, useState, useCallback } from 'react';

export function useStripCount(stripWidth: number, extra = 2) {
  const [count, setCount] = useState(1);

  const updateCount = useCallback(() => {
    const screenWidth = window.innerWidth;
    setCount(Math.ceil(screenWidth / stripWidth) + extra);
  }, [stripWidth, extra]);

  useEffect(() => {
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, [updateCount]);

  return count;
} 