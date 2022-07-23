import style from './Pagination.module.scss';

const Pagination = ({ currPage, pagination }) => {
  return (
    <div onClick={() => pagination(currPage)} className={style.pagiation}>
      {currPage}
    </div>
  );
};

export default Pagination;
