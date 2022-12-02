objects = [];
img = "";
status = ""

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model has been launched");
    objectDetector.detect(img, gotResult);
    status = true
}

function gotResult(error, results){
    if (error){
        console.log(error);
    } else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(img, 0,0,600,500);
    if(status!=""){
        for(i=0; i=objects.length; i++){
            fill("#FF0000");
            text(objects[i].label + objects[i].confidence, objects[i].x+15, objects[i].y+15)
            stroke("black");
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

}

