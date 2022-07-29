import axios from 'axios';
import style from './Product.module.scss';
import '../../index.scss';
import { NavLink, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { CustomContext } from '../../Context';
import Collection from '../Collection/Collection';

const Product = () => {
  const params = useParams();
  const { setCurrPage, setStatus, shop } = useContext(CustomContext);
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    axios(`http://localhost:8080/clothes/${params.id}`).then(({ data }) => {
      setProduct(data);
      setColor(data.color[0]);
      setSize(data.size[0]);
    });
  }, [params]);

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
            {product.oldPrice ? (
              <div className={style.product_price_old}>${product.oldPrice}</div>
            ) : null}
          </div>
          <div className={style.choose}>Выберете размер</div>
          <ul className={style.product_size}>
            {product.size
              ? product.size.map((e) => (
                  <li
                    onClick={() => setSize(e)}
                    className={
                      style.product_size_element +
                      ' ' +
                      `${e === size ? style.product_size_element_active : ' '}`
                    }
                    key={e}
                  >
                    {e}
                  </li>
                ))
              : null}
          </ul>
          <div className={style.choose}>Выберете цвет</div>
          <ul className={style.product_color}>
            {product.color
              ? product.color.map((e) => (
                  <li
                    onClick={() => setColor(e)}
                    className={
                      style.product_color_element +
                      ' ' +
                      `${e === color ? style.product_color_element_active : ''}`
                    }
                    style={{ background: e }}
                    key={e}
                  ></li>
                ))
              : null}
          </ul>
          <div className={style.product_quantity}>
            <input className={style.product_quantity_input} defaultValue={1} />
            <button className={style.product_quantity_button}>
              Добавить в корзину
            </button>
          </div>
        </div>
        <div className={style.any}>Связанные товары</div>
        <div className={style.any_items}>
          {shop
            .filter((e) => {
              return e.category === product.category && e.id !== product.id;
            })
            .slice(0, 3)
            .map((e) => (
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
      </div>
    </div>
  );
};

export default Product;
