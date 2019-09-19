$(document).on("click","#camera",function(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI, 
    correctOrientation: true });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
    
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

$(document).on("change","#opacidade",function(){
    var opacidade = document.getElementById('opacidade').value;
    document.getElementById("imagem").style.filter = "opacity("+opacidade+"%)";
});
$(document).on("change","#saturacao",function(){
    var saturacao = document.getElementById('saturacao').value;
    document.getElementById("imagem").style.filter = "saturate("+saturacao+"%)";
});
$(document).on("change","#cinza",function(){
    var cinza = document.getElementById('cinza').value;
    document.getElementById("imagem").style.filter = "grayscale("+cinza+"%)";
});
$(document).on("change","#desfoque",function(){
  var desfoque = document.getElementById('desfoque').value;
  document.getElementById("imagem").style.filter = "blur("+desfoque+"px)";
});