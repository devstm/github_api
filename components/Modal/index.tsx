import { userAgent } from 'next/server';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hide } from '../../redux/slices/repoSlice';
import { show, getPRs } from '../../redux/slices/prsSlice';
import styles from '../../styles/Modal.module.css';
function Modal({ login }: any) {
  const { data, showModal, pending } = useSelector((store: any) => store.repos);
  const dispatch = useDispatch();
  const handleClick = (id:any) => {
    console.log(id);
    dispatch(getPRs(id));
    dispatch(show());
  };
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
              <h5 className={styles['modal-title']}>User Information</h5>
              <button type='button' className={styles.close} onClick={onHide}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className={styles['modal-body']}>
              <div className='col-md-12'>
                <div className='card p-3 py-4'>
                  <div className='text-center'>
                    <img
                      src={data.user.avatar_url}
                      width='100'
                      className='rounded-circle'
                    />
                  </div>
                  <div className='text-center mt-3'>
                    <span className='bg-secondary p-1 px-4 rounded text-white'>
                      {data.user.company}
                    </span>
                    <h5 className='mt-2 mb-0'>{data.user.name}</h5>
                    <div className='px-4 mt-1'>
                      <p className='fonts'>{data.user.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className='mt-2 mb-0'>Repos:</h5>
              <div className='list-group'>
                { data && data.repos.map((repo: any, index: number) => (
                  <button
                    id={repo.full_name}
                    key={index}
                    onClick={({target}: any)=>{
                      console.log(target.id);
                      handleClick(target.id)
                    }}
                    className='list-group-item list-group-item-action flex-column align-items-start'
                  >
                    <div className='d-flex w-100 justify-content-between'>
                      <h5 className='mb-1'>{repo.name}</h5>
                      <small>{repo.created_at}</small>
                    </div>
                    <p className='mb-1'>{repo.full_name}</p>
                    <small>watchers: {repo.watchers_count} </small>
                    <small>forks: {repo.forks_count} </small>
                    <small>stargazers: {repo.stargazers_count} </small>
                  </button>
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

export default Modal;
