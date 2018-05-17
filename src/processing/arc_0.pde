float[] r = new float[10];
void setup() {
  size(700, 700);
  frameRate(30);
} 
void draw() {
  translate(width/2, height/2);
  background(255);
  noStroke();
  //float start = frameCount * 0.1;
  for (int i =  0 ;i < 10; i ++) {
  fill(230-i*5, 15+i*5, 50, 70);
  //arc(0, 0, 500-i*5, 500-i*5, 
  //  start, start + TWO_PI * r[i], PIE);
  }
  float start = map(sin(frameCount*0.1), -1,1,0,PI/4); 
  arc(0, 0, 500-5*5, 500-5*5,
  PI/4 - start, start + TWO_PI * 0.75 , PIE);
  
}