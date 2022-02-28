import React from "react";
import Header from '../Header';
import {WrapperLayout} from "./styled";

const Layout: React.FC = ({children})=>{
  return (
    <WrapperLayout >
      <Header />
      {children}
    </WrapperLayout>
  );
};

export default Layout;
