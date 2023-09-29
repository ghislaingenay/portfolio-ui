import { MouseEvent, useEffect } from 'react';

function SpanCards() {
  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target && target.getBoundingClientRect();
    // calculate the position of our mouse realtive to each card (x and y positions)

    const x = e.clientX - (rect?.left || 0);
    const y = e.clientY - (rect?.top || 0);

    // set custom CSS properties to the card root to set a background position
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  useEffect(() => {
    const cardElements = document.querySelectorAll(
      '#span-cards .card'
    ) as unknown as HTMLDivElement[];
    for (const card of cardElements) {
      card.addEventListener('mousemove', (event) =>
        handleMouseOver(event as unknown as MouseEvent<HTMLDivElement>)
      );
    }
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
