import { useEffect, useState } from 'react';
import axios from 'axios';
import flashcardsData from './data/flashcards.json';
import './App.css';
import NewFlashcard from './components/NewFlashcard';
import AllFlashcards from './components/AllFlashcards';

const App = () => {
    const [flashcards, setFlashcards] = useState([])
    const [flashcardCount, setFlashcardCount] = useState(10)
    const [questionType, setQuestionType] = useState(18)

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

    //useEffect takes 2 arguments, a function to be run, & an array of variables that should trigger it to run
    useEffect(() => {
        //using axios instead of fetch
        axios.get(`https://opentdb.com/api.php?amount=${flashcardCount}&category=${questionType}&difficulty=medium&type=boolean`).then(res => {
            //don't need to call .json() b/c axios handles json conversion for us
            console.log(res.data.results)
            setFlashcards(res.data.results)
        }).catch(err => {
            console.log(err)
        })


        // fetch(`https://opentdb.com/api.php?amount=${flashcardCount}&category=${questionType}&difficulty=medium&type=boolean`)
        //     .then(res => {
        //         console.log(res)
        //         res.json()
        //             .then(res => {
        //                 console.log(res.results);
        //                 setFlashcards(res.results);
        //             })
        //     }).catch(err => {
        //         console.log(err.json())
        //     })
    }, [flashcardCount, questionType])
    //   ^  this array is the list of variables that useEffect is "watching"
    //whenever one of these variables change, we run our useEffect function again

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
            <label>Amount of Flashcards:</label>
            <input type="number" onChange={e => setFlashcardCount(e.target.value)} value={flashcardCount}/>
            <label>Question Type:</label>
            <input type="number" onChange={e => setQuestionType(e.target.value)} value={questionType}/>
            <br />
            <br />
            <NewFlashcard addCard={addCardToList}/>

            <AllFlashcards flashcards={flashcards} handleFlip={handleFlip} handleDelete={handleDelete}/>
        </div>
    );
}

export default App;


