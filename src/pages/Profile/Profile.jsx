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
  const password = useInput('');
  const repeatPassword = useInput('');
  const data = {
    login: login.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  };

  const passwordValidate = (obj) => {
    if (obj.password.length > 4) {
      return obj;
    } else {
      delete obj.password;
      return obj;
    }
    //доделать нормально валидацию
  };

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
          <div className={style.name}>
            <div className={style.name1}>Телефон</div>
            {edit ? (
              <input className={style.input} {...phone} />
            ) : (
              <div>{user.phone}</div>
            )}
          </div>
          <div className={style.name}>
            <div className={style.name1}>Email</div>
            {edit ? (
              <input className={style.input} {...email} />
            ) : (
              <div>{user.email}</div>
            )}
          </div>
        </div>
        <div className={style.pass}>
          {edit ? (
            <div className={style.name}>
              <div className={style.name1}>Введите новый пароль</div>
              <input
                placeholder='Введите новый пароль'
                type='password'
                className={style.input}
                {...password}
              />
            </div>
          ) : null}
          {edit ? (
            <div className={style.name}>
              <div className={style.name1}>Повторите пароль</div>
              <input
                placeholder='Повторите пароль'
                type='password'
                className={style.input}
                {...repeatPassword}
              />
            </div>
          ) : null}
        </div>

        <div className={style.btn}>
          <button
            onClick={() => {
              password.length > 4
                ? editData(data)
                : editData(passwordValidate(data));
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
