export const firstLetterUp = text =>
  text
    .split('')
    .map((letter, idx) => (idx === 0 ? letter.toUpperCase() : letter))
    .join('');
