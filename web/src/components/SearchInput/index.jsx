import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Index.module.scss';

const SearchInput = ({ searchValue, handleChange }) => (
  <input
    className={styles.input__search}
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Digite o username ou login"
  />
);
SearchInput.propTypes = {
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
};

SearchInput.defaultProps = {
  searchValue: '',
  handleChange: '',
};

export default SearchInput;
