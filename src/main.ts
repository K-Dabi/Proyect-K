import Phaser from 'phaser';
import './styles.css';

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

/** Primera versión visual del luchador. Se sustituirá por sprites animados. */
function drawDabi(scene: Phaser.Scene, x: number, y: number) {
  const art = scene.add.graphics();
  const skin = 0x9a5b3e;
  const skinShadow = 0x70402d;
  const black = 0x15151a;
  const white = 0xf5f1e8;

  // Sombra para mantener legible la silueta sobre cualquier escenario.
  art.fillStyle(0x000000, 0.28);
  art.fillEllipse(x, y + 265, 245, 34);

  // Zapatillas negras y piernas cortas.
  art.fillStyle(black);
  art.fillRoundedRect(x - 106, y + 204, 88, 34, 13);
  art.fillRoundedRect(x + 18, y + 204, 88, 34, 13);
  art.fillStyle(skin);
  art.fillRoundedRect(x - 83, y + 147, 48, 70, 15);
  art.fillRoundedRect(x + 35, y + 147, 48, 70, 15);

  // Rodillera blanca de la pierna izquierda de Dabi (a la derecha para quien mira).
  art.fillStyle(white);
  art.fillRoundedRect(x + 30, y + 164, 58, 35, 12);
  art.lineStyle(3, 0xd5d2c9);
  art.strokeRoundedRect(x + 30, y + 164, 58, 35, 12);

  // Short blanco y camiseta de tirantes.
  art.fillStyle(white);
  art.fillRoundedRect(x - 113, y + 93, 226, 75, 20);
  art.fillStyle(0xe2ded4);
  art.fillRect(x - 8, y + 101, 16, 65);
  art.fillStyle(white);
  art.fillRoundedRect(x - 98, y - 42, 196, 155, 44);
  art.fillStyle(skin);
  art.fillRoundedRect(x - 77, y - 63, 35, 104, 17);
  art.fillRoundedRect(x + 42, y - 63, 35, 104, 17);
  art.fillCircle(x - 60, y + 43, 23);
  art.fillCircle(x + 60, y + 43, 23);

  // Collar y colgante de guante de boxeo.
  art.lineStyle(5, 0xd1aa49);
  art.beginPath();
  art.arc(x, y - 5, 52, 0.2, Math.PI - 0.2, false);
  art.strokePath();
  art.fillStyle(0xd1aa49);
  art.fillCircle(x, y + 46, 7);
  art.fillRoundedRect(x - 11, y + 49, 22, 27, 8);
  art.fillCircle(x + 8, y + 58, 9);

  // Cabeza grande, labios y ojos oscuros.
  art.fillStyle(skin);
  art.fillCircle(x, y - 156, 129);
  art.fillStyle(skinShadow);
  art.fillRoundedRect(x - 99, y - 164, 18, 60, 9);
  art.fillRoundedRect(x + 81, y - 164, 18, 60, 9);
  art.fillStyle(0x2a1a17);
  art.fillEllipse(x - 46, y - 157, 25, 17);
  art.fillEllipse(x + 46, y - 157, 25, 17);
  art.fillStyle(0x101015);
  art.fillCircle(x - 46, y - 157, 8);
  art.fillCircle(x + 46, y - 157, 8);
  art.fillStyle(0x6d2f32);
  art.fillEllipse(x, y - 88, 65, 25);
  art.lineStyle(2, 0x452026);
  art.beginPath();
  art.moveTo(x - 29, y - 88);
  art.lineTo(x + 29, y - 88);
  art.strokePath();

  // Pelo negro: laterales degradados y parte superior más larga hacia la frente.
  art.fillStyle(black);
  art.fillRoundedRect(x - 118, y - 282, 236, 119, 45);
  art.fillRoundedRect(x - 122, y - 216, 27, 58, 12);
  art.fillRoundedRect(x + 95, y - 216, 27, 58, 12);
  art.fillTriangle(x - 82, y - 180, x - 44, y - 236, x - 13, y - 172);
  art.fillTriangle(x - 18, y - 176, x + 23, y - 240, x + 49, y - 172);
  art.fillTriangle(x + 39, y - 177, x + 79, y - 227, x + 95, y - 165);

  // Dos pendientes dorados en la oreja izquierda de Dabi (derecha para el espectador).
  art.lineStyle(6, 0xe0ba52);
  art.strokeCircle(x + 125, y - 137, 12);
  art.strokeCircle(x + 125, y - 106, 12);

  return art;
}

class BootScene extends Phaser.Scene {
  constructor() {
    super('boot');
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

    drawDabi(this, GAME_WIDTH / 2, 385);
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
