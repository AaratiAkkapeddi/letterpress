let currentLetter = "";
let letterpool = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"]
let ans = -1;
let btn;
function setup() {
  let c = createCanvas(400, 400);
  c.parent("sketch")
  currentLetter = random(letterpool)
  btn = createButton("click for next letter")
  btn.mousePressed(nextLetter)
}

function draw() {
  background(251);
  push()
  translate(width/2,height/2)
  scale(ans,1)
  textSize(24)
  text(currentLetter, 0,0)
  pop()
 

}
function keyPressed(){
  if(key.toLowerCase() == currentLetter.toLowerCase()){
    fill("green")
    ans = 1;
  }else if(keyCode != SHIFT){
    fill("red")
    ans = 1;
  }

}
function nextLetter(){
     currentLetter = random(letterpool)
     fill(0)
      ans = -1;
}