import React, { useState } from 'react';

import { Aside } from './Aside/Aside.jsx';
import { Catalog } from './Catalog/Catalog.jsx';

import './main.css';

export const Main = ({ searchProduct }) => {
  const [filterOptions, setFilterOptions] = useState({
    selectedProducts: [],
    filterPrice: { min: 0, max: Infinity },
  });

  const handleAcceptClick = (options) => {
    setFilterOptions((prev) => ({
      ...prev,
      ...options,
      selectedProducts: Object.keys(options.selectedProducts).reduce(
        (arr, key) => (options.selectedProducts[key] ? [...arr, { name: key }] : arr),
        [],
      ),
    }));
  };

  return (
    <main className="main">
      <Aside handleAcceptClick={handleAcceptClick} />
      <Catalog
        selectedProducts={filterOptions.selectedProducts}
        filterPrice={filterOptions.filterPrice}
        searchProduct={searchProduct}
      />
    </main>
  );
};
