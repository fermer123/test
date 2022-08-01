import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';
import { CustomContext } from '../../Context';

const Cart = () => {
  const { cart } = useContext(CustomContext);

  const deleteItem = (e) => {
    return cart.filter((e) => e !== cart.id);
  };

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
          <div key={e.idx} className={style.basketBack}>
            <div
              onClick={(e) => deleteItem(idx)}
              className={style.delete}
            ></div>
            <img className={style.img} src={`../${e.image}`} />
            <div className={style.name}>{e.title}</div>
            <div className={style.price}>{e.price}</div>
            <div className={style.count}>{e.count}</div>
            <div className={style.sum}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
