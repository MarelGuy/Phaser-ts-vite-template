import Phaser from "phaser";

const gameScene = new Phaser.Scene("Game");

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: gameScene,
};

new Phaser.Game(config);
