function preload()
{

}

function setup()
{
    canvas=createCanvas(590,490);
    canvas.position(260,370);
    
    video=createCapture(VIDEO);
    video.hide();
    background(204, 237, 0);
    fill(	0, 255, 0);
    rect(50, 50, 500, 400);
    fill(160, 32, 240);
}
 function draw()
 {
  
    circle(50, 50, 100);
    circle(540, 50, 100);
    circle(540,440, 100);
    circle(50,440, 100);
     image(video,100,100,400,300);
     
 }

 function take_snapshot(){
     save('img.png');
 }


 