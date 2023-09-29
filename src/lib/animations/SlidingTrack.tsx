import SlidingImage1 from '@animations/assets/sliding-track/image-1.jpg';
import SlidingImage2 from '@animations/assets/sliding-track/image-2.jpg';
import SlidingImage3 from '@animations/assets/sliding-track/image-3.jpg';
import SlidingImage4 from '@animations/assets/sliding-track/image-4.jpg';
import SlidingImage5 from '@animations/assets/sliding-track/image-5.jpg';
import SlidingImage6 from '@animations/assets/sliding-track/image-6.jpg';
import SlidingImage7 from '@animations/assets/sliding-track/image-7.jpg';
import SlidingImage8 from '@animations/assets/sliding-track/image-8.jpg';
import { useEffect } from 'react';

function SlidingTrack() {
  useEffect(() => {
    const maxDelta = window.innerWidth / 2; // all the animation of the 8 pictures are done at 50% of the window size
    const track = document.getElementById('image-track') as HTMLElement;
    window.addEventListener('mousedown', (e) => {
      track.dataset.mouseDownAt = e.clientX.toString();
    });

    window.addEventListener('mousemove', (e) => {
      if (track.dataset.mouseDownAt === '0') return;
      if (track.dataset.mouseDownAt) {
        const distance = Number(track.dataset.mouseDownAt) - e.clientX;
        const percentage = -(distance / maxDelta) * 100;
        const nextPercentageNonConstrained =
          Number(track.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(
          Math.min(nextPercentageNonConstrained, 0),
          -100
        );
        track.dataset.percentage = nextPercentage.toString();
        track.animate(
          {
            transform: `translate(${nextPercentageNonConstrained}%, -50%)`,
          },
          { duration: 1200, fill: 'forwards' }
        );

        const images = document.getElementsByClassName(
          'sliding-img'
        ) as unknown as HTMLImageElement[];
        for (const image of images) {
          image.animate(
            {
              objectPosition: `${nextPercentage + 100}% center`,
            },
            { duration: 1200, fill: 'forwards' }
          );
        }
      }
    });

    window.addEventListener('mouseup', (e) => {
      track.dataset.mouseDownAt = '0';
      track.dataset.prevPercentage = track.dataset.percentage;
    });
  }, []);
  return (
    <main id="sliding-track">
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img
          src={SlidingImage1}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage2}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage3}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage4}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage5}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage6}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage7}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
        <img
          src={SlidingImage8}
          alt="Unsplash images"
          className="sliding-img"
          draggable={false}
        />
      </div>
    </main>
  );
}

export { SlidingTrack };
