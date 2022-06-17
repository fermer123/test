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
            <NavLink to='/home'>Главная</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>Магазин</NavLink>
          </li>
          <li>
            <NavLink to='/brands'>О бренде</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Контакты</NavLink>
          </li>
        </ul>
        <div>
          <NavLink to='/call'>
            <img className={style.call} src={call} />
            +7 (495) 823-54-12
          </NavLink>
          <NavLink to='/basket'>
            <img className={style.basket} src={basket} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
