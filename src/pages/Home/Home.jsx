import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../Context';
import Collection from '../Collection/Collection';
import style from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  const { shop } = useContext(CustomContext);

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
          <button className={style.home_top_btn}>Открыть магазин</button>
        </div>
        <div className={style.home_bot}>
          <h2
            dangerouslySetInnerHTML={{ __html: t('home.firstScreen.title2') }}
          />
          <div className={style.any_items}>
            {shop.slice(5, 8).map((e) => (
              <Collection
                img={`../${e.image}`}
                title={e.title}
                price={e.price}
                oldPrice={e.oldPrice}
                key={e.id}
                id={e.id}
              />
            ))}
          </div>
          <button className={style.home_bot_btn}>Открыть магазин</button>
        </div>
      </div>
      <div className={style.home_img_back} />
      <div className={style.home_img} />
    </div>
  );
};

export default Home;
