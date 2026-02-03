document.addEventListener("DOMContentLoaded", function () {

  const yesBtn = document.querySelector(".yes");
  const noBtn = document.querySelector(".no");
  const container = document.querySelector(".container");

  // YES redirect
  yesBtn.addEventListener("click", function () {
    sessionStorage.setItem("allowed", "true");
    window.location.href = "page.html";
  });

  let escaped = false;
  let posX = 0;
  let posY = 0;

  noBtn.addEventListener("mouseenter", function () {

    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // First time: escape from dialog
    if (!escaped) {
      escaped = true;

     const dialog = noBtn.closest(".dialog");
const dialogRect = dialog.getBoundingClientRect();

posX = dialogRect.left - containerRect.left + noBtn.offsetLeft;
posY = dialogRect.top - containerRect.top + noBtn.offsetTop;


      noBtn.style.position = "absolute";
      noBtn.style.left = posX + "px";
      noBtn.style.top = posY + "px";

      return; // first escape only
    }

    // After escaping: move playfully
    const step = 60;

    const dirX = Math.random() > 0.5 ? 1 : -1;
    const dirY = Math.random() > 0.5 ? 1 : -1;

    posX += step * dirX;
    posY += step * dirY;

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    posX = Math.max(20, Math.min(posX, maxX - 20));
    posY = Math.max(20, Math.min(posY, maxY - 20));

    noBtn.style.left = posX + "px";
    noBtn.style.top = posY + "px";
  });

});
