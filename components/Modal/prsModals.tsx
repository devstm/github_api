import { useDispatch, useSelector } from 'react-redux';
import { hide } from '../../redux/slices/prsSlice';
import styles from '../../styles/Modal.module.css';
function PRsModal() {
  const { data, showModal, pending } = useSelector((store: any) => store.prs);
  const dispatch = useDispatch();

  const onHide = () => {
    dispatch(hide());
  };
  return (
    console.log(data),
    showModal &&
      (!pending ? (
        <div className={styles.modal} id='myModal'>
            <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
              <h5 className={styles['modal-title']}>Pull Requests</h5>
              <button type='button' className={styles.close} onClick={onHide}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className={styles['modal-body']}>
              <div className='list-group'>
                {/* {data.repos.map((repo: any, index: number) => (
                  <button key={index}
                    // onClick={handleClick}
                    className='list-group-item list-group-item-action flex-column align-items-start'
                  >
                    <div className='d-flex w-100 justify-content-between'>
                      <h5 className='mb-1'>{repo.name}</h5>
                      <small>{repo.created_at}</small>
                    </div>
                    <p className='mb-1'>
                      {repo.description}
                    </p>
                    <small>watchers: {repo.watchers_count} </small>
                    <small>forks: {repo.forks_count} </small>
                    <small>stargazers: {repo.stargazers_count} </small>
                  </button>
                ))} */}
              </div>
            </div>
            <div className={styles['modal-footer']}>
              <button type='button' className='btn btn-danger' onClick={onHide}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      ))
  );
}

export default PRsModal;
