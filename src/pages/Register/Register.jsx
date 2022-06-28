import style from './Register.module.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const registerUser = (e) => {
    e.preventDefault();
    const resp = axios.post('http://localhost:8080/register');
    console.log(resp);
  };

  return (
    <div className='container'>
      <div className={style.register}></div>
      <form onSubmit={registerUser}>
        <h2 className={style.register_h2}>Register</h2>
        <div className={style.register_list}>
          <input
            className={style.input}
            name='email'
            type='email'
            placeholder='email'
          />

          <input
            className={style.input}
            name='login'
            type='login'
            placeholder='login'
          />

          <input
            className={style.input}
            name='tel'
            type='tel'
            placeholder='telephone'
          />

          <input
            className={style.input}
            name='password'
            type='password'
            placeholder='password'
          />

          <input
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
