import React, { useState, useEffect } from "react";

import "./fetch.css";

export const Fetch = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows?page=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  }

  const spawn = () => {
    return items.map((item) => {
      return (
        <li key={item.id} className="film-item">
          <span>{item.name}</span>
          <img src={item.image.orignal || item.image.medium} alt="" />
        </li>
      );
    });
  };
  return <ul className="holder-films">{spawn()}</ul>;
};