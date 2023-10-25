import styled from "styled-components";
// import {Link} from 'react-router-dom';

export const Logo = styled.img`
width:  430px;
`;

export const Imagem = styled.img`

width: 50%;

`;

export const LoginButton = styled.button`
 background-color: green;
  color: white;
  margin-top: 2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  height: 3rem;
  width: 60%;

  &:hover{
  background-color: lightgreen;
  font-weight: bold;
  color: black;
}
`;


export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;
  width: auto ;
  height: 100vh;
  padding-left: -2rem
`;

export const LoginBox = styled.div`
flex-direction: column;
display: flex;

width: 50%;
align-items: center;
`;
export const Form = styled.div`
width: 100%;
max-width: 583px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const Input = styled.input`
  background: rgba( 0,0,0,0.28);
  width: 100%;
  height: 42px;
  line-height: 42px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  margin-top: 24px;
  padding: 24px;
  color: ${(props) => props.theme.colors.text};

  &::placeholder{
    color: ${(props) => props.theme.colors.gray700};
  }
`;
