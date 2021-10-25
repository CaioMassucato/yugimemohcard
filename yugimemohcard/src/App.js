import {BrowserRouter, Route} from 'react-router-dom'
import { useState, useEffect } from "react"
import NewCollection from './pages/NewCollection/index'
import EditCollection from './pages/EditCollection'
import MyCollection from './pages/MyCollection/index'


function App() {
  const [nomeColecao, setColecao] = useState(''); /* nome da coleçao */

  const criarColecao = name => {
    setColecao(name)
    console.log(nomeColecao)
  }

  return (
    <BrowserRouter>
    <Route path="/" exact>
      <MyCollection></MyCollection>
    </Route>
  <Route path="/new-collection" exact>
    <NewCollection criarColecao={criarColecao}></NewCollection>
  </Route>
  <Route path="/edit-collection" exact>
    <EditCollection></EditCollection>
  </Route>
  <Route path="/my-collection" exact>
    <MyCollection></MyCollection>
  </Route>
  </BrowserRouter>
  );
}

export default App;
