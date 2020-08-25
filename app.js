class App {
  constructor() {
    //layer1
    this.canvas1 = document.createElement("canvas");
    this.ctx1 = this.canvas1.getContext("2d");
    this.canvas1.id = "layer1";
    this.canvas1.style.zIndex = 2;

    //layer2
    this.canvas2 = document.createElement("canvas");
    this.ctx2 = this.canvas2.getContext("2d");
    this.canvas2.id = "layer2";
    this.canvas2.style.zIndex = 1;

    //layer3
    this.canvas3 = document.createElement("canvas");
    this.ctx3 = this.canvas3.getContext("2d");
    this.canvas3.id = "layer3";
    this.canvas3.style.zIndex = 3;

    document.body.appendChild(this.canvas1);
    document.body.appendChild(this.canvas2);
    document.body.appendChild(this.canvas3);

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    this.TurnTable = new TurnTable(
      this.stageWidth / 2 - 350,
      this.stageHeight / 2 - 350,
      900,
      700,
      0,
      "#E5C597"
    );

    this.Tonearm = new Tonearm(
      this.stageWidth / 2 + 400,
      this.stageHeight / 2 - 200,
      300
    );

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

    this.canvas1.width = this.stageWidth * 2;
    this.canvas1.height = this.stageHeight * 2;

    this.canvas2.width = this.stageWidth * 2;
    this.canvas2.height = this.stageHeight * 2;

    this.canvas3.width = this.stageWidth * 2;
    this.canvas3.height = this.stageHeight * 2;

    this.ctx1.scale(2, 2);
    this.ctx2.scale(2, 2);
    this.ctx3.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.TurnTable.draw(this.ctx2);

    this.Tonearm.drawStraight(this.ctx3);

    this.ctx1.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.LP.draw(this.ctx1);
    this.LP.rotate(this.ctx1);
  }
}

window.onload = () => {
  new App();
};
