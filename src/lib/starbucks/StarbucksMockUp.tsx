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

export default function StarbucksMockUp() {
  // const getSVGElement = () =>
  //   document.querySelector('a.learn-more svg') as HTMLElement;
  // const getLearnMoreText = () =>
  //   document.querySelector('span.learn-more') as HTMLSpanElement;

  return (
    <div id="starbucks" className="font-poppins">
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
        <section></section>
      </main>
    </div>
  );
}
