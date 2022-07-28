import Star from '@components/Star';
import styles from './styles.module.scss';

interface RatingProps {
  rating: number;
  className?: string;
  as?: React.ElementType;
  starClassName?: string;
  activeStarClassName?: string;
}

const Rating = ({
  rating,
  className = '',
  as: Component = 'div',
  starClassName = '',
  activeStarClassName = '',
}: RatingProps) => (
  <Component className={className}>
    {[...Array(5).keys()].map((i) => (
      <Star
        key={i}
        active={i < rating}
        className={`${i < rating ? activeStarClassName : starClassName} ${
          i < 4 ? styles.space : ''
        }`}
      />
    ))}
  </Component>
);

export default Rating;
