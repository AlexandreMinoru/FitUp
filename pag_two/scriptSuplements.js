var checkStoreBtn = document.querySelector(".yes");

checkStoreBtn.onclick = function(e) {
    e.preventDefault();
    window.location.href = "https://www.maxtitanium.com.br/";
}

var reportBtn = document.querySelector(".no");

reportBtn.onclick = function(e) {
    e.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=XsEhiT2GfjQ";
}

var popupsound = document.getElementById("notifypop");



var btn = document.querySelector(".open");

btn.onclick = function(e){
    e.preventDefault();
    popupsound.play(); 
    btn.style.display = "none";
};