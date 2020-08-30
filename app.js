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

    //playButton

    this.playButton = document.createElement("button");
    this.playButton.id = "playButton";
    this.playButton.style.zIndex = 4;
    this.playButton.style.position = "fixed";
    this.playButton.textContent = "Play";

    document.body.appendChild(this.playButton);
    document.body.appendChild(this.canvas1);
    document.body.appendChild(this.canvas2);
    document.body.appendChild(this.canvas3);

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    const TurnTableX = this.stageWidth / 2 - 350;
    const TurnTableY = this.stageHeight / 2 - 350;
    const TonearmX = this.stageWidth / 2 + 400;
    const TonearmY = this.stageHeight / 2 - 200;
    const TonearmLength = 500;
    const LPX = this.stageWidth / 2;
    const LPY = this.stageHeight / 2;
    const armLength = Math.sqrt(60 ** 2 + (TonearmLength - 7) ** 2);

    this.deg = 0;

    this.TurnTable = new TurnTable(
      TurnTableX,
      TurnTableY,
      900,
      700,
      0,
      "#E5C597"
    );

    this.Tonearm = new Tonearm(TonearmX, TonearmY, TonearmLength);

    this.LP = new LP(LPX, LPY, 100, 300, "#BC2505", "#0E0F12");

    window.localStorage.setItem("isRotating", "false");
    window.localStorage.setItem("cw", "true");

    this.isOn.bind(this);

    this.playButton.addEventListener("click", (event) => {
      const isRotating = window.localStorage.getItem("isRotating");

      if (isRotating === "false") {
        const isCw = Boolean(window.localStorage.getItem("cw"));
        const cw = isCw ? 1 : -1;

        const animationID = window.requestAnimationFrame(
          this.animateTonearm.bind(this, null, cw)
        );
        window.localStorage.setItem("TonearmAnimationID", String(animationID));
        window.localStorage.setItem("isRotating", "true");
      } else {
        window.cancelAnimationFrame(
          window.localStorage.getItem("TonearmAnimationID")
        );
        window.localStorage.setItem("isRotating", "false");

        const cw = Boolean(window.localStorage.getItem("cw"));

        if (cw === true) {
          window.localStorage.setItem("cw", "");
        } else {
          window.localStorage.setItem("cw", "true");
        }

        const isOn = this.isOn(
          LPX,
          LPY,
          TonearmX + 60,
          TonearmY + TonearmLength - 7,
          this.deg,
          armLength,
          300
        );

        if (isOn === true) {
          const id = window.requestAnimationFrame(this.animateLP.bind(this));
          window.localStorage.setItem("LPAnimationID", id);
        } else if (window.localStorage.getItem("LPAnimationID")) {
          const id = window.localStorage.getItem("LPAnimationID");
          window.cancelAnimationFrame(id);
        }
      }
      event.preventDefault();
    });

    this.justDraw();

    // window.requestAnimationFrame(this.animate.bind(this));
  }

  isOn(centerX, centerY, pinX, pinY, deg, armLength, LPradius) {
    const X = pinX - armLength * Math.sin((deg * Math.PI) / 180);
    const Y = pinY - armLength * Math.cos((deg * Math.PI) / 180);

    const distX = X - centerX;
    const distY = Y - centerY;

    const distance = Math.sqrt(distX ** 2 + distY ** 2);

    if (distance < LPradius) {
      return true;
    } else {
      return false;
    }
  }

  justDraw() {
    this.TurnTable.draw(this.ctx2);

    this.LP.draw(this.ctx1);

    this.Tonearm.drawStraight(this.ctx3);
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

  animateTonearm(t, cw = 1) {
    const id = window.requestAnimationFrame(
      this.animateTonearm.bind(this, null, cw)
    );
    window.localStorage.setItem("TonearmAnimationID", String(id));

    // this.TurnTable.draw(this.ctx2);

    // this.Tonearm.drawStraight(this.ctx3);

    // this.ctx1.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ctx3.clearRect(0, 0, this.stageWidth, this.stageHeight);

    // this.LP.draw(this.ctx1);
    // this.LP.rotate(this.ctx1);
    this.Tonearm.drawStraight(this.ctx3);
    this.Tonearm.rotate(this.ctx3, cw);

    if (cw === 1) {
      this.deg += 1;
    } else {
      this.deg -= 1;
    }
  }

  animateLP(t) {
    const id = window.requestAnimationFrame(this.animateLP.bind(this));
    window.localStorage.setItem("LPAnimationID", id);

    this.ctx1.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.LP.draw(this.ctx1);
    this.LP.rotate(this.ctx1);
  }
}

window.onload = () => {
  new App();
};
