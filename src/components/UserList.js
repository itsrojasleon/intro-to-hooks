import React from 'react';
import useResources from './useResources';

function UserList() {
  const users = useResources('users');
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default UserList;
