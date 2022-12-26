import xImage from '../../assets/icon-x.svg';
import oImage from '../../assets/icon-o.svg';
import xImageOutline from '../../assets/icon-x-outline.svg';
import oImageOutline from '../../assets/icon-o-outline.svg';

class GameBoard {
	#gameTiles = [...document.querySelectorAll('.active-game-tile')];
	#gameContainer = document.querySelector('.active-game-container')
	#fullImages = { x: xImage, o: oImage };
	#outlineImages = { x: xImageOutline, o: oImageOutline };

	addCharToTile(tile, char) {
		// const tileEl = this.#gameTiles.find(
		// 	(t) => Number(t.id.slice(-1)) === tile
		// );
		const html = `<img src="${this.#fullImages[char]}"/>`;
		tile.classList.add('selected-tile')
		tile.innerHTML = html;
	}

	hideGame() {
		this.#gameContainer.classList.add('hidden')
	}

	showGame() {
		this.#gameContainer.classList.remove('hidden')
	}

	clearAllTiles() {
		this.#gameTiles.forEach((tile) => {
			tile.innerHTML = '';
			tile.classList.remove('selected-tile')
		});
	}

	getTile(move) {
		return this.#gameTiles.find(tile => Number(tile.id.slice(-1)) === move)
	}

	clearSingleTile(tile) {
		tile.innerHTML = ''
	}

	addHandlerTileClick(handler) {
		this.#gameContainer.addEventListener('click', handler)
	}

	addHandlerTileHover(handler) {
		this.#gameContainer.addEventListener('mouseover', handler)
	}

	addHandlerTileHoverRemoval(tile, handler) {
		tile.removeEventListener('mouseleave', handler)
		tile.addEventListener('mouseleave', handler)
	}

	hoverTile(tile, char) {
		const html = `<img src="${this.#outlineImages[char]}" />`
		tile.innerHTML = html
	}

	removeTileFocus(tile) {
		tile.innerHTML = ''
	}
}

export default new GameBoard();
