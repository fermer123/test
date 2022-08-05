import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';
import { CustomContext } from '../../Context';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart } = useContext(CustomContext);

  return (
    <div className='container'>
      <div className={style.cart}>
        <h2 className='title'>Cart</h2>
        <div className={style.shop_link}>
          <NavLink to='/'>Главная</NavLink> - Коризна
        </div>
        <ul className={style.ol_name}>
          <li className={style.li_name}>Товар</li>
          <li className={style.li_name1}>Цена</li>
          <li className={style.li_name}>Количество</li>
          <li className={style.li_name}>Всего</li>
        </ul>
        {cart.map((e, idx) => (
          <CartItem
            key={idx}
            id={e.id}
            size={e.size}
            color={e.color}
            title={e.title}
            price={e.price}
            image={e.image}
            count={e.count}
          />
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
