let rover_width = 100;
let rover_height = 90;
let rover_x = 10;
let rover_y = 10;


document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

let background_image = "cat.jpg";
let rover_image = "car1.png";


function add() {
background_imgTag = new Image(); //defining a variable with a new image
background_imgTag.onload = uploadBackground; // setting a function, on loading this variable background_imgTag.src = background_image; // load image
rover_imgTag = new Image(); //defining a variable with a new image
rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
rover_imgTag.src = rover_image; // load image
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) 
{
 keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '40')
    {
    down();
    console.log("down");
    }
if (keyPressed == '38')
    {
        up();
        console.log("down");
    }
if (keyPressed == '39')
    {
        right();
        console.log("down");
    }
if (keyPressed == '37')
    {
    left();
        console.log("down");
    }
}


function up()
{
if(rover_y >=0)
{
rover_y= rover_y - 10;
uploadBackground();
uploadrover();
}
}

function down()
{
if(rover_y <=500)
{
rover_y= rover_y + 10;
uploadBackground();
uploadrover();
}
}

function left()
{
if(rover_x >=0)
{
rover_x= rover_x - 10;
uploadBackground();
uploadrover();
}
}

function right()
{
if(rover_x <=700)
{
rover_x= rover_x + 10;
uploadBackground();
uploadrover();
}
}
