import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

function App() {
  const [resource, useResource] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => useResource('posts')}>Posts</button>
        <button onClick={() => useResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}
export default App;
