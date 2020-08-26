class TurnTable {
  constructor(x, y, width, height, depth = 0, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.color = color;
  }

  draw(ctx) {
    ctx.shadowColor = "#C6B6B1";
    ctx.shadowOffsetY = 1;
    ctx.shadowOffsetX = 1;
    ctx.shadowBlur = 1.0;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    ctx.fillStyle = "#313237";
    ctx.beginPath();
    ctx.arc(this.x + this.width - 150, this.y + 150, 100, 0, Math.PI * 2);
    ctx.fill();
  }
}
