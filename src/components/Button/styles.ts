import styled from 'styled-components';
import { shade } from 'polished';
// import sigInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.button`



background: #34C48F;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
border-radius: 42px;
height: 56px;
border: 0;
padding: 0 16px;
width: auto;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 28px;
text-transform: uppercase;
color: #F4F0EF;
margin-top: 16px;
transition: background-color 0.2s;

&:hover {
  background: ${shade(0.2, '#34C48F')};
}

`;
