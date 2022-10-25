import { NavLink, useNavigate } from 'react-router-dom';
import style from './Oredering.module.scss';
import { useInput } from '../../components/input/input';
import { useContext, useMemo } from 'react';
import { CustomContext } from '../../Context';

const Oredering = () => {
  const name = useInput();
  const email = useInput();
  const number = useInput();
  const country = useInput();
  const city = useInput();
  const street = useInput();
  const house = useInput();
  const apartment = useInput();
  const commets = useInput();
  const { cart } = useContext(CustomContext);
  const push = useNavigate();

  const endPrice = useMemo(() => {
    return Number(cart.reduce((acc, val) => acc + val.price * val.count, 0));
  }, [cart]);
  return (
    <div className='container'>
      <h2 style={{ marginBottom: '26px', maxWidth: '100%' }} className='title'>
        Оформление заказа
      </h2>
      <div style={{ marginBottom: '214px' }}>
        <NavLink to='/'>Главная</NavLink> - оформление заказа
      </div>
      <div className={style.oredering}>
        <div className={style.ordering_data}>
          <div className={style.customer_data}>
            <h3>данные покупателя</h3>
            <input placeholder='Имя' {...name} />
            <input placeholder='E-mail' {...email} />
            <input placeholder='Телефон' {...number} />
          </div>
          <div className={style.customer_data}>
            <h3>адрес получателя</h3>
            <input placeholder='Страна' {...country} />
            <input placeholder='Город' {...city} />
            <input placeholder='Улица' {...street} />
            <input placeholder='Дом' {...house} />
            <input placeholder='Квартира' {...apartment} />
          </div>
          <div className={style.customer_data_coments}>
            <h3>комментарии</h3>
            <input placeholder='Commets' {...commets} />
          </div>
        </div>
        <div className={style.my_order}>
          <h3>ваш заказ</h3>
          <ul className={style.my_order_list}>
            <li>
              <p>Товар</p>
              <p>всего</p>
            </li>
            {cart.map((e) => (
              <li key={e.id} onClick={() => push(`/product/${e.id}`)}>
                <p>{e.title}</p>
                <p>{e.price} $</p>
              </li>
            ))}
            <li>
              <p>Подытог</p>
              <p>{endPrice} $</p>
            </li>
            <li>
              <p>Итог</p>
              <p>129$</p>
            </li>
          </ul>
          <div className={style.pay_method}>
            <h3>Способ оплаты</h3>
            <input type='checkbox' />
            <span>Оплата наличными</span>
            <button>Разместить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oredering;