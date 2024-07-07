function playsound(chosen){

    switch (chosen) {
        case "lion": var audio1 = new Audio("/audios/lion_1.mp3");
            audio1.play();
            setTimeout(function () {
                audio1.pause();
            }, 1200);
            break;
        case "elephant": var audio2 = new Audio("/audios/elephant.wav");
            audio2.play();
            setTimeout(function () {
                audio2.pause();
            }, 1200);
            break;
        case "duck": var audio3 = new Audio("/audios/Ente_quackt.mp3");
            audio3.play();
            setTimeout(function () {
                audio3.pause();
            }, 1200);
            break;
        case "camel": var audio4 = new Audio("/audios/camel.mp3");
            audio4.play();
            setTimeout(function () {
                audio4.pause();
            }, 1200);
            break;
        case "frog": var audio5 = new Audio("/audios/frog.wav");
            audio5.play();
            setTimeout(function () {
                audio5.pause();
            }, 1200);
            break;
        case "chimp": var audio6 = new Audio("/audios/chimp.wav");
            audio6.play();
            setTimeout(function () {
                audio6.pause();
            },1200);
            break;
        case "crow": var audio7 = new Audio("/audios/crow.mp3");
            audio7.play();
            setTimeout(function () {
                audio7.pause();
            }, 1200);
            break;
        case "penguin": var audio8 = new Audio("/audios/Penguin.mp3");
            audio8.play();
            setTimeout(function () {
                audio8.pause();
            }, 1200);
            break;
        case "dog": var audio9 = new Audio("/audios/dogbark.wav");
            audio9.play();
            setTimeout(function () {
                audio9.pause();
            }, 1200);
            break;
        case "cat": var audio10 = new Audio("/audios/domestic_cat.mp3");
            audio10.play();
            setTimeout(function () {
                audio10.pause();
            }, 1200);
            break;
    }
}
$(".btn").click(function(){
    var a=this.id;playsound(a);
    animatePress(a);});

function animatePress(currentB) {
    $("#" + currentB).addClass("pressed");
    setTimeout(function () {
      $("#" + currentB).removeClass("pressed");
    }, 100);
  }