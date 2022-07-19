import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { show, hide , getUserReposByLogin } from '../../redux/slices/repoSlice';
import { AppDispatch } from '../../redux/store';

function UserInfoCard({ login, avatar_url, html_url }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(getUserReposByLogin(login));
    dispatch(show());
  };
  return (
    <div className='card col-md-3'>
      <img
        className='card-img-top'
        src={avatar_url}
        alt='Picture of the author'
      />
      <div className='card-body'>
        <h5 className='card-title'>{login}</h5>
      </div>
      <div className='card-body'>
        <a href={html_url} className='btn btn-dark'>
          Github
        </a>
        <button onClick={handleClick} className='card-link' style={{ marginLeft: '50px' }}>
          Repos
        </button>
      </div>
    </div>
  );
}

export default UserInfoCard;
