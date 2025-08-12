import Phaser from "phaser";
import BootScene from "./skyline/game/scenes/BootScene.js";
import PreloadScene from "./skyline/game/scenes/PreloadScene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#121212",
  scene: [BootScene, PreloadScene],
};

const game = new Phaser.Game(config);
