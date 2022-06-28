import style from './Login.module.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      <div className={style.login}></div>
      <form>
        <h2 className={style.login_h2}>Login</h2>
        <div className={style.login_list}>
          <input
            className={style.input}
            required
            type='email'
            placeholder='email'
          />
          <br />
          <input
            className={style.input}
            required
            type='password'
            placeholder='password'
          />
          <br />
        </div>
        <button className={style.btn} type='submit'>
          sign in
        </button>
        <p>
          <NavLink className={style.header_link} to='/register'>
            register?
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
