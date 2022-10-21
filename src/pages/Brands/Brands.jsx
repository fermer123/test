import { NavLink } from 'react-router-dom';
import style from './Brands.module.scss';
import brand1 from '../../components/img/brand1.png';
import brand2 from '../../components/img/brand2.png';

const Brands = () => {
  return (
    <div className='container'>
      <h2 className='title'>Brands</h2>
      <div className={style.shop_link}>
        <NavLink to='/'>Главная</NavLink> - О бренде
      </div>
      <div className={style.brand_top}>
        <img src={brand1} alt='brand1' />
        <div className={style.brand_top_content}>
          <p className={style.brand_top_content_title}>Идея и женщина</p>
          <p className={style.brand_top_content_text}>
            Womazing была основана в 2010-ом и стала одной из самых успешных
            компаний нашей страны. Как и многие итальянские фирмы, Womazing
            остаётся семейной компанией, хотя ни один из членов семьи не
            является модельером.
            <br /> <br />
            Мы действуем по успешной формуле, прибегая к услугам известных
            модельеров для создания своих коллекций. Этот метод был описан
            критиком моды Колином Макдауэллом как форма дизайнерского
            со-творчества, характерная для ряда итальянских prêt-a-porter
            компаний.
          </p>
        </div>
      </div>
      <div style={{ flexDirection: 'row-reverse' }} className={style.brand_top}>
        <img src={brand2} alt='brand2' />
        <div className={style.brand_top_content}>
          <p className={style.brand_top_content_title}>Магия в деталях</p>
          <p className={style.brand_top_content_text}>
            Первый магазин Womazing был открыт в маленьком городке на севере
            страны в 2010-ом году. Первая коллекция состояла из двух пальто и
            костюма, которые были копиями парижских моделей. <br /> <br />
            Несмотря на то, что по образованию основательница была адвокатом, ее
            семья всегда была тесно связана с шитьём (прабабушка основательницы
            шила одежду для женщин, а мать основала профессиональную школу кроя
            и шитья). Стремление производить одежду для масс несло в себе
            большие перспективы, особенно в то время, когда высокая мода
            по-прежнему доминировала, а рынка качественного prêt-a-porter
            попросту не существовало.
          </p>
        </div>
      </div>
      <NavLink to='/shop'>
        <button className={style.brand_btn}>Перейти в магазин</button>
      </NavLink>
    </div>
  );
};

export default Brands;
