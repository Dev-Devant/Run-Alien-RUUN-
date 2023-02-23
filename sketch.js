let back,ground,mountains,alien
let animation
var offsetM = 0, offsetG = 0
var scaled = 80/45

function preload(){
    back = loadImage('data/Background.jpg')
    ground = loadImage('data/Ground.png')
    mountains = loadImage('data/Mountains.png')
    alien = loadImage('data/Alien.png')
}

function setup() {
 
  createCanvas(windowWidth * 0.8, windowWidth * 0.8/scaled);
  back.resize(width,height)
  mountains.resize(width*2,height)
  ground.resize(width*3,height/3)
  animation = new SpriteAnimation(alien, 0.1 * width,0.75 * height, alien.width/6,width/9,6,6)
  imageMode(CENTER)
  offsetM = width 
  offsetG = width
  
}

function draw() {
  offsetM -= 0.5
  if (width*2 % offsetM == 0){
    offsetM = width    
  }
  offsetG -= 2
  if (width*2 % offsetG == 0){
    offsetG = width    
  }
  
  image(back,width/2,height/2)
  
  image(mountains,offsetM, 0.5 * height )
  
  image(ground,offsetG, 0.9 * height)
 
  animation.display()
  
}

