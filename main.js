objetos = [];
var Status = "";
function preload(){
    video = createVideo("video.mp4");
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.position(450,250);
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
    if(Status == true){
        objectDetector.detect(video,gotResults);
    for (i = 1; i < objetos.length; i++){
        fill("orange");
        stroke("red");
        text(objetos[i].label,objetos[i].x,objetos[i].y)
        noFill()
        rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
    }
    }
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Detectando Elementos";
}
function modelLoaded(){
    console.log("loaded model");
    video.loop();
    video.speed(1);
    video.volume(0);
    Status = true;
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    objetos = results;
    console.log(objetos);
}