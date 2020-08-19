class LP {
  constructor(x, y, radiusIn, radiusOut, colorIn, colorOut) {
    this.x = x;
    this.y = y;
    this.radiusIn = radiusIn;
    this.radiusOut = radiusOut;
    this.colorIn = colorIn;
    this.colorOut = colorOut;
    this.startDeg = 0;
  }

  draw(ctx, startDeg = 0, deg = 45) {
    ctx.fillStyle = this.colorOut;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusOut, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = this.colorIn;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusIn, 0, Math.PI * 2);
    ctx.fill();

    const halfRadius = (this.radiusOut + this.radiusIn) / 2;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, halfRadius, startDeg, (deg * Math.PI) / 180);
    ctx.stroke();
  }

  rotate(ctx) {
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.PI / 180);
    ctx.translate(this.x * -1, this.y * -1);
    // this.startDeg += 1;
    // this.draw(ctx, this.startDeg).bind(this);
  }
}
