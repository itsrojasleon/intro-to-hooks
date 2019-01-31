import React, { useState, useEffect } from 'react';

function ResourceList({ resource }) {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
      (async resource => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        const data = await response.json();
        setResources(data);
      })(resource);
    },
    [resource]
  );
  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
}
export default ResourceList;
