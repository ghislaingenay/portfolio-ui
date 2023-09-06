import { useEffect } from 'react';
import JPLogo from '@jp-mock/assets/logo.jpg';
import bookIcon from '@jp-mock/assets/book.png';
import headsetIcon from '@jp-mock/assets/headset.png';
import loopIcon from '@jp-mock/assets/loop.png';

export const JPMockUp = () => {
  useEffect(() => {
    const liElement = document.querySelector('li#jp-show-dropdown');
    const dropdown = document.querySelector('div.jp-dropdown');
    if (liElement) {
      liElement.addEventListener('mouseover', () => {
        return dropdown?.classList.remove('hidden');
      });
      liElement.addEventListener('mouseout', () => {
        return dropdown?.classList.add('hidden');
      });
    }
  }, []);

  return (
    <main className="container jp-img-container font-montserrat">
      <nav className="jp-nav">
        <img src={JPLogo} alt="Blinguage Logo" />
        <ul className="jp-right-nav">
          <div className="jp-dropdown hidden"></div>
          <li id="jp-show-dropdown">
            Courses <span className="arrow arrow-down" />
          </li>
          <li>Why Us</li>
          <li>Support</li>
          <li>Get Started</li>
        </ul>
      </nav>
      <div className="jp-hero-banner small-container" id="jp-hero">
        <div>
          <h1 className="jp-hero-title">Learn</h1>
          <h1 className="jp-hero-title">Japanese</h1>
        </div>
        <p className="jp-hero-description">
          Visiting the temples in Kyoto, getting a new job, or making a personal
          connection{' '}
          <span className="block">
            - no matter why you want to learn, we have the right course for you
          </span>
        </p>
        <button className="jp-hero-button">Get started</button>
      </div>
      <section id="jp-why-us" className="jp-why-blingual small-container">
        <ul>
          <li>
            <img src={bookIcon} alt="book icon" />
            <p>
              <span className="bold">Detailed lessons</span> packed with amazing
              content
            </p>
          </li>
          <li>
            <img src={headsetIcon} alt="headset icon" />
            <p>
              <span className="bold">Engaging audio</span> with repeat automatic
            </p>
          </li>
          <li>
            <img src={loopIcon} alt="loop icon" />
            <p>
              <span className="bold">AI generative</span> with the best results
              just for your improvement{' '}
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};
