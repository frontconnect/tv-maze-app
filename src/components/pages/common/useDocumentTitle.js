import { useEffect, useState } from 'react';

export function useDocumentTitle(title) {
  const [pageTitle, setPageTitle] = useState(title);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return [setPageTitle];
}
