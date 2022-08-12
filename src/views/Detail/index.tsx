import Carrousel from '@/components/Carrousel';
import DetailHeader from '@/components/DetailHeader';
import Dropdown from '@/components/Dropdown';
import mock from '@mock/logements.json';
import Image from '@/components/Image';
import { Navigate, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const Detail = () => {
  const { id } = useParams();
  const lodge = mock.find((lodge) => lodge.id === id);

  return lodge ? (
    <div>
      <Carrousel>
        {lodge.pictures.map((imageSource) => (
          <Image
            className="h-100"
            src={imageSource}
            alt={imageSource}
            key={imageSource}
            errorStyle={{ padding: '0 90px' }}
          />
        ))}
      </Carrousel>
      <DetailHeader
        title={lodge.title}
        location={lodge.location}
        tags={lodge.tags}
        username={lodge.host.name}
        userPicture={lodge.host.picture}
        rating={parseInt(lodge.rating, 10)}
        className={styles.container}
      />
      <div className={`${styles.container} ${styles.body}`}>
        <Dropdown label="Description">
          <p className="fw-light m-0">{lodge.description}</p>
        </Dropdown>
        <Dropdown label="Équipements">
          <ul
            className="list-unstyled fw-light"
            style={{ whiteSpace: 'nowrap' }}
          >
            {lodge.equipments.map((equipement, index) => (
              <li className="fw-light" style={{}} key={index}>
                {equipement}
              </li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  ) : (
    <Navigate to="/not-found" />
  );
};

export default Detail;
