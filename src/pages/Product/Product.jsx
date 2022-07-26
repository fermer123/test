import style from './Product.module.scss';
import '../../index.scss';

const Product = () => {
  return (
    <div className='container'>
      <h2 className='title'>Product</h2>
      <div className={style.product}></div>
    </div>
  );
};

export default Product;
