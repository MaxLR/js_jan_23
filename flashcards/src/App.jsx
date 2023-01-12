import flashcardsData from './data/flashcards.json';
import './App.css';
import { useState } from 'react';

const App = () => {
    const [flashcards, setFlashcards] = useState(flashcardsData)
    const [category, setCategory] = useState('')
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

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

    const handleNewCard = (event) => {
        event.preventDefault();

        const newCard = {
            //long-form key: value syntax
            category: category,
            //shorthand syntax when key name & var name match
            front,
            back
        }

        setCategory('');
        setFront('');
        setBack('');

        setFlashcards([newCard, ...flashcards])
    }

    return (
        <div className="container">
            <header style={{ textAlign: 'center' }}>
                <h1>Programming Flash Cards</h1>
                <hr />
            </header>

            <form onSubmit={(e) => {handleNewCard(e)}}>
                <div>
                    <label>Category</label>
                    <input type="text" 
                        onChange={(e) => {setCategory(e.target.value)}}
                        value={category}
                    />
                </div>
                <div>
                    <label>Front</label>
                    <input type="text" 
                        onChange={(e) => {setFront(e.target.value)}}
                        value={front}
                    />
                </div>
                <div>
                    <label>Back</label>
                    <input type="text" 
                        onChange={(e) => {setBack(e.target.value)}}
                        value={back}
                    />
                </div>
                <input type="submit" value="Add Flashcard" />
            </form>

            <main className='flex-row flex-wrap'>
                {flashcards.map((card, idx) => {
                    const classes = ['card'];

                    if (card.flipped) {
                        classes.push("flipped")
                    }
                    
                    return (
                        // if possible, key should be a unique ID from the object instead of just the index
                        <section 
                        key={idx} 
                        className={classes.join(" ")} 
                        onClick={(event) => {handleFlip(event, idx)}}>
                            <h3>{card.category}</h3>

                            <p className="front">{card.front}</p>
                            <p className="back">{card.back}</p>

                            {/* 2nd way of conditional rendering */}
                            {/* {card.flipped ? 
                                <p>{card.back}</p> : 
                                <p>{card.front}</p>
                            } */}
                            
                            
                        </section>
                    )
                })}
            </main>
        </div>
    );
}

export default App;


