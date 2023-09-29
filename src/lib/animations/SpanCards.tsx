import { MouseEvent, useEffect } from 'react';

function SpanCards() {
  const handleMouseOver = (
    e: MouseEvent<HTMLDivElement>,
    cardElements: HTMLDivElement[]
  ) => {
    for (const card of cardElements) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - (rect?.left || 0);
      const y = e.clientY - (rect?.top || 0);

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  useEffect(() => {
    const cardElements = document.querySelectorAll(
      '#span-cards .card'
    ) as unknown as HTMLDivElement[];
    const cardsElement = document.querySelector(
      '#span-cards .cards'
    ) as unknown as HTMLDivElement;

    cardsElement.addEventListener('mousemove', (event) =>
      handleMouseOver(
        event as unknown as MouseEvent<HTMLDivElement>,
        cardElements
      )
    );
  }, []);
  return (
    <main id="span-cards">
      <div className="cards">
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
      </div>
    </main>
  );
}

export { SpanCards };
