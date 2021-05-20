import React, { useState } from 'react';

import { Input } from '../../Input/Input.jsx';

import './search.css';

export const Search = ({ handleSearchClick }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="search">
      <Input
        class="header-search search"
        place="Search products..."
        value={searchValue}
        onChange={({ target }) => setSearchValue(() => target.value)}
      />
      <Input
        type="button"
        class="header-btn btn"
        value="Search"
        onClick={() => {
          handleSearchClick(searchValue);
        }}
      />
    </div>
  );
};
