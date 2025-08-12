// PreloadScene.js
import Phaser from 'phaser';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    // Show game logo
    this.add.image(400, 150, 'motobike').setScale(0.5);

    // Background for the loading bar
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    // Loading bar
    let progressBar = this.add.graphics();

    // Loading text
    let loadingText = this.add.text(400, 230, 'Loading...', {
      fontSize: '20px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Percentage text
    let percentText = this.add.text(400, 295, '0%', {
      fontSize: '18px',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Progress listener
    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
      percentText.setText(parseInt(value * 100) + '%');
    });

    // Load your actual game assets here
    for (let i = 0; i < 30; i++) {
      this.load.image(`dummy${i}`, 'assets/motobike.webp');
    }
  }

   create() {
     // Go to your game scene after loading
     this.scene.start('GameScene');
  }
}
