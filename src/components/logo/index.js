// Importando Componentes
import logo from '../../img/logo.svg'
import styled from 'styled-components';

const LogoImg = styled.img`
    margin-right: 10px;
`
const LogoDiv = styled.div`
    display: flex;
    font-size: 30px;
`

// Componente
function Logo() {
return (
    <LogoDiv>
        <LogoImg 
        src={logo} 
        alt="Alfala logo" 
        />
        <p><strong>Alfala</strong> Books </p>
    </LogoDiv>
    );
}

// Exportando componente
export default Logo;



