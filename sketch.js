//Create variables here
var dog, happyDog, database, FoodS, foodStock;

function preload() {
dog =loadImage(Dog (1).png)
happyDog =loadImage(happydog (1).png)

	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite()
}


function draw() {  
 background(46, 139, 87)
  drawSprites();

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  //add styles here

}

function readstock(data){
    FoodS=data.val();
}

function writeStock(x) {

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}

