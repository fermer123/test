import style from './Pagination.module.scss';

const Pagination = ({ element, currPage, pagination }) => {
  return (
    <div
      onClick={() => pagination(currPage)}
      className={style.pagiation + ' ' + `${element ? style.active : ''}`}
    >
      {currPage}
    </div>
  );
};

export default Pagination;
