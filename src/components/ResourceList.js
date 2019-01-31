import React, { useState, useEffect } from 'react';

function ResourceList({ resource }) {
  const [resources, setResources] = useState([]);
  const fetchResource = async resource => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };
  useEffect(async () => {
    fetchResource(resource);
  }, []);
  return <div>{resources}</div>;
}
export default ResourceList;
