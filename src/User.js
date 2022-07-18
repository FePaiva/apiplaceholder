import React from 'react'
import UserList from './UserList'

const User = ({ users, setUsers }) => {
  
  
  return (
    <> 
        {users.length ? (
            <UserList
            setUsers={users}
            />
        ) : (
          <p style={{ marginTop: '2rem' }}>No users.</p>
        )}

    </>
  )
}

export default User