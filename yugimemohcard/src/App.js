import {BrowserRouter, Route} from 'react-router-dom'
import EditarColecao from './components/EditarColecao/index'


function App() {
  return (
    <BrowserRouter>
    <EditarColecao></EditarColecao>
  <Route path="/edit-collection" exact>
    <EditarColecao ></EditarColecao>
  </Route>
  </BrowserRouter>
  );
}

export default App;
