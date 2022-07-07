import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomContext } from '../../Context';
import style from './Profile.module.scss';

const Profile = () => {
  const { user, Logout } = useContext(CustomContext);

  return (
    <div className='container'>
      <div className={style.container}>
        <div className={style.profile}>
          <div className={style.name}>
            <div className={style.name1}>name</div>
            <div>{user.login}</div>
          </div>
          <div className={style.telephone}>
            <div className={style.telephone1}>telephone</div>
            <div>{user.phone}</div>
          </div>
          <div className={style.email}>
            <div className={style.email1}>email</div>
            <div>{user.email}</div>
          </div>
          <div className={style.birthday}>
            <div className={style.birthday1}>birthday</div>
            <div>{user.login}</div>
          </div>
        </div>
        <div className={style.btn}>
          <NavLink className={style.login} to='/' onClick={Logout}>
            logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
