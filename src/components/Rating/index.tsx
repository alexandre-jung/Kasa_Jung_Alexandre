import Star from '@/components/Star';
import styles from './styles.module.scss';

interface RatingProps {
  rating: number;
  className?: string;
  as?: React.ElementType;
  starClassName?: string;
  activeStarClassName?: string;
  small?: boolean;
}

const Rating = ({
  rating,
  className = '',
  as: Component = 'div',
  starClassName = '',
  activeStarClassName = '',
  small,
}: RatingProps) => (
  <Component className={className}>
    {[...Array(5).keys()].map((i) => (
      <Star
        key={i}
        active={i < rating}
        className={`${i < rating ? activeStarClassName : starClassName} ${
          i < 5 ? (small ? styles['small-space'] : styles.space) : ''
        }`}
        small={small}
      />
    ))}
  </Component>
);

export default Rating;
