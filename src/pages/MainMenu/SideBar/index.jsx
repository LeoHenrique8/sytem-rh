import React, {useState} from 'react'
import { Container, MenuList, MenuItem, MenuLink, BeneficioDescontoIcon, ItemLabel, FuncionarioIcon, EmpresaIcon, FolhaIcon, ReturnIcon, Profile, Photo, Nome, Cargo, ProfileBox, Thumbnail, MenuButton} from './style'
import userImage from '../../../Images/download.jpeg'


function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);



  const imgSize = 35;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };




  return (
    <Container open={menuOpen} prop={menuOpen}  onMouseLeave={toggleMenu} onMouseEnter={toggleMenu}>
      <MenuButton>Menu</MenuButton>
      <ProfileBox>
        <Profile>
          <Photo src={userImage} />
          <Nome>Seu Madruga</Nome>
          <Cargo>Masturbador de cavalos</Cargo>
        </Profile>
        <Thumbnail src={userImage}/>
      </ProfileBox>
        <MenuList >
        <MenuItem>
          <MenuLink to="/beneficiodesconto">
            <ItemLabel>Benefício ou desconto</ItemLabel>
            <BeneficioDescontoIcon size={imgSize}/>
          </MenuLink>

        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Funcionário</ItemLabel>
            <FuncionarioIcon size={imgSize}/>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Empresa</ItemLabel>
            <EmpresaIcon size={imgSize}/>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Folha de Pagamento</ItemLabel>
            <FolhaIcon size={imgSize}/>
          </MenuLink>
        </MenuItem>
      </MenuList>

      <MenuLink to="/">
        <ItemLabel>Voltar</ItemLabel>
        <ReturnIcon size={40}/>
      </MenuLink>
    </Container>
  )
}

export default SideBar
