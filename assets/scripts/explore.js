// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var voiceSelection = document.getElementById("voice-select");
  var textToSpeak = document.getElementById("text-to-speak");
  var button = document.querySelector("button");
  var image = document.querySelector("[alt='Smiling face']");
  const synth = window.speechSynthesis;

  function populateVoiceList(){
    voiceSelection.innerHTML = '';
    let voices = speechSynthesis.getVoices();
  for(let i = 0;i<voices.length;i++){
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang",voices[i].lang);
      option.setAttribute("data-name",voices[i].name);
      option.id = option.textContent;
      voiceSelection.appendChild(option);
  }
  }
  populateVoiceList();
  speechSynthesis.onvoiceschanged = populateVoiceList;
  button.addEventListener('click',function(){
    let voices = speechSynthesis.getVoices();
    var selectedVoice;
    // console.log(document.getElementById(voiceSelection.value).getAttribute("data-name"));
    for(let i = 0;i<voices.length;i++){
      if(voices[i].name == document.getElementById(voiceSelection.value).getAttribute("data-name")){
        selectedVoice = voices[i];
      }
    }
    const sentence = new SpeechSynthesisUtterance(textToSpeak.value);
    sentence.voice = selectedVoice;
    image.src = "assets/images/smiling-open.png";
    synth.speak(sentence);
    sentence.onend = function(){
      image.src = "assets/images/smiling.png";
    }

  });
}