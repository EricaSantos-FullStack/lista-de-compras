# Lista de compras
## 📜 Lista de compras feita no React usando Hooks – useState
  Aqui você conseguirá criar a sua lista de compras e ainda excluir todos os items que desejar. </br>
  
## 📜 Tarefas:
- [x] Criação do projeto com creat-react-app lista-de-compras
- [x] Limpar os excessos
- [x] Colocar o useState no App.js
- [x] Estilizar o App.css
- [x] Teste 1 - 2
- [x] Deploy no GitHub pages

### 📜 Passo 1 - import : 
~~~JavaScript
import React, { useState } from 'react';
~~~

### 📜 Passo 2 - colocar o useState para funcionar: 
~~~js
const [item, setItem] = useState('');
const [itemList, setItemList] = useState([])
~~~

### 📜 Passo 3 - const para incluir:
~~~js
const addItem = () => {
    setItemList([item].concat(itemList))
    setItem('')
  }
~~~

### 📜 Passo 4 - const para excluir:
~~~js
const limparLista = () => {
    setItemList([]);
  }
~~~

### 📜 Passo 5 - Ligar com os botões:
~~~js
<button onClick={addItem}>Adicionar Item</button>
<button onClick={limparLista}>Excluir</button>
~~~

➟ Para mais detalhes do código, veja na pasta App.js :) 

### Resultado:

![lista](https://user-images.githubusercontent.com/71906862/114654394-79707880-9cc0-11eb-85a4-3d4e00856f11.PNG)

### Status:
✔ Concluido!

### Deploy: 
https://ericasantos-fullstack.github.io/lista-de-compras/


