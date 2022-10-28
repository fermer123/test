import { NavLink } from 'react-router-dom';
import style from './Collection.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Collection = ({ img, title, price, oldPrice, id }) => {
  return (
    <div className='container' id={id}>
      <div className={style.collection}>
        <NavLink to={`/product/${id}`}>
          <LazyLoadImage
            className={style.collection_img}
            alt={title}
            src={img}
            effect='blur'
          />
        </NavLink>
        <div className={style.collection_title}>{title}</div>
        <div>
          {oldPrice ? (
            <span className={style.collection_oldPrice}>$ {oldPrice}</span>
          ) : null}
          <span className={style.collection_price}>$ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
