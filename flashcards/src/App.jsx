import flashcardsData from './data/flashcards.json';
import './App.css';
import { useState } from 'react';

const App = () => {
    const [flashcards, setFlashcards] = useState(flashcardsData)

    const handleFlip = (event, selectedCardIdx) => {
        console.log("Flipped")
        const updatedCards = flashcards.map((card, i) => {
            if(i === selectedCardIdx) {
                return{
                    ...card,
                    flipped: !card.flipped
                }
            }
            return card;
        })

        setFlashcards(updatedCards);
    }

    return (
        <div className="container">
            <header style={{ textAlign: 'center' }}>
                <h1>Programming Flash Cards</h1>
                <hr />
            </header>

            <main className='flex-row flex-wrap'>
                {flashcards.map((card, idx) => {
                    return (
                        // if possible, key should be a unique ID from the object instead of just the index
                        <section 
                        key={idx} 
                        className='card' 
                        onClick={(event) => {handleFlip(event, idx)}}>
                            <h3>{card.category}</h3>
                            <p className='front'>{card.front}</p>
                            <p className='back'>{card.back}</p>
                        </section>
                    )
                })}
            </main>
        </div>
    );
}

export default App;


