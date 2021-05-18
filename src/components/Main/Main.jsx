import React from 'react';

import { Aside } from './Aside/Aside.jsx';
import { Catalog } from './Catalog/Catalog.jsx';

import './main.css';

export const Main = () => {
  return (
    <main className="main">
      <Aside />
      <Catalog />
    </main>
  );
};
