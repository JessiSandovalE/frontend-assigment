import React from 'react';
import Layout from './components/Layout'

import { AsideProvider } from './context/aside'
import { ArticleProvider } from './context/article'

function App() {
  return (
    <AsideProvider>
      <ArticleProvider>
        <Layout/>
      </ArticleProvider>
    </AsideProvider>
  );
}

export default App;
