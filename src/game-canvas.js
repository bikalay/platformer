class GameCanvas {
  /**
   * constructor.
   *
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    if (GameCanvas.__instance) {
      return GameCanvas.__instance;
    }
    this.canvasEL = document.createElement("canvas");
    parent.appendChild(this.canvasEL);
    GameCanvas.__instance = this;
  }
}

/**
 * @type {GameCanvas | null}
 */
GameCanvas.__instance = null;

/**
 * GameCanvas.getInstance.
 * @returns {GameCanvas | null}
 */
GameCanvas.getInstance = function () {
  return this.__instance;
};

module.exports = {
  GameCanvas
}
