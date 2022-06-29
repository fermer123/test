import style from './Register.module.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    setError: { errors },
    reset,
  } = useForm();

  const Register = (data) => {
    console.log(data);
    // const resp = axios.post('http://localhost:8080/register', {
    //   ...data,
    //   orders: [],
    // });
    // console.log(resp);
  };
  return (
    <div className='container'>
      <div className={style.register}></div>
      <form onSubmit={handleSubmit(Register)}>
        <h2 className={style.register_h2}>Register</h2>
        <div className={style.register_list}>
          <input
            className={style.input}
            {...register('email', {
              required: 'заполни поле',
            })}
            type='email'
            placeholder='email'
          />
          <span>{errors?.email && errors.email.message}</span>
          <input
            {...register('login', {
              required: 'заполни поле',
            })}
            className={style.input}
            type='login'
            placeholder='login'
          />

          <input
            {...register('phone', {
              required: 'заполни поле',
            })}
            className={style.input}
            type='phone'
            placeholder='telephone'
          />

          <input
            {...register('password', {
              required: 'заполни поле',
            })}
            className={style.input}
            type='password'
            placeholder='password'
          />

          <input
            {...register('password', {
              required: 'заполни поле',
            })}
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
