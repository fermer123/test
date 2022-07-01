import style from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CustomContext } from '../../Context';

const Login = () => {
  const {
    register,
    handleSubmit,
    setError: { errors },
    reset,
  } = useForm();

  const { Login } = useContext(CustomContext);

  return (
    <div className='container'>
      <div className={style.login}></div>
      <form onSubmit={handleSubmit(Login)}>
        <h2 className={style.login_h2}>Login</h2>
        <div className={style.login_list}>
          <input
            className={style.input}
            required
            type='email'
            placeholder='email'
            {...register('email', {
              required: 'заполни поле',
            })}
          />

          <input
            className={style.input}
            required
            type='password'
            placeholder='password'
            {...register('password', {
              required: 'заполни поле',
            })}
          />
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
