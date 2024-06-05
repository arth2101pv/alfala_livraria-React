// Importando Componentes
import Logo from '../logo';
import OptionsHeader from '../OptionsHeader';
import Icones from '../iconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  display: flex;
`

// Componente
function Header() {
  return (
      <HeaderContainer>
        {/* Aplicando componentes */}
        <Logo />
        <OptionsHeader />
        <Icones />
      </HeaderContainer>
  );
};

// Exportando componente
export default Header;

