import { NavLink } from 'react-router-dom';
import style from './OrderSuccess.module.scss';
import { ReactComponent as Logo } from '../../components/img/success.svg';

const OrderSuccess = () => {
  return (
    <div className='container'>
      <h2 style={{ marginBottom: '26px', maxWidth: '100%' }} className='title'>
        Заказ получен
      </h2>
      <div style={{ marginBottom: '214px' }}>
        <NavLink to='/'>Главная</NavLink> -{' '}
        <NavLink to='/ordering'>Оформление заказа</NavLink> - Заказ получен
      </div>
      <div className={style.order_success}>
        <Logo className={style.logo} />
        <div className={style.order_success_text}>
          <p className={style.order_success_text_1}>Заказ успешно оформлен</p>
          <p className={style.order_success_text_2}>
            Мы свяжемся с вами в ближайшее время!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
