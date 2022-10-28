import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { CustomContext } from '../../Context';
import style from './CartItem.module.scss';

const CartItem = ({ id, size, color, title, price, image, count }) => {
  const { deleteItem, setCount, updateItem } = useContext(CustomContext);

  return (
    <div className={style.basketBack}>
      <div className={style.basket_item}>
        <div
          onClick={() => {
            deleteItem(id, size, color);
          }}
          className={style.delete}
        ></div>
        <NavLink to={`/product/${id}`}>
          <LazyLoadImage
            effect='blur'
            alt={image}
            src={`../${image}`}
            className={style.img}
          />
        </NavLink>
        <div className={style.name}>{title}</div>
      </div>

      <div className={style.price}>${price}</div>

      <input
        className={style.count}
        value={count}
        type='number'
        onChange={(e) => {
          setCount(e.target.value);
          updateItem(id, color, size, e.target.value);
        }}
      />

      <div className={style.sum}>${price * count}</div>
    </div>
  );
};

export default CartItem;
