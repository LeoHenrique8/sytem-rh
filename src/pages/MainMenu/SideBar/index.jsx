import React, {useState} from 'react'
import { Container, MenuList, MenuItem, MenuLink, ReturnLink, BeneficioDescontoIcon, ItemLabel, FuncionarioIcon, EmpresaIcon, FolhaIcon, MenuButton} from './style'


function SideBar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
<>

<MenuButton onMouseEnter={toggleMenu}/>
    <Container open={menuOpen} onMouseLeave={toggleMenu}>


        <MenuList >
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Benefício ou desconto</ItemLabel>
            <BeneficioDescontoIcon size={50}/>
          </MenuLink>

        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Funcionário</ItemLabel>
            <FuncionarioIcon size={50}/>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Empresa</ItemLabel>
            <EmpresaIcon size={50}/>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">
            <ItemLabel>Folha de Pagamento</ItemLabel>
            <FolhaIcon size={50}/>
          </MenuLink>
        </MenuItem>
      </MenuList>

      <ReturnLink to="/">
        <MenuLink >Voltar</MenuLink>
      </ReturnLink>
    </Container>
    </>
  )
}

export default SideBar
