import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../Context';
import style from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  const { count, user } = useContext(CustomContext);
  console.log(user, count);
  return (
    <div className='container'>
      <div dangerouslySetInnerHTML={{ __html: t('home.firstScreen.title') }} />
    </div>
  );
};

export default Home;
