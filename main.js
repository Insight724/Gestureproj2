//teachablemachine.withgoogle.com/models/85vfq9fvl/
Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
}
);
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='img<img id = "captured_image" src= "'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/85vfq9fvl/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Has Loaded');
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is"+ prediction_1;
    speak_data_2 = "The Second Prediction is"+prediction_2;
    var utterThis = new speechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
