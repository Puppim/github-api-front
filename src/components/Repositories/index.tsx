import React, { useEffect, useState } from "react";
// import {useGithub} from '../../providers/github-provider';
import {useGithub} from '../../hooks/github-hooks';
import RepositoryItem from "../Repository-item";
import { WrapperTabs, WrapperTab, WrapperTabList, WrapperTabPanel, WrapperList} from './styles';

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  
  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    if(githubState.repositories){
      setHasUserForSearchrepos(true);
    }
    
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <WrapperTabs   selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
          <WrapperTabList>
            <WrapperTab>Repositories</WrapperTab>
            <WrapperTab>Starred</WrapperTab>
          </WrapperTabList>
          <WrapperTabPanel>
            <WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
