import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Index.module.scss';

const RepoCard = ({ title, desc, star }) => (
  <section className={styles.Card}>
    <header>
      <h2 className={styles.Card__title}>{title}</h2>
      <p>{desc}</p>
    </header>
    <h3>
      Estrelas:
      {' '}
      {star}
    </h3>
  </section>
);

RepoCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  star: PropTypes.number,
};

RepoCard.defaultProps = {
  title: 'Titulo',
  desc: 'Descrição',
  star: 0,
};

export default RepoCard;
