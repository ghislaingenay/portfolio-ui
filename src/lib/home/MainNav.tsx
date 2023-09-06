// import { useEffect } from 'react';

export default function MainNav() {
  // useEffect(() => {
  //   const nav = document.querySelector('nav.app-nav');
  //   const firstDiv = document.querySelector('nav.app-nav div:first-child');
  //   const secondDiv = document.querySelector('nav.app-nav div:nth-child(2)');
  //   const thirdDiv = document.querySelector('nav.app-nav div:last-child');
  //   nav?.addEventListener('mouseout', () => {
  //     console.log(
  //       'sys',
  //       document.querySelector('nav.app-nav div:first-child:hover')
  //     );
  //     if (document.querySelector('nav.app-nav div:first-child:hover')) {
  //       return nav?.classList.add('absolute');
  //     }
  //   });
  //   const navIsInAnimation = !showNavDiv;
  //   if (firstDiv) {
  //     firstDiv.addEventListener('hover', () => {
  //       return nav?.classList.add('absolute');
  //     });
  //   }
  // }, []);
  return (
    <nav className="app-nav">
      <div />
      <div className="app-nav-circle" />
      <div className="app-nav-circle" />
      <div className="app-nav-circle" />
      <div className="app-circle" />
    </nav>
  );
}
