import Phaser from 'phaser';
import { CST } from '../constants';
import MainGame from './MainGame';
import UIDome from './UIDome';

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.MENU });
  }

  /**
   * create
   */
  public create() {
    console.log('2.  Loading Main Menu ');
    // this.scene.add(CST.SCENES.GAME, MainGame, false);
    // this.scene.start(CST.SCENES.GAME);

    // load demo
    this.scene.add(CST.SCENES.DOME, UIDome, false);
    this.scene.start(CST.SCENES.DOME);
  }
}

export default MainMenu;
