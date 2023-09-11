import { useEffect } from 'react';
import { useAuto } from '../useAuto';

export const Confetti = () => {
  const [data, updateParams, helpers] = useAuto();
  useEffect(() => {
    const confettiContainer = document.querySelector(
      'span.confetti'
    ) as HTMLSpanElement;
    const confettiButton = document.querySelector(
      'main#confetti button'
    ) as HTMLButtonElement;

    const clickConfettiButton = () => {
      console.log('click');
      confettiContainer.classList.add('confetti-explosion');
      confettiContainer.addEventListener(
        'animationend',
        () => {
          confettiContainer.classList.remove('confetti-explosion');
          // A boolean value indicating that the listener should be invoked
          //at most once after being added.
          //If true, the listener would be automatically removed when invoked
        },
        { once: true }
      );
    };

    confettiButton.addEventListener('click', clickConfettiButton);

    return () => {
      confettiButton.removeEventListener('click', () => clickConfettiButton);
    };
  });
  return (
    <div className="relative">
      <span className="confetti">
        <span />
      </span>
      <main className="container grid" id="confetti">
        <button>
          <h1 className="font-montserrat">PARTY</h1>
        </button>
      </main>
    </div>
  );
};
