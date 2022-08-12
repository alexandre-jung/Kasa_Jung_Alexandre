import styles from './carrousel.styles.module.scss';

export function getCssClassGetter(
  currentFrameIndex: number,
  lastFrameIndex: number
) {
  const currentFrameIsFirst = currentFrameIndex === 0;
  const currentFrameIsLast = currentFrameIndex === lastFrameIndex;

  return (frameIndex: number) => {
    if (frameIndex === 0 && currentFrameIsLast) {
      return styles.next;
    } else if (frameIndex === lastFrameIndex && currentFrameIsFirst) {
      return styles.previous;
    } else if (frameIndex === currentFrameIndex - 1) {
      return styles.previous;
    } else if (frameIndex === currentFrameIndex + 1) {
      return styles.next;
    } else if (frameIndex === currentFrameIndex) {
      return '';
    } else {
      return styles.hidden;
    }
  };
}
