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
      let iterations = 0;
      const intervalId = setInterval(() => {
        (event.target as unknown as HTMLElement).innerText = (
          event.target as unknown as HTMLElement
        ).innerText
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iterations)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return (event.target as unknown as any).dataset.value[index];
            else return getRandomLetter();
          })
          .join('');

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (iterations > h1Element.dataset.value!.length) {
          clearInterval(intervalId);
        }
        iterations += 1 / 3;
        return () => clearInterval(intervalId);
      }, 30);

      // const headerText = h1Element?.innerHTML;
    });
  }, []);

  // blob
  useEffect(() => {
    const blob = document.getElementById('hack-blob');

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };
  }, []);
  return (
    <main id="hack-text">
      <div id="hack-blob" />
      <div id="hack-blur" />
      <h1 data-value="HACKING SURU">HACKING SURU</h1>
    </main>
  );
};

export { HackerText };
