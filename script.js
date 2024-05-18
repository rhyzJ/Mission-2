console.log("Connected ⭐"); // check connection

// omega profile gif

function increaseProfileImg (e){
    e.target.style.width = "260px"
    e.target.style.height = "260px"
}

function decreaseProfileImg (e){
    e.target.style.width = "200px"
    e.target.style.height = "200px"
}

const imgOmega = document.getElementById("omegaImg");

imgOmega.addEventListener("mouseover", function () {
  imgOmega.src =
    "https://media0.giphy.com/media/hUmeXwtIxRHVVAeYIa/giphy.gif?cid=6c09b952su9zgjjv8vn5ti4l34g3wmfw8feqeboncd2hmohp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
});

imgOmega.addEventListener("mouseout", function () {
  imgOmega.src =
    "https://i.pinimg.com/564x/d2/70/f2/d270f2bbdd4d0c793bb5e9decc956d3d.jpg";
});

imgOmega.addEventListener("mouseover", increaseProfileImg)

imgOmega.addEventListener("mouseleave", decreaseProfileImg)

// hunter profile gif

const imgHunter = document.getElementById("hunterImg");

imgHunter.addEventListener("mouseover", function () {
  imgHunter.src =
    "https://i.pinimg.com/originals/ea/57/fe/ea57fe92f603187f4a591ddc9d765ab6.gif";

  imgHunter.style.width = "260px";
  imgHunter.style.height = "260px";
});

imgHunter.addEventListener("mouseleave", function () {
    imgHunter.src =
    "https://i.pinimg.com/564x/34/d6/ca/34d6ca83b4137d07a0449c6ae032a2ea.jpg";

    imgHunter.style.width = "200px";
    imgHunter.style.height = "200px";
});

// tech profile gif

const imgTech = document.getElementById("techImg");

imgTech.addEventListener("mouseover", function () {
    imgTech.src =
    "https://i.pinimg.com/originals/f1/f3/e7/f1f3e778efb4dedd6cba233dfef71cfc.gif";

    imgTech.style.width = "260px";
    imgTech.style.height = "260px";
});

imgTech.addEventListener("mouseleave", function () {
    imgTech.src =
    "https://i.pinimg.com/564x/e5/c5/a1/e5c5a1ec0bf49bbdc328b29620a1e59a.jpg";

    imgTech.style.width = "200px";
    imgTech.style.height = "200px";
});

// echo profile gif

const imgEcho = document.getElementById("echoImg");

imgEcho.addEventListener("mouseover", function () {
    imgEcho.src =
    "https://i.pinimg.com/originals/ed/db/ba/eddbba91e925ff50952cc0c9a81bf9bb.gif";

    imgEcho.style.width = "260px";
    imgEcho.style.height = "260px";
});

imgEcho.addEventListener("mouseleave", function () {
  imgEcho.src =
    "https://i.pinimg.com/564x/a1/ed/ad/a1edadbb01dc2d93786f1fef33f0d1a2.jpg";

    imgEcho.style.width = "200px";
    imgEcho.style.height = "200px";
});

// wrecker profile gif

const imgWrecker = document.getElementById("wreckerImg");

imgWrecker.addEventListener("mouseover", function () {
    imgWrecker.src =
    "https://i.pinimg.com/originals/12/9b/35/129b353a720f2a370d0bd162ec1b3e54.gif";

    imgEcho.style.width = "260px";
    imgEcho.style.height = "260px";
});

imgWrecker.addEventListener("mouseleave", function () {
    imgWrecker.src =
    "https://i.pinimg.com/564x/e9/ff/25/e9ff25dcab2e05472411560d9576e71b.jpg";

    imgEcho.style.width = "200px";
    imgEcho.style.height = "200px";
});

// crosshair profile gif

const imgCrosshair = document.getElementById("crosshairImg");

imgCrosshair.addEventListener("mouseover", function () {
  imgCrosshair.src =
    "https://i.pinimg.com/originals/ee/a2/1f/eea21ffa28a05dce488afc82178aeced.gif";
});

imgCrosshair.addEventListener("mouseleave", function () {
  imgCrosshair.src =
    "https://i.pinimg.com/736x/73/12/8f/73128fbe069ce5b837a09e3720978a76.jpg";
});
