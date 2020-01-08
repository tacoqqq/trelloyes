import React from 'react';
import './List.css';
import Card from './Card.js';




function List(props){
    console.log(props);
    console.log(props.cards);
    const cardArray = (Array.isArray(props.cards)) ? props.cards.map(card => <Card key={card.id} title={card.title} content={card.content}/>) : ""; // [{title:'xxx',content:'yyy'},{title:'xxx',content:'yyy'}]

    //const cardComponentArray = (Array.isArray(cardArray) || !cardArray == {}) ? 
    
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cardArray}
            </div>
        </section>
    );
}

export default List;