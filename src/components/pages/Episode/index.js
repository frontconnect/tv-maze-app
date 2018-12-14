import React from 'react';
import { useDocumentTitle } from '../common/useDocumentTitle';

function EpisodePage() {
  useDocumentTitle('Episodes');

  return (
    <div data-cy="episode">Hello episode page</div>
  );
}

export default EpisodePage;
