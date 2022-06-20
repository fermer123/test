import { useTranslation } from 'react-i18next';
import style from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();

  return <div>{t('home.firstScreen.title')}</div>;
};

export default Home;
