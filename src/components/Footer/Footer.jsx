import { useTranslation } from 'react-i18next';
import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../img/Logo.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <ul className={style.list}>
          <li className={style.footer_logo}>
            <img className={style.logo} src={Logo} />
            <span>womazing</span>
          </li>
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
          <li>
            <div>+7 (495) 823-54-12</div>
            <div>hello@womazing.com</div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
