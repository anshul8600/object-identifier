Webcam.set({
width:350, height:300, image_format:'png', png_quality:90
});
Webcam.attach("#webcam");
function takepic(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="captureimage" src="'+data_uri+'"/>';
}
);
}
console.log("ml5 version:", ml5.version)
mymodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mXDFEb7R5/model.json', modelLoaded);

function identify(){
    i1 = document.getElementById("captureimage");
    mymodel.classify(i1, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
else{
console.log(results);
document.getElementById("resultname").innerHTML = results[0].label;
document.getElementById("resultaccuracy").innerHTML = results[0].confidence.toFixed(2);

}
}
function modelLoaded(){console.log("model has loaded");}