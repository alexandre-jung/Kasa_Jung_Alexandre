import styles from './styles.module.scss';

interface ThumbnailProps {
  cover: string;
  title: string;
  width?: number | string;
  height?: number | string;
}

const Thumbnail = ({
  cover,
  title,
  width,
  height,
}: ThumbnailProps) => {
  return (
    <div
      className={styles.thumbnail}
      style={{
        backgroundImage: `url(${cover})`,
        width,
        height,
      }}
    >
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Thumbnail;
