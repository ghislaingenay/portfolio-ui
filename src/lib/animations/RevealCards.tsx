import { log } from 'console';
import { useEffect } from 'react';

export const RevealCards = () => {
  const getRevealBoxesDiv = () =>
    document.querySelector('div.reveal-container') as HTMLDivElement;
  const getBoxes = () =>
    document.querySelectorAll('div.reveal-box') as unknown as HTMLDivElement[];

  const generateRandomColor = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  };
  const scrollTrigger = () => {
    const boxes = getBoxes();
    boxes.forEach((box) => {
      const boxTop = box.offsetTop;
      const { scrollY } = window;
      console.log('scrollY', window.scrollY);
      if (boxTop < scrollY) box.classList.add('show-reveal-box');
      else box.classList.remove('show-reveal-box');
    });
  };

  useEffect(() => {
    const generateCards = () => {
      [...Array(60).fill(0)].forEach((_, i) => {
        // eslint-disable-next-line prefer-const
        let box = document.createElement('div');
        box.innerHTML = `<div><h1>${i}</h1></div>`;
        box.style.backgroundColor = generateRandomColor();
        box.classList.add('reveal-box');
        const boxDiv = getRevealBoxesDiv();
        boxDiv.appendChild(box);
      });
    };
    generateCards();
  });

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger);
    return () => window.removeEventListener('scroll', scrollTrigger);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="reveal-cards">
      <div className="reveal-scroll">
        <h1>Scroll to reveal</h1>
      </div>
      <div className="reveal-container"></div>
    </div>
  );
};
