import styled from "styled-components";
import { MdHandshake, MdPeopleAlt, MdOutlineDomain, MdAttachMoney } from "react-icons/md";
import {Link} from 'react-router-dom';


export const Container = styled.div`
  margin-left: ${props => (props.open ? '0' : '-400px')};
  transition: left 0.8s;
  width: 400px;
  height: 100%;
  background-color: #333;
  position: absolute;
  top: 0;
  left:0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MenuButton = styled.button`
  position: absolute;
  height: 100vh;
  z-index: 999;
  bottom: 20px;
  left: 0;
  background-color:transparent;
  color: white;
  border: none;
  cursor: pointer;
`;
export const ItemLabel = styled.p`
font-size: 18px;


`;
export const MenuList = styled.ul`


  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 0;
  padding: 0;

`;

export const MenuLink = styled.a`
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:hover {

    background-color: #555;
    transition: all.2s;

  }
`;
export const ReturnLink = styled(Link)`
 list-style: none;
  margin: 0;
  padding: 0;

`;
export const BeneficioDescontoIcon = styled(MdHandshake)`
&:hover {scale: 1.3;transition: all.4s;}
width: 100px;
`;
export const FuncionarioIcon = styled(MdPeopleAlt)`
&:hover {scale: 1.3;transition: all.4s;}
width: 100px;
`;
export const EmpresaIcon = styled(MdOutlineDomain)`
&:hover {scale: 1.3;transition: all.4s;}
width: 100px;
`;
export const FolhaIcon = styled(MdAttachMoney)`
&:hover {scale: 1.3;transition: all.4s;}
width: 100px;
`;
