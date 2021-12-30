var video = "";
var status1 = "";
 var object= [];
 objectdecter = "";

function setup() {
    canvas = createCanvas(580,480);
    canvas.center();
}

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function gotResult(error,result)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(result);
        object = result;
    }
    
}

function draw(){
  image(video,0,0,580,480);
  if(status1 != "")
  {
    objectdecter.detect(video, gotResult);
    for(i=0; i< object.length; i++)
    {
   document.getElementById("classes").innerHTML = "Status: Objects are Detected";
   document.getElementById("Fail").innerHTML = "Number of Detected"+object.length;

   fill("FFBF00");
   percent=floor(object[i].confidence * 100);
   text(object[i].label+ "" + percent + "%",object[i].x+15 , object[i].y+15);
   nofill();
   stroke("orange");
   rect(object[i].x,object[i].y,object[i].object[i].width,object[i].height);
    }
  }

}

function Start(){
    objectdecter = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("classes").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}