import React from 'react'
import { useSelector } from 'react-redux'

const Fetchusers = () => {
    const {users, isLoading, error} = useSelector((state) => state.users);
  return (
    <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>error</p>}
        <ul>
            {users.map(user => (
                <li key={user.last}>{user.last} {user.first}</li>
            ))}
        </ul>
    </div>
  )
}

export default Fetchusers