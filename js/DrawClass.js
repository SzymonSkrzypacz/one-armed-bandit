class DrawClass {
  constructor() {
    this.options = ["gold", "maroon", "silver"];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }

  drawResult() {
    let colors = [];
    for (let i = 0; i < this.options.length; i++) {
        const index = Math.floor(Math.random()*this.options.length);
        const color = this.options[index];
        colors.push(color);
    }
    return colors;
  }
}


