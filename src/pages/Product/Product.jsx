import axios from 'axios';
import style from './Product.module.scss';
import '../../index.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`http://localhost:8080/clothes/${params.id}`).then(({ data }) =>
      setProduct(data),
    );
  }, []);
  return (
    <div className='container'>
      <h2 className={'title' + ' ' + style.title}>Product</h2>
      <div className={style.way}>Главная - Свитшшоты - {product.title}</div>
      <div className={style.product}>{product.title}</div>
    </div>
  );
};

export default Product;
