// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import './styles.scss';
import { JPMockUp } from '@jp-mock/JPLanguage';

export function App() {
  // const routing = ['home', 'animation'];
  // const choseProject = (key: string) => {
  //   console.log(key);
  // };

  // const routing = [
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

  // const [selectedPath, setSelectedPath] = useState('/');

  // const isInitialPath = (path: string) => selectedPath === path;

  return <JPMockUp />;
}

export default App;
