class Tonearm {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
  }

  draw(ctx) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // ctx.lineWidth = 1;
    ctx.lineTo(this.x, this.y + this.length); //1
    ctx.lineTo(this.x + 10, this.y + this.length + 20); //2
    ctx.lineTo(this.x + 20, this.y + this.length); //3
    ctx.lineTo(this.x + 20, this.y); //4
    ctx.lineTo(this.x, this.y);
    // ctx.closePath();
    // ctx.rect(this.x, this.y, 100, 100);
    ctx.fill();
  }
}
