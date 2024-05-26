console.log("Connected ⭐"); // check connection

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
const omegaImg = document.getElementById("omegaImg");
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

///////////////////////////////////////////////////////////////
// using map method to add event listeners for hover effect //
///////////////////////////////////////////////////////////////

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

///////
// array of quiz IDs

const quizEl1 = document.getElementById("quiz1");
const quizEl2 = document.getElementById("quiz2");

const quizImg1 = document.getElementById("quizImage1");
const quizImg2 = document.getElementById("quizImage2");

const quizOg1 = "Which Member of the Crew Are You Most Like";
const quizOg2 = "Which Star Wars Creature Would Make Your Perfect Pet?";

const quizzes = [
  { quizNum: quizEl1, ogText: quizOg1 },
  { quizNum: quizEl2, ogText: quizOg2 },
];

// Function to change the styling and text content of a quiz element
function changeQuizEl(el, originalText) {
  el.addEventListener("mouseover", function () {
    el.textContent = "<-  Click to try the quiz!";
    el.style.color = "red";
    el.style.backgroundColor = "black";
  });

  el.addEventListener("mouseleave", function () {
    el.textContent = originalText;
    el.style.color = "black";
    el.style.backgroundColor = "rgb(141, 2, 2)";
  });
}

// Loop through the array of quiz objects
for (const quiz of quizzes) {
  changeQuizEl(quiz.quizNum, quiz.ogText);
}

///////////////////////////////////////////////
///////////////TRIVIA BUTTONS/////////////////
///////////////////////////////////////////////

const correctButtons = document.getElementsByClassName("correctButton"); // returns an array of the correct buttons
const incorrectButtons = document.getElementsByClassName("incorrectButton"); // returns an array of the incorrect buttons

for (let i = 0; i < correctButtons.length; i++) {
  correctButtons[i].addEventListener("click", function () {
    correctButtons[i].style.backgroundColor = "green";
    correctButtons[i].style.borderColor = "green";
  });
}

for (let i = 0; i < incorrectButtons.length; i++) {
  incorrectButtons[i].addEventListener("click", function () {
    incorrectButtons[i].style.backgroundColor = "black";
    incorrectButtons[i].style.borderColor = "black";
    incorrectButtons[i].textContent = "❌";
  });
}
