import { BrokenRobot } from '@/components/Icons';
import { CSSProperties } from 'react';
import styles from './styles.module.scss';

interface ImageErrorProps {
  className?: string;
  style?: CSSProperties;
}

const ImageError = ({ className = '', style = {} }: ImageErrorProps) => {
  return (
    <div className={`${styles['image-error']} ${className}`} style={style}>
      <BrokenRobot className={styles['broken-robot']} />
      <p className={styles['error-message']}>
        Oops... This image could not be loaded
      </p>
    </div>
  );
};

export default ImageError;
