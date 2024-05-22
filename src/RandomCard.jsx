import React, { useState, useEffect } from "react";

const RandomCard = () => {
    const [cards, setCards] = useState([
        { id: 1, image: 'images/pexels-anna-lowe-895508-2446915.jpg', name: 'Card 1', seen: false },
        { id: 2, image: 'images/pexels-camrainey-2600214.jpg', name: 'Card 2', seen: false },
        { id: 3, image: 'images/pexels-davidmceachan-71241.jpg', name: 'Card 3', seen: false },
        { id: 4, image: 'images/pexels-elvis-vasquez-136708-421654.jpg', name: 'Card 4', seen: false },
        { id: 5, image: 'images/pexels-hiteshchoudhary-1144276.jpg', name: 'Card 5', seen: false },
        { id: 6, image: 'images/pexels-jonathanschmer-3652252.jpg', name: 'Card 6', seen: false },
        { id: 7, image: 'images/pexels-luis-ruiz-1292843.jpg', name: 'Card 7', seen: false },
        { id: 8, image: 'images/pexels-manpritkalsi-1537493.jpg', name: 'Card 8', seen: false },
        { id: 9, image: 'images/pexels-pixabay-208745.jpg', name: 'Card 9', seen: false },
        { id: 10, image: 'images/pexels-pixabay-532826.jpg', name: 'Card 10', seen: false },
        { id: 11, image: 'images/pexels-robertovivancos-2190283.jpg', name: 'Card 11', seen: false },
        { id: 12, image: 'images/pexels-sam-d-1263405-2404798.jpg', name: 'Card 12', seen: false },
        { id: 13, image: 'images/pexels-tom-briskey-99375926-12422183.jpg', name: 'Card 13', seen: false }
    ]);

    // 1. The user sees an image 
    // 2. The user decides to hit yes or no
    // 3. If they clicked the correct button their score gets updated, in which the the user earns an extra point
    // 4. But if the user clicks the wrong button it goes back to zero
    // 5. If the user earns the best score, then the game is over
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [correctGuessCount, setCorrectGuessCount] = useState(0);
    const maxScore = cards.length;

    useEffect(() => {
        randomImage();
    }, []);

    useEffect(() => {
        // Game over, reset the game
        if(correctGuessCount === maxScore) {
            resetGame();
            window.alert("Congratulations! You won the game!");
        }
    }, [correctGuessCount]);

    const randomImage = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentCardIndex(randomIndex);
    };

    const handleYes = () => {
        const currentCard = cards[currentCardIndex];
        if (currentCard.seen) {
            setCorrectGuessCount(correctGuessCount + 1);
            updateCardSeen(currentCardIndex);
        } else {
            resetGame();
        }
        randomImage();
    };

    const handleNo = () => {
        const currentCard = cards[currentCardIndex];
        if (!currentCard.seen) {
            setCorrectGuessCount(correctGuessCount + 1);
            updateCardSeen(currentCardIndex);
        } else {
            resetGame();
        }
        randomImage();
    };

    const updateCardSeen = (index) => {
        const updatedCards = [...cards];
        updatedCards[index].seen = true;
        setCards(updatedCards);
    };

    const resetGame = () => {
        const resetCards = cards.map(card => ({ ...card, seen: false }));
        setCards(resetCards);
        setCorrectGuessCount(0);
    };

    return (
        <div>
            <h1 className="appTitle">World Tour Memory Game</h1>
            <div className="cardContainter">
                <div>
                    { cards.length > 0 && (
                        <div className="currentCard">
                            <img src={ cards[currentCardIndex].image } alt={ cards[currentCardIndex].name } className="image" />
                        </div>
                    )}
                </div>
            </div>
            <div className="buttonContainer">
                <h2>Have you seen this picture yet?</h2>
                <button onClick={ handleYes }>Yes</button>
                <button onClick={ handleNo }>No</button>
            </div>
            <div className="scoreInfo">
                <p>Score: { correctGuessCount }</p>
                <p>Best Score: { maxScore }</p>
            </div>
        </div>
    );
};

export default RandomCard;