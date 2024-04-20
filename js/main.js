document.addEventListener("DOMContentLoaded", function () {
  const frog1 = document.querySelector(".js-frog1");
  const frog2 = document.querySelector(".js-frog2");
  const frog3 = document.querySelector(".js-frog3");
  const frog4 = document.querySelector(".js-frog4");
  const frog5 = document.querySelector(".js-frog5");
  const fly = document.querySelector(".js-fly");

  const collisionDiv = document.getElementById("collision-div");

  function checkCollision() {
    const frog1Pos = frog1.getBoundingClientRect();
    const frog2Pos = frog2.getBoundingClientRect();
    const frog3Pos = frog3.getBoundingClientRect();
    const frog4Pos = frog4.getBoundingClientRect();
    const frog5Pos = frog5.getBoundingClientRect();
    const rect2 = fly.getBoundingClientRect();

    if (
      frog1Pos.left < rect2.right &&
      frog1Pos.right > rect2.left &&
      frog1Pos.top < rect2.bottom &&
      frog1Pos.bottom > rect2.top
    ) {
      collisionDiv.style.display = "block";
    } else if (
      frog2Pos.left < rect2.right &&
      frog2Pos.right > rect2.left &&
      frog2Pos.top < rect2.bottom &&
      frog2Pos.bottom > rect2.top
    ) {
      collisionDiv.style.display = "block";
    } else if (
      frog3Pos.left < rect2.right &&
      frog3Pos.right > rect2.left &&
      frog3Pos.top < rect2.bottom &&
      frog3Pos.bottom > rect2.top
    ) {
      collisionDiv.style.display = "block";
    } else if (
      frog4Pos.left < rect2.right &&
      frog4Pos.right > rect2.left &&
      frog4Pos.top < rect2.bottom &&
      frog4Pos.bottom > rect2.top
    ) {
      collisionDiv.style.display = "block";
    } else if (
      frog5Pos.left < rect2.right &&
      frog5Pos.right > rect2.left &&
      frog5Pos.top < rect2.bottom &&
      frog5Pos.bottom > rect2.top
    ) {
      collisionDiv.style.display = "block";
    } else {
      collisionDiv.style.display = "none";
    }
  }

  setInterval(checkCollision, 100);

  const countdownElement = document.querySelector(".js-countdown");

  document.addEventListener("keypress", function (event) {
    if (event.key === "a") {
      frog1.classList.add("jump1");
      setTimeout(function () {
        frog1.classList.remove("jump1");
      }, 500);
    }

    if (event.key === "s") {
      frog2.classList.add("jump2");
      setTimeout(function () {
        frog2.classList.remove("jump2");
      }, 500);
    }

    if (event.key === "d") {
      frog3.classList.add("jump3");
      setTimeout(function () {
        frog3.classList.remove("jump3");
      }, 500);
    }

    if (event.key === "f") {
      frog4.classList.add("jump4");
      setTimeout(function () {
        frog4.classList.remove("jump4");
      }, 500);
    }

    if (event.key === "g") {
      frog5.classList.add("jump5");
      setTimeout(function () {
        frog5.classList.remove("jump5");
      }, 500);
    }
  });

  let secondsRemaining = 60;

  function updateCountdown() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    // Add leading zeros if needed
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the countdown element
    countdownElement.textContent = formattedMinutes + ":" + formattedSeconds;

    // Decrease the remaining time
    secondsRemaining--;

    // Stop the countdown if time is up
    if (secondsRemaining < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "Game over!";
    }
  }

  // Initial call to update countdown
  updateCountdown();

  // Update countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
});
