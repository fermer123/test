import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../Context';
import style from './Profile.module.scss';

const Profile = () => {
  const { user, Logout } = useContext(CustomContext);
  const { t } = useTranslation();
  const push = useNavigate();
  return (
    <div className='container'>
      <h2
        style={{ margin: '30px 0px ' }}
        dangerouslySetInnerHTML={{ __html: t('profile.firstScreen.title') }}
      />
      <div className={style.container}>
        <div className={style.profile}>
          <div className={style.name}>
            <div className={style.name1}>Имя</div>
            <div>{user.login}</div>
          </div>
          <div className={style.telephone}>
            <div className={style.telephone1}>Телефон</div>
            <div>{user.phone}</div>
          </div>
          <div className={style.email}>
            <div className={style.email1}>Email</div>
            <div>{user.email}</div>
          </div>
          <div className={style.birthday}>
            <div className={style.birthday1}>Дата рождения</div>
            <div>{user.login}</div>
          </div>
        </div>
        <div className={style.btn}>
          <button className={style.btn_item}>Редактировать</button>
          <button
            className={style.btn_item}
            onClick={() => {
              Logout();
              push('/');
            }}
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
