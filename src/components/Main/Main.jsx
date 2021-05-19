import React, { useState } from 'react';

import { Aside } from './Aside/Aside.jsx';
import { Catalog } from './Catalog/Catalog.jsx';

import './main.css';

export const Main = () => {
  const [selectedProducts, setSelectedProducts] = useState({});

  return (
    <main className="main">
      <Aside setSelectedProducts={setSelectedProducts} />
      <Catalog selectedProducts={selectedProducts} />
    </main>
  );
};
