import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../Store/users/UsersSlice';


const Fetchusers = () => {
    const {users, isLoading, error} = useSelector((state) => state.user);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers())
    },[]);

  return (
    <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
            {users.map(user => (
                <li key={user.last}>{user.first} {user.last}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fetchusers