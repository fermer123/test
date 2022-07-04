import style from './Shop.module.scss';
import '../../index.scss';
import { useState } from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import Collection from '../Collection/Collection';

const Shop = () => {
  const [status, setStatus] = useState('all');
  const { shop } = useContext(CustomContext);
  console.log(shop);
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

        <div className={style.shop_row}>
          {shop.map((e) => (
            <div>
              <img src={`./${e.image}`} />
              <Collection
                img={`http://localhost:3000/${e.image}`}
                title={e.title}
                price={e.price}
                key={e.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
