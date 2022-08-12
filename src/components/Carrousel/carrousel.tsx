import React from 'react';
import CarrouselControls from '@components/CarrouselControls';
import { useCarrouselAnimation } from './carrousel.hooks';
import { getCssClassGetter } from './carrousel.utils';
import styles from './carrousel.styles.module.scss';

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
  const childrenCount = React.Children.count(children);
  const lastFrameIndex = childrenCount - 1;

  const {
    current,
    autoplay,
    pauseAutoplay,
    resumeAutoplay,
    handlePrevious,
    handleNext,
  } = useCarrouselAnimation({
    lastFrameIndex,
    intervalMs: autoplayInterval,
    animationSpeed,
    defaultAutoplay,
  });

  const getCssClass = getCssClassGetter(current, lastFrameIndex);

  function renderFrames() {
    return React.Children.map(children, (child, index) => (
      <div className={`${styles.frame} ${getCssClass(index)}`} key={index}>
        {child}
      </div>
    ));
  }

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
