import React, { useState } from 'react';

function App() {
  const [resource, useResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => useResource('posts')}>Posts</button>
        <button onClick={() => useResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  );
}
export default App;
