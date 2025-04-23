let input = document.getElementById("in");
let image = document.getElementById("qrimg");

function generate(){
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}` ;
}