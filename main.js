function setup(){
    canvas=createCanvas(300,300);
    canvas.position(200,400);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    power=window.speechSynthesis;
}
function preload(){
 classifier=ml5.imageClassifier('Doodlenet');
}
function draw(){
    strokeWidth(5);
    stroke("blue");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }

}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
    if(error){
console.error(error);
    }
    console.log(results)
    document.getElementById("label").innerHTML="Your drawing" +results[0].label;
    document.getElementById("confidence").innerHTML="confidence" +Math.round(results[0].confidence*100)+"%";
    zeus=new SpeechSynthesisUtterance(results[0].label);
    power.speak(zeus);
}
function canvasClear(){
    background("white")
}
