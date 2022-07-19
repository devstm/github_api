import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset, getUserByLogin } from '../../redux/slices/userSlice';
import { AppDispatch } from '../../redux/store';

function Input() {
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    username ? dispatch(getUserByLogin(username)) : dispatch(reset());
  }, [dispatch, username]);

  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder='search user'
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className='input-group-prepend'>
        <span className='input-group-text' id='basic-addon1'>
        &#128269;
        </span>
      </div>
    </div>
  );
}

export default Input;
