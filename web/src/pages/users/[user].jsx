import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Repositories from '../../components/Repositories';
import styles from '../../styles/users/Index.module.scss';

export default function User({ user, repo }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (<div className={styles.loader}>Loading...</div>);
  }

  return (
    <div className={styles.holder__content}>
      <header className={styles.header}>
        <article>
          <img src={user.avatar_url} alt={user.name} className={styles.user__image} />
          <section>
            <h2 className={styles.header__title}>{user.name}</h2>
            <h3 className={styles.header__subtitle}>{user.login}</h3>
            <p className={styles.header__desc}>{user.bio}</p>
          </section>
        </article>
      </header>
      { repo.length === 0
        ? <h2 className={styles.error__flag}>Esse usuário não possui repositórios</h2>
        : <Repositories repos={repo} />}
    </div>
  );
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps = async (context) => {
  const { user } = context.params;
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  const respo = await fetch(`${data.repos_url}`);
  const repositories = await respo.json();

  return {
    props: {
      user: data,
      repo: repositories,
    },
    revalidate: 30,
  };
};

User.propTypes = {
  user: PropTypes.object,
  repo: PropTypes.object,
};

User.defaultProps = {
  user: [],
  repo: [],
};
