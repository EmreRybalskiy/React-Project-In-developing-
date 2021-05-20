import React, { useState } from 'react';

import { Input } from '../../Input/Input.jsx';

import './aside.css';

export const Aside = ({ handleAcceptClick }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [filterPrice, setFilterPrice] = useState({ min: 0, max: Infinity });

  const handlerProductCheckbox = ({ target: { value, checked } }) => {
    setSelectedProducts((prev) => ({ ...prev, [value]: !!checked }));
  };

  const onChangePrice = ({ target }) => {
    const value = target.name === 'min' ? +target.value : +target.value || Infinity;
    setFilterPrice((prev) => ({ ...prev, [target.name]: value }));
  };

  return (
    <aside className="aside">
      <h5 className="price">Price</h5>
      <span className="from">from</span>
      <Input type="text" class="sum prev" name="min" onChange={onChangePrice} />
      <span className="to">to</span>
      <Input type="text" class="sum after" name="max" onChange={onChangePrice} />
      <div className="item" onClick={() => setIsDropDownOpen((prev) => !prev)}>
        <h5 className="field-name">Category</h5>
        <div className="vision-menu">
          <div className={isDropDownOpen ? 'arrow' : 'arrow arrow-bottom'}></div>
        </div>
      </div>
      {isDropDownOpen && (
        <ul className="category-menu">
          <li>
            <Input type="checkbox" name="TV's" onChange={handlerProductCheckbox} value="TV's" />
            TV's
          </li>
          <li>
            <Input
              type="checkbox"
              name="Airconditions"
              onChange={handlerProductCheckbox}
              value="Airconditions"
            />
            Airconditions
          </li>
          <li>
            <Input
              type="checkbox"
              name="Smartphones"
              onChange={handlerProductCheckbox}
              value="Smartphones"
            />
            Smartphones
          </li>
          <li>
            <Input
              type="checkbox"
              name="Refrigerators"
              onChange={handlerProductCheckbox}
              value="Холодильники"
            />
            Холодильники
          </li>
          <li>
            <Input
              type="checkbox"
              name="Ovens"
              onChange={handlerProductCheckbox}
              value="Духовые шкафы"
            />
            Духовые шкафы
          </li>
          <li>
            <Input
              type="checkbox"
              name="Pasta"
              onChange={handlerProductCheckbox}
              value="Макароны"
            />
            Макароны
          </li>
          <li>
            <Input type="checkbox" name="Drinks" onChange={handlerProductCheckbox} value="Drinks" />
            Drinks
          </li>
          <li>
            <Input type="checkbox" name="Salads" onChange={handlerProductCheckbox} value="Салаты" />
            Салаты
          </li>
          <li>
            <Input type="checkbox" name="Pizza" onChange={handlerProductCheckbox} value="Пицца" />
            Пицца
          </li>
          <li>
            <Input type="checkbox" name="Sushi" onChange={handlerProductCheckbox} value="Сушка" />
            Сушка
          </li>
        </ul>
      )}
      <button onClick={() => handleAcceptClick({ selectedProducts, filterPrice })}>Accept</button>
    </aside>
  );
};
