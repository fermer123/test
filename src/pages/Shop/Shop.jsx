import style from './Shop.module.scss';
import '../../index.scss';
import { useState } from 'react';

const Shop = () => {
  const [status, useStatus] = useState('all');
  return (
    <div className='container'>
      <h2 className='title'>Shop</h2>
      <div className={style.shop_link}>главная-магазин</div>
      <div className={style.shop}>
        <ul className={style.shop_list}>
          <li className={style.shop_item}>Все</li>
          <li className={style.shop_item}>Пальто</li>
          <li className={style.shop_item}>Свитшоты</li>
          <li className={style.shop_item}>Кардиганы</li>
          <li className={style.shop_item}>Толстовки</li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
