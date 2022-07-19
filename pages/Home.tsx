import React from 'react';
import { useSelector } from 'react-redux';
import Input from '../components/Input/Input';
import Modal from '../components/Modal';
import PRsModal from '../components/Modal/prsModals';
import UsersList from '../components/UserInfoCard';

function Home() {
  const { data, pending } = useSelector((store: any) => store.users);
  return (
    <div className='container'>
      <div className='row' >
        <div className='col-md-5' style={{ margin: "50px auto" }}>
          <Input />
        </div>
        <Modal login={data.login} />
        <PRsModal />
      </div>
      {!pending ? <UsersList /> : <h1> ...loading </h1>}
    </div>
  );
}

export default Home;
