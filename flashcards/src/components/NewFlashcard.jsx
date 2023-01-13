import { useState } from 'react';


const NewFlashcard = (props) => {
    //destructuring props into the single function
    const { addCard } = props
    const [category, setCategory] = useState('')
    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

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

        //calling the addCardToList function from props
        addCard(newCard);
    }

    return (
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
    )
}

export default NewFlashcard;