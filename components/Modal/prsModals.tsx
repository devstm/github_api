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
                {data.map((pr: any, index: number) => (
                    <div key={index} className='d-flex w-100 justify-content-between'>
                      <h5 className='mb-1'>{pr.title}</h5>
                      <small>{pr.created_at}</small>
                    </div>
                ))}
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
