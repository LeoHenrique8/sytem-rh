import styled from "styled-components";
import { MdHandshake, MdPeopleAlt, MdOutlineDomain, MdAttachMoney, MdKeyboardReturn } from "react-icons/md";
import {Link} from 'react-router-dom';


export const Container = styled.div`
  margin-left: ${props => (props.open ? '0' : '-280px')};
  transition: margin-left 0.8s;
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
  overflow-x: hidden;


`;

export const ProfileBox = styled.div`
  display: flex;


`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 300px;

`;
export const Photo = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: -15px 2px 57px 5px rgba(0,0,0,0.53);
  -webkit-box-shadow: -15px 2px 57px 5px rgba(0,0,0,0.53);
  -moz-box-shadow: -15px 2px 57px 5px rgba(0,0,0,0.53);

`;
export const Nome = styled.h2`
  font-size: 30px;
  font-weight: bold;

`;
export const Cargo = styled.p`
  font-size: 15px;
  font-style: italic;
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  margin: 30px 30px 15px 50px; /* Top, Right, Bottom, Left */
  box-shadow: -15px 2px 57px 5px rgba(0,0,0,0.53);
  -webkit-box-shadow: -15px 2px 57px 5px rgba(0,0,0,0.53);
  -moz-box-shadow: -15px 2px 57px 5px rgba(0,0,0,0.53);
  border-radius: 50%;

  visibility: hidden;// ${props => (props.open ? 'hidden' : 'visible')};


`;





export const MenuButton = styled.button`
  position: absolute;
  height: 1vh;
  z-index: 99229;
  right: 0;
  top: 0;
  background-color:red;
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

export const MenuLink = styled(Link)`
  display: block;
  padding: 20px 7px 15px 20px; /* Top, Right, Bottom, Left */
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const ReturnIcon = styled(MdKeyboardReturn)`
&:hover {scale: 1.3;transition: all.4s;}
width: 100px;
`;
