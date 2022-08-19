import styles from './styles.module.scss';

interface GalleryProps {
  children: React.ReactNode;
  className?: string;
}

const Gallery = ({ children, className = '' }: GalleryProps) => {
  return <div className={`${styles.gallery} ${className}`}>{children}</div>;
};

export default Gallery;
