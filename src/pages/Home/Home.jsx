import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../Context';
import Collection from '../Collection/Collection';
import style from './Home.module.scss';
import { ReactComponent as LogoQuality } from '../../components/img/quality.svg';
import { ReactComponent as LogoSpeed } from '../../components/img/speed.svg';
import { ReactComponent as LogoArm } from '../../components/img/arm.svg';
import team from '../../components/img/team.png';
import { NavLink } from 'react-router-dom';
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
          <NavLink to='/shop'>
            <button className={style.home_top_btn}>Открыть магазин</button>
          </NavLink>
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
          <NavLink to='/shop'>
            <button className={style.home_bot_btn}>Открыть магазин</button>
          </NavLink>
        </div>
        <div className={style.home_info}>
          <h2
            dangerouslySetInnerHTML={{ __html: t('home.firstScreen.title3') }}
          />

          <div className={style.home_info_block}>
            <div className={style.home_quality}>
              <LogoQuality className={style.home_info_block_logo} />
              <p className={style.home_info_block_title}>Качество</p>
              <p className={style.home_info_block_text}>
                Наши профессионалы работают на лучшем оборудовании для пошива
                одежды беспрецедентного качества
              </p>
            </div>
            <div className={style.home_speed}>
              <LogoSpeed className={style.home_info_block_logo} />
              <p className={style.home_info_block_title}>Скорость</p>
              <p className={style.home_info_block_text}>
                Благодаря отлаженной системе в Womazing мы можем отшивать до
                20-ти единиц продукции в наших собственных цехах
              </p>
            </div>
            <div className={style.home_responsibility}>
              <LogoArm className={style.home_info_block_logo} />
              <p className={style.home_info_block_title}>Ответственность</p>
              <p className={style.home_info_block_text}>
                Мы заботимся о людях и планете. Безотходное производство и
                комфортные условия труда - все это Womazing
              </p>
            </div>
          </div>
          <div className={style.home_team}>
            <h2
              dangerouslySetInnerHTML={{ __html: t('home.firstScreen.title4') }}
            />
            <div className={style.home_team_block}>
              <img src={team} alt='team' />
              <div className={style.home_team_info}>
                <p className={style.home_team_info_title}>Для каждой</p>
                <p className={style.home_team_info_text}>
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                  <br /> <br />
                  Womazing ищет эти мелочи и создает прекрасные вещи, которые
                  выгодно подчеркивают достоинства каждой девушки.
                </p>
                <NavLink to='/brands'>
                  <button className={style.home_team_info_btn}>
                    Подробнее о бренде
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.home_img_back} />
      <div className={style.home_img} />
    </div>
  );
};

export default Home;
