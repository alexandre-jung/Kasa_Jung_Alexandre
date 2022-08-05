import { CSSProperties, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ImageError from '@components/ImageError';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  errorStyle?: CSSProperties;
}

const Image = ({
  src,
  alt,
  className = '',
  style = {},
  errorStyle,
}: ImageProps) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {!isError && (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          onError={() => setIsError(true)}
        />
      )}
      {isError && <ImageError style={errorStyle} />}
    </div>
  );
};

export default Image;
