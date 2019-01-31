import { useState, useEffect } from 'react';

function useResources(resource) {
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
  return resources;
}
export default useResources;
