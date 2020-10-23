canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1Width = 120;
car1Height = 90;
car2Width = 120;
car2Height = 90;
background_image = "racing.jpg";
car1_image = "car1.png";
car2_image = "images.png";
car1X = 10;
car1Y = 10;
car2X = 10;
car2Y = 120;
function add() {
    bimgtag = new Image();
    bimgtag.onload = uploadbackground;
    bimgtag.src = background_image;
    c1imgtag = new Image();
    c1imgtag.onload = uploadcar1;
    c1imgtag.src = car1_image;
    c2imgtag = new Image();
    c2imgtag.onload = uploadcar2;
    c2imgtag.src = car2_image;
}
function uploadbackground() {
    ctx.drawImage(bimgtag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(c1imgtag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
    ctx.drawImage(c2imgtag, car2X, car2Y, car2Width, car2Height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    
    if (keyPressed == '37' ) { 
    left();
    console.log("left");
    } 
    if (keyPressed == '39' ) { 
    right();
    console.log("right"); 
    }
    if ( keyPressed == '68') { 
        right1();
        console.log("right"); 
        }
        if ( keyPressed == '65') { 
            left1();
            console.log("left"); 
            }
    if (car1X >= 700){
        console.log("car1wins");
        document.getElementById("game_status").innerHTML = "CAR 1 WINS";
        
    }
    if (car2X >= 700){
        console.log("car2wins");
     document.getElementById("game_status").innerHTML = "CAR 2 WINS";
     
 }
}

function left() {
            if(car1X >= 0) { 
               car1X = car1X - 10;
               console.log("When left arrow is pressed, x = " + car1X + " | y = " +car1Y);
               uploadbackground();
               uploadcar1(); 
               uploadcar2(); 
               }
            }
function right() {
                if(car1X <= 700) { 
                   car1X = car1X + 10;
                   console.log("When right arrow is pressed, x = " + car1X + " | y = " +car1Y);
                   uploadbackground();
                   uploadcar1(); 
                   uploadcar2(); 
                   }
                }
                
               function left1() {
                           if(car2X >= 0) { 
                              car2X = car2X - 10;
                              console.log("When left arrow is pressed, x = " + car2X + " | y = " +car2Y);
                              uploadbackground();
                              uploadcar2(); 
                              uploadcar1(); 
                              }
                           }
               function right1() {
                               if(car2X <= 700) { 
                                  car2X = car2X + 10;
                                  console.log("When right arrow is pressed, x = " + car2X + " | y = " +car2Y);
                                  uploadbackground();
                                  uploadcar2();
                                  uploadcar1();  
                                  }
                               }
                               
                               if (car1X >= 700){
                                console.log("car1wins");
                                document.getElementById("game_status").innerHTML = "CAR 1 WINS";
                                
                            }
                            if (car2X >= 700){
                                console.log("car2wins");
                             document.getElementById("game_status").innerHTML = "CAR 2 WINS";
                             
                         }
                            
            



