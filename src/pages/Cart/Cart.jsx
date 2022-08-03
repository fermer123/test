import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';
import { CustomContext } from '../../Context';

const Cart = () => {
  const { cart, deleteItem } = useContext(CustomContext);

  return (
    <div className='container'>
      <div className={style.cart}>
        <h2 className='title'>Cart</h2>
        <div className={style.shop_link}>
          <NavLink to='/'>Главная</NavLink> - Коризна
        </div>
        <ul className={style.ol_name}>
          <li className={style.li_name}>Товар</li>
          <li className={style.li_name}>Цена</li>
          <li className={style.li_name}>Количество</li>
          <li className={style.li_name}>Всего</li>
        </ul>
        {cart.map((e, idx) => (
          <div key={idx} className={style.basketBack}>
            <div className={style.basket_item}>
              <div
                onClick={() => {
                  deleteItem(e.id, e.size, e.color, e.title, e.price);
                }}
                className={style.delete}
              ></div>
              <NavLink to={`/product/${e.id}`}>
                <img className={style.img} src={`../${e.image}`} />
              </NavLink>
              <div className={style.name}>{e.title}</div>
            </div>

            <div className={style.price}>${e.price}</div>
            <div className={style.count}>{e.count}</div>
            <div className={style.sum}>${e.price * e.count}</div>
          </div>
        ))}
        <div className={style.end_info}>
          <div className={style.end_price}>
            <div className={style.end_price_text}>Итого:</div>
            <div className={style.end_price_price}>
              $ {cart.reduce((acc, val) => acc + val.price * val.count, 0)}
            </div>
          </div>
          <button className={style.end_info_btn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
