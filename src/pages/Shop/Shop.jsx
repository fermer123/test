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
  const [itemsPerPage] = useState(3);

  const lastItemIndex = currPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const pageNumber = [];

  const shopFilter = shop.filter((e) => {
    return status === 'all' ? e : e.category === status;
  });
  for (let i = 1; i <= Math.ceil(shopFilter.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }
  const currentItem = shopFilter.slice(firstItemIndex, lastItemIndex);
  const pagination = (numberPage) => {
    setCurrPage(numberPage);
  };
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
              `${status === 't-shirt' && style.shop_item_active}`
            }
            onClick={() => setStatus('t-shirt')}
          >
            Футболки
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
              `${status === 'hoodie' && style.shop_item_active}`
            }
            onClick={() => setStatus('hoodie')}
          >
            Толстовки
          </li>
        </ul>
        <p className={style.shop_items_show}>
          {/* переделать, работает не правильно товаров Показано */}
          {currentItem.length * currPage} из {shopFilter.length}
        </p>

        <div className={style.shop_row}>
          {currentItem.map((e) => (
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
      <div className={style.pagination}>
        {pageNumber.map((e) => (
          <Pagination currPage={e} key={e} pagination={pagination} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
