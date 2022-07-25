import { LeftArrow, RightArrow, Play, Pause } from '@/components/Icons';
import styles from './styles.module.scss';

interface ControlsProps {
  isPlaying?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  className?: string;
}

function Controls({
  isPlaying,
  onPrevious,
  onNext,
  onPlayPause,
  className = '',
}: ControlsProps) {
  return (
    <div className={`${className} ${styles.controls}`}>
      <button className={styles.button} onClick={() => onPrevious()}>
        <LeftArrow height={80} className={`text-white ${styles.icon}`} />
      </button>
      <button className={styles.button} onClick={() => onNext()}>
        <RightArrow height={80} className={`text-white ${styles.icon}`} />
      </button>
      <button
        className={`${styles.button} ${styles['play-pause-button']}`}
        onClick={() => onPlayPause()}
      >
        {isPlaying ? (
          <Pause height={40} className={`text-white ${styles.icon} small`} />
        ) : (
          <Play height={40} className={`text-white ${styles.icon} small`} />
        )}
      </button>
    </div>
  );
}

export default Controls;
