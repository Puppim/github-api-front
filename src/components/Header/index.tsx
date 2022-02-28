import React, { useState } from "react";
import * as S from "./styled";
// import {useGithub} from '../../providers/github-provider';
import {useGithub} from '../../hooks/github-hooks';
import Button from "../Button";

const Header: React.FC = ()=>{
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState('');
 
  const submitGetUser = () => {
    
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
     
      <S.Wrapper >
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => setUsernameForSearch(event.target.value)}
        />
        <Button type="submit" onClick={submitGetUser}>Buscar</Button>
      
     
      </S.Wrapper>
    </header>
  );
};

export default Header;
