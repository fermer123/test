import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../img/Logo.svg';
import call from '../img/call.svg';
import basket from '../img/basket.svg';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CustomContext } from '../../Context';

const Header = () => {
  const { t } = useTranslation();
  const { user } = useContext(CustomContext);
  console.log(user);
  console.log(user);
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
            <img className={style.header_link} src={call} />
            +7 (495) 823-54-12
          </a>
          <NavLink to='/cart'>
            <img
              className={style.cart + ' ' + style.header_link}
              src={basket}
            />
          </NavLink>

          {!!user.login ? (
            <NavLink className={style.login + ' ' + style.header_link} to='/'>
              logout
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
