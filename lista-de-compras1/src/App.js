import './App.css';
import React, { useState } from 'react';

function App() {

  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([])

  const addItem = () => {
    setItemList([item].concat(itemList))
    setItem('')
  }

  const limparLista = () => {
    setItemList([]);
  }

  return (
    <div className="App">
      <h1> Lista de Compras </h1>
      <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} />
      <button onClick={addItem}>Adicionar Item</button>
      <button onClick={limparLista}>Excluir</button>
      <ul>
        {itemList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;