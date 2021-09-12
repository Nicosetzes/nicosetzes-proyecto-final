let audioOne = document.getElementById("audioUno");

let audioTwo = document.getElementById("audioDos");

let audioThree = document.getElementById("audioTres");

let audioFour = document.getElementById("audioCuatro");

let audioElements = [audioOne , audioTwo , audioThree , audioFour]

function pauseAudioElements(){
	audioElements.forEach(audio => {
		audio.pause(); // Pauso los archivos de audio
	});
}

function stopAudioElements(){
	audioElements.forEach(audio => {
		audio.pause(); // Pauso los archivos de audio
        audio.load(); // Recargo los archivos de audio, para que al apretar "iniciar" inicien nuevamente.
	});
}

// Determino el evento para el button iniciar, en cada archivo. Con ello se pausará la reproducción de todos los audios y luego iniciará la deseada.

document.getElementById("reproducirUno").addEventListener("click", function(){
    pauseAudioElements();
    audioOne.play();
})

document.getElementById("reproducirDos").addEventListener("click", function(){
    pauseAudioElements();
    audioTwo.play();
})

document.getElementById("reproducirTres").addEventListener("click", function(){
    pauseAudioElements();
    audioThree.play();
})

document.getElementById("reproducirCuatro").addEventListener("click", function(){
    pauseAudioElements();
    audioFour.play();
})

// Determino el evento para el button pausar, en cada archivo. Con ello se pausará la reproducción.

document.getElementById("pausarUno").addEventListener("click", function(){
    pauseAudioElements();
})

document.getElementById("pausarDos").addEventListener("click", function(){
    pauseAudioElements();
})

document.getElementById("pausarTres").addEventListener("click", function(){
    pauseAudioElements();
})

document.getElementById("pausarCuatro").addEventListener("click", function(){
    pauseAudioElements();
})

// Determino el evento para el button detener, en cada archivo. Con ello se detendrá la reproducción.

document.getElementById("detenerUno").addEventListener("click", function(){
    stopAudioElements();
})

document.getElementById("detenerDos").addEventListener("click", function(){
    stopAudioElements();
})

document.getElementById("detenerTres").addEventListener("click", function(){
    stopAudioElements();
})

document.getElementById("detenerCuatro").addEventListener("click", function(){
    stopAudioElements();
})

