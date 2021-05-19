import React, { useState } from 'react';

import { Input } from '../../Input/Input.jsx';

import './aside.css';

export const Aside = () => {
  const [state, setState] = useState('arrow');
  const [inputCheck, setInputCheck] = useState({
    TV: '',
    Airconditions: '',
    Smartphones: '',
    Refrigerators: '',
    Ovens: '',
    Pasta: '',
    Drinks: '',
    Salads: '',
    Pizza: '',
    Sushi: '',
  });

  const dropMenu = () => {
    if (state === 'arrow') {
      setState('arrow arrow-bottom');
    } else if (state === 'arrow arrow-bottom') {
      setState('arrow');
    }
  };

  const handlerClick = ({ target }) => {
    console.log(target);
    setInputCheck((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
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
            <Input type="checkbox" name="TV" checked={inputCheck} onChange={handlerClick} />
            TV's
          </li>
          <li>
            <Input
              type="checkbox"
              name="Airconditions"
              checked={inputCheck}
              onChange={handlerClick}
            />
            Airconditions
          </li>
          <li>
            <Input
              type="checkbox"
              name="Smartphones"
              checked={inputCheck}
              onChange={handlerClick}
            />
            Smartphones
          </li>
          <li>
            <Input
              type="checkbox"
              name="Refrigerators"
              checked={inputCheck}
              onChange={handlerClick}
            />
            Холодильники
          </li>
          <li>
            <Input type="checkbox" name="Ovens" checked={inputCheck} onChange={handlerClick} />
            Духовые шкафы
          </li>
          <li>
            <Input type="checkbox" name="Pasta" checked={inputCheck} onChange={handlerClick} />
            Макароны
          </li>
          <li>
            <Input type="checkbox" name="Drinks" checked={inputCheck} onChange={handlerClick} />
            Drinks
          </li>
          <li>
            <Input type="checkbox" name="Salads" checked={inputCheck} onChange={handlerClick} />
            Салаты
          </li>
          <li>
            <Input type="checkbox" name="Pizza" checked={inputCheck} onChange={handlerClick} />
            Пицца
          </li>
          <li>
            <Input type="checkbox" name="Sushi" checked={inputCheck} onChange={handlerClick} />
            Сушка
          </li>
        </ul>
      )}
    </aside>
  );
};
