import style from './Collection.module.scss';

const Collection = ({ img, title, price, id }) => {
  return (
    <div className='container' id={id}>
      <div className={style.collection}>
        <div className={style.collection_img}>
          <img alt={title} src={img} />
        </div>
        <div className={style.collection_title}>{title}</div>
        <div className={style.collection_price}>{price}</div>
      </div>
    </div>
  );
};

export default Collection;
