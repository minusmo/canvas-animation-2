class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    this.LP = new LP(
      this.stageWidth / 2,
      this.stageHeight / 2,
      100,
      300,
      "#BC2505",
      "#0E0F12"
    );

    // this.LP.draw(this.ctx);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.LP.draw(this.ctx);
    this.LP.rotate(this.ctx);
  }
}

window.onload = () => {
  new App();
};
