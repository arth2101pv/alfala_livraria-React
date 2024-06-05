// Importando Componentes
import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import styled from 'styled-components';

// Importando CSS
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
}
`

// Corpo da página (Um componente, ainda que principal)
function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

// Exportando componente
export default App;
