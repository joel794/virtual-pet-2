var dog,happydDog,database,foodStock,foodS;
var foodleft = 30

function preload(){
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  food = database.ref('Food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.4;
 
}


function draw() {  
background("green");

fill(255);
textFont('Loopiejuice Regular');
textSize(30)
text("Food Left: "+foodleft,170,470);

if(keyWentDown(UP_ARROW)){
  dog.addImage(dogimg2);
  foodleft = foodleft - 1
}
  drawSprites();
  fill(255);
  textSize(21);
  textFont('Tahoma')
  text("Note: Press Up Arrow Key To Feed Drago milk",40,100);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}


