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
        <h2>Register</h2>
        <input name='email' type='email' placeholder='email' />
        <br />
        <input name='login' type='login' placeholder='login' />
        <br />
        <input name='tel' type='tel' placeholder='telephone' />
        <br />
        <input name='password' type='password' placeholder='password' />
        <br />
        <input type='password' placeholder='repeat password' />
        <br />
        <button type='submit'>sing in</button>
        <p>
          <NavLink className={style.header_link} to='/login'>
            Войти?
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
