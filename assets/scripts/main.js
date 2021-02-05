// main.js

document.getElementById("volume-number").addEventListener('input', function()
{
    var x = document.getElementById("volume-number");
    var y = document.getElementById("volume-slider");
    var z = document.getElementById("volume-image");
    var audio = document.getElementById("horn-sound");

    audio.volume = x.value/100.0;

    y.value = x.value;

    if(x.value == 0)
    {
        document.getElementById("honk-btn").disabled = true;
        z.src = "./assets/media/icons/volume-level-0.svg"
    }
    else if(x.value >= 1 && x.value <= 33)
    {
        z.src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById("honk-btn").disabled =  false;

    }
    else if(x.value >= 34 && x.value <= 66)
    {
        z.src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById("honk-btn").disabled = false;

    }
    else if(x.value >= 67 && x.value <= 100)
    {
        z.src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById("honk-btn").disabled =  false;
    }

    
})

document.getElementById("volume-slider").addEventListener('input', function()
{
    var x = document.getElementById("volume-number");
    var y = document.getElementById("volume-slider");
    var z = document.getElementById("volume-image");
    var audio = document.getElementById("horn-sound");
    x.value = y.value;
    audio.volume = x.value/100.0;

    if(x.value == 0)
    {
        z.src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
    else if(x.value >= 1 && x.value <= 33)
    {
        z.src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById("honk-btn").disabled =  false;

    }
    else if(x.value >= 34 && x.value <= 66)
    {
        z.src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById("honk-btn").disabled =  false;

    }
    else if(x.value >= 67 && x.value <= 100)
    {
        z.src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById("honk-btn").disabled =  false;

    }
})

document.getElementById("radio-air-horn").addEventListener("click", function() {
    var x = document.getElementById("sound-image");
    x.src = "./assets/media/images/air-horn.svg"

    var y = document.getElementById("horn-sound");
    y.src = "./assets/media/audio/air-horn.mp3";
});

document.getElementById("radio-car-horn").addEventListener("click", function() {
    var x = document.getElementById("sound-image");
    x.src = "./assets/media/images/car.svg"
    
    var y = document.getElementById("horn-sound");
    y.src = "./assets/media/audio/car-horn.mp3";
});

document.getElementById("radio-party-horn").addEventListener("click", function() {
    var x = document.getElementById("sound-image");
    x.src = "./assets/media/images/party-horn.svg"

    var y = document.getElementById("horn-sound");
    y.src = "./assets/media/audio/party-horn.mp3";
});



document.getElementById("honk-btn").addEventListener("click", function(event) {
    var x = document.getElementById("horn-sound");
    event.preventDefault();
    x.play();
});




// TODO
