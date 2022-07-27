import UserPicture from '@components/UserPicture';
import styles from './styles.module.scss';

interface UserProps {
  username: string;
  picture: string;
  className?: string;
}

const User = ({ username, picture, className = '' }: UserProps) => {
  return (
    <div className={`${styles.user} ${className}`}>
      <p className={styles.username}>{username}</p>
      <UserPicture
        src={picture}
        alt={`Picture of ${username}`}
        className={styles.picture}
      />
    </div>
  );
};

export default User;
