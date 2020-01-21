import React from 'react';
import './List.css';
import Card from './Card.js';



function List(props){

    const allCards = props.cards ? props.cards:[]

    
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {allCards.map(card => 
                    <Card 
                        key={card.id}
                        id={card.id}
                        title={card.title} 
                        content={card.content}
                        onDeleteCard={props.onDeleteCard}
                    />
                )}
                <button 
                    onClick={() => props.onAddCard(props.id)} 
                    type="button" 
                    className="List-add-button"
                >
                    + Add Random Card
                </button>
            </div>

        </section>
    );
}


export default List;