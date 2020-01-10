import React from 'react';
import List from './List.js';
import './App.css';


function App(props) {
  const allList = props.store.lists ? props.store.lists:[]
  //console.log(allList);
  const listComponentArray = allList.map(list => <List key={list.id} header={list.header} cards={list.cardIds.map(id => props.store.allCards[id])}/>)

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {listComponentArray}
      </div>
    </main>
  );
}

export default App;
