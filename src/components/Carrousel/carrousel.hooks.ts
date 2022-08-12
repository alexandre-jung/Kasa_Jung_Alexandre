import { useState, useEffect, useCallback, useMemo } from 'react';

export function useRoveIndex(lastIndex: number) {
  const [value, setCurrent] = useState(0);

  const decrement = useCallback(
    () => setCurrent((previous) => (previous === 0 ? lastIndex : previous - 1)),
    [lastIndex]
  );

  const increment = useCallback(
    () => setCurrent((previous) => (previous === lastIndex ? 0 : previous + 1)),
    [lastIndex]
  );

  return useMemo(
    () => ({
      value,
      decrement,
      increment,
    }),
    [value, decrement, increment]
  );
}

export function useAutoplay(
  defaultAutoplay: boolean,
  intervalMs: number,
  onNext: () => void
) {
  const [autoplay, setAutoplay] = useState(defaultAutoplay);

  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);
  const toggleAutoplay = () => setAutoplay((previous) => !previous);

  useEffect(() => {
    if (!autoplay) return;
    const intervalId = setInterval(onNext, intervalMs);
    return () => clearInterval(intervalId);
  }, [autoplay, intervalMs, onNext]);

  return {
    autoplay,
    pauseAutoplay,
    resumeAutoplay,
    toggleAutoplay,
  };
}

interface UseCarrouselAnimationParams {
  lastFrameIndex: number;
  intervalMs: number;
  animationSpeed: number;
  defaultAutoplay?: boolean;
}

export function useCarrouselAnimation({
  lastFrameIndex,
  intervalMs,
  animationSpeed,
  defaultAutoplay,
}: UseCarrouselAnimationParams) {
  const [animationIsRunning, setAnimationIsRunning] = useState(false);
  const roveIndex = useRoveIndex(lastFrameIndex);

  function previousFrame() {
    if (animationIsRunning) return;
    roveIndex.decrement();
  }

  const nextFrame = () => {
    if (animationIsRunning) return;
    roveIndex.increment();
  };

  const { autoplay, pauseAutoplay, resumeAutoplay } = useAutoplay(
    !!defaultAutoplay,
    intervalMs,
    nextFrame
  );

  const handlePrevious = () => {
    previousFrame();
    pauseAutoplay();
  };

  const handleNext = () => {
    nextFrame();
    pauseAutoplay();
  };

  useEffect(() => {
    setAnimationIsRunning(true);
    const timeout = setTimeout(
      () => setAnimationIsRunning(false),
      animationSpeed
    );
    return () => clearTimeout(timeout);
  }, [roveIndex.value, animationSpeed]);

  return {
    current: roveIndex.value,
    autoplay,
    pauseAutoplay,
    resumeAutoplay,
    handlePrevious,
    handleNext,
  };
}
