import { NavLink } from 'react-router-dom';
import style from './Collection.module.scss';

const Collection = ({ img, title, price, oldPrice, id }) => {
  console.log(Number(id));
  return (
    <div className='container' id={id}>
      <div className={style.collection}>
        <NavLink to={`/product/${id}`}>
          <img className={style.collection_img} alt={title} src={img} />
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
