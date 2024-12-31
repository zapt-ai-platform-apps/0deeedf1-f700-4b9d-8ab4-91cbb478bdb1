import React from 'react';
import Game from './components/Game';

export default function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-8">Amazing Memory Game</h1>
      <Game />
      <footer className="mt-8 mb-4">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}