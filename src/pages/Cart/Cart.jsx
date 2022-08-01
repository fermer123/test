import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';

const Cart = () => {
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
      </div>
    </div>
  );
};

export default Cart;
