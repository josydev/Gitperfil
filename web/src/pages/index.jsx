import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/home/Index.module.scss';
import Card from '../components/Card';
import SearchInput from '../components/SearchInput';

export default function Home() {
  const [searchValue, setSearchValue] = useState('josyscript');
  const [people, setPeople] = useState([]);
  const [statusError, setStatusError] = useState(200);
  const myToken = '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';

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(async () => {
    fetch(`https://api.github.com/users/${searchValue}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `${myToken}`,
      }),
    }).then((response) => {
      response.json().then((data) => {
        if (data.message === 'Not Found') {
          setStatusError(404);
        } else {
          setStatusError(200);
          setPeople(data);
        }
      });
    }).catch((err) => {
      setStatusError(404);
      console.error(err);
    });
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Perfis do Github</title>
        <meta name="description" content="Pesquise os perfis que você deseja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article className={styles.search__holder}>
          <header className={styles.header}>
            <h1 className={styles.header__title}>Github Perfis</h1>
          </header>
          <section>
            <h2>Pesquise pelo username</h2>
            <SearchInput searchValue={searchValue} handleChange={handleChange} />
          </section>
        </article>
        <article className={styles.card__container}>

          {statusError === 200
            ? (
              <Card
                avatar={people.avatar_url}
                login={people.login}
                name={people.name}
                key={people.id}
              />
            )

            : <h2 className={styles.error__flag}>Usuário não encontrado</h2>}

        </article>

      </main>

    </div>
  );
}
