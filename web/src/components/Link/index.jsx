import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styles from './style/Index.module.scss';

export default function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <a href className={styles.button} target="_blank">{children}</a>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
