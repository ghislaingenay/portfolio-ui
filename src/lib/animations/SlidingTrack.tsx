import SlidingImage1 from '@animations/assets/sliding-track/image-1.jpg';
import SlidingImage2 from '@animations/assets/sliding-track/image-2.jpg';
import SlidingImage3 from '@animations/assets/sliding-track/image-3.jpg';
import SlidingImage4 from '@animations/assets/sliding-track/image-4.jpg';
import SlidingImage5 from '@animations/assets/sliding-track/image-5.jpg';
import SlidingImage6 from '@animations/assets/sliding-track/image-6.jpg';
import SlidingImage7 from '@animations/assets/sliding-track/image-7.jpg';
import SlidingImage8 from '@animations/assets/sliding-track/image-8.jpg';

function SlidingTrack() {
  return (
    <main id="sliding-track">
      <div id="image-track">
        <img
          src={SlidingImage1}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage2}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage3}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage4}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage5}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage6}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage7}
          alt="Unsplash images"
          className="sliding-img"
        />
        <img
          src={SlidingImage8}
          alt="Unsplash images"
          className="sliding-img"
        />
      </div>
    </main>
  );
}

export { SlidingTrack };
