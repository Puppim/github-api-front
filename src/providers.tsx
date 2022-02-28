import React from "react";
import App from "./App";
import {GithubProvider} from './hooks/github-hooks'
import GlobalStyle from './styles/global';


const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
