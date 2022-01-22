

function reconocerVoz(){
	
    let rec;

    if (!("webkitSpeechRecognition" in window)) {
    	alert("Navegador incompatible");

    } else {

    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-AR";
    	rec.continuous = true;
    	rec.interim = true;
    	rec.addEventListener("result",iniciar);
		decir();

		rec.start();

		rec.onresult = function() {
			rec.stop();
		  }
		  
		
    }
}


function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){

		var a=event.results[i][0].transcript;
		document.getElementById('usuario').value = a;
	}
	respuestas(a);
}



function respuestas(a){

	if (a.includes("cómo estás")){

		a="Bien, ¿y tu?";
		decir(a);
	}
	else{

		decir(a);
	}
	document.getElementById('bot').innerHTML = a;

}




function decir(a){
    speechSynthesis.speak(new SpeechSynthesisUtterance(a));
}
