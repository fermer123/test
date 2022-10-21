import { useTranslation } from 'react-i18next';
import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../img/Logo.svg';
import { ReactComponent as Instagram } from '../img/instagram.svg';
import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Twitter } from '../img/twitter.svg';
import visa from '../img/visa.png';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.list}>
          <div className={style.footer_logo}>
            <Logo className={style.logo} src={Logo} alt='logo' />
            <span>womazing</span>
            <div className={style.rights}>
              © Все права защищены Политика конфиденциальности Публичная оферта
            </div>
          </div>
          <ul className={style.footer_list}>
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
          <div className={style.contact_info}>
            <p className={style.tel}>+7 (495) 823-54-12</p>
            <p className={style.email}>hello@womazing.com</p>
            <ul className={style.svg}>
              <li>
                <Instagram />
              </li>
              <li>
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
            </ul>
            <img src={visa} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
