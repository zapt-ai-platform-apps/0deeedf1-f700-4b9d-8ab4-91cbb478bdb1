import React from 'react';

export default function Card({ card, onClick }) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div
        className={`w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-md shadow-md flex items-center justify-center ${
          card.flipped || card.matched
            ? 'bg-white'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {card.flipped || card.matched ? (
          <img
            src="https://images.unsplash.com/photo-1452857297128-d9c29adba80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwyfHxjdXRlJTIwYW5pbWFsJTIwY2FydG9vbnxlbnwwfHx8fDE3MzU2NTg5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Card"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-full rounded-md"></div>
        )}
      </div>
    </div>
  );
}