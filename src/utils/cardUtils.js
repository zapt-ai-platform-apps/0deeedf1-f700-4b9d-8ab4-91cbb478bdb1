export const initialCards = [
  { id: 1, matched: false },
  { id: 2, matched: false },
  { id: 3, matched: false },
  { id: 4, matched: false },
  { id: 5, matched: false },
  { id: 6, matched: false },
];

export function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
}