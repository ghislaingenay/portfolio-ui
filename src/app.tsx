// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { useState } from 'react';
import './styles.scss';
// import { JPMockUp } from '@jp-mock/JPLanguage';
// import { Routing } from '@interface';
// import ProjectPage from '@home/ProjectPage';
// import MainNav from '@home/MainNav';
// import StarbucksMockUp from '@starbucks/StarbucksMockUp';
import { RevealCards } from '@animations';

export function App() {
  // const choseProject = (key: string) => {
  //   console.log(key);
  // };

  // const routing: Routing[] = [
  //   {
  //     key: 'home',
  //     name: 'Home',
  //     component: <ProjectPage onClick={choseProject} />,
  //   },
  //   {
  //     key: 'jp-language',
  //     name: 'JP Language',
  //     component: <JPMockUp />,
  //   },
  // ];

  // const isInitialPath = (path: string) => selectedPath === path;

  return (
    <div id="app">
      {/* <MainNav />
      <StarbucksMockUp /> */}
      <RevealCards />
    </div>
  );
}

export default App;
