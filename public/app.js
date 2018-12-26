
let myTurn = false;

function play1() {
  if (myTurn === true) {
    let audio = document.getElementById("audio1");
    audio.load();
    audio.play();
    addMySimon(parseInt(audio.getAttribute("data-red")));
    checkMySimon();
  }
}

function play2() {
  if (myTurn === true) {
    let audio = document.getElementById("audio2");
    audio.load();
    audio.play();
    addMySimon(parseInt(audio.getAttribute("data-yellow")));
    checkMySimon();
  }
}

function play3() {
  if (myTurn === true) {
    let audio = document.getElementById("audio3");
    audio.load();
    audio.play();
    addMySimon(parseInt(audio.getAttribute("data-green")));
    checkMySimon();
  }
}

function play4() {
  if (myTurn === true) {
    let audio = document.getElementById("audio4");
    audio.load();
    audio.play();
    addMySimon(parseInt(audio.getAttribute("data-blue")));
    checkMySimon();
  }
}

function addMySimon(value) {
  mySimon.push(value);
}

function checkMySimon() {
  for (let i = 0; i < mySimon.length; i++) {
    if (mySimon[i] === simon[i] && mySimon.length === simon.length) {
      if (mySimon.length === 10) {
        document.getElementById("win").style.display = "block";
      } else {
        document.getElementById("good").style.display = "block";
        myTurn = false;
        setTimeout(
          () => (document.getElementById("good").style.display = "none"),
          1000
        );
        simon.push(Math.floor(Math.random() * 4) + 1);
        setTimeout(() => {
          playSimon();
        }, 1500);
      }
    } else if (mySimon[i] !== simon[i]) {
      document.getElementById("lose").style.display = "block";
      myTurn = false;
      setTimeout(
        () => (document.getElementById("lose").style.display = "none"),
        1000
      );
      setTimeout(() => {
        startNew();
      }, 1500);
    }
  }
}

function playSimon() {
  mySimon = [];
  document.getElementById("count").innerText = simon.length;
  let i = 0;

  function myLoop() {
    setTimeout(function() {
      let audio = document.getElementById(`audio${simon[i]}`);
      audio.load();
      audio.play();
      i++;
      audio.parentElement.classList.add("box");
      setTimeout(() => audio.parentElement.classList.remove("box"), 200);

      if (i < simon.length) {
        myLoop();
      } else {
        myTurn = true;
      }
    }, 300);
  }
  myLoop();
}

function startNew() {
  simon = [Math.floor(Math.random() * 4) + 1];
  mySimon = [];
  document.getElementById("count").innerText = simon.length;
  let i = 0;

  function myLoop() {
    setTimeout(function() {
      let audio = document.getElementById(`audio${simon[i]}`);
      audio.load();
      audio.play();
      i++;
      audio.parentElement.classList.add("box");
      setTimeout(() => audio.parentElement.classList.remove("box"), 200);

      if (i < simon.length) {
        myLoop();
      } else {
        myTurn = true;
      }
    }, 300);
  }
  myLoop();
}
