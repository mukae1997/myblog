const p5 = require("./p5.min.js")

var mg_style = function (p) {

  p.Block = function (_x, _y) {
    this.pos = new p5.Vector(_x, _y);
  }




  p.Block.prototype.show = function () {
    var seedval = p.noise(this.pos.x * 0.637, this.pos.y * 13.9);
    var expnoi = p.expandNoise(seedval);
    var ptr = p.floor(seedval * p.scheme.length);
    var colorChoice = p.scheme[p.floor(ptr + p.frameCount * 0.027 + 15.7 * this.pos.mag()) % p.scheme.length];
    var cc2 = p.scheme[p.ceil(ptr + 4 + p.frameCount * 0.024 + this.pos.x) % p.scheme.length];
    var cc3 = p.scheme[p.floor(ptr + 10 + p.frameCount * 0.042 + this.pos.y) % p.scheme.length];

    this.switchMode(seedval + p.sin(p.frameCount * 0.017 + 10 * this.pos.mag()), colorChoice, 0);
    var rectRotate = seedval * p.PI * 3.2 * p.cos(p.frameCount * 0.013);
    this.selfrect(this.pos.x, this.pos.y, p.BLOCK_SIZE * seedval,
      p.BLOCK_SIZE * (1 + (6 * p.cos(p.frameCount * 0.013)) - seedval),  // change rect Size here.
      rectRotate);


    seedval = p.noise(this.pos.x * 0.042, this.pos.y * 0.067);
    expnoi = p.expandNoise(seedval);
    var r = (seedval) * p.BLOCK_SIZE * p.sin((p.frameCount + 10 * seedval) * 0.015);
    this.switchMode(seedval + p.cos(p.frameCount * 0.013 + 10 * this.pos.mag()), cc2, 1);
    p.ellipse(this.pos.x + expnoi * p.BLOCK_SIZE / 2 * 0.8 * p.sin(seedval) + r * p.sin(r) * 0.5,
      this.pos.y * 1.00 + expnoi * p.BLOCK_SIZE / 2 * -1.0 * p.cos(seedval) + r * p.cos(r) * 0.4, r, r);

    p.fill(cc3);
    seedval = p.noise(this.pos.x * 0.068, this.pos.y * 0.102);
    expnoi = p.expandNoise(seedval);
    this.switchMode(seedval + p.sin(p.frameCount * 0.013 + 10 * this.pos.mag()), cc3, 1);
    var triCen = this.pos.mult(1);
    var tril = (seedval) * p.BLOCK_SIZE * 0.7 * p.cos((p.frameCount + 92 * seedval) * 0.036);
    var triRotate = seedval * p.PI * 1.0;
    this.selftri(this.pos.x + expnoi * p.BLOCK_SIZE / 2 * 0.4 * p.sin(seedval) + tril,
      this.pos.y + expnoi * p.BLOCK_SIZE / 2 * 0.4 * p.cos(this.pos.mag()) + tril * 1.1 * p.sin(tril),
      tril, triRotate);
  }

  p.Block.prototype.selfrect = function (x, y, a, b, ro) {

    p.push();
    p.translate(x, y);
    p.rotate(ro);
    p.rect(0, 0, a, b);
    p.pop();
  }

  p.Block.prototype.selftri = function (x, y, l, triRotate) {

    p.push();
    p.translate(x, y);
    p.rotate(triRotate);
    p.triangle(-l / 2, l / 2 * p.sin(p.PI / 3), l / 2, l / 2 * p.sin(p.PI / 3),
      0, -l / 2 * p.sin(p.PI / 3));
    p.pop();
  }



  p.Block.prototype.switchMode = function (seedval, c, sw) {
    if (seedval > 0.5) {
      p.fill(c);
      p.stroke(c);
      p.strokeWeight(2);
    } else {
      p.strokeWeight(sw);
      p.stroke(c);
      p.noFill();
    }
  }


  ////////////////////////////////////////////


  p.isLoop = true;
  p.SCREEN_BOTTOM = 0;
  p.SCREEN_TOP = 0;
  //color[] scheme = {#271155, #4f4bad, #ffffff, #a197ac, #676ac5, #9e95d0, #d7d2db};
  p.scheme = ['#fa656d', '#e87cf8', '#47eca8', '#44cefd', '#e9e8fa', '#869de5'];
  p.BLOCK_SIZE, p.SQUARE_SIZE;
  p.cnt = 5;
  //  p.blocks = new p.Block[p.cnt][p.cnt]; // Block[][] 
  p.blocks = [];


  p.setup = function () {
    p.createCanvas(400, 400);

    p.SCREEN_BOTTOM = p.height - p.height / 16 * 3.5;
    p.SCREEN_TOP = p.height / 16 * 3.5;
    p.rectMode(p.CENTER);
    p.strokeJoin(p.ROUND);
    //String[] fontList = PFont.list();
    //prvarArray(fontList);  
    var inter = p.height / p.cnt;
    for (var i = 0; i < p.cnt; i++) {
      p.blocks.push([]);
      for (var j = 0; j < p.cnt; j++) {
        p.blocks[i].push(null);
      }
    }
    for (var i = 0; i < p.cnt; i++) {
      for (var j = 0; j < p.cnt; j++) {
        p.blocks[i][j] = new p.Block(inter / 2 + j * inter, inter / 2 + i * inter);
      }
    }
    p.frameRate(30);
  }

  p.draw = function () {
    p.background(p.color('#27293f'));
    p.SQUARE_SIZE = p.width * 0.1;
    p.BLOCK_SIZE = 0.88 * p.SQUARE_SIZE;

    for (var i = 0; i < p.cnt; i++) {
      for (var j = 0; j < p.cnt; j++) {
        p.blocks[i][j].show();
      }
    }

  }
  p.expandNoise = function (c) {
    // change range [0,1] to [-1,1]
    return (p.noise(c) - 0.5) * 2;
  }
}

module.exports = {
  mg: mg_style,
  mgbg:'#27293f'
}