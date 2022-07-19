import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import UserInfoCard from './UserInfoCard';

function UsersList() {
  const { data, pending } = useSelector((store: any) => store.users);
  return data.length ? (
    <div className='container'>
      <div className='row'>
        {data.map((user: any, index: number) => (
          <UserInfoCard
            key={index}
            login={user.login}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
          />
        ))}
      </div>
    </div>
  ) : (
    <h1>no results</h1>
  );
}

export default UsersList;
