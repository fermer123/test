import { NavLink, useNavigate } from 'react-router-dom';
import style from './Ordering.module.scss';
import { useInput } from '../../components/input/input';
import { useContext } from 'react';
import { CustomContext } from '../../Context';

const Oredering = () => {
  const { cart, ticket, addOrder, endPrice, user } = useContext(CustomContext);

  const name = useInput();
  const email = useInput(user.email);
  const number = useInput(user.phone);
  const country = useInput('Russia');
  const city = useInput('Chelyabinsk');
  const street = useInput();
  const house = useInput();
  const apartment = useInput();
  const commets = useInput('All is good');
  const push = useNavigate();

  const info = {
    name: name.value,
    email: email.value,
    number: number.value,
    country: country.value,
    city: city.value,
    street: street.value,
    house: house.value,
    apartment: apartment.value,
    commets: commets.value,
  };

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
              <li
                style={{ backgroundColor: e.color }}
                key={e.id}
                onClick={() => push(`/product/${e.id}`)}
              >
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
              <p>
                {Array.isArray(ticket) && ticket.length
                  ? Math.ceil((endPrice / 100) * (100 - ticket[0].sum))
                  : endPrice}
                $
              </p>
            </li>
          </ul>
          <div className={style.pay_method}>
            <h3>Способ оплаты</h3>
            <input type='checkbox' />
            <span>Оплата наличными</span>
            <button
              disabled={
                name.value &&
                email.value &&
                number.value &&
                country.value &&
                city.value &&
                street.value &&
                house.value &&
                apartment.value &&
                commets.value !== ''
                  ? false
                  : true
              }
              onClick={() => {
                addOrder(info);
              }}
            >
              Разместить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oredering;
