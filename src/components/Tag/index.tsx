import styles from './styles.module.scss';

interface TagProps {
  label: string;
  className?: string;
}

const Tag = ({ label, className = '' }: TagProps) => {
  return <span className={`${styles.tag} ${className}`}>{label}</span>;
};

export default Tag;
