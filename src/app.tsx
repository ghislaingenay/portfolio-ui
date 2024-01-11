import {
  Confetti,
  GridEffect,
  HackerText,
  OptimalHeader,
  RevealCards,
  SpanCards,
} from '@animations';
import './styles.scss';
import StarbucksMockUp from '@starbucks/StarbucksMockUp';
import { JPMockUp } from '@jp-mock/JPLanguage';

export function App() {
  const componentListing = {
    'hack-text': <HackerText />,
    starbuck: <StarbucksMockUp />,
    jp: <JPMockUp />,
    header: <OptimalHeader />,
    spaning: <SpanCards />,
    reveal: <RevealCards />,
    grid: <GridEffect />,
    confetti: <Confetti />,
  };

  const component: keyof typeof componentListing = 'confetti';
  return <div id="app">{componentListing[component] ?? <p>Not found</p>}</div>;
}

export default App;
