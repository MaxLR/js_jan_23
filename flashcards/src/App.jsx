import flashcardsData from './data/flashcards.json';
import './App.css';
import { useState } from 'react';
import NewFlashcard from './components/NewFlashcard';
import AllFlashcards from './components/AllFlashcards';

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

    const handleDelete = (event, idxToDelete) => {
        //stops any onclicks from parents
        event.stopPropagation();

        //remove single card from flashcards
        flashcards.splice(idxToDelete, 1);

        //update state w/ a copy of flashcards array
        //if we didn't copy it, react doesn't know that flashcards has been updated
        setFlashcards([...flashcards])
    }

    const addCardToList = (newCard) => {
        setFlashcards([newCard, ...flashcards])
    }

    return (
        <div className="container">
            <header style={{ textAlign: 'center' }}>
                <h1>Programming Flash Cards</h1>
                <hr />
            </header>

            <NewFlashcard addCard={addCardToList}/>

            <AllFlashcards flashcards={flashcards} handleFlip={handleFlip} handleDelete={handleDelete}/>
        </div>
    );
}

export default App;


