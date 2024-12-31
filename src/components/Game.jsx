import React, { useState, useEffect } from 'react';
import { initialCards, shuffle } from '../utils/cardUtils';
import Card from './Card';

export default function Game() {
  const [cards, setCards] = useState([]);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    const shuffledCards = shuffle(initialCards.concat(initialCards)).map((card, index) => ({
      ...card,
      index,
      flipped: false,
    }));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (firstSelection && secondSelection) {
      setDisabled(true);
      if (firstSelection.id === secondSelection.id) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstSelection.id ? { ...card, matched: true } : card
          )
        );
        setMatchedPairs((prev) => prev + 1);
        resetSelections();
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.index === firstSelection.index || card.index === secondSelection.index
                ? { ...card, flipped: false }
                : card
            )
          );
          resetSelections();
        }, 800);
      }
      setMoves((prev) => prev + 1);
    }
  }, [secondSelection]);

  const resetSelections = () => {
    setFirstSelection(null);
    setSecondSelection(null);
    setDisabled(false);
  };

  const handleCardClick = (card) => {
    if (disabled || card.flipped || card.matched) return;
    setCards((prevCards) =>
      prevCards.map((c) =>
        c.index === card.index ? { ...c, flipped: true } : c
      )
    );
    if (!firstSelection) {
      setFirstSelection(card);
    } else {
      setSecondSelection(card);
    }
  };

  const handleRestart = () => {
    const shuffledCards = shuffle(initialCards.concat(initialCards)).map((card, index) => ({
      ...card,
      index,
      flipped: false,
      matched: false,
    }));
    setCards(shuffledCards);
    setFirstSelection(null);
    setSecondSelection(null);
    setDisabled(false);
    setMoves(0);
    setMatchedPairs(0);
  };

  return (
    <div className="max-w-xl w-full flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4 mt-8">
        {cards.map((card, index) => (
          <Card key={index} card={card} onClick={() => handleCardClick(card)} />
        ))}
      </div>
      <div className="mt-4">
        <p className="text-lg">Moves: {moves}</p>
      </div>
      {matchedPairs === initialCards.length && (
        <div className="mt-4 flex flex-col items-center">
          <p className="text-2xl font-bold">Congratulations!</p>
          <p>You completed the game in {moves} moves.</p>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-600"
            onClick={handleRestart}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}