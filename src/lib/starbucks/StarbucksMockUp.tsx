/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Facebook from '@starbucks/assets/facebook.png';
import Instagram from '@starbucks/assets/instagram.png';
import X from '@starbucks/assets/x.png';
import StarbucksDrinkOne from '@starbucks/assets/img1.png';
import StarbucksDrinkTwo from '@starbucks/assets/img2.png';
import StarbucksDrinkThree from '@starbucks/assets/img3.png';
import StarbucksLogo from '@starbucks/assets/logo.png';
import StarbucksDrinkOneSmall from '@starbucks/assets/thumb1.png';
import StarbucksDrinkTwoSmall from '@starbucks/assets/thumb2.png';
import StarbucksDrinkThreeSmall from '@starbucks/assets/thumb3.png';

interface StarbucksImgDict {
  imgUrl: string;
  color: string;
}

export default function StarbucksMockUp() {
  const imgDictionary: StarbucksImgDict[] = [
    { imgUrl: StarbucksDrinkOne, color: '#00704a' },
    { imgUrl: StarbucksDrinkTwo, color: '#ffc0cb ' },
    { imgUrl: StarbucksDrinkThree, color: '#fc0fc0' },
  ];

  // Fix animation display error for learn more button
  useEffect(() => {
    const aElement = document.querySelector(
      'a.learn-more'
    ) as HTMLAnchorElement;
    aElement.style.opacity = '0';
    const timeout = setTimeout(() => {
      aElement.style.opacity = '1';
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  function changeCircleColor(color: string) {
    const circle = document.querySelector(
      'div.starbucks-circle'
    ) as HTMLDivElement;
    circle.style.backgroundColor = color;
  }

  function switchImageDrink(link: string) {
    const img = document.querySelector(
      'section.starbucks-hero div:last-child img'
    ) as HTMLImageElement;
    img.src = link;
  }

  const switchLearnMoreColor = (color: string) => {
    // const getSpanLearnMore = () =>
    //   document.querySelector('span.learn-more') as HTMLSpanElement;
    const getSvgElement = () =>
      document.querySelector('a.learn-more svg') as SVGSVGElement;
    // getSpanLearnMore().style.setProperty('--starbucks-span', color)
    getSvgElement().style.backgroundColor = color;
  };

  const removeListeners = (liElements: NodeListOf<HTMLLIElement>) => {
    return liElements.forEach((li, index) => {
      li.removeEventListener('click', (e) => {
        const { imgUrl, color } = imgDictionary[index];
        switchImageDrink(imgUrl);
        changeCircleColor(color);
        switchLearnMoreColor(color);
      });
    });
  };

  useEffect(() => {
    const ulThumbs = document.querySelector(
      'ul.starbucks-thumbs'
    ) as HTMLUListElement;
    const liThumbs = ulThumbs.querySelectorAll(
      'li'
    ) as NodeListOf<HTMLLIElement>;
    liThumbs.forEach((li, index) => {
      li.addEventListener('click', (e) => {
        const { imgUrl, color } = imgDictionary[index];
        switchImageDrink(imgUrl);
        changeCircleColor(color);
        switchLearnMoreColor(color);
      });
    });
    return () => removeListeners(liThumbs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="starbucks" className="font-poppins">
      <div className="starbucks-circle" />
      <nav className="starbucks-nav">
        <a href="#" className="starbucks-logo">
          <img
            className="starbucks-logo"
            src={StarbucksLogo}
            alt="Starbucks Logo"
          />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">What's New</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main id="starbucks-banner">
        <section className="starbucks-hero">
          <div>
            <h2 className="starbucks-hero-title">
              It's not just Coffee.
              <br />
              It's <span className="bold">Starbucks</span>
            </h2>
            <p className="starbucks-hero-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              tenetur est voluptas assumenda hic, exercitationem iusto, illo
              eius ad is delectus neque suscipit sapiente
            </p>
            <a href="#" className="learn-more">
              <svg xmlns="http://www.w3.org/2000/svg">
                <path id="learn-more-path" />
              </svg>
              <span className="learn-more">LEARN MORE</span>
            </a>
          </div>
          <div>
            <img src={StarbucksDrinkOne} alt="Starbucks Drink" />
          </div>
        </section>
        <ul className="starbucks-thumbs">
          <li>
            <img src={StarbucksDrinkOneSmall} alt="Starbucks drink 1" />
          </li>
          <li>
            <img src={StarbucksDrinkTwoSmall} alt="Starbucks drink 2" />
          </li>
          <li>
            <img src={StarbucksDrinkThreeSmall} alt="Starbucks drink 3" />
          </li>
        </ul>
      </main>
      <footer className="starbucks-social">
        <ul>
          <li>
            <a href="#">
              <img src={Facebook} alt="Facebook Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={X} alt="X icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Instagram} alt="Instagram icon" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
