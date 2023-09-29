import { useEffect } from 'react';

function GridEffect() {
  const ARBITRARY_CUBE_SIZE = 50;

  useEffect(() => {
    const wrapper = document.getElementById('grid-tiles') as HTMLElement;

    const getColumns = () =>
      Math.floor(document.body.clientWidth / ARBITRARY_CUBE_SIZE);
    const getRows = () =>
      Math.floor(document.body.clientHeight / ARBITRARY_CUBE_SIZE);

    const createTile = (index: number) => {
      const tile = document.createElement('div');
      tile.classList.add('grid-tile');
      return tile;
    };

    const createTiles = (quantity: number) => {
      Array.from(Array(quantity)).map((tile, index) => {
        return wrapper.appendChild(createTile(index));
      });
    };

    const setTiles = () => createTiles(getColumns() * getRows());
    setTiles();

    const createGrid = () => {
      wrapper.innerHTML = '';
      wrapper.style.setProperty('--grid-columns', getColumns().toString());
      wrapper.style.setProperty('--grid-rows', getRows().toString());
      setTiles();
    };

    window.onresize = () => createGrid();
  }, []);
  return <div id="grid-tiles" />;
}

export { GridEffect };
