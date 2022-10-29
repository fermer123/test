import { useState } from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../Context';
import style from './Profile.module.scss';
import { useInput } from '../../components/input/input';

const Profile = () => {
  const { user, Logout, editData } = useContext(CustomContext);
  const { t } = useTranslation();
  const push = useNavigate();
  const [edit, setEdit] = useState(false);
  const login = useInput(user.login);
  const phone = useInput(user.phone);
  const email = useInput(user.email);

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
            {edit ? (
              <input className={style.input} {...login} />
            ) : (
              <div>{user.login}</div>
            )}
          </div>
          <div className={style.telephone}>
            <div className={style.telephone1}>Телефон</div>
            {edit ? (
              <input className={style.input} {...phone} />
            ) : (
              <div>{user.phone}</div>
            )}
          </div>
          <div className={style.email}>
            <div className={style.email1}>Email</div>
            {edit ? (
              <input className={style.input} {...email} />
            ) : (
              <div>{user.email}</div>
            )}
          </div>
        </div>
        <div className={style.btn}>
          <button
            onClick={() => {
              editData({
                login: login.value,
                phone: phone.value,
                email: email.value,
              });
              setEdit(!edit);
            }}
            className={style.btn_item}
          >
            {edit ? 'Сохранить' : 'Редактировать'}
          </button>
          {edit ? null : (
            <button
              className={style.btn_item}
              onClick={() => {
                Logout();
                push('/');
              }}
            >
              Выйти
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
