// import { useEffect } from 'react';

import { DivProps, Routing } from '@interface';
import { useEffect } from 'react';

type MainNavProps = {
  color?: string;
  routing?: Routing[];
};

export default function MainNav({ color = 'rgba(128,0,128)' }: MainNavProps) {
  // CONSTANTS - SVG
  const ratio = 3 / 4;
  const svgSize = '50px';
  const pixelSize = Number(svgSize.replace('px', ''));
  const strokeLength = pixelSize * ratio;
  const alignMinMax = (strokeLength - pixelSize) / 2;
  const svgViewBox = `${alignMinMax} ${alignMinMax} ${pixelSize} ${pixelSize}`;
  const svgPath = `M 0,0 L ${strokeLength},${strokeLength} M ${strokeLength},0 L 0,${strokeLength}`;

  // FUNCTIONS
  const setSvgColorAndSize = (color: string) => {
    document
      .getElementById('hover-nav')
      ?.style.setProperty('--navColor', color);
    const svgElement = document.getElementById('nav-close-svg');
    if (svgElement) {
      svgElement.style.setProperty('--svg-app-nav', svgSize);
      svgElement.style.setProperty('--svg-app-nav', svgSize);
    }
  };

  // EVENT LISTENERS

  useEffect(() => {
    setSvgColorAndSize(color);
  }, [color]);

  const setAppNavDisplay = (newDisplay: 'flex' | 'none') => {
    const appNav = document.querySelector('nav.app-nav') as HTMLElement;
    appNav.style.display = newDisplay;
  };

  // Open nav when hover-nav is clicked
  useEffect(() => {
    const divHoverNav = document.getElementById('hover-nav') as HTMLDivElement;
    const addNavElement = () => setAppNavDisplay('flex');
    divHoverNav.addEventListener('click', addNavElement);
    return () => divHoverNav.removeEventListener('click', addNavElement);
  }, []);

  // Close nav when svg is clicked
  useEffect(() => {
    const svgElement = document.getElementById('nav-close-svg') as HTMLElement;
    const removeNavElement = () => setAppNavDisplay('none');
    svgElement.addEventListener('click', removeNavElement);
    return () => svgElement.removeEventListener('click', removeNavElement);
  }, []);

  return (
    <>
      <div id="hover-nav" />
      <nav className="app-nav">
        <svg
          id="nav-close-svg"
          viewBox={svgViewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <line x1={0} y1={0} x2={200} y2={200} />
          <line x1={0} y1={200} x2={200} y2={0} /> */}
          <path id="nvjsnbkfnbjkefb" d={svgPath} />
        </svg>
        <div />
      </nav>
    </>
  );
}
