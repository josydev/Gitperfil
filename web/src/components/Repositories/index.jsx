import React from 'react';
import PropTypes from 'prop-types';
import RepoCard from '../RepoCard';
import styles from './styles/Index.module.scss';

const Repositories = ({ repos }) => (

  <article className={styles.container}>
    {repos.map((repo) => (
      <RepoCard
        title={repo.name}
        desc={repo.description}
        star={repo.stargazers_count}
        key={repo.id}
      />
    ))}
  </article>

);
Repositories.propTypes = {
  repos: PropTypes.array,
};

Repositories.defaultProps = {
  repos: '',
};

export default Repositories;
