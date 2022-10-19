import style from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useInput } from '../../components/input/input';

const Login = () => {
  const { Login } = useContext(CustomContext);
  const user = useInput('');
  const pass = useInput('');
  return (
    <div className='container'>
      <div className={style.login}></div>

      <h2 className={style.login_h2}>Login</h2>
      <div className={style.login_list}>
        <input
          className={style.input}
          required
          type='email'
          placeholder='email'
          {...user}
        />

        <input
          className={style.input}
          required
          type='password'
          placeholder='password'
          {...pass}
        />
      </div>
      <button
        className={style.btn}
        onClick={() => Login({ email: user.value, password: pass.value })}
      >
        Войти
      </button>
      <p>
        <NavLink className={style.header_link} to='/register'>
          Зарегестрироваться
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
