img = "";
status = ""; 
objeto = [];
    function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Estatus: detectando objetos";
    video.hide();
} 
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw(){
 image(video,0,0,380,380);
 /*fill("#1938CD")
 text("Perro",150,85);
 noFill();
 stroke("#1938CD");
 rect(50,70,400,325);
fill("#E53636");
text("Gato",300,85);*/
if (status!=""){
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video,gotResults)
    for(i=0; i<objeto.length;i++){
        document.getElementById("status").innerHTML= "Estatus: objctos detectados";
        document.getElementById("numero_objetos"),innerHTML = "numero de objetos detectados:"+objeto.length;
 fill(r,g,b)
 porcentaje = floor(objeto[i].confidence*100);
 text(objeto[1].label+""+porcentaje+"%",objeto[i].y);
 noFill(r,g,b);
 stroke("#1938CD");
 rect(objeto[i].x,objeto[i].y, objeto[i].width, objeto[i].height);
    }

}
noFill();
rect(100,140,500,250);
}
function modelLoaded(){
    console.log("Modelo cargado");
    status = true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objeto = results;
}