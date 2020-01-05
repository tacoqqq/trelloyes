import React from 'react';
import './List.css';
import Card from './Card.js';


function List(props){
    const cardArray = props.cards; // [{title:'xxx',content:'yyy'},{title:'xxx',content:'yyy'}]
    const cardComponentArray = cardArray.map(card => <Card title={card.title} content={card.content}/>);
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {cardComponentArray}
            </div>
        </section>
    );
}

export default List;