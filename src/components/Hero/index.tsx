import styles from './styles.module.scss';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  background: 'mountain' | 'coast';
  heading?: React.ReactNode;
  compact?: boolean;
}

const Hero = ({
  background,
  heading,
  compact,
  className = '',
  ...otherProps
}: HeroProps) => {
  return (
    <div
      className={`${styles.hero} ${className} ${compact ? 'compact' : ''} ${
        styles[background]
      }`}
      {...otherProps}
    >
      {heading}
    </div>
  );
};

export default Hero;
