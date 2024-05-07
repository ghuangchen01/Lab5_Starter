// expose.js
const jsConfetti = new JSConfetti()
window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelection = document.getElementById("horn-select");
  var audioFile = document.querySelector("audio");
  hornSelection.addEventListener('change',function(){
    var selection = hornSelection.value;
    var img = "assets/images/"+selection + ".svg";
    var imgElement = document.querySelector("[alt='No image selected']");
    imgElement.src = img;
    var audioName = "assets/audio/"+selection + ".mp3";
    audioFile.src = audioName;
  });
  var volume = document.getElementById("volume");
  volume.addEventListener('change',function(){
    var icon = document.querySelector("[alt='Volume level 2']");
    var volumeLevel;
    var currentValue = Number(volume.value);
    if(currentValue==0){
      volumeLevel = "assets/icons/volume-level-0.svg";
    }else if(currentValue < 33 && currentValue>=1){
      volumeLevel = "assets/icons/volume-level-1.svg";
    }else if(currentValue < 67 && currentValue>=33){
      volumeLevel = "assets/icons/volume-level-2.svg";
    }else if(currentValue >= 67){
      volumeLevel = "assets/icons/volume-level-3.svg";
    }
    icon.src = volumeLevel;
    audioFile.volume = currentValue/100;

  });
  var button = document.querySelector("button");
  button.addEventListener('click',function(){
    audioFile.play();
    if(hornSelection.value == "party-horn"){
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
    }
  })
}