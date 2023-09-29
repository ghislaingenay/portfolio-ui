import { useEffect } from 'react';

const HackerText = () => {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const getRandomLetter = () =>
    LETTERS[Math.floor(Math.random() * LETTERS.length)];
  useEffect(() => {
    const h1Element = document.querySelector(
      'main#hack-text h1'
    ) as HTMLHeadingElement;

    h1Element.addEventListener('mouseover', (event) => {
      const intervalId = setInterval(() => {
        (event.target as unknown as HTMLElement).innerText = (
          event.target as unknown as HTMLElement
        ).innerText
          .split('')
          .map((letter) => {
            if (letter === ' ') return ' ';
            else return getRandomLetter();
          })
          .join('');
      }, 30);

      return () => clearInterval(intervalId);
      // const headerText = h1Element?.innerHTML;
    });
  }, []);
  return (
    <main id="hack-text">
      <h1 data-value="HACKING SURU">HACKING SURU</h1>
    </main>
  );
};

export { HackerText };
