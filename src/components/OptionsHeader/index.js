import styled from 'styled-components';

// Juntando objetos em uma constante
const textOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE'];
const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

// Componente
function OptionsHeader() {
    return (
        <Opcoes>
            {/* Aplicando componentes */}
            {textOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

// Exportando componente
export default OptionsHeader;