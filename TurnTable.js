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
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    ctx.fillStyle = "#5F392C";
    ctx.beginPath();
    ctx.arc(this.x + this.width - 150, this.y + 150, 100, 0, Math.PI * 2);
    ctx.fill();
  }
}
