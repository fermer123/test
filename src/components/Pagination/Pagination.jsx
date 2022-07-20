import style from './Pagination.module.scss';

const Pagination = ({ currPage, pagination }) => {
  return (
    <div>
      <div onClick={() => pagination(currPage)} className={style.pagiation}>
        {currPage}
      </div>
    </div>
  );
};

export default Pagination;
