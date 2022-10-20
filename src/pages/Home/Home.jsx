import { useTranslation } from 'react-i18next';
import style from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={style.home}>
      <div className='container'>
        <div className={style.home_top}>
          <h2
            dangerouslySetInnerHTML={{ __html: t('home.firstScreen.title') }}
          />
          <div className={style.home_text}>
            Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
            этом сезоне. Время исследовать.
          </div>
          <button className={style.home_btn}>Открыть магазин</button>
        </div>
        <div className={style.home_bot}>
          <h2
            dangerouslySetInnerHTML={{ __html: t('home.firstScreen.title2') }}
          />
        </div>
      </div>
      <div className={style.home_img_back} />
      <div className={style.home_img} />
    </div>
  );
};

export default Home;
