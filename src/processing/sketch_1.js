module.exports = {
    one: function (p) { 
        p.posx, p.posy;
        p.count = 15;
        p.bordr = 3;
        p.isLoop = true;
        p.mouseReleased = function () {
            p.isLoop = !p.isLoop;
        }
        p.setup = function () {
            p.createCanvas(400, 400);
            p.gen();
            p.frameRate(30);
        }
        p.gen = function () {
            p.posx = Math.floor(p.random(p.bordr, p.count - p.bordr));
            p.posy = Math.floor(p.random(p.bordr, p.count - p.bordr));
            // console.log(posx, posy);
        }
        p.draw = function () {
            if (p.isLoop) {
                p.t++;
            }
            p.colorMode(p.HSB);
            p.background(198, 13, 94);
            //stroke(0x1496f6 );
            //    stroke(255);
            p.noStroke();
            //   stroke(color('#fed19c'));
            //  rectMode(CORNER);


            // for (var i = height; i 　>= 0; i -= 5) {
            p.rectMode(p.CENTER);
            for (var i = p.height; i >= 0; i -= 5) {
                p.fill(198, 1 + 27 * i / p.height, 97 + 86 * i / p.height * 0.2);
                //198, 28%, 86%
                p.rect( p.width / 2, i, p.width, 5);
            }
            var baseR = 300;
            var r = p.noise(p.frameCount * 0.2) * baseR;
            var l = p.width / p.count;
            p.translate(l / 2, l / 2);
            var d = p.frameCount * 0.02;
            for (var i = p.bordr; i < p.count - p.bordr; i++) {
                //        noStroke();
                for (var j = p.bordr; j < p.count - p.bordr; j++) {
                    p.push();
                    p.translate((i) * l, j * l);

                    p.rotate(d * 3 + i * 0.4);
                    //            if (i == posx &  j == posy) 
                    if (p.noise(i, j) < 0.2) {
                        p.fill(0, 86, 100, 0.7);
                        //              console.log(posx,posy);
                    } else {
                        p.fill(198, 100, 100 - j * 2.5 + i, 0.7);
                    }
                    var noi = p.pow(p.noise(i + d, j + d), 2) * 3;
                    p.rect(0, 0, l * noi, l * noi);
                    p.stroke(255, 0.5);
                    p.strokeWeight(1);
                    noi *= 2;
                    p.line(0 - l * noi / 2, 0 - l * noi / 2, l * noi / 2, l * noi / 2);
                    //            fill(100, 241, 214  );
                    p.pop();
                }

            } 

            if (p.frameCount % 20 == 0) p.gen(); 
        }
    },
    onebg: "aliceblue"
}
