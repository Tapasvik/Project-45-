//add variables here// 
var plane_img, plane,bullet_img, bullet, background_img, background_sprite
 gameState= "PLAY"









//load Images/Media here//
function preload(){
plane_img = loadImage('fighterPlane.png')
bullet_img = loadImage('bullet_img.png')
background_img = loadImage('background_img.webp')


}

//add enviroment properties here// 
function setup(){
createCanvas(1000,700)

plane = createSprite(500,600)
plane.addImage(plane_img)
plane.scale = 0.5

background_sprite = createSprite(500,250,1000,500)
background_sprite.addImage(background_img)
background_sprite.scale = 2.15


}
function createBullets(){
      bullet = createSprite(500,600)
      bullet.addImage(bullet_img)
      bullet.scale = 0.1
      bullet.velocityY = -10
      bullet.x = plane.x
}

function plane_properties(){
      if(keyDown('RIGHT')){
plane.x = plane.x +10
      }
 if(keyDown('LEFT')){
plane.x = plane.x-10
 }
 if(keyDown('SPACE')){
 createBullets()
 
 }
}

// function draw//
function draw(){
 background('#34165c')

drawSprites()

if(gameState === "PLAY"){
plane_properties()
    
}

}