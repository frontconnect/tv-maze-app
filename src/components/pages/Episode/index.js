import React, {useEffect, useState} from 'react';

function EpisodePage() {
  const [title] = useState('Episode');

  useEffect(() => {
    document.title = `${title} Name and Number`;
  });

  return (
    <div data-cy="episode">Hello episode page</div>
  );
}

export default EpisodePage;
