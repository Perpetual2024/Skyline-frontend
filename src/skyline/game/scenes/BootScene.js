// BootScene.js
import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Only load the assets needed for the preload scene
    this.load.image('motobike', 'assets/motobike.webp');
  }

  create() {
    // Go straight to PreloadScene after essentials are loaded
    this.scene.start('PreloadScene');
  }
}
