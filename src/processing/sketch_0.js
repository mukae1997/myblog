var bg = '#e8f0ff';
var sketch = function (p) {
        p.r;
        p.w;
        p.t = 0;
        p.baseR;
        p.isLoop = true;
        p.setup = function () {
                var w = 400;
                p.createCanvas(w, w);        
                p.baseR = w * 0.6;

        }
        p.mouseReleased = function() {
            p.isLoop = !p.isLoop;
        }
        p.draw = function () {
            if (p.isLoop) {
                p.t++;
            } else { 
            }
            p.background(p.color(bg));
            //stroke(0x1496f6 );
            p.translate(p.width / 2, p.height / 2);

            p.textSize(10);
            p.fill(255);
            // p.text("2017.12.5 mukae", p.width / 2 - 100, p.height / 2 - 10);
            var count = 700;
            var noiseAmplitude = 10;
            var loop = 480;
            var state = p.t * 2.0 % loop / loop;
            var realCount = p.map(state, 0, 1, 0, count) * 0 + p.frameCount;
            var totalAngle = 10 * p.PI;
            for (var i = 0; i < realCount; i++) {
                var _noi = p.noise(i * 0.05);
                var r = _noi * p.baseR;
                p.strokeWeight(1);
                p.stroke(255, 107, 181, i * 5);
                var angleNoise = p.abs(p.noise(i * 0.01)) * 1.3;
                var x1 = r * p.cos(i * totalAngle / count + angleNoise) + noiseAmplitude * _noi;
                var y1 = r * p.sin(i * totalAngle / count + angleNoise);
                p.line(0, 0, x1, y1);
                p.push();
                p.rotate(p.PI);
                {

                    var _noi = p.noise(i * 0.05);
                    var r = _noi * p.baseR;
                    p.stroke(255, 237, 246, 30 + 5 * i);

                    var x1 = r * p.cos(i * totalAngle / count + angleNoise) + noiseAmplitude * _noi;
                    var y1 = r * p.sin(i * totalAngle / count + angleNoise);
                    p.line(0, 0, x1, y1);
                }
                p.pop();

            }



        }
    };

module.exports = {
    zero: sketch,
    zerobg: bg
};
