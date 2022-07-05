import style from './Register.module.scss';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { CustomContext } from '../../Context';

const Register = () => {
  const { Register } = useContext(CustomContext);
  const {
    register,
    handleSubmit,
    setError: { errors },
    reset,
  } = useForm();

  return (
    <div className='container'>
      <div className={style.register}></div>
      <form onSubmit={handleSubmit(Register)}>
        <h2 className={style.register_h2}>Register</h2>
        <div className={style.register_list}>
          <input
            className={style.input}
            {...register('email')}
            type='email'
            placeholder='email'
          />
          {/* <span>{errors?.email && errors.email.message}</span> */}
          <input
            {...register('login')}
            className={style.input}
            type='login'
            placeholder='login'
          />

          <input
            {...register('phone', {})}
            className={style.input}
            type='phone'
            placeholder='telephone'
          />

          <input
            {...register('password')}
            className={style.input}
            type='password'
            placeholder='password'
          />

          <input
            {...register('password')}
            className={style.input}
            type='password'
            placeholder='repeat password'
          />
        </div>
        <button className={style.btn} type='submit'>
          sign in
        </button>
        <NavLink className={style.header_link} to='/login'>
          login?
        </NavLink>
      </form>
    </div>
  );
};

export default Register;
