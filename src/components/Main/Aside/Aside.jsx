import React, { useState } from 'react';

import { Input } from '../../Input/Input.jsx';

import './aside.css';

export const Aside = ({ setSelectedProducts }) => {
  const [state, setState] = useState('arrow');

  const dropMenu = () => {
    if (state === 'arrow') {
      setState('arrow arrow-bottom');
    } else if (state === 'arrow arrow-bottom') {
      setState('arrow');
    }
  };

  const handlerClick = ({ target }) => {
    if (target.checked) {
      setSelectedProducts((prev) => ({ ...prev, [target.name]: true }));
    } else {
      setSelectedProducts((prev) => ({ ...prev, [target.name]: false }));
    }
  };

  return (
    <aside className="aside">
      <h5 className="price">Price</h5>
      <span className="from">from</span>
      <Input type="text" class="sum prev" />
      <span className="to">to</span>
      <Input type="text" class="sum after" />
      <div className="item" onClick={dropMenu}>
        <h5 className="field-name">Category</h5>
        <div className="vision-menu">
          <div className={state}></div>
        </div>
      </div>
      {state === 'arrow arrow-bottom' && (
        <ul className="category-menu">
          <li>
            <Input type="checkbox" name="TV" onChange={handlerClick} />
            TV's
          </li>
          <li>
            <Input type="checkbox" name="Airconditions" onChange={handlerClick} />
            Airconditions
          </li>
          <li>
            <Input type="checkbox" name="Smartphones" onChange={handlerClick} />
            Smartphones
          </li>
          <li>
            <Input type="checkbox" name="Refrigerators" onChange={handlerClick} />
            Холодильники
          </li>
          <li>
            <Input type="checkbox" name="Ovens" onChange={handlerClick} />
            Духовые шкафы
          </li>
          <li>
            <Input type="checkbox" name="Pasta" onChange={handlerClick} />
            Макароны
          </li>
          <li>
            <Input type="checkbox" name="Drinks" onChange={handlerClick} />
            Drinks
          </li>
          <li>
            <Input type="checkbox" name="Salads" onChange={handlerClick} />
            Салаты
          </li>
          <li>
            <Input type="checkbox" name="Pizza" onChange={handlerClick} />
            Пицца
          </li>
          <li>
            <Input type="checkbox" name="Sushi" onChange={handlerClick} />
            Сушка
          </li>
        </ul>
      )}
    </aside>
  );
};
