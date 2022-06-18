import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../img/Logo.svg';
import call from '../img/call.svg';
import basket from '../img/basket.svg';

const Header = () => {
  return (
    <div className='container'>
      <div className={style.header}>
        <div>
          <img className={style.logo} src={Logo} />
          Womazing
        </div>
        <ul className={style.list}>
          <li>
            <NavLink className={style.header_link} to='/'>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_link} to='/shop'>
              Магазин
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_link} to='/brands'>
              О бренде
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_link} to='/contact'>
              Контакты
            </NavLink>
          </li>
        </ul>
        <div>
          <a className={style.call} href='tel:+7 (495) 823-54-12'>
            <img className={style.header_link} src={call} />
            +7 (495) 823-54-12
          </a>
          <NavLink to='/cart'>
            <img
              className={style.cart + ' ' + style.header_link}
              src={basket}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
