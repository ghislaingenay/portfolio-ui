import React, { MouseEvent, useEffect } from 'react';

function OptimalHeader() {
  useEffect(() => {
    const leftSide = document.getElementById('opti-left-side') as HTMLElement;
    const handleOnMove = (e: MouseEvent<HTMLElement>) => {
      const percentageWidth = (e.clientX / window.innerWidth) * 100;
      leftSide.style.width = `${percentageWidth}%`;
    };
    document.addEventListener('mousemove', (e) =>
      handleOnMove(e as unknown as MouseEvent<HTMLElement>)
    );
    document.addEventListener('touchmove', (e) =>
      handleOnMove(e as unknown as MouseEvent<HTMLElement>)
    );
  }, []);
  return (
    <main id="opti-main">
      <div className="opti-side" id="opti-left-side">
        <h2 className="title">
          Today is going to be <span className="fancy">awesome</span>
        </h2>
      </div>
      <div className="opti-side" id="opti-right-side">
        <h2 className="title">
          Today is going to be <span className="fancy">wonderful</span>
        </h2>
      </div>
    </main>
  );
}

export { OptimalHeader };
