function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "Palmas") {
      img.src = 'gato.webp';
      img1.src = 'gato.webp';
      img2.src = 'cachorro.jpeg';
      img3.src = 'rato.jpeg';
    } else if (results[0].label == "Sino") {
      img.src = 'cachorro.jpeg';
      img1.src = 'cachorro louco.gif';
      img2.src = 'gato.webp';
      img3.src = 'rato.jpeg';
    } else if (results[0].label == "Estalos") {
      img.src = 'passarinho.jpeg';
      img1.src = 'aliens-02.png';
      img2.src = 'passarinho.gif';
      img3.src = 'rato.jpeg';
    }else{
      img.src = 'rato.jpeg';
      img1.src = 'passarinho.jpeg';
      img2.src = 'cahorro.jpeg';
      img3.src = 'rato.gif';
    }
  }
}
