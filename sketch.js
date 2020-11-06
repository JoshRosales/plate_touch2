var fix, moving


function setup() {
  createCanvas(800,400);
 fix = createSprite(400, 200, 50, 50);
moving = createSprite(345,56,50,50);

object1 = createSprite(250,200 ,50 ,50 )
object2 = createSprite(500,56 ,50 ,50 )

}

function draw() {
  background(255,255,255);  
moving.x = mouseX
moving.y = mouseY
console.log(moving.x - fix.x)



  if (isTouching(object2, moving)){
 moving.shapeColor = "green";
 object2.shapeColor ="red";

 
  }
  else{
moving.shapeColor = "purple";
object2.shapeColor = "purple";
  }

  drawSprites();
}


