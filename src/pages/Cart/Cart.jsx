import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './Cart.module.scss';
import { CustomContext } from '../../Context';
import CartItem from '../CartItem/CartItem';
import { useState } from 'react';
import { useInput } from '../../components/input/input';
import axios from 'axios';

const Cart = () => {
  const { cart, ticket, setTicket, endPrice } = useContext(CustomContext);

  const push = useNavigate();
  const input = useInput('');

  const useTicket = async (e) => {
    e.preventDefault();
    if (input.value.length > 0) {
      try {
        const resp = await axios.get(
          `http://localhost:8080/tickets?title=${input.value}`,
        );
        setTicket(resp.data);
      } catch (e) {
        setTicket(e.message);
      }
    }
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
        <div className={style.cupon}>
          <input placeholder='Введите купон' {...input} />
          <button
            onClick={useTicket}
            style={{ marginRight: '337px' }}
            className={style.cupon_btn}
          >
            Применить купон
          </button>
          <button className={style.cupon_btn}>Обновить корзину</button>
          {input.value.length ? (
            ticket[0]?.sum ? null : (
              <p className={style.cupon_error}>такого купона не сущетсвует</p>
            )
          ) : null}
        </div>
        <div className={style.end_info}>
          <div className={style.end_price}>
            <div className={style.end_price_text}>Итого:</div>
            <div className={style.end_price_price}>
              ${' '}
              {Array.isArray(ticket) && ticket.length
                ? (endPrice / 100) * (100 - ticket[0].sum)
                : endPrice}
            </div>
          </div>
          <button
            onClick={() => {
              push('/ordering');
            }}
            className={style.end_info_btn}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
