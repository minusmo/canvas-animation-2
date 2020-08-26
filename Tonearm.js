class Tonearm {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.rotate.bind(this);
  }

  draw(ctx) {
    ctx.shadowColor = "#C6B6B1";
    ctx.shadowOffsetY = 0.3;
    ctx.shadowOffsetX = 0.3;
    ctx.shadowBlur = 1.0;
    ctx.strokeStyle = "#C4BFB1";
    ctx.fillStyle = "#C4BFB1";
    ctx.lineWidth = 15;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - 100);

    // curved tonearm
    ctx.bezierCurveTo(
      this.x - 20,
      this.y + 220,
      this.x + 50,
      this.y + 250,
      this.x - 30,
      this.y + 400
    );

    //tonearm head
    ctx.lineTo(this.x - 50, this.y + 390);
    ctx.lineTo(this.x - 120, this.y + 480);
    ctx.lineTo(this.x - 60, this.y + 470);
    ctx.lineTo(this.x - 20, this.y + 415);
    ctx.lineTo(this.x - 25, this.y + 405);

    ctx.bezierCurveTo(
      this.x + 50,
      this.y + 250,
      this.x - 15,
      this.y + 220,
      this.x + 5,
      this.y - 100
    );

    ctx.lineTo(this.x, this.y - 100);

    ctx.closePath();
    ctx.rect(this.x - 30, this.y - 130, 60, 30);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = "#f7c847";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#f7c847";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.stroke();
  }

  drawStraight(ctx) {
    ctx.shadowColor = "#696969";
    ctx.shadowOffsetY = 1;
    ctx.shadowOffsetX = 1;
    ctx.shadowBlur = 1.0;

    ctx.fillStyle = "#ABABAB";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.rect(this.x - 15, this.y, 30, 500);
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.rect(this.x - 10, this.y - 50, 20, 30);
    ctx.fill();

    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#ABABAB";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 40, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fill();

    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // ctx.strokeStyle = "#EAECF0";
    ctx.beginPath();
    ctx.moveTo(this.x + 15, this.y + 495);
    ctx.lineTo(this.x + 60, this.y + 493);
    ctx.lineTo(this.x + 15, this.y + 490);
    // ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "#ABABAB";
    ctx.moveTo(this.x - 20, this.y - 50);
    ctx.beginPath();
    ctx.rect(this.x - 30, this.y - 120, 60, 70);
    ctx.fill();
  }

  rotate(ctx) {
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.PI / 180);
    ctx.translate(this.x * -1, this.y * -1);
    console.log("1");
  }
}
