import Phaser from 'phaser';

import { CST } from '../constants';

const Random = Phaser.Math.Between;
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

class UIDome extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.DOME });
  }

  preload() {}

  create() {
    console.log('3. loading  UIDome');
    // var expand = true;
    // var buttons = scene.rexUI.add.buttons({
    //     x: 400, y: 300,
    //     width: 300,
    //     orientation: 'x',
    //     buttons: [
    //         createButton(this, 'A'),
    //         createButton(this, 'B'),
    //         createButton(this, 'c'),
    //     ],
    //     expand: expand
    // }).layout().drawBounds(this.add.graphics(), 0xff0000);

    // buttons.on('button.click', function (button, index, pointer, event) {
    //         console.log(`Click button-${button.text}`);
    //     });
  }

  update() {}
}

var createButton = function(scene, text, name) {
  if (name === undefined) {
    name = text;
  }
  var button = scene.rexUI.add.label({
    width: 100,
    height: 40,
    text: scene.add.text(0, 0, text, {
      fontSize: 18
    }),
    icon: scene.add.circle(0, 0, 10).setStrokeStyle(1, COLOR_DARK),
    space: {
      left: 10,
      right: 10,
      icon: 10
    },

    name: name
  });

  return button;
};

export default UIDome;
