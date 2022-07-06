import style from './Profile.module.scss';

const Profile = () => {
  return (
    <div className='container'>
      <div className={style.profile}>
        <div className={style.name}>
          <div>name</div>
        </div>
        <div className={style.telephone}>
          <div>telephone</div>
        </div>
        <div className={style.email}>
          <div>email</div>
        </div>
        <div className={style.birthday}>
          <div>birthday</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
