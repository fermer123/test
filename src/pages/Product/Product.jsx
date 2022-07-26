import style from './Product.module.scss';
import '../../index.scss';
import { useLocation, useParams } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const params = useParams();
  console.log(params);
  return (
    <div className='container'>
      <h2 className='title'>Product</h2>
      <div className={style.product}></div>
    </div>
  );
};

export default Product;
