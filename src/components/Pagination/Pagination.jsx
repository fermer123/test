import style from './Pagination.module.scss';

const Pagination = ({ currPage }) => {
  return (
    <div>
      <div className={style.pagiation}>{currPage}</div>
    </div>
  );
};

export default Pagination;
