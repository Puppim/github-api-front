import React from "react";
import * as S from "./styled";


interface GitstarredAndRepo {
  key: string,
  name: string,
  linkToRepo: string,
  fullName:string
}

const RepositoryItem: React.FC<GitstarredAndRepo>  = ({ name, linkToRepo, fullName }:GitstarredAndRepo) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Link:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
       {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
