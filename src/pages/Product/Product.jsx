import axios from 'axios';
import style from './Product.module.scss';
import '../../index.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { CustomContext } from '../../Context';

const Product = () => {
  const params = useParams();
  const { setCurrPage, setStatus } = useContext(CustomContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`http://localhost:8080/clothes/${params.id}`).then(({ data }) =>
      setProduct(data),
    );
  }, []);
  console.log(product.size);
  return (
    <div className='container'>
      <h2 className={'title' + ' ' + style.title}>{product.title}</h2>
      <div className={style.way}>
        <NavLink to='/'>Главная</NavLink> -{' '}
        <NavLink
          onClick={() => {
            setCurrPage(1);
            setStatus(product.category);
          }}
          to='/shop'
        >
          {product.category}
        </NavLink>{' '}
        - {product.title}
      </div>

      <div className={style.product_main}>
        <img
          className={style.product_img}
          src={`../${product.image}`}
          alt={product.title}
        />
        <div className={style.product_info}>
          <div className={style.product_price}>
            <div className={style.product_price_new}>${product.price}</div>
            <div className={style.product_price_old}>${product.oldPrice}</div>
          </div>
          <div className={style.choose}>Выберете размер</div>

          <div className={style.product_size}>
            <ul>
              {product.size
                ? product.size.map((index, e) => (
                    <li className={style.product_size_element} key={index}>
                      {e}
                    </li>
                  ))
                : null}
            </ul>

            <div className={style.choose}>Выберете цвет</div>

            <ul>
              {product.color
                ? product.size.map((e, index) => (
                    <li className={style.product_color_element} key={index}>
                      {e}
                    </li>
                  ))
                : null}
            </ul>

            <div className={style.product_quantity}>
              <input defaultValue={1} />
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
