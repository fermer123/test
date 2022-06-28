import style from './Login.module.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container'>
      <div className={style.login}></div>
      <form>
        <h2>Login</h2>
        <input required type='email' placeholder='email' />
        <br />
        <input required type='password' placeholder='password' />
        <br />
        <button type='submit'>sing in</button>
        <p>
          <NavLink className={style.header_link} to='/register'>
            Зарегестрироваться?
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
