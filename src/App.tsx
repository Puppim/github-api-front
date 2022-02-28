import React from 'react';
import {useGithub} from './hooks/github-hooks';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories'
import NoSearch from './components/No-search'

interface ResponseApiGit{
 user: {
    login: string;
  }
}

const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
