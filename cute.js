let rover_width = 140;
let rover_height = 140;
let rover_x = 10;
let rover_y = 10;
let rover2_width = 100;
let rover2_height = 100;
let rover2_x = 1000;
let rover2_y = 400;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

let background_image = "background.png";
let bg_width = 1310;
let bg_height = 620;
//let ctx;

//if(canvas.getContext) {
// ctx = canvas.getContext('2d');
// }

let rover_image = "catto.jpg";
let rover2_image = "present.png";

function add() {

background_imgTag = new Image(); //defining a variable with a new image
background_imgTag.onload = uploadBackground; // setting a function, on loading this variable background_imgTag.src = background_image; // load image
rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
rover_imgTag.src = rover_image; // load image
rover2_imgTag = new Image(); //defining a variable with a new image
rover2_imgTag.onload = uploadrover2; // setting a function, onloading this variable
rover2_imgTag.src = rover2_image; // load image
background_imgTag.src = background_image // load image
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, bg_width, bg_height);
}

function uploadrover() {
    
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadrover2() {
    
    ctx.drawImage(rover2_imgTag, rover2_x, rover2_y, rover2_width, rover2_height);
    } 

window.addEventListener("keydown", my_keydown);
function my_keydown(e) 
{
 keyPressed = e.keyCode;
console.log(keyPressed);


if (keyPressed == '40')
    {
    down();
    check();
    console.log("down");
    }
if (keyPressed == '38')
    {
        up();
        check();
        console.log("up");
    }
if (keyPressed == '39')
    {
        right();
        check();
        console.log("left");
    }
if (keyPressed == '37')
    {
    left();
    check();
        console.log("right");
    }
}

function check() {
    if (rover_x <=1100 && rover_x >= 900 ){
        if (rover_y <=500 && rover_y >= 300 ){
            rover_image = "";
            rover2_image = "";
            background_image = "yay.jpg";
            bg_height = 620;
            bg_width =  700;
            rover_imgTag.src = rover_image; // load image
            background_imgTag.src = background_image;
            rover2_imgTag.src = rover2_image; //
            uploadBackground();
            uploadrover();
            uploadrover2();
            console.log("check");
        }
        
    }
}

function up()
{
if(rover_y >=0)
{
rover_y= rover_y - 10;
uploadBackground();
uploadrover();
uploadrover2();
}
}

function down()
{
if(rover_y <=620)
{
rover_y= rover_y + 10;
uploadBackground();
uploadrover();
uploadrover2();
}
}

function left()
{
if(rover_x >=0)
{
rover_x= rover_x - 10;
uploadBackground();
uploadrover();
uploadrover2();
}
}

function right()
{
if(rover_x <=1310)
{
rover_x= rover_x + 10;
uploadBackground();
uploadrover();
uploadrover2();
}
}
