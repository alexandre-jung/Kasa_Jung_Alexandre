import Rating from '@components/Rating';
import TagList from '@components/TagList';
import User from '@components/User';
import styles from './styles.module.scss';

interface DetailHeaderProps {
  title: string;
  location: string;
  tags: string[];
  username: string;
  userPicture: string;
  rating: number;
  className?: string;
}

const DetailHeader = ({
  title,
  location,
  tags,
  username,
  userPicture,
  rating,
  className = '',
}: DetailHeaderProps) => {
  return (
    <div className={`${styles['detail-header']} ${className}`}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.location}>{location}</p>
      <TagList className={styles.tags} tags={tags} />
      <User className={styles.host} username={username} picture={userPicture} />
      <Rating className={styles.rating} rating={rating} />
    </div>
  );
};

export default DetailHeader;
