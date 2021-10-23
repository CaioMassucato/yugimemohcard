import {BrowserRouter, Route} from 'react-router-dom'
import { useState, useEffect } from "react"
import NovaColecao from './components/NovaColecao/index'
import EditarColecao from './components/EditarColecao';


function App() {
  const [nomeColecao, setColecao] = useState(''); /* nome da coleçao */

  const criarColecao = name => {
    setColecao(name)
    console.log(nomeColecao)
  }

  return (
    <BrowserRouter>
    
  <Route path="/new-collection" exact>
    <NovaColecao criarColecao={criarColecao}></NovaColecao>
  </Route>
  <Route path="/edit-collection" exact>
    <EditarColecao></EditarColecao>
  </Route>
  </BrowserRouter>
  );
}

export default App;
