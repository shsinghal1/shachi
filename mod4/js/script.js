


(function() { 
var byeSpeaker={};
var helloSpeaker={};
var names = ["jia","shachi","shubhi","shrey" ,
"raghav","john","jyoti","shipra","Jai"];

for(var i=0; i<names.length;i++){

var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } 
  else {
    helloSpeaker.speak(names[i]);
  }
}

})();


	



