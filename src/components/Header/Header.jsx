import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../img/Logo.svg';
import call from '../img/call.svg';
import basket from '../img/basket.svg';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useMemo } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const { user, cart } = useContext(CustomContext);

  const sumProduct = useMemo(() => {
    return cart.reduce((acc, rec) => acc + rec.count, 0);
  }, [cart]);

  return (
    <div className='container'>
      <div className={style.header}>
        <div>
          <img className={style.logo} src={Logo} alt='logo' />
          Womazing
        </div>
        <ul className={style.list}>
          <li>
            <NavLink className={style.header_link} to='/'>
              {t('header.link1')}
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_link} to='/shop'>
              {t('header.link2')}
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_link} to='/brands'>
              {t('header.link3')}
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header_link} to='/contact'>
              {t('header.link4')}
            </NavLink>
          </li>
        </ul>
        <div>
          <a className={style.call} href='tel:+7 (495) 823-54-12'>
            <img className={style.header_link} src={call} alt='call' />
            +7 (495) 823-54-12
          </a>
          <NavLink to='/cart'>
            <div className={style.cart + ' ' + style.header_link}>
              <img src={basket} alt='cart' />
              <div className={style.cart_count}>{sumProduct}</div>
            </div>
          </NavLink>

          {!!user.login ? (
            <NavLink
              className={style.login + ' ' + style.header_link}
              to='/profile'
            >
              Профиль
            </NavLink>
          ) : (
            <NavLink
              className={style.login + ' ' + style.header_link}
              to='/register'
            >
              login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
