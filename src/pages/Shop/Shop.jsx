import style from './Shop.module.scss';
import '../../index.scss';
import { useState } from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import Collection from '../Collection/Collection';
import Pagination from '../../components/Pagination/Pagination';

const Shop = () => {
  const [status, setStatus] = useState('all');
  const { shop } = useContext(CustomContext);
  const [currPage, setCurrPage] = useState(1);
  const [items] = useState(4);
  const lastItemIndex = currPage * items;
  const firstItemIndex = lastItemIndex - items;
  const pageNumber = [];

  const shopFilter = shop.filter((e) => {
    if (status === 'all') {
      return e;
    } else {
      return e.category === status;
    }
  });
  for (let i = 1; i <= Math.ceil(shopFilter.length / items); i++) {
    pageNumber.push(i);
  }
  const currentItem = shopFilter.slice(firstItemIndex, lastItemIndex);

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
            onClick={() => setStatus('t-shirt')}
          >
            Футболки
          </li>
          <li
            className={
              style.shop_item +
              ' ' +
              `${status === 'cardigan' && style.shop_item_active}`
            }
            onClick={() => setStatus('sweatshirt')}
          >
            Свитшоты
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
          {shopFilter.map((e) => (
            <Collection
              img={`../${e.image}`}
              title={e.title}
              price={e.price}
              oldPrice={e.oldPrice}
              key={e.id}
            />
          ))}
        </div>
      </div>
      <div>
        {pageNumber.map((e) => (
          <Pagination items={items} shopFilter={shopFilter} key={e} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
