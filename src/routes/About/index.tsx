import Dropdown from '@/components/Dropdown';
import Hero from '@/components/Hero';
import styles from './styles.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <Hero background="mountain" />
      <div className={styles['container-compact']}>
        <Dropdown label="Fiabilité">
          <p className="fw-light">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Dropdown>
        <Dropdown label="Respect">
          <p className="fw-light">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Dropdown>
        <Dropdown label="Service">
          <p className="fw-light">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N&apos;hésitez pas à nous contacter si vous
            avez la moindre question.
          </p>
        </Dropdown>
        <Dropdown label="Sécurité">
          <p className="fw-light">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
            vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Dropdown>
      </div>
    </div>
  );
};

export default About;
