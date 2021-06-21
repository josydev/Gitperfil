import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Index.module.scss';
import Link from '../Link';

const Card = ({ name, avatar, login }) => (
  <section className={styles.Card}>
    <header>
      <img className={styles.Card__img} src={avatar} alt="Imagem do usuário" />
    </header>

    <h1>
      {name}
    </h1>
    <Link
      href={`/users/${login}`}
    >
      Mais Informações
    </Link>
  </section>
);

Card.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  login: PropTypes,
};

Card.defaultProps = {
  name: 'Nome',
  login: '',
  avatar: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_100x100.png',
};

export default Card;
