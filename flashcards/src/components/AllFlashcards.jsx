const AllFlashcards = (props) => {
    const { flashcards, handleFlip, handleDelete } = props;

    return (
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
                        onClick={(event) => { handleFlip(event, idx) }}>
                        <h3>{card.category}</h3>
                        <button onClick={(e) => handleDelete(e, idx)}>Delete</button>

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
    )
}

export default AllFlashcards;