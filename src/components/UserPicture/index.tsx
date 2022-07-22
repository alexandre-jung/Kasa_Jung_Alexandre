import styles from './styles.module.scss';

interface UserPictureProps {
  src: string;
  className?: string;
  alt: string;
}

const UserPicture = ({ src, className = '', alt }: UserPictureProps) => {
  return (
    <img
      src={src}
      className={`${styles['user-picture']} ${className}`}
      alt={alt}
      title={alt}
      onError={(ev) => ev.currentTarget.classList.add('error')}
    />
  );
};

export default UserPicture;
