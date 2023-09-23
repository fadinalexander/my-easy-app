import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div>
      <h3>
       <span>404</span> - Страница не найдена
      </h3>
      <p>
       Ой, здесь ничего нет
      </p>
      <Link to="/">Назад</Link>
    </div>
  )
}

export default NotFound;