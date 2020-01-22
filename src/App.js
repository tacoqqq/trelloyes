import React from 'react';
import List from './List.js';
import './App.css';
import STORE from './store.js';


const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id: id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {

  state = {
    store: STORE
  }


  handleAddCard = (listid) => {
    const newCard = newRandomCard()
    const newLists = this.state.store.lists
    const newAllCards = this.state.store.allCards
    
    newLists.map(list => {
      if (listid === list.id) {
        list.cardIds.push(newCard.id)
        newAllCards[newCard.id] = newCard
      }}
    )
    this.setState({
      store: {
        lists: newLists,
        allCards: newAllCards
      }
    })
  }


  /*
  handleDeleteCard = (cardId) => {
    console.log('handleDeleteCard clicked', {cardId})
    const lists = this.state.store.lists
    const newAllCards = omit(this.state.store.allCards, cardId)
    
    const newLists = lists.map(list => ({ 
      ...list,
      cardIds: list.cardIds.filter(id => id != cardId)
    }))

    console.log(newLists)
    console.log(newAllCards)

    //const newCards = omit(allCards, cardId)

    this.setState({
      store: {
        lists: newLists,
        allCards: newAllCards
      }
    })

  }
  */

  
  handleDeleteCard = (cardId) => {
    console.log('handleDeleteCard clicked', {cardId})
    const lists = this.state.store.lists
    const allCards = this.state.store.allCards
    
    const newLists = lists.map(list => ({ 
      ...list,
      cardIds: list.cardIds.filter(id => id != cardId)
    }))

    console.log(newLists)

    const newAllCards = omit(allCards, cardId)

    this.setState({
      store: {
        lists: newLists,
        allCards: newAllCards
      }
    })

  }
  
    

  render(){
    const allList = this.state.store.lists ? this.state.store.lists:[]
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {allList.map(list => 
            <List 
              key={list.id} 
              id={list.id}
              header={list.header} 
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              onAddCard={this.handleAddCard}
              onDeleteCard={this.handleDeleteCard}
            />)}
        </div>
      </main>
    )
  }
}

export default App;
