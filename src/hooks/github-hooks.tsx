import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface UserInterface{
  id: string,
  avatar: string,
  login: string,
  name: string,
  html_url: string,
  blog: string,
  company: string,
  location: string,
  followers: number,
  following: number,
  public_gists: number,
  public_repos: number,
}

interface GithubData{
  hasUser: boolean,
  loading: boolean,
  user: UserInterface,
  repositories: GitstarredAndRepo[],
  starred: GitstarredAndRepo[],
}

interface GitstarredAndRepo {
  
  id: string,
  name: string,
  html_url: string,
  full_name:string
}

interface GithubContexData{
  githubState: GithubData,
  getUser(username: string): void; 
  getUserRepos(username: string): void; 
  getUserStarred(username: string): void; 
}

const GithubContext = createContext<GithubContexData>({} as GithubContexData);


 const GithubProvider: React.FC = ({ children }) => {
 
 const [githubState, setGithubState] = useState<GithubData>({
      hasUser: false,
      loading: false,
      user: {
        id: '',
        avatar: '',
        login: '',
        name: '',
        html_url: '',
        blog: '',
        company: '',
        location: '',
        followers: 0,
        following: 0,
        public_gists: 0,
        public_repos: 0,
      },
      repositories: [],
      starred: [],
    });
  

    const getUser = (username:string) => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading,
      }));
  
      api
        .get(`users/${username}`)
        .then(({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            hasUser: true,
            user: {
              id: data.id,
              avatar: data.avatar_url,
              login: data.login,
              name: data.name,
              html_url: data.html_url,
              blog: data.blog,
              company: data.company,
              location: data.location,
              followers: data.followers,
              following: data.following,
              public_gists: data.public_gists,
              public_repos: data.public_repos,
            },
          }));
        })
        .finally(() => {
          setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
          }));
        });
    };
  
    const getUserRepos = (username:string) => {
      api.get(`users/${username}/repos`).then(({ data }) => {
        console.log("data: " + JSON.stringify(data));
        setGithubState((prevState) => ({
          ...prevState,
          repositories: data,
        }));
      });
    };
  
    const getUserStarred = (username: string) => {
      api.get(`users/${username}/starred`).then(({ data }) => {
        console.log("data: " + JSON.stringify(data));
        setGithubState((prevState) => ({
          ...prevState,
          starred: data,
        }));
      });
    };
 
  return (
    <GithubContext.Provider value={{ githubState, getUser, getUserRepos, getUserStarred }}>
      {children}
    </GithubContext.Provider>
  );
};

function useGithub(): GithubContexData {
  const context = useContext(GithubContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { GithubProvider, useGithub };