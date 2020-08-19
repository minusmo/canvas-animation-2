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

  draw(ctx, startDeg = 0, deg = 45, trackNumber = 10) {
    // set gradient
    const gradientBeginX = this.x - this.radiusOut;
    const gradientEndX = this.x + this.radiusOut;

    const gradient = ctx.createLinearGradient(
      gradientBeginX,
      0,
      gradientEndX,
      0
    );

    gradient.addColorStop(0.3, "#0E0F12");
    gradient.addColorStop(0.5, "#9097A5");
    gradient.addColorStop(0.8, "#0E0F12");

    // draw outer circle
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusOut, 0, Math.PI * 2);
    ctx.fill();

    // draw inner circle
    ctx.fillStyle = this.colorIn;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radiusIn, 0, Math.PI * 2);
    ctx.fill();

    // draw center circle
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fill();

    const halfRadius = (this.radiusOut + this.radiusIn) / 2;
    const radiusBetween = this.radiusOut - this.radiusIn;

    // draw track lines
    const tracks = trackNumber;
    let initialNumber = radiusBetween / trackNumber;

    while (trackNumber > 0) {
      ctx.shadowColor = "white";
      ctx.shadowOffsetY = -0.1;

      ctx.strokeStyle = "rgba(14, 15, 18, .8)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(
        this.x,
        this.y,
        this.radiusIn + initialNumber,
        startDeg,
        Math.PI * 2
      );
      ctx.stroke();

      initialNumber += 20;
      trackNumber -= 1;
    }
  }

  rotate(ctx) {
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.PI / 180);
    ctx.translate(this.x * -1, this.y * -1);
    // this.startDeg += 1;
    // this.draw(ctx, this.startDeg).bind(this);
  }
}
