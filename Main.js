

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
}













function respuestas(){

	var dic = {
		"Bien, ¿y tu?":"cómo estás",
		"hola":"hola"
	};












	var keys = Object.keys(dic)
	var values = Object.values(dic)

	console.log(values)

	var usuario=document.getElementById('usuario').value;

	if(!values.includes(usuario)){

		decir("No encuentro respuestas para esa pregunta");

	}
	else{
	
		for (i=0;i<values.length;i++){
			console.log(i);

			if(usuario.includes(values[i])){

				decir(keys[i]);

			}
				
		}
	}
	
}








function decir(a){
    speechSynthesis.speak(new SpeechSynthesisUtterance(a));
}

