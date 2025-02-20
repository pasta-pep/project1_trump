let xTargets1 = Math.floor(Math.random() * 300) + 50;
let yTargets1 = 50;
let xSpeed = 4;
let ySpeed = 4;

let targets1;
let trumpsketch3;
let whitehouse;
let expo;
let showExpo = false;
let sharpies;

let minX = 100;
let maxX = 1700;
let minY = -300;
let maxY = 700;

function preload() {
  print("This is Preload:")
  sharpies = loadImage("sharpies.png",
    () => console.log("sharpies image loaded successfully!"),
    () => console.error("Failed to load sharpies image!")
  );

  trumpsketch3 = loadImage("trumpsketch3.png",
    () => console.log("Trump sketch loaded successfully!"),
    () => console.error("Failed to load Trump sketch!")
  );

  whitehouse = loadImage("whitehouse.jpg",
    () => console.log("Whitehouse image loaded successfully!"),
    () => console.error("Failed to load whitehouse image!")
  );

  expo = loadImage("expo.jpg",
    () => console.log("Expo image loaded successfully!"),
    () => console.error("Failed to load expo image!")
  );

  targets1 = loadImage("targets1.png",
    () => console.log("targets1 image loaded successfully!"),
    () => console.error("Failed to load targets1 image!")
  );
}

function setup() {
  print("This Setup:")
  createCanvas(windowWidth, windowHeight);
  noCursor();
  print ("White house is:",whitehouse)
 xTargets1 = random(minX, maxX);
 yTargets1 = random(minY, maxY);
 print("setup ends here, draw begins:")

}

function draw() {
  background(255);

  // Draw the whitehouse
  if (whitehouse) {
 
    image(whitehouse, 0, 0, width, height);
  }

  // Show "expo.jpg" when clicked
  if (showExpo) {
    image(expo, 0, 0, width, height);
  }

  // Move and bounce targets1
  move();
  bounce();
  display();

  // Draw sharpies following the mouse
  if (sharpies) {
    let newHeight = 700;
    let aspectRatio = sharpies.width / sharpies.height;
    let newWidth = newHeight * aspectRatio;
    image(sharpies, mouseX - newWidth / 2, mouseY - newHeight / 2, newWidth, newHeight);
  }

//   print("x:",xTargets1);
// print("y:",yTargets1);
}

function move() {
  xTargets1 += xSpeed;
  yTargets1 += ySpeed;
}



function bounce() {
  if (xTargets1 < minX || xTargets1 > maxX) {
    xSpeed *= -1;
  }
  if (yTargets1 < minY || yTargets1 > maxY) {
    ySpeed *= -1;
  }
}

function display() {
  let imgSize = 880; // Adjust size
  image(targets1, xTargets1 - imgSize / 2, yTargets1 - imgSize / 2, imgSize, imgSize);
}


// Toggle "expo.jpg" visibility on click
function mousePressed() {
  showExpo = !showExpo;
}
