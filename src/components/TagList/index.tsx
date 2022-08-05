import { Tag } from '@components/Tag/Tag.stories';
import styles from './styles.module.scss';

interface TagListProps {
  tags: string[];
  className?: string;
}

const TagList = ({ tags, className = '' }: TagListProps) => {
  return (
    <div className={`${styles['tag-list']} ${className}`}>
      {tags.map((tag) => (
        <Tag label={tag} key={tag} />
      ))}
    </div>
  );
};

export default TagList;
