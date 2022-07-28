import React, { useCallback, useEffect, useState } from 'react';
import CarrouselControls from '@components/CarrouselControls';
import styles from './styles.module.scss';

interface CarrouselProps {
  defaultAutoplay?: boolean;
  autoplayInterval?: number;
  animationSpeed?: number;
  children: React.ReactNode;
}

const Carrousel = ({
  defaultAutoplay,
  autoplayInterval = 5000,
  animationSpeed = 500,
  children,
}: CarrouselProps) => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(defaultAutoplay);
  const [animationIsRunning, setAnimationIsRunning] = useState(false);

  const childrenCount = React.Children.count(children);
  const lastFrameIndex = childrenCount - 1;

  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  function previousFrame() {
    if (animationIsRunning) return;
    setCurrentFrameIndex((currentFrameIndex) => {
      return currentFrameIndex === 0
        ? childrenCount - 1
        : currentFrameIndex - 1;
    });
  }

  const nextFrame = useCallback(() => {
    if (animationIsRunning) return;
    setCurrentFrameIndex((currentFrameIndex) => {
      return currentFrameIndex !== childrenCount - 1
        ? currentFrameIndex + 1
        : 0;
    });
  }, [childrenCount, animationIsRunning]);

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
  }, [currentFrameIndex, animationSpeed]);

  const currentFrameIsFirst = currentFrameIndex === 0;
  const currentFrameIsLast = currentFrameIndex === childrenCount - 1;

  function getCssClass(frameIndex: number) {
    if (frameIndex === 0 && currentFrameIsLast) {
      return styles.next;
    } else if (frameIndex === lastFrameIndex && currentFrameIsFirst) {
      return styles.previous;
    } else if (frameIndex === currentFrameIndex - 1) {
      return styles.previous;
    } else if (frameIndex === currentFrameIndex + 1) {
      return styles.next;
    } else if (frameIndex === currentFrameIndex) {
      return styles.current;
    } else {
      return styles.hidden;
    }
  }

  function renderFrames() {
    return React.Children.map(children, (child, index) => (
      <div className={`${styles.frame} ${getCssClass(index)}`} key={index}>
        {child}
      </div>
    ));
  }

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextFrame, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextFrame]);

  const animationStyleVariable = {
    '--animation-speed': `${animationSpeed}ms`,
  } as React.CSSProperties;

  return (
    <div className={styles.carrousel} style={animationStyleVariable}>
      {React.Children.count(children) === 1 ? (
        <div className={`${styles.frame}`}>
          {React.Children.toArray(children)[0]}
        </div>
      ) : (
        <>
          {renderFrames()}
          <CarrouselControls
            isPlaying={autoplay}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onPlayPause={autoplay ? pauseAutoplay : resumeAutoplay}
          />
        </>
      )}
    </div>
  );
};

export default Carrousel;
