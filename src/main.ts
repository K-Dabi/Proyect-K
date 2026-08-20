import Phaser from 'phaser';
import dabiReference from './assets/dabi-reference.jpg';
import './styles.css';

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

class BootScene extends Phaser.Scene {
  constructor() {
    super('boot');
  }

  preload() {
    this.load.image('dabi-reference', dabiReference);
  }

  create() {
    this.cameras.main.setBackgroundColor('#12131b');
    this.add.text(80, 60, 'PROYECT K', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '42px',
      color: '#f5f1e8',
      fontStyle: 'bold',
    });

    this.add.text(80, 116, 'DABI · PRIMER DISEÑO', {
      fontFamily: 'Arial, sans-serif',
      fontSize: '22px',
      color: '#aeb4c4',
    });

    this.add.image(GAME_WIDTH / 2, 405, 'dabi-reference')
      .setDisplaySize(360, 540);
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
