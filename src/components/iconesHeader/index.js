// Criando/Capturando Componentes
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

// Juntando objetos em uma constante
const imgIcones = [perfil, sacola];
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`

// Componente
function IconesHeader() {
  return (
    <Icones>
        {/* Aplicando componentes */}
        {imgIcones.map((icone) => (
        <Icone><img src={icone}></img></Icone>
        
        ))}
    </Icones>
  )
}

// Exportando componente
export default IconesHeader;