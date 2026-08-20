import Phaser from 'phaser';
import './styles.css';

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

class BootScene extends Phaser.Scene {
  constructor() {
    super('boot');
  }

  create() {
    this.cameras.main.setBackgroundColor('#12131b');
    this.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 30, 'PROYECT K', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '64px',
      color: '#f5f1e8',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    this.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2 + 45, 'Base de juego de peleas 2D', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '26px',
      color: '#aeb4c4',
    }).setOrigin(0.5);
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: '#12131b',
  scene: [BootScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  input: {
    activePointers: 3,
  },
  render: {
    antialias: false,
    pixelArt: true,
  },
});
