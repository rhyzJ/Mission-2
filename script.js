console.log("Connected ⭐"); // check connection

// // profile images (declaring)

// const imgOmega = document.getElementById("omegaImg"); // omega profile pic
// const imgHunter = document.getElementById("hunterImg"); // hunter profile pic
// const imgTech = document.getElementById("techImg"); // tech profile pic
// const imgEcho = document.getElementById("echoImg"); // echo profile pic
// const imgWrecker = document.getElementById("wreckerImg"); // wrecker profile pic
// const imgCrosshair = document.getElementById("crosshairImg"); // crosshair profile pic

// reusable function to change image width and height, used to be increase and decrease size
function changeImageSize(e, width, height) {
  e.target.style.width = width;
  e.target.style.height = height;
}

//reusable function to change image source (original pic to gif)

function changeImgSrc(imgOg, newSrc) {
  imgOg.src = newSrc;
}

//array of objects to declare the profile images og src and new src
//each obj contains: ID, mouseoverSrc, OgSrc (original source)

const profiles = [
  {
    // omega
    id: "omegaImg",
    ogSrc:
      "https://i.pinimg.com/564x/d2/70/f2/d270f2bbdd4d0c793bb5e9decc956d3d.jpg",
    mouseoverSrc:
      "https://64.media.tumblr.com/b7bba59fb52a612d51c93546d975368f/5225a9166bb5494e-07/s540x810/e20820b6abc16cb5ab4aaf45258f67a57b771fae.gif",
  },
  {
    // hunter
    id: "hunterImg",
    ogSrc:
      "https://i.pinimg.com/564x/34/d6/ca/34d6ca83b4137d07a0449c6ae032a2ea.jpg",
    mouseoverSrc:
      "https://i.pinimg.com/originals/ea/57/fe/ea57fe92f603187f4a591ddc9d765ab6.gif",
  },
  {
    // tech
    id: "techImg",
    ogSrc:
      "https://i.pinimg.com/564x/e5/c5/a1/e5c5a1ec0bf49bbdc328b29620a1e59a.jpg",
    mouseoverSrc:
      "https://i.pinimg.com/originals/f1/f3/e7/f1f3e778efb4dedd6cba233dfef71cfc.gif",
  },
  {
    // echo
    id: "echoImg",
    ogSrc:
      "https://i.pinimg.com/564x/a1/ed/ad/a1edadbb01dc2d93786f1fef33f0d1a2.jpg",
    mouseoverSrc:
      "https://i.pinimg.com/originals/ed/db/ba/eddbba91e925ff50952cc0c9a81bf9bb.gif",
  },
  {
    // wrecker
    id: "wreckerImg",
    ogSrc:
      "https://i.pinimg.com/564x/e9/ff/25/e9ff25dcab2e05472411560d9576e71b.jpg",
    mouseoverSrc:
      "https://i.pinimg.com/originals/12/9b/35/129b353a720f2a370d0bd162ec1b3e54.gif",
  },
  {
    // crosshair
    id: "crosshairImg",
    ogSrc:
      "https://i.pinimg.com/736x/73/12/8f/73128fbe069ce5b837a09e3720978a76.jpg",
    mouseoverSrc:
      "https://i.pinimg.com/originals/ee/a2/1f/eea21ffa28a05dce488afc82178aeced.gif",
  },
];

// using map method to add event listeners

profiles.map(function (profile) {
  const imgEl = document.getElementById(profile.id);
  const newSrc = profile.mouseoverSrc;
  const ogSrc = profile.ogSrc;

  imgEl.addEventListener("mouseleave", function (e) {
    changeImageSize(e, "200px", "200px");
    changeImgSrc(imgEl, ogSrc);
  });

  imgEl.addEventListener("mouseover", function (e) {
    changeImageSize(e, "260px", "260px");
    changeImgSrc(imgEl, newSrc);
  });
});
