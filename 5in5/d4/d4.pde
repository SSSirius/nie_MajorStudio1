import ddf.minim.*;
Minim minim;
AudioPlayer song;
PImage imgl, imgr, imgp, imgj, bg;
int xr, xl;
int step=5;
int acc = 2;

//SoundFile file;
//int mousePresses=0;
void setup() {
  minim=new Minim(this);
  song=minim.loadFile("applause.mp3", 1024);

  size(1000, 950);
  xr = 850;
  xl= -150;
  imgr = loadImage("right.png");
  imgl = loadImage("left.png");
  imgp = loadImage("point.png");
  imgj = loadImage("john.png");
  bg = loadImage("bg.png");
  //file.play();
}

// Main game loop
void draw() {

  fill(255);
  rect(0, 0, 1000, 1000);
  image(bg, 0, 0, 1000, 1000);
  if (xr>349) {
    xr-=step;
    xl+=step;

    image(imgl, xl, 600, 330, 300);
    image(imgr, xr, 600, 330, 300);
  } else {
    //for( int i=1; i<11;i++){
    image(imgp, 90, 100, 348, 200);
    image( imgj, 20, 313, 183, 311);
    //};

    image(imgl, 340, 600, 330, 300);
    image(imgr, 350, 600, 330, 300);

    song.play();
    println(song.isPlaying());
  }
}

//void mousePressed() {
//  mousePresses += 1;
//}

void keyPressed() {
  if (keyPressed&&(key == 'c' || key == 'C')) {
    xr = 850;
    xl= -150;
    step = 5;
    acc = 2;
    song.rewind();
    song.pause();
  } else {
    xr = 850 - acc * step;
    xl= -150 + acc * step;
    step+=2;
    acc+=2;
  };
  //xr = 850 - acc * step;
  //xl= -150 + acc * step;
  //step+=2;
  //acc+=2;
}