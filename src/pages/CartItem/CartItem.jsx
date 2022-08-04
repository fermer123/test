import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomContext } from '../../Context';
import style from './CartItem.module.scss';

const CartItem = ({
  id,
  size,
  color,
  title,
  price,
  count,
  setCount,
  image,
}) => {
  const { deleteItem } = useContext(CustomContext);
  return (
    <div className={style.basketBack}>
      <div className={style.basket_item}>
        <div
          onClick={() => {
            deleteItem(id, size, color, title, price);
          }}
          className={style.delete}
        ></div>
        <NavLink to={`/product/${id}`}>
          <img className={style.img} src={`../${image}`} />
        </NavLink>
        <div className={style.name}>{title}</div>
      </div>

      <div className={style.price}>${price}</div>

      <input
        onChange={(e) => setCount(e.target.value)}
        className={style.count}
        value={count}
      />

      <div className={style.sum}>${price * count}</div>
    </div>
  );
};

export default CartItem;
