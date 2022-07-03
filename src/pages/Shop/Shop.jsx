import style from './Shop.module.scss';
import '../../index.scss';
import { useState } from 'react';

const Shop = () => {
  const [status, setStatus] = useState('all');

  return (
    <div className='container'>
      <h2 className='title'>Shop</h2>
      <div className={style.shop_link}>главная-магазин</div>
      <div className={style.shop}>
        <ul className={style.shop_list}>
          <li
            className={
              style.shop_item +
              ' ' +
              `${status === 'all' && style.shop_item_active}`
            }
            onClick={() => setStatus('all')}
          >
            Все
          </li>
          <li
            className={
              style.shop_item +
              ' ' +
              `${status === 'сoat' && style.shop_item_active}`
            }
            onClick={() => setStatus('сoat')}
          >
            Пальто
          </li>
          <li
            className={
              style.shop_item +
              ' ' +
              `${status === 'sweatshirt' && style.shop_item_active}`
            }
            onClick={() => setStatus('sweatshirt')}
          >
            Свитшоты
          </li>
          <li
            className={
              style.shop_item +
              ' ' +
              `${status === 'cardigan' && style.shop_item_active}`
            }
            onClick={() => setStatus('cardigan')}
          >
            Кардиганы
          </li>
          <li
            className={
              style.shop_item +
              ' ' +
              `${status === 'hoodie' && style.shop_item_active}`
            }
            onClick={() => setStatus('hoodie')}
          >
            Толстовки
          </li>
        </ul>
        <p className={style.shop_items_show}>Показано: 9 из 12 товаров</p>
      </div>
    </div>
  );
};

export default Shop;
