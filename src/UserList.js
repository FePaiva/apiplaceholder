import React from 'react'

const UserList = ({ users, setUsers }) => {

  return (
    <ul>
      {users.map((user) => {
            setUsers={user}
      })}
    </ul>
  )
}

export default UserList